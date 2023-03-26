#pragma strict

import System.Collections.Generic;

var scriptNitrous : Nitrous;

var scriptGameOver : GameOver;

//Lista de segmentos que formam o mundo
var RoadCollection = new List.<GameObject>(); 
var RoadCreated = new List.<GameObject>(); 

var a : int;

var numMaxObjects : int = 0;

//Onde termina cada segmento
var endRoad : Transform;

//Objectos que gerencia cada um dos segmentos
var usedRoad1 : GameObject;
var usedRoad2 : GameObject;
var usedRoad3 : GameObject;
var usedRoad4 : GameObject;
var usedRoad5 : GameObject;
var usedRoad6 : GameObject;
var usedRoad7 : GameObject;
var usedRoad8 : GameObject;
var usedRoad9 : GameObject;
var usedRoad10 : GameObject;
var usedRoad11 : GameObject;
var usedRoad12 : GameObject;

//Segmentos instanciado
var instRoad : GameObject;

//Posiçao onde sera criada uma nova estrada
var nextPosition : Vector3;
var startPosition : Vector3;

//Velocidade do jogo
var velocidade : int = 0;

//Velocidade que sera acrescida gradualmente para aumentar a velocidade
var velocidadePlus : int = 0;

//Quando a estrada deve mover para o inicio novamente
var changeRoad : int = 0;

function Start () 
{	
	scriptNitrous = GameObject.Find ("candongueiro").GetComponent(Nitrous);
	scriptGameOver = GameObject.Find ("candongueiro").GetComponent(GameOver);
	numMaxObjects = RoadCollection.Count;
	InstanciateWorld();
	BuildWorld();Dificuldade();
}

function Update () 
{
	velocidade = scriptNitrous.velocidade + velocidadePlus;
	MoveWorld();
	VelocidadeMax();
}

function InstanciateWorld()
{
	for(a = 0; a < numMaxObjects; a++)
	{
		instRoad = RoadCollection[a];
		instRoad = Instantiate(instRoad);
		instRoad.SetActive(false);
		RoadCreated.Add(instRoad);
	}
}

function BuildWorld()
{
	nextPosition = startPosition;
	for(a = 0; a < RoadCreated.Count; a++)
	{
		instRoad = RoadCreated[a];
		instRoad.name = "road" + a;
		instRoad.SetActive(true);
		instRoad.transform.position = nextPosition;
		nextPosition.x += (endRoad.localPosition.x);
	}
}

function MoveWorld()
{
	usedRoad1 = GameObject.Find("road0");
	usedRoad2 = GameObject.Find("road1");
	usedRoad3 = GameObject.Find("road2");
	usedRoad4 = GameObject.Find("road3");
	usedRoad5 = GameObject.Find("road4");
	usedRoad6 = GameObject.Find("road5");
	usedRoad7 = GameObject.Find("road6");
	usedRoad8 = GameObject.Find("road7");
	usedRoad9 = GameObject.Find("road8");
	usedRoad10 = GameObject.Find("road9");
	usedRoad11 = GameObject.Find("road10");
	usedRoad12 = GameObject.Find("road11");
	
	usedRoad1.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad2.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad3.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad4.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad5.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad6.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad7.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad8.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad9.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad10.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad11.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	usedRoad12.transform.Translate(Vector3.left*Time.deltaTime * velocidade);
	
	var teste : float;
	var teste2 : float;
	var teste3 : float;
	var teste4 : float;
	var teste5 : float;
	var teste6 : float;
	var teste7 : float;
	var teste8 : float;
	var teste9 : float;
	var teste10 : float;
	var teste11 : float;
	var teste12 : float;
	
	teste = usedRoad1.transform.position.x;
	teste2 = usedRoad2.transform.position.x;
	teste3 = usedRoad3.transform.position.x;
	teste4 = usedRoad4.transform.position.x;
	teste5 = usedRoad5.transform.position.x;
	teste6 = usedRoad6.transform.position.x;
	teste7 = usedRoad7.transform.position.x;
	teste8 = usedRoad8.transform.position.x;
	teste9 = usedRoad9.transform.position.x;
	teste10 = usedRoad10.transform.position.x;
	teste11 = usedRoad11.transform.position.x;
	teste12 = usedRoad12.transform.position.x;
	
	if (teste <= -changeRoad)
	{
		usedRoad1.transform.position.x = usedRoad12.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste2 <= -changeRoad)
	{
		usedRoad2.transform.position.x = usedRoad1.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste3 <= -changeRoad)
	{
		usedRoad3.transform.position.x = usedRoad2.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste4 <= -changeRoad)
	{
		usedRoad4.transform.position.x = usedRoad3.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste5 <= -changeRoad)
	{
		usedRoad5.transform.position.x = usedRoad4.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste6 <= -changeRoad)
	{
		usedRoad6.transform.position.x = usedRoad5.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste7 <= -changeRoad)
	{
		usedRoad7.transform.position.x = usedRoad6.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste8 <= -changeRoad)
	{
		usedRoad8.transform.position.x = usedRoad7.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste9 <= -changeRoad)
	{
		usedRoad9.transform.position.x = usedRoad8.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste10 <= -changeRoad)
	{
		usedRoad10.transform.position.x = usedRoad9.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste11 <= -changeRoad)
	{
		usedRoad11.transform.position.x = usedRoad10.transform.position.x + (endRoad.localPosition.x);
	}
	if (teste12 <= -changeRoad)
	{
		usedRoad12.transform.position.x = usedRoad11.transform.position.x + (endRoad.localPosition.x);
	}
}

InvokeRepeating("Dificuldade", 60, 120);
function Dificuldade()
{
	velocidadePlus = velocidadePlus + 5;
}

function VelocidadeMax()
{
	if(velocidadePlus >= 40)
	{
		CancelInvoke("Dificuldade");
	}
}