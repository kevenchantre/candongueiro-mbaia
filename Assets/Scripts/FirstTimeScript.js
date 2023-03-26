#pragma strict

var reset : boolean = false;

function Start () 
{
	ResetAll();
	FirsTime();
	Tutorial();
}

function ResetAll()
{
	if(reset == true)
	{
		PlayerPrefs.DeleteAll();
	}
}

function FirsTime()
{
	var firsTime = PlayerPrefs.GetInt("firstime");
 	if((firsTime == 0) || (firsTime == null))
	{
		FirstTimePowers();
		FirstTimePolice();
		FirstTimeShop();
		FirstTimeMissions();
		FirstTimeMultiplier();
		FirstTimeSound();
		FirstTimeFacebook();
		PlayerPrefs.SetInt("firstime",1);
	}
}

function FirstTimePowers()
{
	var timeInicial : int = 10;
	PlayerPrefs.SetInt("magnetTime",timeInicial);
	PlayerPrefs.SetInt("NitrousTime",timeInicial);
	PlayerPrefs.SetInt("boosterTime",timeInicial);
}

function FirstTimePolice()
{
	var timeMinInicial : int = 60;
	var timeMaxInicial : int = 90;
	PlayerPrefs.SetInt("timepolicemin",timeMinInicial);
	PlayerPrefs.SetInt("timepolicemax",timeMaxInicial);
}

function FirstTimeShop()
{
	//PlayerPrefs.SetInt("coinTotal", 50000);
	PlayerPrefs.SetInt("life", 3);
	PlayerPrefs.SetInt("doublecoin",0);
}

function FirstTimeMissions()
{
	PlayerPrefs.SetInt("missionset",0);
	PlayerPrefs.SetInt("mission1",0);
	PlayerPrefs.SetInt("mission2",0);
	PlayerPrefs.SetInt("mission3",0);
	PlayerPrefs.SetInt("mission4",0);
	PlayerPrefs.SetInt("mission5",0);
	PlayerPrefs.SetInt("mission6",0);
}

function FirstTimeMultiplier()
{
	PlayerPrefs.SetInt("multiplier",1);
	PlayerPrefs.SetInt("multipliercycle",3);
}

function FirstTimeSound()
{
	PlayerPrefs.SetInt("Sound", 1);
	PlayerPrefs.SetInt("Music", 1);
}

function FirstTimeFacebook()
{
	PlayerPrefs.SetInt("fblogin", 0);
	PlayerPrefs.SetInt("showgifts", 0);
}

var btMissoes : GameObject;
var btTrofeu : GameObject;
var btGaragem : GameObject;
var btLoja : GameObject;
var btGift : GameObject;

function HideMenu()
{
	btMissoes.SetActive(false);
	btTrofeu.SetActive(false);
	btGaragem.SetActive(false);
	btLoja.SetActive(false);
	btGift.SetActive(false);
}

function ShowMenu()
{
	btMissoes.SetActive(true);
	btTrofeu.SetActive(true);
	btGaragem.SetActive(true);
	btLoja.SetActive(true);
	btGift.SetActive(true);
}

function Tutorial()
{
	var tutorial = PlayerPrefs.GetInt("tutorial");
 	if((tutorial == 0) || (tutorial == null))
	{
		HideMenu();
	}
	else
	{
		ShowMenu();
	}
}
