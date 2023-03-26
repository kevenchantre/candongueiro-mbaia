/*using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class SumarioScript : MonoBehaviour 
{

	public fbHighscore HighscoreScript;

	public Text score;
	public Text coin;
	public Text coinTotal;
	public Text newHighScore;
	
	public int coinConvert = 0;
	public int highScore = 0;
	public int scoreTemp = 0;

	void Start () 
	{
		coinTotal.text = PlayerPrefs.GetInt("coinTotal").ToString();
		scoreTemp = PlayerPrefs.GetInt("scoreLocal");
		highScore = PlayerPrefs.GetInt("highscore");
		score.text = scoreTemp.ToString();
		Highscore();
		coin.text = PlayerPrefs.GetInt("coinLocal").ToString();
		coinConvert = int.Parse(coinTotal.text) + int.Parse(coin.text);
		coinTotal.text = coinConvert.ToString();
		PlayerPrefs.SetInt("coinTotal", coinConvert);
	}

	void Update () 
	{
	
	}

	void Highscore()
	{
		if(highScore < scoreTemp)
		{
			PlayerPrefs.SetInt("highscore", scoreTemp);
			newHighScore.gameObject.SetActive(true);
			HighscoreScript.SendMyScore();
		/*	HighscoreScript.GetMyScore();
			int scorefb = PlayerPrefs.GetInt("scorefb");
			if(highScore > scorefb)
			{
				HighscoreScript.SendMyScore();
			}*/
		/*}/*
	}
}*/
