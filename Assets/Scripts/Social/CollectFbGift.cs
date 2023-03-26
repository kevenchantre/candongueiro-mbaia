using UnityEngine;
using System.Collections;

public class CollectFbGift : MonoBehaviour 
{

	public GameObject MaskGift;

	public void Gifts()
	{
		int coluna = PlayerPrefs.GetInt("ColunaSom");
		int primeiraMbaia = PlayerPrefs.GetInt("primeirambaia");
		int life = PlayerPrefs.GetInt("life");
		int coin = PlayerPrefs.GetInt("coinTotal");
		int abrandaTudo = PlayerPrefs.GetInt("abrandatudo");

		coluna = 1;
		primeiraMbaia = primeiraMbaia + 10;
		life = life + 5;
		coin = coin + 5000;
		abrandaTudo = abrandaTudo + 20;

		PlayerPrefs.SetInt("ColunaSom",coluna);
		PlayerPrefs.SetInt("primeirambaia",primeiraMbaia);
		PlayerPrefs.SetInt("life",life);
		PlayerPrefs.SetInt("coinTotal",coin);
		PlayerPrefs.SetInt("abrandatudo", abrandaTudo);

		MaskGift.SetActive(false);

		int level = Application.loadedLevel;
		if(level == 2)
		{
			Application.LoadLevel(2);
		}
		if(level == 5)
		{
			Application.LoadLevel(5);
		}
	}
}
