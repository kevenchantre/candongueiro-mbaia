#pragma strict

//Fazer determinada pontuaçao 

import UnityEngine.UI;

var scriptMultiplierScript : MultiplierScript;
var scriptScoreScript : ScoreScript;
var scriptMissionManager : MissionManager;

var nivelMission : Text;
var showScoreNeeded : Text;

var missionCompleted : boolean = false; //Se a missao ja foi feita ate ao maximo
var scoreToCollect : int = 0; // a pontuacao para terminar a missao
var scoreCollected : int = 0; // a pontuacao conseguida
var scoreNeeded : int = 0; // a pontuaçao que resta
var missionState : int = 0; // Quantas vezes a missao ja foi feita

var maxMission : int = 5; //O numero maximo de vezes que essa missao podera ser feita

function Start()
{
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptScoreScript = GameObject.Find ("MainGameObject").GetComponent(ScoreScript);
	scriptMissionManager = GameObject.Find ("MissionManager").GetComponent(MissionManager);
}

function Mission3()
{
	PreMission();
	if (missionCompleted == false)
	{
		scoreCollected = scriptScoreScript.score;
		scoreNeeded = scoreToCollect - scoreCollected;
	
		if(scoreCollected >= scoreToCollect)
		{
			TestMultiplier();
			PosMission();
			scoreCollected = 0;
			scriptMissionManager.missionCompleted = true;
			scriptMissionManager.message.text = "Faça " +scoreToCollect.ToString()+" pontos";
		}
	}
}

function PreMission()
{
	missionState = PlayerPrefs.GetInt("mission3");
	if (missionState == 0)
	{
		scoreToCollect = 1000;
	}
	else if (missionState == 1)
	{
		scoreToCollect = 2000;
	}
	else if (missionState == 2)
	{
		scoreToCollect = 10000;
	}
	else if (missionState == 3)
	{
		scoreToCollect = 50000;
	}
	else if (missionState == 4)
	{
		scoreToCollect = 100000;
	}
	else	if (missionState == maxMission)
	{
		missionCompleted = true;
	}
}

function PosMission()
{
	missionState = PlayerPrefs.GetInt("mission3");
	if(missionState < maxMission)
	{
		missionState = missionState + 1;
	}
	PlayerPrefs.SetInt("mission3",missionState);
}

function ListManage()
{
	PreMission();
	nivelMission.text = missionState.ToString() + "x";
	if (missionCompleted == false)
	{
		showScoreNeeded.text ="Consiga " +scoreToCollect+ " pontos num único jogo";
	}
	else
	{
		showScoreNeeded.text ="Nível máximo atingido";
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