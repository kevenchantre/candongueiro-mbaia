#pragma strict

import UnityEngine.UI;

var scriptGameOver : GameOver;

var continueWindow : GameObject;

var continueShowed : boolean = false;

var useLife : boolean = false;

var txtLife : Text;


function Start () 
{
	scriptGameOver = GameObject.Find ("candongueiro").GetComponent(GameOver);
}

function Update () 
{
	txtLife.text = PlayerPrefs.GetInt("life").ToString();
}

function ShowContinue()
{
	if (continueShowed == false)
	{
		continueWindow.SetActive(true);
		continueShowed = true;
	}
	else if (continueShowed == true)
	{
		continueWindow.SetActive(false);
		continueShowed = false;
	}
}

function VerificarLife()
{
	var life : int = PlayerPrefs.GetInt("life");
	if(life > 0)
	{
		useLife = false;
		ShowContinue();
		Time.timeScale = 0.0;
	}
	else
	{
		scriptGameOver.gameOver = true;
	}
}

function UseLife()
{
	var life : int = PlayerPrefs.GetInt("life");
	life = life - 1;
	PlayerPrefs.SetInt("life", life);
	useLife = true;
	ShowContinue();
	Time.timeScale = 1.0;
}

function ActiveGameOver()
{
	scriptGameOver.gameOver = true;
	scriptGameOver.GameOver();
}