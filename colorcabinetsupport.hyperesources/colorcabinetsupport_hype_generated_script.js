//	HYPE.documents["colorcabinetsupport"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="colorcabinetsupport.hyperesources",c="colorcabinetsupport",e="colorcabinetsupport_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/colorcabinetsupport_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"videoFull",source:"function(hypeDocument, element, event) {\t\n\tif (element.requestFullscreen) {\n\t\telement.requestFullscreen();\n    } else if (element.mozRequestFullScreen) {\n\t\telement.mozRequestFullScreen();\n\t} else if (element.webkitRequestFullscreen) {\n\t\telement.webkitRequestFullscreen();\n\t}\n\t\n}",identifier:"119"},{name:"switchVideoSource",source:"function(hypeDocument, element, event) {\t\n\tvar iphoneVideo = hypeDocument.getElementById('iphoneVideo')\n\tvar macVideo = hypeDocument.getElementById('macVideo')\n\tiphoneVideo.src = \"colorcabinetsupport.hyperesources/\" + element.id + \"-ios.mov\";\n\tmacVideo.src =  \"colorcabinetsupport.hyperesources/\" + element.id + \"-mac.mov\";\n\tiphoneVideo.pause();\n\tmacVideo.pause();\n\t\n\tvar iReady = false;\n\tvar macReady = false;\n\t\n\tvar iphoneFunction = function() {\n\t\tconsole.log(\"iphone ready\");\n\t\tiReady = true;\n\t\tiphoneVideo.pause();\n\t\tmacVideo.pause();\n\t\tiphoneVideo.removeEventListener('loadeddata', iphoneFunction);\n\t\tif (macReady) {\n\t    \tiphoneVideo.play();\n\t\t\tmacVideo.play();\n\t\t}\n\t}\n\t\n\tvar macFunction = function() {\n\tconsole.log(\"mac ready\");\n\t\tmacReady = true;\n\t\tmacVideo.removeEventListener('loadeddata', macFunction);\n\t\tiphoneVideo.pause();\n\t\tmacVideo.pause();\n\t\tif (iReady) {\n\t    \tiphoneVideo.play();\n\t\t\tmacVideo.play();\n\t\t}\n\t}\n\t\n\tvar iphoneListener = iphoneVideo.addEventListener('loadeddata', iphoneFunction, false);\n\tvar macListener = macVideo.addEventListener('loadeddata', macFunction, false);\n\t\n}",identifier:"179"},{name:"downloadMacApp",source:"function(hypeDocument, element, event) {\tconsole.log(hypeDocument.getElementById('downloadLink'));\n\tdownloadFile(\"colorcabinetsupport.hyperesources/Color Cabinet.dmg\")\n}",identifier:"211"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"-2":{n:"blank.gif"},"18":{p:1,n:"supportButton.svg",g:"247",t:"image/svg+xml"},"10":{n:"browserconfig.xml"},"19":{p:1,n:"supportReturn.svg",g:"243",t:"image/svg+xml"},"11":{p:1,n:"favicon-16x16.png",g:"217",t:"@1x"},"0":{n:"connect-ios.mov",g:"205",t:"video/quicktime"},"12":{p:1,n:"favicon-32x32.png",g:"218",t:"@1x"},"1":{n:"connect-mac.mov",g:"206",t:"video/quicktime"},"20":{p:1,n:"supportPage.svg",g:"245",t:"image/svg+xml"},"2":{n:"organize-ios.mov",g:"207",t:"video/quicktime"},"13":{p:1,n:"favicon.png",g:"219",o:true,t:"@1x"},"3":{n:"organize-mac.mov",g:"208",t:"video/quicktime"},"14":{n:"manifest.json"},"4":{n:"format-ios.mov",g:"209",t:"video/quicktime"},"5":{n:"format-mac.mov",g:"210",t:"video/quicktime"},"15":{p:1,n:"mstile-150x150.png",g:"220",t:"@1x"},"6":{n:"download.js"},"16":{p:1,n:"safari-pinned-tab.svg",g:"221",t:"image/svg+xml"},"7":{p:1,n:"android-chrome-192x192.png",g:"214",t:"@1x"},"-1":{n:"PIE.htc"},"8":{p:1,n:"android-chrome-512x512.png",g:"215",t:"@1x"},"17":{n:"Color%20Cabinet.dmg"},"9":{p:1,n:"apple-touch-icon.png",g:"216",t:"@1x"}},h,["<link href='https://fonts.googleapis.com/css?family=Lato:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Lato&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Support",o:"238",X:[0,1]}],[{o:"251",p:"600px",cA:false,Y:320,Z:970,L:[],c:"#202020",bY:1,d:50,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["260","259","261","258"],n:"iPhone","_":0,v:{"258":{aU:8,bB:0,G:"#F9F9F9",c:252,bS:23,d:17,bC:0,aV:8,r:"inline",s:"Lato",X:0,t:14,Z:"break-word",aP:"pointer",v:"300",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; text-align: center; color: rgb(236, 236, 236);\"><span style=\"font-kerning: none\">Back to the home page</span></p>",aA:{a:[{j:"http://kirankunigiri.com/colorcabinet",p:5,k:false}]},x:"visible",aZ:0,j:"absolute",y:"preserve",k:"div",dB:"button",z:3,aS:8,E:0,aT:8,a:26,bA:"#000000",F:"center",b:524},"260":{F:"center",bB:0,aU:8,G:"#F9F9F9",T:0,d:89,bC:0,bS:23,c:304,s:"Lato",aV:8,r:"inline",t:34,Z:"break-word",v:"300",w:"Color Cabinet<br>Support<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",Q:0,z:4,aS:8,R:"#000000",E:0,S:0,a:0,bA:"#000000",aT:8,b:118},"259":{G:"#F9F9F9",bB:0,aU:8,c:252,bS:23,d:84,bC:0,aV:8,r:"inline",s:"Lato",X:0,t:18,Z:"break-word",v:"300",w:"<p style=\"margin-top: 0px; margin-bottom: 0px; text-align: center; color: rgb(236, 236, 236);\"><span style=\"font-kerning: none\">You can contact us if you have any feedback, want to report a bug, or have questions about the app.</span></p>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,E:0,aT:8,a:26,bA:"#000000",F:"center",b:239},"261":{h:"247",p:"no-repeat",x:"visible",a:53,q:"100% 100%",b:387,j:"absolute",dB:"img",aA:{a:[{j:"mailto:kirankunigiri@gmail.com",p:5,k:false}]},k:"div",z:1,d:38,bS:18,c:213,aP:"pointer",r:"inline"}}},{o:"242",p:"600px",a:100,Y:1440,Z:900,b:100,cA:false,c:"#202020",L:[],bY:1,d:440,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["264","263","265","262"],n:"Main","_":1,v:{"263":{x:"visible",bS:18,a:439,b:336,j:"absolute",dB:"button",aA:{a:[{j:"mailto:kirankunigiri@gmail.com",p:5,k:false}]},k:"div",z:2,d:227,c:561,aP:"pointer"},"264":{h:"245",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bS:18,z:1,k:"div",dB:"img",d:119,bF:"263",c:561,r:"inline"},"265":{h:"247",p:"no-repeat",x:"visible",a:102,q:"100% 100%",b:161,j:"absolute",bS:18,z:2,k:"div",dB:"img",d:66,bF:"263",c:370,r:"inline"},"262":{h:"243",p:"no-repeat",x:"visible",a:610,q:"100% 100%",b:843,j:"absolute",dB:"img",aA:{a:[{j:"http://kirankunigiri.com/colorcabinet",p:5,k:false}]},k:"div",z:1,d:21,bS:18,c:220,aP:"pointer",r:"inline"}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
