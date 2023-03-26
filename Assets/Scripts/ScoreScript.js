#pragma strict

import UnityEngine.UI;

var scriptScoreBooster : ScoreBooster;
var scriptGameOver : GameOver;
var scriptMultiplierScript : MultiplierScript;
var scriptMission3 : Mission3Script;

//Score
static var score : int = 0; 
static var distanceScore : int = 0; 

// Checking distance
var previousPosition : Vector3; 
var calculatedDistance : float;

var scoreCounting : GameObject;

var scoreText : Text;

function Start()
{
	scriptScoreBooster = GameObject.Find ("candongueiro").GetComponent(ScoreBooster);
	scriptGameOver = GameObject.Find ("candongueiro").GetComponent(GameOver);
	scriptMultiplierScript = GameObject.Find ("MultiplierManager").GetComponent(MultiplierScript);
	scriptMission3 = GameObject.Find ("MissionManager").GetComponent(Mission3Script);
}

function Awake()
{
	previousPosition = scoreCounting.transform.position;
}

function Update()
{
	Score();
	ShowingScore();
}

function Score()
{
	scoreCounting.transform.Translate(Vector3.right*Time.deltaTime * scriptScoreBooster.scoreBooster * scriptMultiplierScript.multiplier);
	calculatedDistance += (scoreCounting.transform.position - previousPosition).magnitude;
	previousPosition = scoreCounting.transform.position;
	distanceScore = Mathf.Round(calculatedDistance);   
	score = distanceScore;
	scriptMission3.Mission3();
}

function GiftScore()
{
	
}

function ShowingScore()
{
	if(score < 10)
	{
		scoreText.text = "00000" + score.ToString();
	}
	else if ((score > 10) && (score < 100))
	{
		scoreText.text = "0000" + score.ToString();
	}
	else if ((score > 100) && (score < 1000))
	{
		scoreText.text = "000" + score.ToString();
	}
	else if ((score > 1000) && (score < 10000))
	{
		scoreText.text = "00" + score.ToString();
	}
	else if ((score > 10000) && (score < 100000))
	{
		scoreText.text = "0" + score.ToString();
	}
	else if (score >= 100000)
	{
		scoreText.text = score.ToString();
	}
}