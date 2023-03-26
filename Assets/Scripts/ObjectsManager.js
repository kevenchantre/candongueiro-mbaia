#pragma strict

import System.Collections.Generic;

var ObjectCollection = new List.<GameObject>(); 
var ObjectCreated = new List.<GameObject>();

var a : int;

var object : GameObject;

var numMaxObjects : int = 0;

var PositionList = new List.<Vector3>(); 

var tutorial : TutorialScript;

private var begin : int = 0; //Quando esse manager deve começar a funcionar

function Start () 
{
	numMaxObjects = ObjectCollection.Count;
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
		begin = tutorial.beginGeral;
	}
	else
	{
		begin = 0;
	}
}

//Criar inimigo
InvokeRepeating("BuildObject", begin, Random.Range(3,5));

//Instanciar todos os objectos a serem utilizados como obstaculos
function InstanciateObjects()
{
	for(a = 0; a < numMaxObjects; a++)
	{
		object = ObjectCollection[a];
		object.SetActive(false);
		object = Instantiate(object);
		ObjectCreated.Add(object);
	}
}

//Definir a posiçao onde aparecem os obstaculos
function ObjectPosition()
{
	var posObject : Vector3 = PositionList[Random.Range(0,PositionList.Count)];
	object.transform.position = posObject;
}

function BuildObject()
{
	object = ObjectCreated[Random.Range(0,ObjectCreated.Count)];
	if(!object.activeInHierarchy)
		{
			ObjectPosition();
			object.SetActive(true);
		}
		else
		{
			object = Instantiate(object);
			ObjectPosition();
			object.SetActive(true);
		}
}

