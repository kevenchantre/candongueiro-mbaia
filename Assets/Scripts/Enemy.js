#pragma strict

var scriptPowerUpsControl : PowerUpsControl;
var slowDown : SlowDownScript;

var velocidade : int = 0;

function Start () 
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
	slowDown = GameObject.Find ("MainGameObject").GetComponent(SlowDownScript);
}

function Update () 
{
	Move();
	if(scriptPowerUpsControl.booNitroOn == true)
	{
		gameObject.SetActive(false);
	}
	else
	{
		gameObject.SetActive(true);
	}
}

function Move()
{
	if(gameObject.activeInHierarchy)
	{
		if(slowDown.booSlowDown == false)
		{
			//transform.Translate(Vector3.forward * Time.deltaTime * velocidade);
			transform.position.x -= Time.deltaTime * velocidade;
		}
		else
		{
			transform.position.x -= Time.deltaTime * 20;
		}
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

function OnCollisionEnter(hit : Collision)
{
    var hitObject : String;
    hitObject = hit.gameObject.tag;
    if(hitObject == "Player")
    {
        velocidade = 0;
    }
    if(hitObject == "Obstacle")
    {
        velocidade = 0;
    }
}