#pragma strict

import UnityEngine.UI;

var scriptContinueScript : ContinueScript;

var bonus : Bonuscript;

var scoreText : Text;
var coinText : Text;

//Verificar se e gameover ou nao
var gameOver : boolean = false;

var enemieTouched : GameObject;

var crashSound : AudioClip;

var score : int = 0;
var coin : int = 0;

function Start () 
{
	scriptContinueScript = GameObject.Find ("MainGameObject").GetComponent(ContinueScript);
}

function Update () 
{
	if(scriptContinueScript.useLife == true)
    {
      	enemieTouched.SetActive(false);
     }
}

function AddScore()
{
	score = parseInt(scoreText.text);
	coin = parseInt(coinText.text);
	bonus.Bonus();
	score = score + bonus.score;
	coin = coin + bonus.coin;
	
	
	PlayerPrefs.SetInt("scoreLocal",score);
	PlayerPrefs.SetInt("coinLocal",coin);

    var scoreGift : int = PlayerPrefs.GetInt("scoreGift");
    scoreGift = scoreGift - score;
    if(scoreGift < 0)
    {
        scoreGift = 0;
    }
    PlayerPrefs.SetInt("scoreGift", scoreGift);
}

function GameOver()
{
	if(gameOver == true)
	{
		AddScore();
		Time.timeScale = 1.0;
		Application.LoadLevel("GameOver");
	}
}

function OnCollisionEnter(hit : Collision)
{
    var hitObject : String;
    hitObject = hit.gameObject.tag;
    PlaySound();
    if(hitObject == "Enemy")
    {
        scriptContinueScript.VerificarLife();
        GameOver();
        enemieTouched = hit.gameObject;
    }
     if(hitObject == "Obstacle")
    {
        scriptContinueScript.VerificarLife();
        GameOver();
        enemieTouched = hit.gameObject;
    }
     if(hitObject == "Police")
    {
        scriptContinueScript.VerificarLife();
        GameOver();
        enemieTouched = hit.gameObject;
    }
}

function PlaySound() 
{
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if(Sound == 1)
	{
		GetComponent.<AudioSource>().PlayOneShot(crashSound);
	}
}
