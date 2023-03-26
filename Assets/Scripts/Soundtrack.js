#pragma strict
import UnityEngine.UI;

var MusicList = new List.<AudioClip>(); 

var isGameWindow : boolean;

var isConfigWindow : boolean;

var musicSelect : Slider;

var MusicGame : GameObject;

function Start() 
{
	if(isGameWindow)
	{
		PlaySound();
	}
	else if(isConfigWindow)
	{
		CheckMusic();
	}
}

function PlaySound() 
{
	//Pegar a configuraçao do som
	var Sound : int = PlayerPrefs.GetInt("Sound");
	var Music : int = PlayerPrefs.GetInt("Music");
	MusicGame = GameObject.Find("Game Music");
	//Se o som estiver activo
	if(Sound == 1)
	{
		//GetComponent.<AudioSource>();
		if(Music != null)
		{
			MusicGame.GetComponent.<AudioSource>().clip = MusicList[Music];
		}
		else
		{
			//PlayerPrefs.SetInt("Music", 0);
			MusicGame.GetComponent.<AudioSource>().clip = MusicList[0];
		}
		MusicGame.GetComponent.<AudioSource>().Play();
	}
}

function ChooseMusic()
{
	var Music = musicSelect.value;
	PlayerPrefs.SetInt("Music", Music);
	PlaySound();
}

function CheckMusic()
{
	var Music = PlayerPrefs.GetInt("Music");
	musicSelect.value = Music;
}

