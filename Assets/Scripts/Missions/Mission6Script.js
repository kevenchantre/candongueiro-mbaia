#pragma strict

//Passar por X obstaculos

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showObstacleNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var obstacleToPass : int = 0; // o numero de obstaculos para terminar a missao
var obstaclePassed : int = 0; // o numero de obstaculos pelos quais ja se passou
var obstacleNeeded : int = 0; // o numero de obstaculos que restam
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission6()
{
	PreMission();
	if (missionCompleted == false)
	{
		obstaclePassed = obstaclePassed + 1;
		obstacleNeeded = obstacleToPass - obstaclePassed;
	
		if(obstaclePassed >= obstacleToPass)
		{
			TestMultiplier();
			PosMission();
			obstaclePassed = 0;
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Passe por " +obstacleToPass.ToString()+" barreiras";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission6");
	if (missionState == 0)
	{
		obstacleToPass = 5;
	}
	else if (missionState == 1)
	{
		obstacleToPass = 25;
	}
	else if (missionState == 2)
	{
		obstacleToPass = 50;
	}
	else if (missionState == 3)
	{
		obstacleToPass = 75;
	}
	else if (missionState == 4)
	{
		obstacleToPass = 150;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission6");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission6",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showObstacleNeeded.text ="Passe por " +obstacleToPass+ " barreiras num único jogo";
	}
	else
	{
		showObstacleNeeded.text ="Nível máximo atingido";
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