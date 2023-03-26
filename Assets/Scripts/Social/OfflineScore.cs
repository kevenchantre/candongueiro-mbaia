using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class OfflineScore : MonoBehaviour 
{
	public Text scoreOffline;
	int score = 0;

	// Use this for initialization
	void Start () 
	{
		scoreOffline.text = PlayerPrefs.GetInt("highscore").ToString();
	}
}
