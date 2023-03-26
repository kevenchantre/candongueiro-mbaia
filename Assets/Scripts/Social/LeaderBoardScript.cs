using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

// ---------Manager_Leaderboard----------

// USED IN DEMO FOR UNITY 4.6+

// THIS SCRIPT IS THE MASTER LEADERBOARD CONTROLLER
// SETUP THIS SCRIPT AS PER PROVIDED SAMPLE SCENE IN Assets/Demo (For Unity 4.6+)/Scene_Demo
// MOST OF THE TIME YOU WILL NOT NEED TO EDIT THIS SCRIPT

public class LeaderBoardScript : MonoBehaviour
{
	// DATA
	public Manager_Game GC;
	public Text Score;				// Current score (stored locally at device)
	public Text ScoreBest;			// Best score (stored locally at device)
	List<Facebook.LeaderboardEntry> mLeaderboard = null;
	GameObject instantiatedEntry;
	private int entrycount = 0;
	
	// UI
	public GameObject prefabEntry;	// Drag empty prefab leaderboard entry here

	public GameObject loading;
	public Text infoText;
	
	// INITIALISE
	void Start ()
	{
		loading.SetActive(false);
		// Activates scroll view with rankings
		CallLeaderboard ();
	}
	
	// DOWNLOAD FACEBOOK LEADERBOARD DATAS
	void CallLeaderboard ()
	{
		
		// Downloads data from Facebook servers
		// NO EDITING REQUIRED
		if (FacebookManager.Instance.LoggedIn) 
		{		FacebookManager.Instance.RequestScores (
				delegate(List<Facebook.LeaderboardEntry> leaderboard) {
				foreach (Facebook.LeaderboardEntry entry in leaderboard) {
					entry.RankLoc = entrycount;
					entrycount += 1;
					if (entry.Id == FacebookManager.Instance.UserID) {
						if (entry.Score < int.Parse (ScoreBest.text)) {
							entry.Score = int.Parse (ScoreBest.text);
						}
					}
				}
				mLeaderboard = leaderboard;
				foreach (Facebook.LeaderboardEntry entry in mLeaderboard) {
					Facebook.LeaderboardEntry lbEntry = entry;
					FacebookManager.Instance.RequestPicture (entry.Id, 64, 64, false,
					                                         delegate(Texture2D texture) {
						lbEntry.Picture = texture;
					},
					delegate(string reason) {
						
					}
					);
				}
			},
			delegate(string reason) {
			}
			);
			infoText.text = "A Carregar...";
			loading.SetActive(true);
			StartCoroutine ("LoadEntries");
		}
	}
	
	// PLOT FACEBOOK LEADERBOARD ON UI
	private IEnumerator LoadEntries ()
	{
		yield return new WaitForSeconds (7f); // waits x seconds for data to be fully downloaded

		// Assign and plot downloaded data on prefab LB entries
		if (mLeaderboard != null) 
		{
			int rank = 0;
			
			foreach (Facebook.LeaderboardEntry entry in mLeaderboard) {
				rank += 1;
				
				// Create empty entries
				instantiatedEntry = Instantiate (prefabEntry, transform.position, transform.rotation) as GameObject; 
				instantiatedEntry.transform.SetParent (GameObject.Find ("SubMaskOnline").transform, false);  
				Text[] EntryText = instantiatedEntry.GetComponentsInChildren<Text>();
				Image imgs = instantiatedEntry.GetComponentInChildren<Image>();
				loading.SetActive(false);
				// Draw texture:profile picture
				imgs.sprite = Sprite.Create (entry.Picture, new Rect (0, 0, entry.Picture.width, entry.Picture.height), new Vector2 (0.5f, 0.5f));
				
				// Update text:rank on created entry
				EntryText[0].text = "" + rank.ToString();
				
				// Update text:profile name on created entry
				EntryText[1].text = "" + entry.Name;
				
				// Update text:score on created entry
				EntryText[2].text = "" + entry.Score.ToString();
				
				// Rename each created entry
				instantiatedEntry.name = "Entry"+rank;
			}
		} 
		else 
		{
			Debug.LogError ("leaderboard still not loaded from FB servers. Edit WaitForSeconds above to longer period.");
			infoText.text = "Ocorreu um erro ao carregar os dados do facebook.";
		}
	}
	
}
