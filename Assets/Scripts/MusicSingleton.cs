﻿using UnityEngine;
using System.Collections;

public class MusicSingleton : MonoBehaviour 
{
	private static MusicSingleton instance = null;
	
	public static MusicSingleton Instance 
	{
		get { return instance; }
	}
	
	void Awake() 
	{
		if (instance != null && instance != this) 
		{
			/*if(instance.GetComponent<AudioSource>().clip != GetComponent<AudioSource>().clip)
			{
				instance.GetComponent<AudioSource>().clip = GetComponent<AudioSource>().clip;
				instance.GetComponent<AudioSource>().volume = GetComponent<AudioSource>().volume;
				instance.GetComponent<AudioSource>().Play();
			}*/
			
			Destroy(this.gameObject);
			return;
		} 
		instance = this;
		//audio.Play ();
		DontDestroyOnLoad(this.gameObject);
	}
}