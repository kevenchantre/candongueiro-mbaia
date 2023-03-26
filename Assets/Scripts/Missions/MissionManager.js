#pragma strict

import UnityEngine.UI;

var scriptMission1 : Mission1Script;
var scriptMission2 : Mission2Script;
var scriptMission3 : Mission3Script;
var scriptMission4 : Mission4Script;
var scriptMission5 : Mission5Script;
var scriptMission6 : Mission6Script;

var missionCompleted : boolean = false;

var setCompleted : boolean = false;

var messageGroup : GameObject;
var message : Text;
var messageAnime : Animator;
var booMessage : boolean = false;


function Start () 
{
	scriptMission1 = GameObject.Find ("MissionManager").GetComponent(Mission1Script);
	scriptMission2 = GameObject.Find ("MissionManager").GetComponent(Mission2Script);
	scriptMission3 = GameObject.Find ("MissionManager").GetComponent(Mission3Script);
	scriptMission4 = GameObject.Find ("MissionManager").GetComponent(Mission4Script);
	scriptMission5 = GameObject.Find ("MissionManager").GetComponent(Mission5Script);
	scriptMission6 = GameObject.Find ("MissionManager").GetComponent(Mission6Script);
	var loadedLevel : String = Application.loadedLevelName;
	if (loadedLevel == "Missoes") 
	{
		scriptMission1.ListManage();
		scriptMission2.ListManage();
		scriptMission3.ListManage();
		scriptMission4.ListManage();
		scriptMission5.ListManage();
		scriptMission6.ListManage();
	}
	if((Application.loadedLevelName == "Game") || (Application.loadedLevelName == "Loja"))
	{
		 messageAnime = messageGroup.GetComponent(Animator);
 		 messageAnime.enabled = false;
 		 messageGroup.SetActive(false);
 	}
}

function Update()
{
	MessageCompleted();
}

function MessageCompleted()
{
	if(missionCompleted == true)
	{
		messageGroup.SetActive(true);
		messageAnime.enabled = true;
		if(Application.loadedLevelName == "Game")
		{
			messageAnime.Play("SlideDown");
			missionCompleted = false;
			yield WaitForSeconds(2);
			messageAnime.Play("SlideUp");
 		}
 		if(Application.loadedLevelName == "Loja")
		{
			messageAnime.Play("SlideDownShop");
			missionCompleted = false;
			yield WaitForSeconds(2);
			messageAnime.Play("SlideUpShop");
 		}
 		yield WaitForSeconds(2);
		messageAnime.enabled = false;
 		messageGroup.SetActive(false);
	}
}