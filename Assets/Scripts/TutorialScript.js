#pragma strict

var swipe : SwipeScript;

var arrow : GameObject; //Seta que indica a posição para se fazer o swipe
var animeArrow : Animator; //Animação da seta

var booLeft : boolean = false;
var booRight : boolean = false;

var booGameOver : boolean = false;

var booTutorial : boolean = false;

var beginGeral : int = 40; //Quando todos os managers devem começar a trabalhar durante o tutorial

var info : Text;

function Start () 
{
	animeArrow = arrow.GetComponent(Animator);
 	animeArrow.enabled = false;
 	arrow.SetActive(false);
 	Time.timeScale = 1.0;
}

function Update()
{
	UpdateArrow();
}

function Tutorial() //Definir se e o tutorial ou nao
{
	var tutorial = PlayerPrefs.GetInt("tutorial");
 	if((tutorial == 0) || (tutorial == null))
	{
		booTutorial = true;
	}
	else
	{
		booTutorial = false;
	}
}

function UpdateArrow()
{
	if(swipe.PositionActual != -1 && booLeft == true)
	{
		ActiveArrow();
		animeArrow.Play("SlideLeft");
	}
	else if(swipe.PositionActual != 1 && booRight == true)
	{
		ActiveArrow();
		animeArrow.Play("SlideRight");
	}
	else
	{
		DeactiveArrow();
	}
}

function ActiveArrow()
{
	animeArrow.enabled = true;
 	arrow.SetActive(true);
}

function DeactiveArrow()
{
	animeArrow.enabled = false;
 	arrow.SetActive(false);
}

function TurnLeft()
{
		arrow.transform.Rotate(Vector2.up *(180));
}

function TurnRight()
{
 	arrow.transform.Rotate(Vector2.up *(180));
}

function OnTriggerEnter(other : Collider)
{
    if (other.tag == "TurnLeft")
    {
    	booLeft = true;
    	TurnLeft();
    }
    else if (other.tag == "TurnRight")
    {
    	booRight = true;
    	TurnRight();
    }
    else if (other.tag == "TurnOff")
    {
    	booRight = false;
    	booLeft = false;
    }
    else if (other.tag == "Info")
    {
		var infoScript = other.gameObject.GetComponent(InfoScript);
		infoScript.Info();
    }
}

function OnCollisionEnter(hit : Collision)
{
    var hitObject : String;
    hitObject = hit.gameObject.tag;
    if(hitObject == "ObstacleTutorial")
    {
        GameOver();
    }
}

function GameOver()
{
	booGameOver = true;
	info.text = "Toque em qualquer lugar para reiniciar o tutorial";
	Time.timeScale = 0.0;
}

function RestartTutorial()
{
	if(booGameOver == true)
	{
		Application.LoadLevel("Game");
	}
}
