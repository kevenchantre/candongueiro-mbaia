#pragma strict

import UnityEngine.UI;

var score : Text;
var coin : Text;
var coinTotal : Text;
var newHighScore : Text;

var coinConvert : int = 0;
var highScore : int = 0;
var scoreTemp : int = 0;

function Start () 
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

function Update () 
{
	
}

function Highscore()
{
	if(highScore < scoreTemp)
	{
		PlayerPrefs.SetInt("highscore", scoreTemp);
		newHighScore.gameObject.SetActive(true);
	}
}