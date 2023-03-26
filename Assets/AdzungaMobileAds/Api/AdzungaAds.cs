// Copyright (C) 2016 Adzunga

using UnityEngine;
using System.Collections;
using AdzungaMobileAds.Common;

namespace AdzungaMobileAds.Advertisements
{
    public class AdzungaAds
    {
        public const string version = "0.0.5";
        private static bool initCalled = false;
        public static bool isShowing = false;
        public static bool isInitialized = false;

        public void Init(string gameId, bool enableTestMode)
        {
            if (initCalled) return;
            initCalled = true;

            try
            {
                if (Application.internetReachability == NetworkReachability.NotReachable)
                {
                    Utils.LogError("Internet not reachable, can't initialize ads");
                    return;
                }
                else
                {
                    Utils.LogInfo("Internet connectivity");
                    isInitialized = true;
                }
            }
            catch (System.Exception e)
            {
                Utils.LogDebug("Exception during connectivity check: " + e.Message);
            }
        }
    }
}
