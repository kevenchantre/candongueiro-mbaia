#pragma strict

import UnityEngine.UI;

var scriptMenuLogic : MenuLogicScript;

//var levelToLoad : String;
var loadedProgress : int = 0;

var background : GameObject;
var progressText : Text;
var progressBar : Slider;

function Start () 
{
	background.SetActive(false);
	scriptMenuLogic = GameObject.Find ("MainGameObject").GetComponent(MenuLogicScript);
}

function Update()
{

}

function LoadLevel()
{
	StartCoroutine(DisplayLoadingScreen(scriptMenuLogic.levelToLoad));

}

function DisplayLoadingScreen(level : String)
{
	background.SetActive(true);
	
	progressBar.value = loadedProgress;
	
	var async : AsyncOperation = Application.LoadLevelAsync (level);
	
	while (!async.isDone)
	{
		loadedProgress = async.progress * 10;
		Debug.Log("Progress: " + loadedProgress);
		yield null;
	}
}