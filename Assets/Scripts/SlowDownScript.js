#pragma strict

var booSlowDown : boolean = false;

var qdeSlowDown : Text;

var slowDown : GameObject;

var tutorial : TutorialScript;

function Start()
{
	ShowSlowIcon();
}

function DoubleTouch()
{
	var abrandaTudo : int = PlayerPrefs.GetInt("abrandatudo"); 
	for (var touch in Input.touches) 
	{
		if (touch.tapCount == 2)
		{
			ShowSlowIcon();
			if (abrandaTudo > 0)
			{
				abrandaTudo = abrandaTudo - 1;
				PlayerPrefs.SetInt("abrandatudo", abrandaTudo);
				SlowDown();
				booSlowDown = true;
			}
		}
	}
}

function SlowDown()
{
	var abrandaTudo : int = PlayerPrefs.GetInt("abrandatudo");
	qdeSlowDown.text = abrandaTudo.ToString();
}

function ShowSlowIcon()
{
	slowDown.SetActive(true);
	yield WaitForSeconds(3);
	slowDown.SetActive(false);
}