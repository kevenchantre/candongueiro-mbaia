#pragma strict

import System.Collections.Generic;
import UnityEngine.UI;

var shopManager : ShopManager;

var efeitoItem : Text; //Texto que mostra os efeitos do acessorio
var precoItem : Text; //Texto do botao de compra e activaçao
var btComprar : GameObject;

var selectedProb : int;

var ProbsCollection = new List.<GameObject>(); //Lista de probs para o carro

var ProbsPosition = new List.<Transform>(); //Lista de posicoes para os probs do carro

var EfeitosCollection = new List.<String>(); //Lista de Efeitos

var PrecosCollection = new List.<int>(); //Lista de precos

var prob : GameObject;

var ownedProbName : String = ""; //Nome do prob selecionado
 
function Awake() 
{
	Begin();
}

function Start () 
{
	shopManager = GameObject.Find ("MainGameObject").GetComponent(ShopManager);
	PreSelected();
}

function Begin()
{
	efeitoItem.text = "";
	btComprar.SetActive(false);
}

function PreSelected()
{
	if (PlayerPrefs.HasKey("activeprob"))
	{
		var activeProb = PlayerPrefs.GetInt("activeprob");
		if(activeProb == 0)
		{
			InsertColuna();
		}
		else if(activeProb == 1)
		{
			InsertNitro();
		}
		else if(activeProb == 2)
		{
			InsertBandeira();
		}
		else if(activeProb == 3)
		{
			InsertBox();
		}
		precoItem.text = "Activado";
	}
}

function NoProb()
{
	Destroy(prob);
	PlayerPrefs.DeleteKey("activeprob");
	Begin();
}

function CleanProb()
{
	Destroy(prob);
	Begin();
}

function ProbManager()
{
	var ownedProb : int = PlayerPrefs.GetInt(ownedProbName);
	if((ownedProb == 0) || (ownedProb == null))
	{
		precoItem.text = "Comprar " + PrecosCollection[selectedProb];
	}
	else
	{
		if (PlayerPrefs.HasKey("activeprob"))
		{
			var activeProb = PlayerPrefs.GetInt("activeprob");
			if(activeProb == selectedProb)
			{
				precoItem.text = "Activado";
			}
			else
			{
				precoItem.text = "Activar";
			}
		}
		else
		{
			precoItem.text = "Activar";
		}
	}
}

function Comprar()
{
	var ownedProb : int = PlayerPrefs.GetInt(ownedProbName);
	if((ownedProb == 0) || (ownedProb == null))
	{
		var coin : int = PlayerPrefs.GetInt("coinTotal");
		if (coin  >= PrecosCollection[selectedProb])
		{
			PlayerPrefs.SetInt(ownedProbName, 1);
			coin = coin - PrecosCollection[selectedProb];
			PlayerPrefs.SetInt("coinTotal", coin);
			shopManager.UpdateCoin();
			ProbManager();
		}
	}
	else
	{
		ActivarProb();
	}
}

function ActivarProb()
{
	PlayerPrefs.SetInt("activeprob", selectedProb);
	precoItem.text = "Activado";
}

function InsertColuna()
{
	if(!GameObject.Find("ColunaSom"))
		{
			CleanProb();
			prob = Instantiate(ProbsCollection[0],ProbsPosition[0].position,ProbsPosition[0].rotation);
			prob.transform.parent = transform;
			ownedProbName = "ColunaSom";
			prob.name = ownedProbName;
			efeitoItem.text = EfeitosCollection[0];
			selectedProb = 0;
			ProbManager();
			btComprar.SetActive(true);
		}
}

function InsertNitro()
{
	if(!GameObject.Find("NitroProb"))
		{
			CleanProb();
			prob = Instantiate(ProbsCollection[1],ProbsPosition[1].position,ProbsPosition[1].rotation);
			prob.transform.parent = transform;
			ownedProbName = "NitroProb";
			prob.name = ownedProbName;
			efeitoItem.text = EfeitosCollection[1];
			selectedProb = 1;
			ProbManager();
			btComprar.SetActive(true);
		}
}

function InsertBandeira()
{
	if(!GameObject.Find("BandeiraProb"))
		{
			CleanProb();
			prob = Instantiate(ProbsCollection[2],ProbsPosition[2].position,ProbsPosition[2].rotation);
			prob.transform.parent = transform;
			ownedProbName = "BandeiraProb";
			prob.name = ownedProbName;
			efeitoItem.text = EfeitosCollection[2];
			selectedProb = 2;
			ProbManager();
			btComprar.SetActive(true);
		}
}

function InsertBox()
{
	if(!GameObject.Find("BoxProb"))
		{
			CleanProb();
			prob = Instantiate(ProbsCollection[3],ProbsPosition[3].position,ProbsPosition[3].rotation);
			prob.transform.parent = transform;
			ownedProbName = "BoxProb";
			prob.name = ownedProbName;
			efeitoItem.text = EfeitosCollection[3];
			selectedProb = 3;
			ProbManager();
			btComprar.SetActive(true);
		}
}
