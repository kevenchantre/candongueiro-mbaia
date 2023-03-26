/*using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

#if UNITY_ANDROID

public class fbHighscore : MonoBehaviour 
{

	public Text _score;
	public Text coin;
	public Text coinTotal;
	public Text newHighScore;
	
	public int coinConvert = 0;
	public int highScore = 0;
	public int scoreTemp = 0;

	int score = 0;
	string descricao = ""; //Descriçao do que sera postado no wall
	public Text scoreOffline;
	public Text scoreOnline;
	public GameObject ScoreOffline;
	public GameObject ScoreOnline;

	bool isSessionValid = false; //Se o user tem o login feito

	void Awake()
	{
		FacebookAndroid.init(); //Iniciar a API
		score = PlayerPrefs.GetInt("highscore");
		if(Application.loadedLevelName == "Highscore")
		{
			TestLogin();
			GetLeaderBoard();
		}
		if(Application.loadedLevelName == "GameOver")
		{
			Sumario();
		}
	}

	//Verificar highscore
	void Highscore()
	{
		PlayerPrefs.SetInt("highscore", scoreTemp);
		newHighScore.gameObject.SetActive(true);
		SendMyScore();
	}

	//Verificar highscore no fb
	void Highfb()
	{	
		int highScore = PlayerPrefs.GetInt("highscore");
		int scorefb = PlayerPrefs.GetInt("scorefb");
		if(scorefb > highScore)
		{
			PlayerPrefs.SetInt("highscore",scorefb);
			score = highScore;
			scoreOffline.text = score.ToString();
			scoreOnline.text = score.ToString();
		}
		else
		{
			PlayerPrefs.SetInt("scorefb",highScore);
			score = highScore;
			scoreOffline.text = score.ToString();
			scoreOnline.text = score.ToString();
			SendMyScore();
		}
	}

	//Login
	public void Login()
	{
		FacebookAndroid.loginWithPublishPermissions( new string[] { "user_friends, publish_actions" } );
		Application.LoadLevel("Highscore");
		//FacebookAndroid.loginWithReadPermissions( new string[] { "user_friends" } );
		//FacebookAndroid.reauthorizeWithPublishPermissions( new string[] { "publish_actions", "user_friends" }, FacebookSessionDefaultAudience.Everyone );
	}

	public void GetMyScore() 
	{  
		int highScore = PlayerPrefs.GetInt("highscore");
		string request = "me/scores";
		Facebook.instance.graphRequest( request, HTTPVerb.GET, OnGetScoreComplete );
	}

	void OnGetScoreComplete( string error, object result ) 
	{
		Debug.Log("OnGetScoreComplete result: " + result);
		Dictionary<string, object> resultData = result as Dictionary<string, object>;

		// a user might remove the app from facebook settings
		if(resultData == null) 
		{
			Debug.Log("Nenhuma app encontrada");
			return;
		}
		// a user might remove the app from facebook settings
		if(resultData.ContainsKey("data") == false) 
		{
			Debug.Log("Dictionary does not have data key");
			return;
		}
		List<object> dataList =  resultData["data"] as List<object>;
		if(null == dataList) 
		{
			Debug.Log("Facebook null list !");
			return;
		} 

		// post your first score if never done before
		if(0 == dataList.Count) 
		{
			SendMyScore();
			return;
		}

		Dictionary<string, object> objItem = dataList[0] as Dictionary<string, object>;
		Dictionary<string, object> userItem = objItem["user"] as Dictionary<string, object>;
		System.Int64 scorefb =  (System.Int64) objItem["score"]; // 
		string user = objItem["user"].ToString();

		Debug.Log("My retrieved score from Facebook = " + scorefb);
		scoreOnline.text = PlayerPrefs.GetInt("highscore").ToString();
		theScore.text = "Got score : "+scorefb.ToString();
		PlayerPrefs.SetInt("scorefb",(int)scorefb);
		Highfb();
	}

	//Enviar minha pontuacao
	public void SendMyScore()
	{
		string request = "/me/scores";
		var parameters = new Dictionary<string,object>()
		{
			{ "score", score.ToString() }
		};
		Facebook.instance.graphRequest( request, HTTPVerb.POST, parameters, OnSendScoreComplete );
	}

	void OnSendScoreComplete( string error, object result ) 
	{
		Prime31.Utils.logObject( result );
		Debug.Log("Log: "+result);
	}

	//Publicar score
	public void PublishScore()
	{
		int score = PlayerPrefs.GetInt("scoreLocal");
		descricao = "Acabei da fazer " + score + " pontos no jogo Candongueiro: Mbaia. Consegues fazer melhor do que eu?";
		var parameters = new Dictionary<string,string>
		{
			{ "link", "https://play.google.com/store/apps/details?id=com.interactiveload.candongueirombaia" },
			{ "name", "Candongueiro: Mbaia" },
			{ "picture", "https://interactiveload.com/jogos/icones/share_logo_candombaia.png" },
			//{ "caption", "the caption for the image is here" },
			{ "description", descricao }
		};
		FacebookAndroid.showDialog( "stream.publish", parameters );
	}

	//Convidar amigos
	public void InvitePlayer() 
	{	
		string title = "Convide um amigo a jogar!";
		string message = "Junte-te a mim no Candongueiro: Mbaia.";
		
		Dictionary<string, string> lParam = new Dictionary<string, string>();
		lParam["message"] = message;
		lParam["title"] = title;
		FacebookAndroid.showDialog("apprequests", lParam);
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

		#endif
}*/