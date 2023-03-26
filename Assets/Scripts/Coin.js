#pragma strict

var scriptCoinCollection : CoinCollection;
var scriptPowerUpsControl : PowerUpsControl;
var scriptRoadManager : RoadManager;

var velocidade : int = 0;
var rotVelocidade : int = 0;

var booMove : boolean = false;
var booRotate : boolean = false;

var coin : GameObject;

var magnet : Transform;

var magnetPos : Vector3;

function Start () 
{
	scriptCoinCollection = GameObject.Find ("MainGameObject").GetComponent(CoinCollection);
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
		Magnet();
	}
	velocidade = scriptRoadManager.velocidade;
}

function Move()
{
	if(gameObject.activeInHierarchy)
		{
			coin.transform.Translate(-Vector3.right*Time.deltaTime * velocidade);
		}
}

function Rotate()
{
	if(gameObject.activeInHierarchy)
		{
			coin.transform.eulerAngles = Vector3.Lerp(transform.rotation.eulerAngles, Vector3.right, Time.deltaTime);
		}
}

function Destroy()
{
	coin.gameObject.SetActive(false);
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "DestroyCoin")
    {
    	Destroy();
    }
     if (other.tag == "Player")
    {
    	scriptCoinCollection.CoinCollection();
    	Destroy();
    }
     if (other.tag == "Police")
    {
    	Destroy();
    }
}

function Magnet()
{
	if(scriptPowerUpsControl.booMagnetOn == true)
	{
		if(Vector3.Distance(transform.position, magnetPos) < 15)
		{
     		transform.position = Vector3.MoveTowards(transform.position, scriptPowerUpsControl.magnet.position, Time.deltaTime * 40);
		}
	}
}