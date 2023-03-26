Shader "Custom/CurveShader" 
{
	Properties 
{
    _MainTex ("Base (RGB)", 2D) = "white" {}
    _QOffset ("Offset", Vector) = (20,-20,20,0)
    _Dist ("Distance", Float) = 200.0
}
SubShader 
{
    Tags { "RenderType"="Opaque" }
    LOD 150
    Lighting Off
    AlphaTest Greater 0.5
 
    CGPROGRAM
    #pragma exclude_renderers flash
    //#pragma surface surf Lambert noforwardadd vertex:vert
    #pragma surface surf NoLighting noforwardadd vertex:vert
    sampler2D _MainTex;
    float4 _QOffset;
    float _Dist;
   
    struct Input 
    {
        float2 uv_MainTex;
    };
   
    void vert (inout appdata_full v) 
    {
        // Get the view space vertex position
        float4 vertex_view = mul(UNITY_MATRIX_MV, v.vertex);
        // Calculate the offset in view space
        float zOff = vertex_view.z / _Dist;
        // Convert the offset back to object space and add it to vertex
       // v.vertex.xyz += mul(UNITY_MATRIX_IT_MV, _QOffset*zOff*zOff).xyz;
        v.vertex.xyz += mul(_QOffset*zOff*zOff, UNITY_MATRIX_IT_MV).xyz;
    }
   
    void surf (Input IN, inout SurfaceOutput o) 
    {
        fixed4 c = tex2D(_MainTex, IN.uv_MainTex);
        o.Albedo = c.rgb;
        o.Alpha = c.a;
    }
    
    fixed4 LightingNoLighting(SurfaceOutput s, fixed3 lightDir, fixed atten)
     {
         fixed4 c;
         c.rgb = s.Albedo; 
         c.a = s.Alpha;
         return c;
     }
   
    ENDCG
}
 
Fallback "Unlit/Texture"
}