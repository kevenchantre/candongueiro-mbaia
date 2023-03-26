#pragma strict

var scriptTimerManager : TimerManager;
var scriptMission2 : Mission2Script;

var booMagnetOn : boolean = false;
var booNitroOn : boolean = false;
var booScoreBoosterOn : boolean = false;

var magnet : Transform;

//O tempo do powerup que o jogador apanhou
var powerupTime : String;

var powerupSound : AudioClip;

function Start()
{
	scriptTimerManager = GameObject.Find ("UIManager").GetComponent(TimerManager);
	scriptMission2 = GameObject.Find ("MissionManager").GetComponent(Mission2Script);
}

function Update()
{
	ManagePowerups();
}

function ManagePowerups()
{
	if(scriptTimerManager.magnet == true)
	{
		booMagnetOn = true;
	}
	else
	{
		booMagnetOn = false;
	}
	
	if(scriptTimerManager.scoreBooster == true)
	{
		booScoreBoosterOn = true;
	}
	else
	{
		booScoreBoosterOn = false;
	}
	
	if(scriptTimerManager.nitrous == true)
	{
		booNitroOn = true;
	}
	else
	{
		booNitroOn = false;
	}
}

function Magnet()
{
	powerupTime = "magnetTime";
	var powerup : String = "magnet";
	scriptTimerManager.powerup = powerup;
	scriptTimerManager.Timer();
}

function Nitrous()
{
	powerupTime = "NitrousTime";
	var powerup : String = "nitrous";
	scriptTimerManager.powerup = powerup;
	scriptTimerManager.Timer();
}

function ScoreBooster()
{
	powerupTime = "boosterTime";
	var powerup : String = "booster";
	scriptTimerManager.powerup = powerup;
	scriptTimerManager.Timer();
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "Magnet")
    {
    	Magnet();
    	scriptMission2.Mission2();
    	PlaySound() ;
    }
    if (other.tag == "Nitrous")
    {
    	Nitrous();
    	scriptMission2.Mission2();
    	PlaySound() ;
    }
    if (other.tag == "ScoreBooster")
    {
    	ScoreBooster();
    	scriptMission2.Mission2();
    	PlaySound() ;
    }
}

function PlaySound() 
{
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if(Sound == 1)
	{
		GetComponent.<AudioSource>().PlayOneShot(powerupSound);
	}
}