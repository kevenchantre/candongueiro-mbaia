// Copyright (C) 2016 Adzunga

using UnityEngine;
using System.Collections;
using AdzungaMobileAds.Common;
using AdzungaMobileAds.Advertisements;
using AdzungaMobileAds.Advertisements.MiniJSON;

namespace AdzungaMobileAds.Advertisements
{
    public class Advertisement : MonoBehaviour
    {
        //public static bool isInitialized; //
        public static bool isReady; //If advertising is ready
        private static Texture2D texture;
        private static string clickUrl;
        private static WWW request;
        private static AdzungaAds adzungaAds = new AdzungaAds();

        //------------------------------------------------------------------------

        public static void Initialize(string gameId, bool enableTestMode, MonoBehaviour instance)
        {

            adzungaAds.Init(gameId, enableTestMode);

            string url = "http://adzunga.us-west-2.elasticbeanstalk.com/mobile/ads/?gameId=" + WWW.EscapeURL(gameId)
            + "&deviceModel=" + WWW.EscapeURL(DeviceInfo.deviceModel)
            + "&deviceName=" + WWW.EscapeURL(DeviceInfo.deviceName)
            + "&deviceType=" + WWW.EscapeURL(DeviceInfo.deviceType.ToString())
            + "&deviceUniqueIdentifier=" + WWW.EscapeURL(DeviceInfo.deviceUniqueIdentifier)
            + "&operatingSystem=" + WWW.EscapeURL(DeviceInfo.operatingSystem)
            + "&unityVersion=" + WWW.EscapeURL(Utils.unityVersion)
            + "&testMode=" + WWW.EscapeURL(enableTestMode.ToString());

            Utils.LogInfo(url);

            instance.StartCoroutine(waitForAd(url));
        }

        //------------------------------------------------------------------------

        private static IEnumerator waitForAdRequest(string url)
        {
            request = new WWW(url);
            yield return request;

            // check for errors
            if (request.error == null)
            {
                Utils.LogInfo("Initialised");
                AdzungaAds.isInitialized = true;
            }
            else
            {
                Utils.LogError("WWW Error: " + request.error);
            }
        }
        private static IEnumerator waitForAd(string url)
        {
            IEnumerator e = waitForAdRequest(url);
            while (e.MoveNext()) { yield return e.Current; }
            //SerializeData data = JsonUtility.FromJson<SerializeData>(request.text);
            IDictionary data = (IDictionary)Json.Deserialize(request.text);
            WWW www = new WWW(data["ad_visual_url"].ToString());
            yield return www;

            // check for errors
            if (www.error == null)
            {
                texture = www.texture;
                clickUrl = data["ad_web"].ToString();
                isReady = true;
                Utils.LogInfo("Is Ready ");
            }
        }

        //------------------------------------------------------------------------

        private static string info = "Info";
        private static Rect adPosition = new Rect(0, 0, Screen.width, Screen.height);
        private static Rect leftPosition = new Rect(0, 0, 50, 30);
        private static Rect rightPosition = new Rect(Screen.width - 50, 0, 50, 30);
        public static void Show()
        {
            if (GUI.Button(rightPosition, info))
            {
                Utils.LogInfo("You clicked the info button");
                info = "Adzunga Ads";
                rightPosition = new Rect(Screen.width - 100, 0, 100, 30);
            }
            if (GUI.Button(leftPosition, "X"))
            {
                isReady = false;
                Utils.LogInfo("You closed the ad");
            }

            GUI.DrawTexture(adPosition, texture, ScaleMode.ScaleToFit, true, 0.0F);
            if (GUI.Button(adPosition, "", new GUIStyle()))
            {
                Utils.LogInfo("Clicked on Ad");
                Application.OpenURL(clickUrl);
                isReady = false;
            }
        }
        
        //------------------------------------------------------------------------

        void Update()
        {
            if (Input.GetKeyDown(KeyCode.Escape) && isReady == true)
            {
                Debug.Log("AAAAAA");
            }
        }

        //------------------------------------------------------------------------
    }

    // [System.Serializable]
    class SerializeData
    {
        public string ad_web;
        public string ad_visual_url;
    }
}

