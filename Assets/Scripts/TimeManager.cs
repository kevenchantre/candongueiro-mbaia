using UnityEngine;
using System.Collections;

namespace UnityStandardAssets
{
	public class TimeManager : MonoBehaviour 
	{
		public static float timeLeft = 3600.0f;
		public static float minutes;
		public static float seconds;
		public static bool stop = true;
		void Awake() 
		{
			DontDestroyOnLoad(transform.gameObject);
		}
		void Start () 
		{
			int actualHour = System.DateTime.Now.Hour;
			int actualMinute = System.DateTime.Now.Minute;
			int actualSecond = System.DateTime.Now.Second;

			int lastHour = PlayerPrefs.GetInt("lastHour");
			int lastMinute = PlayerPrefs.GetInt("lastMinute");
			int lastSecond = PlayerPrefs.GetInt("lastSecond");

		/*	if(PlayerPrefs.HasKey("timeLeft"))
			{

				if(((actualHour - lastHour) > 1) || ((actualHour - lastHour) == 1) && (actualMinute >= lastMinute))
				{
					timeLeft = 0.0f;
				}
				else if(((actualHour - lastHour) < 1) || ((actualHour - lastHour) == 1) && (actualMinute < lastMinute))
				{
					float timeDiff = (actualMinute - lastMinute) * 60;
					timeLeft = PlayerPrefs.GetFloat("timeLeft") - timeDiff;
				}
				else
				{
					timeLeft = PlayerPrefs.GetFloat("timeLeft");
				}
			}*/

			startTimer(timeLeft);
		}
		void Update () 
		{
			if(stop) return;
			timeLeft -= Time.deltaTime;
			
			minutes = Mathf.Floor(timeLeft / 60);
			seconds = timeLeft % 60;
			if(seconds > 59) seconds = 59;
			if(minutes < 0) 
			{
				stop = true;
				minutes = 0;
				seconds = 0;
			}
		}

		public void Teste()
		{
			int lastHour = System.DateTime.Now.Hour;
			int lastMinute = System.DateTime.Now.Minute;
			int lastSecond = System.DateTime.Now.Second;

			PlayerPrefs.SetInt("lastHour", lastHour);
			PlayerPrefs.SetInt("lastMinute", lastMinute);
			PlayerPrefs.SetInt("lastSecond", lastSecond);

			PlayerPrefs.SetFloat("timeLeft", timeLeft);

		}

		public static void startTimer(float from)
		{
			stop = false;
			timeLeft = from;
		}
	}
}