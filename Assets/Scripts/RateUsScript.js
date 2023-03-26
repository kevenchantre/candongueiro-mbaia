#pragma strict

import UnityEngine.UI;

var numBeforeAsking : int = 0;
var ActiveorNot : int = 2;
var urlRate : String ="";
var numBetweenAsk : int = 10;

var maskRateUs : GameObject;

function Start() 
{	
	maskRateUs.SetActive(false);
	TesteNoThanks();
	ActiveRateUs();
	//PlayerPrefs.SetInt("activeRateUs",2);
	Debug.Log(ActiveorNot);
}

function ActiveRateUs()
{
	numBeforeAsking = PlayerPrefs.GetInt("rateUs");
	if ((numBeforeAsking == null) || (numBeforeAsking == 0))
	{
		numBeforeAsking = numBetweenAsk;
		PlayerPrefs.SetInt("rateUs",numBeforeAsking);
	}
	numBeforeAsking = numBeforeAsking - 1;
	PlayerPrefs.SetInt("rateUs",numBeforeAsking);
	if ((numBeforeAsking <= 0) && (ActiveorNot == 2))
	{
		maskRateUs.SetActive(true);
	}
}

function RateUs() 
{
	ActiveorNot = 1;
	PlayerPrefs.SetInt("activeRateUs",ActiveorNot);
	maskRateUs.SetActive(false);
	Application.OpenURL(urlRate);
}

function AskLater() 
{
	maskRateUs.SetActive(false);
}

function TesteNoThanks() 
{
	ActiveorNot = PlayerPrefs.GetInt("activeRateUs");
	if ((ActiveorNot == null) || (ActiveorNot == 0))
	{
		ActiveorNot = 2;
		PlayerPrefs.SetInt("activeRateUs",ActiveorNot);
	}
}

function NoThanks()
{
	ActiveorNot = 1;
	PlayerPrefs.SetInt("activeRateUs",ActiveorNot);
	maskRateUs.SetActive(false);
}

