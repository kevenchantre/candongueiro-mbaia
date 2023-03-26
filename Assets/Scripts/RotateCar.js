public var amountToInterpolate: float = 0.5f;
private var startQuat: Quaternion; 
private var targetQuat : Quaternion ;
private var offSetQuat:Quaternion ;
private var lastRot:Quaternion;
private var objectHit: boolean = false;
private var objHit: RaycastHit;

function Start() {

	lastRot = transform.localRotation;
}


function ShootRay (p:Vector3)
 
{
 		var ray: Ray = Camera.main.ScreenPointToRay (p);
 
		var tempQuat : Quaternion = new Quaternion();
		var rhit: RaycastHit;
 
		if (Physics.Raycast (ray, rhit, 1000.0f)) {
 			Debug.Log("Ray Shot and hit!");
 			objectHit =  true;
 			objHit = rhit;
		}
		
		if(objectHit) {
			tempQuat.x = ray.GetPoint(10).x;//rhit.point.x;
 			tempQuat.y = ray.GetPoint(10).y;//tempQuat.y = rhit.point.y;
 			tempQuat.z = ray.GetPoint(10).z;//tempQuat.z = rhit.point.z;
		}
 
		return tempQuat;
 
}
 




function FixedUpdate () {

var theTouch : Touch;

if(Input.touchCount > 0)
	theTouch = Input.GetTouch(0);
	
	
//This is for the MouseDown
if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began) {
		
		if(objectHit == false) {
			//Debug.Log("Begin Touch");
			startQuat = lastRot;
			offSetQuat = ShootRay(theTouch.position) * startQuat;
		}
		
}

//This is for MouseUp
if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended) {

	if(objectHit)
		lastRot = transform.localRotation;
	
	//Debug.Log("End Touch");
	objectHit = false;
}

//This is for the MouseDrag
if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
		
		if(objectHit) {	
			Debug.Log("Move Touch");	
			targetQuat = ShootRay(theTouch.position) * offSetQuat;
			var endQuat: Quaternion = Quaternion.Slerp (startQuat, targetQuat, Time.time * amountToInterpolate);
			transform.localRotation = endQuat;
 			startQuat = targetQuat;			
 		}
}



}	