#pragma strict

import System.Collections.Generic;
import UnityEngine.UI;

var selectedProb : int;

var ProbsCollection = new List.<GameObject>(); //Lista de probs para o carro

var ProbsPosition = new List.<Transform>(); //Lista de posicoes para os probs do carro

var EfeitosCollection = new List.<String>(); //Lista de Efeitos

var prob : GameObject;

function Start () 
{
	InsertProb();
}

function InsertProb()
{
	if (PlayerPrefs.HasKey("activeprob"))
	{
		var activeProb = PlayerPrefs.GetInt("activeprob");
		prob = Instantiate(ProbsCollection[activeProb],ProbsPosition[activeProb].position,ProbsPosition[activeProb].rotation);
		prob.transform.parent = transform;
	}
}
