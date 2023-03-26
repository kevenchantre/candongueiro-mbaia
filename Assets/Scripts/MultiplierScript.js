#pragma strict

import UnityEngine.UI;

var bonus : Bonuscript;

var showMultiplier : Text;
var showPercentage : Text;

var cycle : int = 0; //Quantas missoes sao necessarios para aumentar o multiplier
var multiplier : int = 0; // O numero corrente do multiplier

function Start () 
{
	ManageMultiplier();
	var loadedLevel : String = Application.loadedLevelName;
	if (loadedLevel == "Missoes") 
	{
		PercentageCycle();
	}
}

function ManageMultiplier()
{
	if (Application.loadedLevel != 2) 
	{
		multiplier = PlayerPrefs.GetInt("multiplier") + bonus.multiplier;
	}
	cycle = PlayerPrefs.GetInt("multipliercycle");
	var loadedLevel : String = Application.loadedLevelName;
	if (loadedLevel == "Missoes") 
	{
		showMultiplier.text = "X"+multiplier.ToString();
	}
	else if (loadedLevel == "Game")
	{
		showMultiplier.text = "x"+multiplier.ToString();
	}
}

function PercentageCycle()
{
	cycle = PlayerPrefs.GetInt("multipliercycle");
	var percentage : int = 0;
	if(cycle == 3)
	{
		percentage = 100;
	}
	else if(cycle == 2)
	{
		percentage = 66;
	}
	else if(cycle == 1)
	{
		percentage = 33;
	}
	else if(cycle == 0)
	{
		percentage = 0;
	}
	showPercentage.text = "Falta "+percentage+"% para o próximo multiplicador";
}