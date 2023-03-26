#pragma strict

var scriptPowerUpsControl : PowerUpsControl;

var booScoreBoosterOn : boolean = false;

//Quants vezes o score ser multiplicado
var scoreBooster : int;

function Start () 
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
}

function Update () 
{
	ScoreBooster();
}

function ScoreBooster()
{
	if(scriptPowerUpsControl.booScoreBoosterOn == true)
	{
		scoreBooster =20;
	}
	else
	{
		scoreBooster = 10;
	}
}