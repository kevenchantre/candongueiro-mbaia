#pragma strict

var scriptLoadingScreen : LoadingScreen;

var loadedLevel : String;
var levelToLoad : String;

function Start () 
{
	loadedLevel = Application.loadedLevelName;
	if ((loadedLevel == "MainMenu") || (loadedLevel == "GameOver"))
	{
		scriptLoadingScreen = GameObject.Find ("LoadingScreen").GetComponent(LoadingScreen);
	}
}

function NovoJogo()
{
	levelToLoad = "Game";
	scriptLoadingScreen.LoadLevel();
}

function Missoes()
{
	levelToLoad = "Missoes";
	scriptLoadingScreen.LoadLevel();
}

function Definicoes()
{
	loadedLevel = Application.loadedLevelName;
	if (loadedLevel == "MainMenu")
	{
		levelToLoad = "Definicoes";
		scriptLoadingScreen.LoadLevel();
	}
	else
	{
		Application.LoadLevel("Definicoes");
	}
}

function Gifts()
{
	levelToLoad = "Gifts";
	scriptLoadingScreen.LoadLevel();
}

function Highscore()
{
	levelToLoad = "Highscore";
	scriptLoadingScreen.LoadLevel();
}

function Garagem()
{
	levelToLoad = "Garagem";
	scriptLoadingScreen.LoadLevel();
}

function Creditos()
{
	Application.LoadLevel("Creditos");
}

function MenuPrincipal()
{
	Time.timeScale = 1.0;
	Application.LoadLevel("MainMenu");
}

function Loja()
{
	levelToLoad = "Loja";
	scriptLoadingScreen.LoadLevel();
}

function TermosUso()
{
	Application.OpenURL ("https://www.interactiveload.com/termos-de-uso.html");
}

function Privacidade()
{
	Application.OpenURL ("https://www.interactiveload.com/declaracao-de-privacidade.html");
}