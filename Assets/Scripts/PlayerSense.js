#pragma strict

var scriptMission5 : Mission5Script;
var scriptMission6 : Mission6Script;

var enemy : boolean = false;
var obstacle : boolean = false;

function Start () 
{
	scriptMission5 = GameObject.Find ("MissionManager").GetComponent(Mission5Script);
	scriptMission6 = GameObject.Find ("MissionManager").GetComponent(Mission6Script);
}

function Update () 
{

}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "Player")
    {
    	if(enemy)
    	{
    		scriptMission5.Mission5();
    	}
   		if(obstacle)
    	{
    		scriptMission6.Mission6();
    	}
    }
}