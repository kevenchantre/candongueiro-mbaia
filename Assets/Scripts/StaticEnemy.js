#pragma strict

var velocidade : int = 0;

function Start () 
{

}

function Update () 
{

}

function Move()
{
	if(gameObject.activeInHierarchy)
		{
			transform.Translate(Vector3.back*Time.deltaTime * velocidade);
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