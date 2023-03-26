using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class LoginFB : MonoBehaviour 
{

	public GameObject MaskOffline;
	public GameObject MaskOnline;
	public GameObject MaskGift;

	void Start ()
	{
		if (FacebookManager.Instance.LoggedIn) 
		{
			// The following will occur when Facebook is already logged in from previous gaming session:
			HideOffline();
		}
		else
		{
			HideOnline();
		}
	}

	public void FBLogin()
	{
		FacebookManager.Instance.Login ("public_profile,user_friends,publish_actions", delegate() 
		{
			// The following will occur when when Facebook is logged in successfully:
			ScoreController scoreController = new ScoreController();
			scoreController.Highfb();
			int fblogin = PlayerPrefs.GetInt("fblogin");
			if(fblogin == 1)
			{
				Application.LoadLevel(5);
			}
		},
		delegate(string reason) 
		{

		});
	}

	public void HideOffline()
	{
		MaskOffline.SetActive(false);
	}
	public void HideOnline()
	{
		MaskOnline.SetActive(false);
	}

	public void FirstLogin()
	{
		int fblogin = 1;
		CallFBActivateApp();
		PlayerPrefs.SetInt("fblogin", fblogin);
		MaskGift.SetActive(true);
	}

	void Update()
	{
		int fblogin = PlayerPrefs.GetInt("fblogin");
		if(fblogin == 0)
		{
			if (FacebookManager.Instance.LoggedIn) 
			{
				FirstLogin();
			}
		}
	}

	private void CallFBActivateApp()
	{
		FB.ActivateApp();
	}
}
