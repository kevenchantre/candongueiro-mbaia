#pragma strict

import System.Collections.Generic;

//Em que pontos do percursoas os powerups irao aparecer
var PositionList = new List.<Vector3>(); 

//powerups instanciadas
var PowerOnRoad = new List.<GameObject>();

 //powerups por instanciar
var PowerupPool = new List.<GameObject>(); 

var powerup : GameObject;

private var a : int;

var tutorial : TutorialScript;

private var begin : int = 0; //Quando esse manager deve começar a funcionar

function Start () 
{
	InstanciateObjects();
}

function Awake()
{
	tutorial.Tutorial();
	Tutorial();
}

function Tutorial()
{
	if(tutorial.booTutorial == true)
	{
		begin = tutorial.beginGeral + 20;
	}
	else
	{
		begin = 20;
	}
}

InvokeRepeating("BuildPowerUp", begin, Random.Range(15,30));

//Instanciar todos os powerups
function InstanciateObjects()
{
	for(a = 0; a < PowerupPool.Count; a++)
	{
		powerup = PowerupPool[a];
		powerup.SetActive(false);
		powerup = Instantiate(powerup);
		PowerOnRoad.Add(powerup);
	}
}

function PowerupPosition()
{
	var posPowerup : Vector3 = PositionList[Random.Range(0,PositionList.Count)];
	powerup.transform.position = posPowerup;
}

function BuildPowerUp()
{
	powerup = PowerOnRoad[Random.Range(0,PowerOnRoad.Count)];
	if(!powerup.activeInHierarchy)
	{
		PowerupPosition();
		powerup.SetActive(true);
		Child();
	}
	else
	{
		powerup = Instantiate(powerup);
		PowerupPosition();
		powerup.SetActive(true);
		Child();
	}
}

function Child()
{
	var i : int;
	for (i = 0; i < powerup.transform.GetChildCount(); ++i)
 	{
     	powerup.transform.GetChild(i).gameObject.SetActive(true);
	 }
}