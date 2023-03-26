#pragma strict

var minSwipeDistY : float;

var minSwipeDistX : float;

private var startPos :Vector2; 

var stepParc : float = 10;

var PositionActual : int = 0;

var player : Transform;

//As posiçoes onde o player pode ficar
var PositionPlayer = new List.<Vector3>(); 

var turnCenter : Transform;
var turnLeft : Transform;
var turnRight : Transform;

var turnSpeed : float = 10.0;

	function Update () 
	{
		Turn();
		if (Input.touchCount > 0) 
		{

		var touch : Touch = Input.touches[0];

		switch (touch.phase) 

			{

			case TouchPhase.Began:

			startPos = touch.position;

			break;


			case TouchPhase.Ended:
			var swipeDistVertical : float;
			swipeDistVertical = (new Vector3(0, touch.position.y, 0) - new Vector3(0, startPos.y, 0)).magnitude;

				if (swipeDistVertical > minSwipeDistY) 
				{
					var swipeValue : float;
					swipeValue = Mathf.Sign(touch.position.y - startPos.y);

					if (swipeValue > 0)//up
					{	
						
					}
					else if (swipeValue < 0)//down
					{	
						
					}
				}
				var swipeDistHorizontal : float;

				swipeDistHorizontal = (new Vector3(touch.position.x,0, 0) - new Vector3(startPos.x, 0, 0)).magnitude;

				if (swipeDistHorizontal > minSwipeDistX) 
				{
					swipeValue = Mathf.Sign(touch.position.x - startPos.x);

					if (swipeValue > 0)//right
					{
						Debug.Log("Right");
						PositionActual = PositionActual + 1;
                 if(PositionActual > 1)
                {
                	PositionActual = 1;
                }
					}
					else if (swipeValue < 0)//left
					{	
						Debug.Log("left");
						PositionActual = PositionActual - 1;
               			if(PositionActual < -1)
                		{
                			PositionActual = -1;
               			 }
               			 
					}
				}
				break;
			}
		}	
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