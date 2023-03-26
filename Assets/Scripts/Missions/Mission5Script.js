#pragma strict

//Passar por X carros

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showCarsNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var carsToPass : int = 0; // o numero de carros para terminar a missao
var carsPassed : int = 0; // o numero de carros pelos quais ja se passou
var carsNeeded : int = 0; // o numero de carros que restam
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission5()
{
	PreMission();
	if (missionCompleted == false)
	{
		carsPassed = carsPassed + 1;
		carsNeeded = carsToPass - carsPassed;
	
		if(carsPassed >= carsToPass)
		{
			TestMultiplier();
			PosMission();
			carsPassed = 0;
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Mbaia " +carsToPass.ToString()+" carros";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission5");
	if (missionState == 0)
	{
		carsToPass = 10;
	}
	else if (missionState == 1)
	{
		carsToPass = 30;
	}
	else if (missionState == 2)
	{
		carsToPass = 60;
	}
	else if (missionState == 3)
	{
		carsToPass = 100;
	}
	else if (missionState == 4)
	{
		carsToPass = 200;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission5");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission5",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showCarsNeeded.text ="Mbaia " +carsToPass+ " carros num único jogo";
	}
	else
	{
		showCarsNeeded.text ="Nível máximo atingido";
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