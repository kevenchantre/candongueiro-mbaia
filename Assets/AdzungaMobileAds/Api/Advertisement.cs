// Copyright (C) 2016 Adzunga

using UnityEngine;

namespace AdzungaMobileAds.Advertisements
{
    public class Advertisements
    {
        public static bool isSupported
        {
            get
            {
                return
                Application.isEditor
                || Application.platform == RuntimePlatform.IPhonePlayer
                || Application.platform == RuntimePlatform.Android;
            }
        }

        public static bool isInitialized
        {
            get
            {
#if UNITY_ANDROID || UNITY_IOS || UNITY_EDITOR
                return AdzungaAds.isInitialized;
#else
                return false;
#endif
            }
        }

        public static bool isReady
        {
            get
            {
                return Advertisements.isReady;
            }
        }

       /* public static bool isShowing
        {
            get
            {
                return Advertisement.isShowing;
            }
        }*/
    }
}
