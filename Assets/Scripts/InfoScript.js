#pragma strict

var numInfo = 0;
var info : Text;

function Info()
{
	if(numInfo == 1)
	{
		info.text = "Desliza o dedo sobre o ecrã para te desviares dos obstáculos";
		yield WaitForSeconds(5);
		ResetInfo();
	}
	else if (numInfo == 2)
	{
		info.text = "Encontrarás vários poderes enquanto jogas. Apanha-os e vê o que cada um faz";
		yield WaitForSeconds(5);
		info.text = "Esse é o Super Mbaia. Para super-velocidade";
		yield WaitForSeconds(5);
		ResetInfo();
	}
	else if (numInfo == 3)
	{
		PlayerPrefs.SetInt("abrandatudo",3); 
		info.text = "Toque rapidamente duas vezes no ecrã para abrandar o tempo";
		yield WaitForSeconds(5);
		info.text = "Será de grande ajuda em manobras difíceis";
		yield WaitForSeconds(5);
		ResetInfo();
	}
	else if (numInfo == 4)
	{
		info.text = "Bem, boa sorte. O tutorial termina aqui. Agora estás por tua conta.";
		PlayerPrefs.SetInt("tutorial",1);
		yield WaitForSeconds(5);
		ResetInfo();
	}
}

function ResetInfo()
{
	info.text = " ";
}