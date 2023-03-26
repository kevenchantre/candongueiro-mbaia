#pragma strict

import UnityEngine.UI;
import System.Collections.Generic;

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

//Quantas vezes o produto ja foi upgraded
var upgradedValue : int;

//Barra que mostra quantas vezes o produto ja foi upgraded
var upgradedBar : Image;

//Lista de barras
var BarList = new List.<Sprite>(); 

var canBuy : boolean = false;

function Start () 
{
	scriptShopManager = GameObject.Find ("MainGameObject").GetComponent(ShopManager);
	scriptMission4 = GameObject.Find ("MissionManager").GetComponent(Mission4Script);
}

function Update () 
{
	BarState();
	PriceUpdate();
}

function BuyProdut()
{
	TestBuy();
	if(canBuy == true)
	{
		UpgradeState();
		UpgradePower();
		canBuy = false;
	}
}

function TestBuy()
{
	var allCoin : int = PlayerPrefs.GetInt("coinTotal");
	var upState : int = PlayerPrefs.GetInt(prodName);
	var coinNeeded = int.Parse(showPrice.text);
	var coinSpended : int = PlayerPrefs.GetInt("coinspended");
	
	if ((allCoin >= coinNeeded) && (upState < 5))
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

function UpgradeState()
{
	var upState : int = PlayerPrefs.GetInt(prodName);
	upState = upState + 1;
	PlayerPrefs.SetInt(prodName, upState);
}

function UpgradePower()
{
	if(prodName == "Gasosa")
	{
		PoliceManager();
	}
	else
	{
		PowerManager();
	}
}

function BarState()
{
	var upState : int = PlayerPrefs.GetInt(prodName);
	upgradedBar.GetComponent(Image).sprite = BarList[upState];
}

function PriceUpdate()
{
	var upState : int = PlayerPrefs.GetInt(prodName);
	if (upState == 0)
	{
		showPrice.text = "500";
	}
	else if (upState == 1)
	{
		showPrice.text = "1000";
	}
	else if (upState == 2)
	{
		showPrice.text = "3000";
	}
	else if (upState == 3)
	{
		showPrice.text = "15000";
	}
	else if (upState == 4)
	{
		showPrice.text = "30000";
	}
	else if (upState == 5)
	{
		showPrice.text = "Cheio";
	}
}

function PoliceManager()
{
	var timeMinInicial : int = PlayerPrefs.GetInt("timepolicemin");
	var timeMaxInicial : int = PlayerPrefs.GetInt("timepolicemax");
	timeMinInicial = timeMinInicial * 2; 
	timeMaxInicial = timeMaxInicial * 2;
	PlayerPrefs.SetInt("timepolicemin",timeMinInicial);
	PlayerPrefs.SetInt("timepolicemax",timeMaxInicial);
	Debug.Log(timeMinInicial + " " + timeMaxInicial);
}

function PowerManager()
{
	var power : int = PlayerPrefs.GetInt(powerName);
	power = power + 5;
	PlayerPrefs.SetInt(powerName, power);
}