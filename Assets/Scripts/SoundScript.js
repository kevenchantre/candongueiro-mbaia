#pragma strict
import UnityEngine.UI;

var btSound : Button;
//var btMusic : Button;

var imgSound : Sprite;
var imgSoundOff : Sprite;

//var imgMusic : Sprite;
//var imgMusicOff : Sprite;

private var allAudioSources : AudioSource[];

public var Sound;

public var Music;

function Start ()
{
	SoundTest();
	//MusicTest();
}

function Awake() 
{
    allAudioSources = FindObjectsOfType(AudioSource) as AudioSource[];
}

function SoundTest() 
{
	//Pegar a configuraçao do som
	Sound = PlayerPrefs.GetInt("Sound");
	
	//Se o som estiver activo
	if(Sound == 1)
	{
		btSound.GetComponent(Image).sprite = imgSound;
	}
	else if (Sound == 0)
	{
		btSound.GetComponent(Image).sprite = imgSoundOff;
	}
}

function SoundConfig()
{
	Sound = PlayerPrefs.GetInt("Sound");
	if (Sound == 0)
	{
		btSound.GetComponent(Image).sprite = imgSound;
		PlayerPrefs.SetInt("Sound", 1);
		SoundTest();
		for(var audioS : AudioSource in allAudioSources) 
		{
        	audioS.Play();
    	}
	}
	else if (Sound == 1)
	{
		btSound.GetComponent(Image).sprite = imgSoundOff;
		PlayerPrefs.SetInt("Sound", 0);
		SoundTest() ;
		for(var audioS : AudioSource in allAudioSources) 
		{
       		audioS.Stop(); 
       	}
	}
}

/*function MusicTest() 
{
	//Pegar a configuraçao do som
	Music = PlayerPrefs.GetInt("Music");
	
	//Se o som estiver activo
	if(Music == 1)
	{
		btMusic.GetComponent(Image).sprite = imgMusic;
	}
	else if (Music == 0)
	{
		btMusic.GetComponent(Image).sprite = imgMusicOff;
	}
}
*/
/*function MusicConfig()
{
	Music = PlayerPrefs.GetInt("Music");
	if (Music == 0)
	{
		btMusic.GetComponent(Image).sprite = imgMusic;
		PlayerPrefs.SetInt("Music", 1);
		MusicTest();
		for(var audioS : AudioSource in allAudioSources) 
		{
        	audioS.Play();
    	}
	}
	else if (Music == 1)
	{
		btMusic.GetComponent(Image).sprite = imgMusicOff;
		PlayerPrefs.SetInt("Music", 0);
		MusicTest() ;
		for(var audioS : AudioSource in allAudioSources) 
		{
       		audioS.Stop(); 
       	}
	}
}*/