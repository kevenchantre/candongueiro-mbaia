#pragma strict

//Colher moedas && Colher moedas num unico jogo

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showCoinNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var coinToCollect : int = 0; // o numero de moedas para terminar a missao
var coinCollected : int = 0; // o numero de moedas colectadas
var coinNeeded : int = 0; // o numero de moedas que restam ser colectadas
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission1()
{
	PreMission();
	if (missionCompleted == false)
	{
		coinCollected = coinCollected + 1;
		coinNeeded = coinToCollect - coinCollected;
	
		if(coinCollected >= coinToCollect)
		{
			TestMultiplier();
			PosMission();
			coinCollected = 0;
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Colecta " +coinToCollect.ToString()+" moedas";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission1");
	if (missionState == 0)
	{
		coinToCollect = 100;
	}
	else if (missionState == 1)
	{
		coinToCollect = 500;
	}
	else if (missionState == 2)
	{
		coinToCollect = 1000;
	}
	else if (missionState == 3)
	{
		coinToCollect = 5000;
	}
	else if (missionState == 4)
	{
		coinToCollect = 10000;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission1");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission1",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showCoinNeeded.text ="Colecta " +coinToCollect+ " moedas num único jogo";
	}
	else
	{
		showCoinNeeded.text ="Nível máximo atingido";
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