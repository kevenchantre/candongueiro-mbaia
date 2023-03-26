#pragma strict

var scriptPoliceManager : PoliceManager;

var police : GameObject;

var velocidade : int = 0;

var activePolice : boolean = false;
var sounded : boolean = false;

var policeSound : AudioClip;

function Start () 
{
	scriptPoliceManager = GameObject.Find ("PoliceManager").GetComponent(PoliceManager);
}

function Update () 
{
	Move();
	Active();
	activePolice = scriptPoliceManager.activePolice;
}

function Move()
{
	if((gameObject.activeInHierarchy) && (activePolice == true))
	{
		transform.position.x += Time.deltaTime * 10;
	}
}

function Active()
{
	if((activePolice == true) && (sounded == false))
	{
		//yield WaitForSeconds(4);
		PlaySound();
	}
}

function Destroy()
{
	gameObject.SetActive(false);
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "DestroyPolice")
    {
    	Destroy();
    	sounded = false;
    }
}

function PlaySound() 
{
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if(Sound == 1)
	{
		GetComponent.<AudioSource>().PlayOneShot(policeSound);
		sounded = true;
	}
}