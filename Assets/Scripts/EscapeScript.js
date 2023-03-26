#pragma strict

var scriptContinueScript : ContinueScript;

var levelLoaded : int;

var closeWindow : GameObject;

var rateUsWindow : GameObject;

var loadingWindow : GameObject;

var giftFB : GameObject;

var closedShowed : boolean = false;

var continueShowed : boolean = false;

function Start()
{
	if (levelLoaded == 1)
	{
		closeWindow.SetActive(false);
		scriptContinueScript = GameObject.Find ("MainGameObject").GetComponent(ContinueScript);
	}
}

function Pause()
{
	if ((closedShowed == false) && (scriptContinueScript.continueShowed == false))
	{
		closeWindow.SetActive(true);
		closedShowed = true;
		Time.timeScale = 0.0;
	}
	else if (closedShowed == true)
	{
		closeWindow.SetActive(false);
		closedShowed = false;
		Time.timeScale = 1.0;
	}
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 0) 
	{ 
		Close();
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 1) 
	{ 
		Pause();
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 2) 
	{ 
		Application.LoadLevel("MainMenu");
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 3) 
	{ 
		Application.LoadLevel("Definicoes");
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 4) 
	{ 
		Application.LoadLevel("Sobre");
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 5 && !giftFB.active)
	{ 
		Application.LoadLevel("MainMenu");
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 6 && !giftFB.active)
	{ 
		Application.LoadLevel("MainMenu");
	}
	if (Input.GetKeyDown(KeyCode.Escape) && levelLoaded == 6 && giftFB.active)
	{ 
		giftFB.SetActive(false);
	}
}

function Close()
{
	if ((closedShowed == false) && (!rateUsWindow.active))
	{
		closeWindow.SetActive(true);
		closedShowed = true;
		Time.timeScale = 0.0;
	}
	else if (closedShowed == true)
	{
		closeWindow.SetActive(false);
		closedShowed = false;
		Time.timeScale = 1.0;
	}
}

function CloseSim()
{
	Time.timeScale = 1.0;
	Application.Quit(); 
}

