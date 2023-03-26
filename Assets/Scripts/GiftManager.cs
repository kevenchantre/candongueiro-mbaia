using System.Collections;
using UnityEngine.UI;
using UnityEngine;

namespace UnityStandardAssets
{
	public class GiftManager : MonoBehaviour 
	{

		public bool isGift = false;

		public Text counter;
		public Text giftShow;
		public Text infoGift;

		private int giftValue;
		public int minGiftValue;
		public int maxGifValue;

		public GameObject objectGift;

		public AutoMoveAndRotate autoMoveAndRotate;

		public int scoreGift;
		public int scoreToWin = 5000;

		void Start()
		{
			if(!PlayerPrefs.HasKey("scoreGift"))
			{
				PlayerPrefs.SetInt("scoreGift", scoreToWin);
			}
			scoreGift = PlayerPrefs.GetInt("scoreGift");

			autoMoveAndRotate = objectGift.GetComponent<AutoMoveAndRotate>();
		}
		
		void Update() 
		{		
			if((scoreGift <= 0) && (!isGift))
			{
				infoGift.text = "Toque para abrir";
			}
			else if((scoreGift > 0) && (!isGift))
			{
				infoGift.text = "Jogue para desbloquear";
				counter.text = "Faltam " + scoreGift + " pontos";
			}
		}
	
		public void GetGift()
		{
			if((scoreGift <= 0) && (!isGift))
			{
				GiftValue();
				isGift = true;
				int coins = PlayerPrefs.GetInt("coinTotal");
				coins = coins + giftValue;
				PlayerPrefs.SetInt("coinTotal", coins);
				StartCoroutine(RotatingObject());
				StartCoroutine(autoMoveAndRotate.Scale());
			}
			else if(isGift)
			{
				Application.LoadLevel("MainMenu");
			}
		}

		public IEnumerator RotatingObject()
		{
			autoMoveAndRotate.rotateDegreesPerSecond.value.y = 500.0f;
			yield return new WaitForSeconds(1.5f);
			Destroy(objectGift);
			giftShow.text = giftValue.ToString() + " Moedas";
			PlayerPrefs.SetInt("scoreGift", scoreToWin);
			infoGift.text = "Toque para continuar";
		}

		public int GiftValue()
		{
			giftValue = Random.Range( minGiftValue, maxGifValue );
			return giftValue;
		}
	}
 }