#pragma strict

import UnityEngine.UI;

var scriptMission1 : Mission1Script;

var coin : int = 0; 
var CoinText : Text;
var doubleCoin : int = 0;
var coinSound : AudioClip;

function Start () 
{
	scriptMission1 = GameObject.Find ("MissionManager").GetComponent(Mission1Script);
	doubleCoin = PlayerPrefs.GetInt("doublecoin");
}

function PlaySound() 
{
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if(Sound == 1)
	{
		GetComponent.<AudioSource>().PlayOneShot(coinSound);
	}
}

function CoinCollection()
{
	coin = coin  + 1 + doubleCoin;
	ShowCoin();
	PlaySound() ;
	scriptMission1.Mission1();
}

function ShowCoin()
{
	CoinText.text = coin.ToString();
}