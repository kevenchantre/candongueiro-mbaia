#pragma strict

import UnityEngine.UI;

var numBeforeAsking : int = 0;
var numBetweenAsk : int = 5;
var stillActive : int = 0;

var showGifts : GameObject;

function Start() 
{	
	showGifts.SetActive(false);
	ShowGifts();
}

function ShowGifts()
{
	numBeforeAsking = PlayerPrefs.GetInt("showgifts");
	stillActive = PlayerPrefs.GetInt("fblogin");
	if ((numBeforeAsking == null) || (numBeforeAsking == 0))
	{
		numBeforeAsking = numBetweenAsk;
		PlayerPrefs.SetInt("showgifts",numBeforeAsking);
	}
	numBeforeAsking = numBeforeAsking - 1;
	PlayerPrefs.SetInt("showgifts",numBeforeAsking);
	
	if ((numBeforeAsking <= 0) && (stillActive == 0))
	{
		showGifts.SetActive(true);
	}
}

function ShowLater() 
{
	showGifts.SetActive(false);
}


