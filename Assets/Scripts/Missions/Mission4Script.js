#pragma strict

//Gastar determinado numero de moedas

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showSpendNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var coinToSpend : int = 0; // o valor a gastar
var coinSpended : int = 0; // o valor gasto
var coinNeeded : int = 0; // o valor que falta gastar
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission4()
{
	PreMission();
	if (missionCompleted == false)
	{
		coinSpended = PlayerPrefs.GetInt("coinspended");
		coinNeeded = coinToSpend - coinSpended;

		if(coinSpended >= coinToSpend)
		{
			PlayerPrefs.SetInt("coinspended", 0);
			TestMultiplier();
			PosMission();
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Gaste " +coinToSpend.ToString()+" moedas";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission4");
	if (missionState == 0)
	{
		coinToSpend = 4000;
	}
	else if (missionState == 1)
	{
		coinToSpend = 8000;
	}
	else if (missionState == 2)
	{
		coinToSpend = 15000;
	}
	else if (missionState == 3)
	{
		coinToSpend = 30000;
	}
	else if (missionState == 4)
	{
		coinToSpend = 50000;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission4");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission4",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showSpendNeeded.text ="Gaste " +coinToSpend+ " moedas";
	}
	else
	{
		showSpendNeeded.text ="Nível máximo atingido";
	}
}

function TestMultiplier()
{
	var cycle : int = PlayerPrefs.GetInt("multipliercycle");
	cycle = cycle - 1;
	PlayerPrefs.SetInt("multipliercycle",cycle);
	if (cycle == 0)
	{
		var multiplier : int = PlayerPrefs.GetInt("multiplier");
		multiplier = multiplier + 1;
		PlayerPrefs.SetInt("multiplier",multiplier);
		PlayerPrefs.SetInt("multipliercycle",3);
		scriptMultiplierScript.ManageMultiplier();
	}
}