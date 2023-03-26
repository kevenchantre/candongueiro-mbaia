// Copyright (C) 2016 Adzunga

using UnityEngine;
using System.Collections;

namespace AdzungaMobileAds.Common
{
		internal class DeviceInfo
		{
			public static string deviceModel
            {
                get
                {
                    return SystemInfo.deviceModel;
                }
            }
			public static string deviceName
            {
                get
                {
                    return SystemInfo.deviceName;
                }
            }
			public static DeviceType deviceType
            {
                get
                {
                    return SystemInfo.deviceType;
                }
            }
			public static string deviceUniqueIdentifier
            {
                get
                {
                    return SystemInfo.deviceUniqueIdentifier;
                }
            }
			public static string operatingSystem
            {
                get
                {
                    return SystemInfo.operatingSystem;
                }
            }
			public static bool supportsLocationService
            {
                get
                {
                    return SystemInfo.supportsLocationService;
                }
            }
		}
}


