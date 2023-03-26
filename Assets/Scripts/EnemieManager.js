#pragma strict

import System.Collections.Generic;

var EnemieCollection = new List.<GameObject>(); 
var EnemieCreated = new List.<GameObject>(); 

var a : int;

var leftObject : Transform;
var rightObject : Transform;
var centerObject : Transform;

var numMaxObjects : int = 0;

var inimigo : GameObject;

var PositionList = new List.<Vector3>(); 

var tutorial : TutorialScript;

private var begin : int = 0; //Quando esse manager deve começar a funcionar

function Start () 
{	
	numMaxObjects = EnemieCollection.Count;
	PositionList.Add(leftObject.transform.position);
	PositionList.Add(rightObject.transform.position);
	PositionList.Add(centerObject.transform.position);
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
InvokeRepeating("BuildEnemie", begin, Random.Range(4,7));

//Instanciar todos os objectos a serem utilizados como obstaculos
function InstanciateObjects()
{
	for(a = 0; a < numMaxObjects; a++)
	{
		inimigo = EnemieCollection[a];
		inimigo.SetActive(false);
		inimigo = Instantiate(inimigo);
		EnemieCreated.Add(inimigo);
	}
}

//Definir a posiçao onde aparecem os inimigos
function EnemiePosition()
{
	var posInimigo : Vector3 = PositionList[Random.Range(0,PositionList.Count)];
	inimigo.transform.position = posInimigo;
}

//Criar os inimigos
function BuildEnemie()
{
	inimigo = EnemieCreated[Random.Range(0,EnemieCreated.Count)];
	if(!inimigo.activeInHierarchy)
		{
			EnemiePosition();
			inimigo.SetActive(true);
		}
		else
		{
			inimigo = Instantiate(inimigo);
			EnemiePosition();
			inimigo.SetActive(true);
		}
}


