#pragma strict

var buzinaSound : AudioClip;

function Start () 
{

}

//InvokeRepeating("PlayBuzina",30,Random.Range(100,200));

function PlayBuzina() 
{
	var active : int = Random.Range(0, 2);
	
	
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if((Sound == 1) && (active == 0))
	{
		GetComponent.<AudioSource>().clip = buzinaSound;
		GetComponent.<AudioSource>().Play();
	}
}