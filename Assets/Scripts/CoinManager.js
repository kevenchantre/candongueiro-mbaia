#pragma strict
import System.Collections.Generic;

var scriptGameOver : GameOver;

//Em que pontos do percursoas moedas irao aparecer
var PositionRoad = new List.<Vector3>(); 

//Moedas instanciadas
var CoinsOnRoad = new List.<GameObject>();
 
 //Moedas por instanciar
var CoinPool = new List.<GameObject>(); 

var coin : GameObject;

var player : GameObject;

var a : int;

var coinPos : Vector3;

var tutorial : TutorialScript;

private var begin : int = 0; //Quando esse manager deve começar a funcionar

function Start () 
{
	scriptGameOver = GameObject.Find ("candongueiro").GetComponent(GameOver);
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
InvokeRepeating("BuildCoin", begin, Random.Range(2,3));

//Instanciar conjunto de moedas
function InstanciateObjects()
{
	for(a = 0; a < CoinPool.Count; a++)
	{	
		coin = CoinPool[a];
		coin.SetActive(false);
		coin = Instantiate(coin);
		CoinsOnRoad.Add(coin);
	}
}

//Definir a posiçao onde aparecem as moedas
function CoinPosition()
{
	coinPos = PositionRoad[Random.Range(0,PositionRoad.Count)];
	coin.transform.position = coinPos;
}

//Criar moedas
function BuildCoin()
{
	coin = CoinsOnRoad[Random.Range(0,CoinsOnRoad.Count)];
	if(!coin.activeInHierarchy)
		{
			CoinPosition();
			coin.SetActive(true);
			Child();
		}
	else if (coin.transform.position.x < player.transform.position.x)
	{
			CoinPosition();
			coin.SetActive(true);
			Child();
	}
}

function Child()
{
	var i : int;
	for (i = 0; i < coin.transform.GetChildCount(); ++i)
 	{
 		coin.transform.GetChild(i).gameObject.transform.position.z = coinPos.z;
 		coin.transform.GetChild(i).gameObject.transform.rotation = Quaternion.EulerAngles(270,0,0);
     	coin.transform.GetChild(i).gameObject.SetActive(true);
	 }
}