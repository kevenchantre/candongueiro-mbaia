Shader "Custom/CurveParticle" 
{
	Properties 
{
   	_TintColor ("Tint Color", Color) = (0.5,0.5,0.5,0.5)
	_MainTex ("Particle Texture", 2D) = "white" {}
    //_QOffset ("Offset", Vector) = (20,-20,20,0)
    _Dist ("Distance", Float) = 200.0
}

Category 
{
    Tags 
	{
	 	"Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" 
	}
   Blend SrcAlpha One
	AlphaTest Greater .01
	ColorMask RGB
	Cull Back Lighting Off ZWrite Off Fog { Mode Off }
	BindChannels 
	{
		Bind "Color", color
		Bind "Vertex", vertex
		Bind "TexCoord", texcoord
	}
	
	SubShader 
	{
		Pass 
		{
			SetTexture [_MainTex] 
			{
				constantColor [_TintColor]
				combine constant * primary
			}
			SetTexture [_MainTex] 
			{
				combine texture * previous DOUBLE
			}
			
		}
		
	}
	
	SubShader 
		{
    	CGPROGRAM
    	#pragma surface surf Lambert noforwardadd vertex:vert
    	sampler2D _MainTex;
    	float4 _QOffset;
    	float _Dist;
   
    	struct Input 
    	{
        	float2 uv_MainTex;
    	};
   
    	void vert (inout appdata_full v) 
    	{
        	//Get the view space vertex position
        	float4 vertex_view = mul(UNITY_MATRIX_MV, v.vertex);
        	//Calculate the offset in view space
        	float zOff = vertex_view.z / _Dist;
        	//Convert the offset back to object space and add it to vertex
        	v.vertex.xyz += mul(_QOffset*zOff*zOff, UNITY_MATRIX_IT_MV).xyz;
    	}
   
    	 void surf (Input IN, inout SurfaceOutput o) 
    {
        fixed4 c = tex2D(_MainTex, IN.uv_MainTex);
        o.Albedo = c.rgb;
        o.Alpha = c.a;
    }
    	ENDCG
	}	
}
}