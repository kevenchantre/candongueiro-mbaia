#pragma strict

//Objects por instanciar
var ObjectsPool = new List.<GameObject>(); 

var tutorial : TutorialScript;

function Awake()
{
	tutorial.Tutorial();
	Tutorial();
}

function Tutorial()
{
	if(tutorial.booTutorial == true)
	{
		ShowObjects();
	}
	else
	{
		//DestroyObjects();
	}
}

//Mostrar todos os objectos
function ShowObjects()
{
	var a : int;
	for(a = 0; a < ObjectsPool.Count; a++)
	{
		ObjectsPool[a].SetActive(true);
	}
}

function DestroyObjects()
{
	var a : int;
	for(a = 0; a < ObjectsPool.Count; a++)
	{
		ObjectsPool[a].Destroy (gameObject);
	}
}