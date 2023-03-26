#pragma strict

var scriptPowerUpsControl : PowerUpsControl;
var slowDown : SlowDownScript;
var vignette : UnityStandardAssets.ImageEffects.VignetteAndChromaticAberration;
var bonus : Bonuscript;

var booNitroOn : boolean = false;

//A velocidade que o carro tera quando o nitro for ligado
var velocidade : int;

var turbo1 : GameObject;
var turbo2 : GameObject;
var speedEffect1 : GameObject;
var speedEffect2 : GameObject;

var Cam : Camera;

function Start()
{
	scriptPowerUpsControl = GameObject.Find ("candongueiro").GetComponent(PowerUpsControl);
	slowDown = GameObject.Find ("MainGameObject").GetComponent(SlowDownScript);
	velocidade = 60 + bonus.velocidade;
}

function Update()
{
	Nitrous();
}

function Nitrous()
{
	if(scriptPowerUpsControl.booNitroOn == true)
	{
		turbo1.GetComponent.<ParticleSystem>().Play();
		turbo2.GetComponent.<ParticleSystem>().Play();
		yield WaitForSeconds(0.5);
		Cam.fieldOfView = Mathf.Lerp(Cam.fieldOfView, 60, 0.1);
		speedEffect1.GetComponent.<ParticleSystem>().Play();
		speedEffect2.GetComponent.<ParticleSystem>().Play();
		vignette.chromaticAberration = 10;
		velocidade = 100 + bonus.velocidade;
	}
	else
	{
		turbo1.GetComponent.<ParticleSystem>().Stop();
		turbo2.GetComponent.<ParticleSystem>().Stop();
		Cam.fieldOfView = Mathf.Lerp(Cam.fieldOfView, 55, 0.1);
		speedEffect1.GetComponent.<ParticleSystem>().Stop();
		speedEffect2.GetComponent.<ParticleSystem>().Stop();
		vignette.chromaticAberration = 0.0;
		if(slowDown.booSlowDown == false)
		{
			velocidade = 60 + bonus.velocidade;
		}
		else
		{
			velocidade = 30 + bonus.velocidade;
			yield WaitForSeconds(2);
			slowDown.booSlowDown = false;
		}
	}
}