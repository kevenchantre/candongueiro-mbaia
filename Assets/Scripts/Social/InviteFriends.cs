using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

public class InviteFriends : MonoBehaviour 
{

	public Button invite;

	void Start ()
	{
		if (!FacebookManager.Instance.LoggedIn) 
		{
			invite.interactable = false;
		}
		else
		{
			invite.interactable = true;
		}
	}

	public void SendInvite()
	{
		FacebookManager.Instance.SendInvitations("Junte-te a mim no Candongueiro: Mbaia!","Convide um amigo a jogar."); 
	}
}