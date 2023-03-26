#pragma strict

var btPower : GameObject;

var prPower : int = 0;

var powerName : String;

var powerCore : PowerUpsControl; //Fonte de onde vem o poder

function Start () 
{
	Exist();
	if(btPower.active)
	{
		HidePower();
	}
}

function Exist()
{
	prPower = PlayerPrefs.GetInt(powerName);
	if(prPower > 0)
	{
		btPower.SetActive(true);
	}
	else
	{
		btPower.SetActive(false);
	}
}

function HidePower()
{
	yield WaitForSeconds(5);
	btPower.SetActive(false);
}

function UsePower()
{
	if(btPower.active)
	{
		powerCore.Nitrous();
		prPower = prPower - 1;
		PlayerPrefs.SetInt(powerName, prPower);
		btPower.SetActive(false);
	}
}
