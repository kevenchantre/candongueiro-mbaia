using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ShopSpecialFB : MonoBehaviour 
{

	public GameObject MaskGift;
	public Text btState; //Se ja se fez login ou nao no fb
	
	void Start ()
	{
		State();
	}
	
	public void FBLogin()
	{
		if (!FacebookManager.Instance.LoggedIn) 
		{
			FacebookManager.Instance.Login ("public_profile,user_friends,publish_actions", delegate() 
			                                {
				// The following will occur when when Facebook is logged in successfully:
				ScoreController scoreController = new ScoreController();
				scoreController.Highfb();
			},
			delegate(string reason) 
			{
				
			});
		}

	}

	void Update()
	{
		int fblogin = PlayerPrefs.GetInt("fblogin");
		if(fblogin == 0)
		{
			if (FacebookManager.Instance.LoggedIn) 
			{
				FirstLogin();
			}
		}
	}

	public void FirstLogin()
	{
		int fblogin = 1;
		CallFBActivateApp();
		PlayerPrefs.SetInt("fblogin", fblogin);
		MaskGift.SetActive(true);
	}

	public void State()
	{
		int testFB = PlayerPrefs.GetInt("fblogin"); 
		if (testFB > 0) 
		{
			btState.text = "Feito";
		}
		else
		{
			btState.text = "Entrar";
		}
	}
	
	private void CallFBActivateApp()
	{
		FB.ActivateApp();
	}
}
