#pragma strict

//Colher poderes && Colher poderes num unico jogo

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showPowerNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var powerToCollect : int = 0; // o numero de poderes para terminar a missao
var powerCollected : int = 0; // o numero de poderes colectados
var powerNeeded : int = 0; // o numero de poderes que restam ser colectados
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission2()
{
	PreMission();
	if (missionCompleted == false)
	{
		powerCollected = powerCollected + 1;
		powerNeeded = powerToCollect - powerCollected;
	
		if(powerCollected >= powerToCollect)
		{
			TestMultiplier();
			PosMission();
			powerCollected = 0;
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Colecta " +powerToCollect.ToString()+" poderes";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission2");
	if (missionState == 0)
	{
		powerToCollect = 2;
	}
	else if (missionState == 1)
	{
		powerToCollect = 5;
	}
	else if (missionState == 2)
	{
		powerToCollect = 10;
	}
	else if (missionState == 3)
	{
		powerToCollect = 20;
	}
	else if (missionState == 4)
	{
		powerToCollect = 50;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission2");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission2",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showPowerNeeded.text ="Colecta " +powerToCollect+ " poderes num único jogo";
	}
	else
	{
		showPowerNeeded.text ="Nível máximo atingido";
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