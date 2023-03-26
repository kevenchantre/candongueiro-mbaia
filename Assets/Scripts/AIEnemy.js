#pragma strict

var enemySound : EnemySound;

var car : Transform;

var booPolice : boolean = false;

var moveRight : boolean = false;
var moveLeft : boolean = false;
var moveCenter : boolean = false;

var turnSpeed : float = 10.0;

var posX : float = 0;
var posY : float = 0;
var posZLeft : float = 3.5;
var posZCenter : float = 0;
var posZRight : float = -3.5;

function Update () 
{
	posX = car.transform.position.x;
	AI();
	if(moveRight)
	{
		TurnRight();
	}
	if(moveLeft)
	{
		TurnLeft();
	}
	if(moveCenter)
	{
		TurnCenter();
	}
}

function AI()
{		
	ObstacleAhead();
}

//Testar Objectos a frente
function ObstacleAhead()
{
	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.back);
	if(Physics.Raycast (car.transform.position, fwd, hit, 20)) 
	{	
		if (hit.collider.gameObject.tag == "Enemy")
		{
			TurnTest();
			if(booPolice == false)
			{
				enemySound.PlayBuzina();
			}
		}
		if (hit.collider.gameObject.tag == "Obstacle")
		{
			TurnTest();
		}
	}
}

//Testar para que lado curvar	
function TurnTest()
{
	var hit : RaycastHit;
	var _left = transform.TransformDirection (Vector3.right);
	var _righ = transform.TransformDirection (Vector3.left);
	
	if(car.transform.position.z == posZLeft)
	{
		if (!Physics.Raycast (car.transform.position, _righ, hit, 3.5)) 
		{	
			moveRight = false;
			moveLeft = false;
			moveCenter = true;
		}
	}
	if(car.transform.position.z == posZRight)
	{
		if (!Physics.Raycast (car.transform.position, _left, hit, 3.5)) 
		{	
			moveRight = false;
			moveLeft = false;
			moveCenter = true;
		}
	}
	if(car.transform.position.z == posZCenter)
	{
		var i : int = Random.Range(1,3);
		if(i == 1)
		{
			if (!Physics.Raycast (car.transform.position, _left, hit, 3.5)) 
			{	
				moveRight = false;
				moveLeft = true;
				moveCenter = false;
			}
		}
		else if (i == 2)
		{
			if (!Physics.Raycast (car.transform.position, _righ, hit, 3.5)) 
			{	
				moveRight = true;
				moveLeft = false;
				moveCenter = false;
			}
		}
	}
}

function TurnLeft()
{
	var direction : Vector3;
	var newLookRotation : Quaternion;
	var step : float = 10 * Time.deltaTime;
	var dir : Vector3;
	
	car.transform.position = Vector3.MoveTowards(transform.position, Vector3(posX, posY, posZLeft), step);
	dir = Vector3(posX, posY, posZLeft);
	direction = (car.transform.position - dir) - Vector3(5,0,0);
	newLookRotation = Quaternion.LookRotation(direction);
	car.transform.rotation = Quaternion.Slerp(car.transform.rotation, newLookRotation, turnSpeed * Time.deltaTime);
}

function TurnRight()
{
	var direction : Vector3;
	var newLookRotation : Quaternion;
	var step : float = 10 * Time.deltaTime;
	var dir : Vector3;
	
	car.transform.position = Vector3.MoveTowards(transform.position, Vector3(posX, posY, posZRight), step);
	dir = Vector3(posX, posY, posZRight);
	direction = (car.transform.position - dir) - Vector3(5,0,0);
	newLookRotation = Quaternion.LookRotation(direction);
	car.transform.rotation = Quaternion.Slerp(car.transform.rotation, newLookRotation, turnSpeed * Time.deltaTime);
}

function TurnCenter()
{
	var direction : Vector3;
	var newLookRotation : Quaternion;
	var step : float = 10 * Time.deltaTime;
	var dir : Vector3;
	
	car.transform.position = Vector3.MoveTowards(transform.position, Vector3(posX, posY, posZCenter), step);
	dir = Vector3(posX, posY, posZCenter);
	direction = (car.transform.position - dir) - Vector3(5,0,0);
	newLookRotation = Quaternion.LookRotation(direction);
	car.transform.rotation = Quaternion.Slerp(car.transform.rotation, newLookRotation, turnSpeed * Time.deltaTime);
}