#pragma strict

var player : Transform;
 
private var fp : Vector2;  // a posicao do inicio do toque
private var lp : Vector2;  // a posicao do final do toque

//As posiçoes onde o player pode ficar
var PositionPlayer = new List.<Vector3>(); 

var PositionActual : int = 0;

var speed : float = 5;

var move : boolean = false;

var swipeSpeed : int = 0;

var turnSpeed : float = 10.0;

var stepParc : float = 10;

var turnCenter : Transform;
var turnLeft : Transform;
var turnRight : Transform;

function Update()
{  
	if(move)
		{
			Turn();
		}
	//Swipe();
	NoTouch();
}

function Swipe()
{
	for (var touch : Touch in Input.touches)
	{
          if (touch.phase == TouchPhase.Began)
          {
               fp = touch.position;
               lp = touch.position;
          }
          if (touch.phase == TouchPhase.Moved )
          {
                lp = touch.position;
          }
          if(touch.phase == TouchPhase.Ended)
          { 
         	 if((fp.x - lp.x) > swipeSpeed) // left swipe
         	{
                PositionActual = PositionActual - 1;
                if(PositionActual < -1)
                {
                	PositionActual = -1;
                }
                ChangeLine();
          	}
          	else if((fp.x - lp.x) < -swipeSpeed) // right swipe
          	{
                PositionActual = PositionActual + 1;
                 if(PositionActual > 1)
                {
                	PositionActual = 1;
                }
                ChangeLine();
          	}
          	else if((fp.y - lp.y) < -swipeSpeed ) // up swipe
          	{
                
          	}
          	else if((fp.y - lp.y) > -swipeSpeed ) // Down swipe
          	{
               
          	}
     	}
 	}
}

function Left()
{
	PositionActual = PositionActual - 1;
	if(PositionActual < -1)
	{
		PositionActual = -1;
	}
	ChangeLine();
}

function Right()
{
	PositionActual = PositionActual + 1;
	if(PositionActual > 1)
	{
		PositionActual = 1;
	}
	ChangeLine();
}

function ChangeLine()
{	
	move = true;
}

function Turn()
{
	var direction : Vector3;
	var newLookRotation : Quaternion;
	var step : float = stepParc * Time.deltaTime;
	
	 if(PositionActual == 0)
	{
		player.transform.position = Vector3.MoveTowards(transform.position, PositionPlayer[1], step);
		direction = (player.transform.position - turnCenter.position) - Vector3(5,0,0);
	}
	else  if(PositionActual < 0)
	{
		player.transform.position = Vector3.MoveTowards(transform.position, PositionPlayer[0], step);
		direction = (player.transform.position - turnLeft.position) - Vector3(5,0,0);
	}
	else  if(PositionActual > 0)
	{
		player.transform.position = Vector3.MoveTowards(transform.position, PositionPlayer[2], step);
		direction = (player.transform.position - turnRight.position) - Vector3(5,0,0);
	}
	newLookRotation = Quaternion.LookRotation(direction);
	player.transform.rotation = Quaternion.Slerp(player.transform.rotation, newLookRotation, turnSpeed * Time.deltaTime);
}

function NoTouch()
{
	if ((Input.GetKeyDown ("left")) || (Input.GetKeyDown ("a")))
	{
		 PositionActual = PositionActual - 1;
         if(PositionActual < -1)
          {
                PositionActual = -1;
          }
          ChangeLine();
	}
	else if ((Input.GetKeyDown ("right")) || (Input.GetKeyDown ("d")))
	{
		PositionActual = PositionActual + 1;
        if(PositionActual > 1)
        {
            PositionActual = 1;
        }
        ChangeLine();
	}
}