#pragma strict

import System.Collections.Generic;

//Em que pontos do percursoas os powerups irao aparecer
var PositionList = new List.<Vector3>(); 

//powerups instanciadas
var PowerOnRoad = new List.<GameObject>();

 //powerups por instanciar
var PowerupPool = new List.<GameObject>(); 

var powerup : GameObject;

var on : int = 0; //Define se terao objectos raros e vida durante o jogo

var a : int;

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
		begin = 160;
	}
	else
	{
		begin = 120;
	}
}

InvokeRepeating("BuildPowerUp", begin, Random.Range(200,400));

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

function RareOn() //Se o jogador ira receber uma vida ou nao durante o jogo
{
	on = Random.Range(0,3);
}

function PowerupPosition()
{
	var posPowerup : Vector3 = PositionList[Random.Range(0,PositionList.Count)];
	powerup.transform.position = posPowerup;
}

function BuildPowerUp()
{
	RareOn();
	if(on == 0)
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
}

function Child()
{
	var i : int;
	for (i = 0; i < powerup.transform.GetChildCount(); ++i)
 	{
     	powerup.transform.GetChild(i).gameObject.SetActive(true);
	 }
}