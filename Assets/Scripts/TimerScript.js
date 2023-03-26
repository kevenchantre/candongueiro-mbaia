#pragma strict

import UnityEngine.UI;
import System.Collections.Generic;

var scriptPowerUpsControl : PowerUpsControl;
var scriptTimerManager : TimerManager;

//O tempo do powerup que o jogador apanhou
var powerupTime : String;

var timer : Slider;

//Quanto tempo o timer tera
var time : float;

//O icone do timer
var icone : Image;

var powerup : String;

function Start () 
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
	scriptTimerManager = GameObject.Find ("UIManager").GetComponent(TimerManager);
	Timer();
	icone.GetComponent(Image).sprite = scriptTimerManager.icone.GetComponent(Image).sprite;
}

function Update () 
{
	Destroy();
}

InvokeRepeating("Counting", 0, 0.1);

function Timer()
{
	powerupTime = scriptPowerUpsControl.powerupTime;
	time = PlayerPrefs.GetInt(powerupTime);
	timer.maxValue = time;
	timer.value = time;
}

function Counting()
{
	timer.value = timer.value - 0.1;
	time = timer.value;
}

function Destroy()
{
	if(time == 0)
	{
		var position : int = scriptTimerManager.TimersCreated.IndexOf(gameObject);
		scriptTimerManager.TimersList[position] = 0;
		scriptTimerManager.TimersCreated[position] =null;
		Destroy(gameObject);
	}
}