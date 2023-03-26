#pragma strict

import UnityEngine.UI;

var allCoin : Text;

var coin : int;

function Start () 
{
	UpdateCoin();
}

function UpdateCoin()
{
	coin = PlayerPrefs.GetInt("coinTotal");
	allCoin.text = coin.ToString();
}
