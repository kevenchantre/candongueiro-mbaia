// Copyright (C) 2016 Adzunga

/*using UnityEngine;
using System.Collections;
using AdzungaMobileAds.Advertisements;
using AdzungaMobileAds.Common;

public class ShowAd : MonoBehaviour
{
    [SerializeField] string iosGameId;
    [SerializeField] string androidGameId;
    [SerializeField] string webGameId;
    [SerializeField] bool enableTestMode;

    IEnumerator Start()
    {
        string gameId = null;
        #if UNITY_EDITOR // If running in editor...
        gameId = "00000";
        #elif UNITY_IOS // If build platform is set to iOS...
        gameId = iosGameId;
        #elif UNITY_ANDROID // Else if build platform is set to Android...
        gameId = androidGameId;
        #endif

        if (Advertisement.isInitialized)
        {
            Utils.LogInfo("Platform supported");
            Advertisement.Initialize(gameId, enableTestMode, this); //Initialize Advertisement
        }
        else
        {
            Utils.LogInfo("Platform not supported");
        }

        if (!Advertisement.isInitialized)
        {
            Utils.LogInfo("Still not Initialized");
            yield return new WaitForSeconds(0.5f);
        }
    }

    private void HandleShowResult()
    {
        
    }

    void OnGUI()
    {
        if(Advertisement.isReady)
        {
            Advertisement.Show();
        }
    }
}*/


