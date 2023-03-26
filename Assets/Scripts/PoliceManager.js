#pragma strict

var police : GameObject;

var PositionList = new List.<Vector3>(); 

var activePolice : boolean = false;

var timePoliceMax : int = 0;
var timePoliceMin : int = 0;

var tutorial : TutorialScript;

private var begin : int = 0; //Quando esse manager deve começar a funcionar

function Start () 
{
	InstanciatePolice();
	timePoliceMin = PlayerPrefs.GetInt("timepolicemin");
	timePoliceMax = PlayerPrefs.GetInt("timepolicemax");
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
		begin = 100;
	}
	else
	{
		begin = 60;
	}
}

function Update()
{
	ActivePolice();
	Move();
}

//Criar policia
InvokeRepeating("BuildPolice", begin,Random.Range(timePoliceMin, timePoliceMax));

function InstanciatePolice()
{
	police.SetActive(false);
	police = Instantiate(police);
}

function PolicePosition()
{
	var posObject : Vector3 = PositionList[Random.Range(0,PositionList.Count)];
	police.transform.position = posObject;
}

function BuildPolice()
{
	if(!police.activeInHierarchy)
	{
		PolicePosition();
		police.SetActive(true);
	}
}

function ActivePolice()
{
	if(police.activeInHierarchy)
	{
		yield WaitForSeconds(5);
		activePolice = true;
	}
}

function Move()
{
	if(gameObject.activeInHierarchy)
	{
		if(police.transform.position.x < -9)
		{
			police.transform.position.x += Time.deltaTime * 5;
		}
	}
}