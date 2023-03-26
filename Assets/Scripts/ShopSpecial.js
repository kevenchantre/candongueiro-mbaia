#pragma strict

import UnityEngine.UI;

var scriptShopManager : ShopManager;
var scriptMission4 : Mission4Script;

//Nome do Produto
var prodName : String;

//Nome do poder
var powerName : String;

//Preço do produto
var price : int;

//Txt de preço
var showPrice : Text;

var canBuy : boolean = false;

function Start () 
{
	scriptShopManager = GameObject.Find ("MainGameObject").GetComponent(ShopManager);
	scriptMission4 = GameObject.Find ("MissionManager").GetComponent(Mission4Script);
	ShowProd();
}

function BuyProdut()
{
	TestBuy();
	if(canBuy == true)
	{
		BuyPower();
		canBuy = false;
	}
}

function TestBuy()
{
	var prod : int = PlayerPrefs.GetInt(powerName);
	if(prod <= 0)
	{
		var allCoin : int = PlayerPrefs.GetInt("coinTotal");
		var coinNeeded = int.Parse(showPrice.text);
		var coinSpended : int = PlayerPrefs.GetInt("coinspended");
	
		if (allCoin >= coinNeeded)
		{
			canBuy = true;
			var restCoin : int = allCoin - coinNeeded;
			coinSpended = coinSpended + coinNeeded;
			PlayerPrefs.SetInt("coinspended", coinSpended);
			PlayerPrefs.SetInt("coinTotal", restCoin);
			scriptShopManager.UpdateCoin();
			scriptMission4.Mission4();
		}
	}
}

function BuyPower()
{
	var prod : int = 1;
	PlayerPrefs.SetInt(powerName, prod);
	ShowProd();
}

function ShowProd()
{
	var prod : int = PlayerPrefs.GetInt(powerName);
	if(prod > 0)
	{
		showPrice.text = "Comprado";
	}
}
