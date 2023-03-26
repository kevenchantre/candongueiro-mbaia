#pragma strict

import System;
import System.Xml;
import System.Xml.Serialization;
import System.IO;

var AvisosFile : TextAsset;

var aviso : Text;

var sAviso = "";

//Variavel que recebe o numero aleatorio do aviso a ser mostrado
var RandomNum;

//Valor que guarda o numero de avisos que serao escolhidos
var maxAvisos : int = 0;

var xmlDoc : XmlDocument;

function Start ()
{
	ReadXml();
}

function ReadXml()
{
    xmlDoc = new XmlDocument();
    
	//Le o file XML
    xmlDoc.LoadXml ( AvisosFile.text );
    CountQuestions();
	ExecuteAviso();
}

function ExecuteAviso()
{
	RandomNum = Mathf.Round(UnityEngine.Random.Range(0,maxAvisos));
	sAviso = xmlDoc.GetElementsByTagName("aviso")[RandomNum].InnerText;
    aviso.text = sAviso;
}
 
 function CountQuestions()
 {
 	maxAvisos = xmlDoc.GetElementsByTagName( "aviso" ).Count;
 }