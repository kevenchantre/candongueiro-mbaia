#pragma strict

var multiplier : int = 0;
var velocidade : int = 0;
var score : int = 0;
var coin : int = 0;

var gameOver : GameOver;

function Start () 
{
	if((Application.loadedLevel != 3) || (Application.loadedLevel != 8))
	{
		Bonus();
	}
}

function Bonus() //Bonus de acordo ao acessorio usado pelo carro
{
	var activeProb = PlayerPrefs.GetInt("activeprob");
	
	if (!PlayerPrefs.HasKey("activeprob")) // Sem efeito
	{
		Debug.Log("Null");
	}
	else if(activeProb == 0) //Colunas de som. Aumenta multiplier
	{
		multiplier = 2;
	}
	else if(activeProb == 1) //Nitro. Aumenta velocidade
	{
		velocidade = 5;
	}
	else if(activeProb == 2) //Bandeira. Aumenta a pontuaçao em 7%
	{
		score = gameOver.score * 7 / 100;
	}
	else if(activeProb == 3) //Caixas. Aumenta o dinheiro colhido em 5%
	{
		coin = gameOver.coin * 5 / 100;
	}
}
