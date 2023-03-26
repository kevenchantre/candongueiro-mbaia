#pragma strict

var scriptPowerUpsControl : PowerUpsControl;
var scriptRoadManager : RoadManager;

var velocidade : int = 0;
var rotVelocidade : int = 0;

var booMove : boolean = false;
var booRotate : boolean = false;

function Start () 
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
	scriptRoadManager = GameObject.Find ("RoadManager").GetComponent(RoadManager);
}

function Update () 
{
	if(booMove)
	{
		Move();
	}
	if(booRotate)
	{
		Rotate();
	}
	if(scriptPowerUpsControl.booNitroOn == true)
	{
		gameObject.SetActive(false);
	}
	else
	{
		gameObject.SetActive(true);
	}
	velocidade = scriptRoadManager.velocidade;
}

function Move()
{
	if(gameObject.activeInHierarchy)
		{
			transform.Translate(Vector3.left*Time.deltaTime * velocidade);
		}
}

function Rotate()
{
	if(gameObject.activeInHierarchy)
		{
			transform.eulerAngles = Vector3.Lerp(transform.rotation.eulerAngles, Vector3.right, Time.deltaTime);
		}
}

function Destroy()
{
	gameObject.SetActive(false);
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "DestroyCoin")
    {
    	Destroy();
    }
    if (other.tag == "Player")
    {
    	Destroy();
    }
}

