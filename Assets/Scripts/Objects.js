#pragma strict

var scriptPowerUpsControl : PowerUpsControl;
var scriptRoadManager : RoadManager;

var velocidade : int = 0;

function Start () 
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
	scriptRoadManager = GameObject.Find ("RoadManager").GetComponent(RoadManager);
}

function Update () 
{
	velocidade = scriptRoadManager.velocidade;
	Move();
	/*if(scriptPowerUpsControl.booNitroOn == true)
	{
		gameObject.SetActive(false);
	}
	else
	{
		gameObject.SetActive(true);
	}*/
}

function Move()
{
	if(gameObject.activeInHierarchy)
	{
		transform.Translate(Vector3.forward * Time.deltaTime * velocidade);
	}
}

function Destroy()
{
	gameObject.SetActive(false);
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "DestroyEnemy")
    {
    	Destroy();
    }
}