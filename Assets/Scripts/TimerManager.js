#pragma strict

import UnityEngine.UI;
import System.Collections.Generic;

var scriptPowerUpsControl : PowerUpsControl;

var parent : Transform;

//Onde os timers podem ser criadas
var PositionList = new List.<Vector3>(); 

//verifivar quantos timers estao activos
var TimersList = new List.<int>(); 

//Lista de timers activos
var TimersCreated = new List.<GameObject>(); 

var timer : GameObject;

var magnet : boolean = false;
var nitrous : boolean = false;
var scoreBooster : boolean = false;

var position : int = 0;

//Quanto tempo o timer tera
var time : float;

//O powerup que o jogador apanhou
var powerup : String;

//Lista de icones
var IconList = new List.<Sprite>(); 

//O icone do timer
var icone : Image;

function Start()
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
}

function Update()
{
	GetPowerup();
}

function TimerPosition()
{
	
}

function Timer()
{
	var timerObject : GameObject;
	var boosterObject : GameObject;
	var nitrousObject : GameObject;
	var timerSlider : Slider;
	var i : int;

	if(powerup == "magnet")
	{
		if (magnet == false)
		{
			timerObject = Instantiate(timer);
			timerObject.name = "magnet";
			icone.GetComponent(Image).sprite = IconList[0];
			for (i = 0; i < TimersList.Count; i++)
			{
				if(TimersList[i] == 0)
				{
					position = i;
					TimersList[position] = 1; 
					TimersCreated[position] = timerObject;
					break;
				}
			}
			timerObject.transform.SetParent(parent, false);
			timerObject.transform.localPosition = PositionList[position];
		}
		else
		{
			timerSlider = GameObject.Find("magnet").GetComponent(Slider);
			time  = PlayerPrefs.GetInt("magnetTime");
			timerSlider.value = time;
		}
	}
	if(powerup == "booster")
	{
		if (scoreBooster == false)
		{
			boosterObject = Instantiate(timer);
			boosterObject.name = "booster";
			icone.GetComponent(Image).sprite = IconList[1];
			for (i = 0; i < TimersList.Count; i++)
			{
				if(TimersList[i] == 0)
				{
					position = i;
					TimersList[position] = 1; 
					TimersCreated[position] = boosterObject;
					break;
				}
			}
			boosterObject.transform.SetParent(parent, false);
			boosterObject.transform.localPosition = PositionList[position];
		}
		else
		{
			timerSlider = GameObject.Find("booster").GetComponent(Slider);
			time  = PlayerPrefs.GetInt("boosterTime");
			timerSlider.value = time;
		}
	}
	if(powerup == "nitrous")
	{
		if (nitrous == false)
		{
			nitrousObject = Instantiate(timer);
			nitrousObject.name = "nitrous";
			icone.GetComponent(Image).sprite = IconList[2];
			for (i = 0; i < TimersList.Count; i++)
			{
				if(TimersList[i] == 0)
				{
					position = i;
					TimersList[position] = 1; 
					TimersCreated[position] = nitrousObject;
					break;
				}
			}
			nitrousObject.transform.SetParent(parent, false);
			nitrousObject.transform.localPosition = PositionList[position];
		}
		else
		{
			timerSlider = GameObject.Find("nitrous").GetComponent(Slider);
			time  = PlayerPrefs.GetInt("NitrousTime");
			timerSlider.value = time;
		}
	}
}

function GetPowerup()
{
	var powerMagnet : GameObject = GameObject.Find("magnet");
	var powerBooster : GameObject = GameObject.Find("booster");
	var powerNitrous : GameObject = GameObject.Find("nitrous");
	if(powerMagnet == null)
	{
		magnet = false;
	}
	else
	{
		magnet = true;
	}
	
	if(powerBooster == null)
	{
		scoreBooster = false;
	}
	else
	{
		scoreBooster = true;
	}
	
	if(powerNitrous == null)
	{
		nitrous = false;
	}
	else
	{
		nitrous = true;
	}
}