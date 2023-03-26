using UnityEngine;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class ShareScore : MonoBehaviour 
{

	void Start ()
	{
		if (!FacebookManager.Instance.LoggedIn) 
		{
			
		}
	}

    public void ShareFB()
    {
		int score = PlayerPrefs.GetInt("scoreLocal");
		FacebookManager.Instance.PostToWall(score); 
    }

}
