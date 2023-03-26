using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;
using Facebook;

public class ScoreController : MonoBehaviour 
{

	public int score = 0;
	public Text _score;
	public Text coin;
	public Text coinTotal;
	public Text newHighScore;

	public int coinConvert = 0;
	public int highScore = 0;
	public int scoreTemp = 0;

	void Awake()
	{
		score = PlayerPrefs.GetInt("highscore");
		if(Application.loadedLevelName == "Highscore")
		{
			TestLogin();GetMyScore();
		}
		if(Application.loadedLevelName == "GameOver")
		{
			Sumario();
		}
	}

	void TestLogin ()
	{
		if (FacebookManager.Instance.LoggedIn) 
		{

		}
	}

	//Verificar highscore
	void Highscore()
	{
		PlayerPrefs.SetInt("highscore", scoreTemp);
		newHighScore.gameObject.SetActive(true);
		GetMyScore();
	}

	//Verificar highscore no fb
	public void Highfb()
	{	
		int highScore = PlayerPrefs.GetInt("highscore");
		int scorefb = PlayerPrefs.GetInt("scorefb");
		if(scorefb > highScore)
		{
			PlayerPrefs.SetInt("highscore",scorefb);
			score = highScore;
		}
		else
		{
			PlayerPrefs.SetInt("scorefb",highScore);
			score = highScore;
			SendMyScore();
		}
	}

	//Enviar minha pontuacao
	public void SendMyScore()
	{
		if (FB.IsLoggedIn)
		{
			int highScore = PlayerPrefs.GetInt("highscore");
			var query = new Dictionary<string, string>();
			query["score"] = highScore.ToString();
			FB.API("/me/scores", Facebook.HttpMethod.POST, delegate(FBResult r) { Util.Log("Result: " + r.Text); }, query);
		} 
	}

	//Receber minha pontuaçao
	public void GetMyScore()
	{
		if (FB.IsLoggedIn)
		{
		//	Debug.Log(FacebookManager.Instance.RequestScores());
			FB.API("/me/scores", Facebook.HttpMethod.GET, delegate(FBResult r){ Debug.Log("Result: " + r.Text); });
			PlayerPrefs.SetInt("scorefb", 0);
			Highfb();
		} 
	}

	//O que acontece depois de game over
	public void Sumario()
	{
		coinTotal.text = PlayerPrefs.GetInt("coinTotal").ToString();
		scoreTemp = PlayerPrefs.GetInt("scoreLocal");
		highScore = PlayerPrefs.GetInt("highscore");
		_score.text = scoreTemp.ToString();
		if(highScore < scoreTemp)
		{
			//score = scoreTemp;
			Highscore();
		}
		coin.text = PlayerPrefs.GetInt("coinLocal").ToString();
		coinConvert = int.Parse(coinTotal.text) + int.Parse(coin.text);
		coinTotal.text = coinConvert.ToString();
		PlayerPrefs.SetInt("coinTotal", coinConvert);
	}
}
