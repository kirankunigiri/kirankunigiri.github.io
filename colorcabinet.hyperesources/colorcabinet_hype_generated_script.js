//	HYPE.documents["colorcabinet"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="colorcabinet.hyperesources",c="colorcabinet",e="colorcabinet_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/colorcabinet_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"videoFull",source:"function(hypeDocument, element, event) {\t\n\tif (element.requestFullscreen) {\n\t\telement.requestFullscreen();\n    } else if (element.mozRequestFullScreen) {\n\t\telement.mozRequestFullScreen();\n\t} else if (element.webkitRequestFullscreen) {\n\t\telement.webkitRequestFullscreen();\n\t}\n\t\n}",identifier:"119"},{name:"switchVideoSource",source:"function(hypeDocument, element, event) {\t\n\tvar iphoneVideo = hypeDocument.getElementById('iphoneVideo')\n\tvar macVideo = hypeDocument.getElementById('macVideo')\n\tiphoneVideo.src = \"colorcabinet.hyperesources/\" + element.id + \"-ios.mov\";\n\tmacVideo.src =  \"colorcabinet.hyperesources/\" + element.id + \"-mac.mov\";\n\tiphoneVideo.pause();\n\tmacVideo.pause();\n\t\n\tvar iReady = false;\n\tvar macReady = false;\n\t\n\tvar iphoneFunction = function() {\n\t\tconsole.log(\"iphone ready\");\n\t\tiReady = true;\n\t\tiphoneVideo.pause();\n\t\tmacVideo.pause();\n\t\tiphoneVideo.removeEventListener('loadeddata', iphoneFunction);\n\t\tif (macReady) {\n\t    \tiphoneVideo.play();\n\t\t\tmacVideo.play();\n\t\t}\n\t}\n\t\n\tvar macFunction = function() {\n\tconsole.log(\"mac ready\");\n\t\tmacReady = true;\n\t\tmacVideo.removeEventListener('loadeddata', macFunction);\n\t\tiphoneVideo.pause();\n\t\tmacVideo.pause();\n\t\tif (iReady) {\n\t    \tiphoneVideo.play();\n\t\t\tmacVideo.play();\n\t\t}\n\t}\n\t\n\tvar iphoneListener = iphoneVideo.addEventListener('loadeddata', iphoneFunction, false);\n\tvar macListener = macVideo.addEventListener('loadeddata', macFunction, false);\n\t\n}",identifier:"179"},{name:"downloadMacApp",source:"function(hypeDocument, element, event) {\tconsole.log(hypeDocument.getElementById('downloadLink'));\n\tdownloadFile(\"colorcabinet.hyperesources/Color Cabinet.dmg\")\n}",identifier:"211"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{n:"organize-mac.mov",g:"208",t:"video/quicktime"},"12":{p:1,n:"favicon-32x32.png",g:"218",t:"@1x"},"21":{p:1,n:"organize-color.svg",g:"96",t:"image/svg+xml"},"4":{n:"format-ios.mov",g:"209",t:"video/quicktime"},"30":{p:1,n:"iosapp.svg",g:"62",t:"image/svg+xml"},"13":{p:1,n:"favicon.png",g:"219",o:true,t:"@1x"},"5":{n:"format-mac.mov",g:"210",t:"video/quicktime"},"22":{p:1,n:"format-color.svg",g:"100",t:"image/svg+xml"},"6":{n:"download.js"},"31":{p:1,n:"connect.svg",g:"102",t:"image/svg+xml"},"14":{n:"manifest.json"},"7":{p:1,n:"android-chrome-192x192.png",g:"214",t:"@1x"},"23":{p:1,n:"created-color.svg",g:"175",t:"image/svg+xml"},"40":{p:1,n:"macapp.svg",g:"57",t:"image/svg+xml"},"32":{p:1,n:"logo.svg",g:"9",t:"image/svg+xml"},"15":{p:1,n:"mstile-150x150.png",g:"220",t:"@1x"},"8":{p:1,n:"android-chrome-512x512.png",g:"215",t:"@1x"},"24":{n:"full-ios.mov",g:"204",t:"video/quicktime"},"9":{p:1,n:"apple-touch-icon.png",g:"216",t:"@1x"},"33":{n:"full-mac.mov",g:"203",t:"video/quicktime"},"16":{p:1,n:"safari-pinned-tab.svg",g:"221",t:"image/svg+xml"},"41":{n:"Color%20Cabinet.dmg"},"25":{p:1,n:"connect-color.svg",g:"104",t:"image/svg+xml"},"34":{p:1,n:"click.svg",g:"168",t:"image/svg+xml"},"17":{p:1,n:"format.svg",g:"189",t:"image/svg+xml"},"26":{p:1,n:"support.svg",g:"222",t:"image/svg+xml"},"35":{p:1,n:"sketchapp.svg",g:"60",t:"image/svg+xml"},"18":{p:1,n:"background.jpg",g:"7",t:"@1x"},"27":{p:1,n:"organize.svg",g:"190",t:"image/svg+xml"},"36":{p:1,n:"created.svg",g:"172",t:"image/svg+xml"},"19":{p:1,n:"support-color.svg",g:"224",t:"image/svg+xml"},"28":{p:1,n:"iPhone.svg",g:"70",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"37":{p:1,n:"wifi.svg",g:"159",t:"image/svg+xml"},"29":{p:1,n:"description.svg",g:"55",t:"image/svg+xml"},"-2":{n:"blank.gif"},"38":{p:1,n:"clipboard.svg",g:"163",t:"image/svg+xml"},"39":{p:1,n:"folder.svg",g:"161",t:"image/svg+xml"},"10":{n:"browserconfig.xml"},"0":{n:"connect-ios.mov",g:"205",t:"video/quicktime"},"1":{n:"connect-mac.mov",g:"206",t:"video/quicktime"},"11":{p:1,n:"favicon-16x16.png",g:"217",t:"@1x"},"2":{n:"organize-ios.mov",g:"207",t:"video/quicktime"},"20":{p:1,n:"macbook.svg",g:"68",t:"image/svg+xml"}},h,["<link href='https://fonts.googleapis.com/css?family=Lato:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Lato&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Home",o:"1",X:[0,1]}],[{o:"145",p:"600px",cA:false,a:100,Z:970,Y:320,c:"#FFFFFF",L:[],bY:1,d:50,U:{},T:{"141":{i:"141",n:"Organize",z:0,b:[],a:[],f:30},"144":{i:"144",n:"Organize Reverse",z:0,b:[],a:[],f:30},"140":{i:"140",n:"Format",z:0,b:[],a:[],f:30},"143":{i:"143",n:"Format Reverse",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"139":{i:"139",n:"Connect",z:0,b:[],a:[],f:30},"142":{i:"142",n:"Connect Reverse",z:0,b:[],a:[],f:30}},bZ:180,O:["268","274","259","269","271","270","264","261","275","258","262","278","276","267","277","260","272","266","265","263","273"],n:"iPhone","_":0,v:{"275":{h:"57",p:"no-repeat",x:"visible",a:35,q:"100% 100%",b:506,j:"absolute",dB:"button",aA:{a:[{p:5}]},k:"div",z:12,d:47,bS:87,c:250,aP:"pointer",r:"inline"},"267":{G:"#E8E8E8",aU:8,c:153,bS:18,aV:8,d:20,r:"inline",s:"Lato",t:16,Z:"break-word",v:"300",w:"Multiple color formats",j:"absolute",x:"visible",k:"div",y:"preserve",z:39,aS:8,aT:8,a:83,b:748},"259":{F:"center",bB:0,aU:8,G:"#F9F9F9",T:0,d:34,bC:0,bS:23,c:304,s:"Lato",aV:8,r:"inline",t:36,Z:"break-word",v:"300",w:"Color Cabinet",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",Q:0,z:9,aS:8,R:"#000000",E:0,S:0,a:0,bA:"#000000",aT:8,b:135},"271":{G:"#F9F9F9",bB:0,aU:8,c:278,bS:23,d:41,bC:0,aV:8,r:"inline",s:"Lato",X:0,t:20,Z:"break-word",v:"300",w:"Revolutionize the way you pick colors.",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:8,aS:8,E:0,aT:8,a:13,bA:"#000000",F:"center",b:190},"263":{G:"#E8E8E8",aU:8,c:193,bS:23,d:11,aV:8,r:"inline",s:"Lato",t:12,Z:"break-word",aP:"pointer",v:"300",w:"A product by Kiran Kunigiri",aA:{a:[{j:"http://kirankunigiri.com",p:5,k:false}]},x:"visible",j:"absolute",k:"div",y:"preserve",dB:"button",z:37,aS:8,aT:8,a:55,F:"center",b:911},"276":{G:"#E8E8E8",aU:8,c:199,bS:18,aV:8,d:11,r:"inline",s:"Lato",t:10,Z:"break-word",v:"300",w:"Connect with your mac to see colors update in real time and automatically copy them to your clipboard",j:"absolute",x:"visible",k:"div",y:"preserve",z:34,aS:8,aT:8,a:83,b:691},"268":{c:323,bS:18,d:444,I:"None",J:"None",K:"None",g:"#161616",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:-3,b:0},"272":{G:"#E8E8E8",aU:8,c:152,bS:18,aV:8,d:20,r:"inline",s:"Lato",t:16,Z:"break-word",v:"300",w:"Organize your cabinet<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:40,aS:8,aT:8,a:83,b:813},"264":{w:"",h:"7",p:"no-repeat",x:"visible",a:-387,q:"100% 100%",b:358,j:"absolute",bS:159,z:2,k:"div",c:1102,d:612,r:"inline",cQ:1,cR:1},"277":{h:"163",p:"no-repeat",x:"visible",a:42,q:"100% 100%",bS:18,j:"absolute",b:760,c:36,k:"div",z:43,d:37,r:"inline"},"269":{w:"",h:"55",p:"no-repeat",x:"visible",bS:18,q:"100% 100%",a:30,j:"absolute",b:154,z:11,k:"div",c:403,d:188,r:"none"},"260":{G:"#E8E8E8",aU:8,c:199,bS:18,aV:8,d:11,r:"inline",s:"Lato",t:10,Z:"break-word",v:"300",w:"Instantly get the color in hex, rgb, Swift code, and more!",j:"absolute",x:"visible",k:"div",y:"preserve",z:35,aS:8,aT:8,a:83,b:770},"273":{G:"#E8E8E8",aU:8,c:193,bS:23,d:11,aV:8,r:"inline",s:"Lato",t:12,Z:"break-word",aP:"pointer",v:"300",w:"Support",aA:{a:[{j:"http://kirankunigiri.com/colorcabinetsupport",p:5,k:false}]},x:"visible",j:"absolute",k:"div",y:"preserve",dB:"button",z:38,aS:8,aT:8,a:55,F:"center",b:930},"265":{G:"#E8E8E8",aU:8,c:199,bS:18,aV:8,d:11,r:"inline",s:"Lato",t:10,Z:"break-word",v:"300",w:"Save colors on the go, organize them however you want, and even export them to your computer!",j:"absolute",x:"visible",k:"div",y:"preserve",z:36,aS:8,aT:8,a:83,b:835},"278":{h:"159",p:"no-repeat",x:"visible",a:42,q:"100% 100%",bS:18,j:"absolute",b:682,c:36,k:"div",z:41,d:37,r:"inline"},"261":{h:"62",p:"no-repeat",x:"visible",a:35,dB:"button",b:444,q:"100% 100%",j:"absolute",aA:{a:[{j:"itms://itunes.apple.com/app/id1212104150",p:5,k:true}]},z:16,k:"div",d:47,bS:87,F:"left",aP:"pointer",cQ:1,c:250,r:"inline",cR:1},"274":{h:"9",p:"no-repeat",x:"visible",a:120,q:"100% 100%",bS:18,j:"absolute",b:50,c:80,k:"div",z:5,d:80,r:"inline"},"266":{h:"161",p:"no-repeat",x:"visible",a:42,q:"100% 100%",bS:18,j:"absolute",b:825,c:36,k:"div",z:42,d:37,r:"inline"},"258":{w:"",h:"60",p:"no-repeat",x:"visible",a:35,q:"100% 100%",b:568,j:"absolute",bS:87,aA:{a:[{p:5}]},k:"div",z:15,d:47,c:250,r:"inline",aP:"pointer"},"270":{G:"#F9F9F9",bB:0,aU:8,c:260,bS:23,d:138,bC:0,aV:8,r:"inline",s:"Lato",X:0,t:16,Y:18,Z:"break-word",v:"300",w:"It\u2019s pretty annoying that colors don\u2019t match on different devices. It\u2019s also annoying to use the mouse to pick colors every time too. Well, now you can use your Apple device with intuitive touch gestures to be precise and quick, and instantly use them on you mac.",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:6,aS:8,E:0,aT:8,a:22,bA:"#000000",F:"center",b:255},"262":{G:"#E8E8E8",aU:8,c:146,bS:18,aV:8,d:19,r:"inline",s:"Lato",t:16,Z:"break-word",v:"300",w:"Real time connection",j:"absolute",x:"visible",k:"div",y:"preserve",z:33,aS:8,aT:8,a:83,b:669}}},{o:"3",p:"600px",a:100,Y:1440,Z:900,b:100,cA:false,c:"#FFFFFF",L:[],bY:1,d:440,U:{},T:{"88":{i:"88",n:"Connect",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,r:true,s:0,o:"291"},{y:0.1,i:"e",s:1,z:0,o:"291",f:"c"}],f:30},"112":{i:"112",n:"Connect Reverse",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:0,s:0,o:"291"},{y:0.1,i:"e",s:0,z:0,o:"291",f:"c"}],f:30},"174":{i:"174",n:"Kiran Highlight",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"e",e:1,s:0,o:"293"},{y:0.07,i:"e",s:1,z:0,o:"293",f:"c"}],f:30},"226":{i:"226",n:"Support Highlight",z:0.07,b:[],a:[{f:"c",y:0,z:0.07,i:"e",e:1,s:0,o:"298"},{y:0.07,i:"e",s:1,z:0,o:"298",f:"c"}],f:30},"107":{i:"107",n:"Organize",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,r:true,s:0,o:"295"},{y:0.1,i:"e",s:1,z:0,o:"295",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:122.08,b:[],a:[{y:0,p:1,i:"Video Track",z:28.06,o:"292",f:"a"},{y:0,p:1,i:"Video Track",z:122.08,o:"282",f:"a"}],f:30},"113":{i:"113",n:"Format Reverse",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:0,s:0,o:"294"},{y:0.1,i:"e",s:0,z:0,o:"294",f:"c"}],f:30},"116":{i:"116",n:"Organize Reverse",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:0,s:0,o:"295"},{y:0.1,i:"e",s:0,z:0,o:"295",f:"c"}],f:30},"106":{i:"106",n:"Format",z:0.1,b:[],a:[{f:"c",y:0,z:0.1,i:"e",e:1,r:true,s:0,o:"294"},{y:0.1,i:"e",s:1,z:0,o:"294",f:"c"}],f:30}},bZ:180,O:["296","299","283","286","285","289","280","297","282","281","287","291","284","292","294","300","295","288","298","290","293","279"],n:"Main","_":1,v:{"296":{I:"None",x:"visible",a:0,i:"downloadLink",K:"None",j:"absolute",b:0,z:40,k:"div",L:"None",d:0,U:"iframe-downloadlink.html",c:0,J:"None",V:"0",W:""},"288":{h:"190",p:"no-repeat",x:"visible",a:981,q:"100% 100%",b:734,j:"absolute",cY:"0",z:23,k:"div",bS:82,d:90,c:390,cQ:1,aP:"auto",r:"inline",cR:1},"292":{c:175,bS:18,d:311,I:"None",r:"inline",J:"None",aO:"0",K:"None",g:"",L:"None",bE:"204",aP:"pointer",M:0,aH:"1",i:"iphoneVideo",N:0,aQ:"1",aA:{a:[{p:4,h:"119"}]},dA:"1",x:"visible",aR:"1",j:"absolute",O:0,dB:"button",z:39,k:"video",P:0,a:736,b:510},"284":{h:"102",p:"no-repeat",x:"visible",a:981,q:"100% 100%",b:466,j:"absolute",cY:"0",z:27,k:"div",bS:82,d:90,c:390,cQ:1,aP:"auto",r:"inline",cR:1},"297":{h:"68",p:"no-repeat",x:"visible",a:-10,q:"100% 100%",bS:18,j:"absolute",b:337,c:937,k:"div",z:33,d:579,r:"inline"},"289":{w:"",h:"57",p:"no-repeat",x:"visible",a:956,q:"100% 100%",b:165,j:"absolute",dB:"button",aA:{a:[{p:4,h:"211"}]},z:14,k:"div",d:80,bS:82,c:430,aP:"pointer",r:"inline"},"280":{h:"60",p:"no-repeat",x:"visible",bS:82,q:"100% 100%",b:270,a:956,j:"absolute",z:13,k:"div",dB:"button",d:80,c:430,r:"inline",aP:"auto"},"293":{aD:{a:[{b:"174",p:3,z:false,symbolOid:"2"}]},h:"175",x:"visible",a:1219,dB:"button",b:858,q:"100% 100%",j:"absolute",aA:{a:[{j:"http://kirankunigiri.com",p:5,k:true}]},z:30,k:"div",d:15,bS:18,p:"no-repeat",e:0,aP:"pointer",c:186,r:"inline",aC:{a:[{b:"174",p:3,z:true,symbolOid:"2"}]}},"285":{w:"",h:"62",p:"no-repeat",x:"visible",a:956,q:"100% 100%",b:60,j:"absolute",dB:"button",aA:{a:[{j:"http://itunes.apple.com/app/id1212104150",p:5,k:true}]},z:15,k:"div",d:80,bS:82,c:430,aP:"pointer",r:"inline"},"298":{aD:{a:[{b:"226",p:3,z:false,symbolOid:"2"}]},h:"224",x:"visible",a:1350,dB:"img",b:833,q:"100% 100%",j:"absolute",aA:{a:[{j:"http://kirankunigiri.com/colorcabinetsupport",p:5,k:false}]},z:32,k:"div",d:15,bS:18,p:"no-repeat",e:0,aP:"pointer",c:55,r:"inline",aC:{a:[{b:"226",p:3,z:true,symbolOid:"2"}]}},"281":{h:"168",p:"no-repeat",x:"visible",a:1022,q:"100% 100%",bS:82,j:"absolute",b:422,c:290,k:"div",z:18,d:14,r:"inline"},"300":{h:"189",p:"no-repeat",x:"visible",a:981,q:"100% 100%",b:611,j:"absolute",cY:"0",z:25,k:"div",bS:82,d:68,c:390,cQ:1,aP:"auto",r:"inline",cR:1},"294":{p:"no-repeat",c:390,q:"100% 100%",bS:82,d:68,r:"inline",cY:"0",cQ:1,e:0,cR:1,aP:"pointer",h:"100",i:"format",j:"absolute",x:"visible",aA:{a:[{b:"106",p:3,z:false,symbolOid:"2"},{b:"112",p:3,z:false,symbolOid:"2"},{b:"116",p:3,z:false,symbolOid:"2"},{p:4,h:"179"}]},k:"div",z:26,a:981,b:611},"286":{h:"55",p:"no-repeat",x:"visible",a:358,q:"100% 100%",bS:82,j:"absolute",b:60,c:497,k:"div",z:10,d:232,r:"inline"},"299":{h:"7",p:"no-repeat",x:"visible",bS:191,q:"100% 100%",a:0,j:"absolute",b:0,z:1,k:"div",c:1620,d:900,r:"inline",cQ:1,cR:1},"290":{h:"222",p:"no-repeat",x:"visible",a:1350,q:"100% 100%",b:833,j:"absolute",bS:18,z:31,k:"div",dB:"img",d:15,c:55,r:"inline"},"282":{dA:"1",aR:"1",x:"visible",bE:"203",a:127,b:380,dB:"button",j:"absolute",aA:{a:[{p:4,h:"119"}]},aO:"0",z:34,d:413,k:"video",bS:18,aP:"pointer",i:"macVideo",c:661,aQ:"1",aH:"1"},"295":{p:"no-repeat",c:390,q:"100% 100%",bS:82,d:90,r:"inline",cY:"0",cQ:1,e:0,cR:1,aP:"pointer",h:"96",i:"organize",w:"",j:"absolute",x:"visible",aA:{a:[{b:"107",p:3,z:false,symbolOid:"2"},{b:"112",p:3,z:false,symbolOid:"2"},{b:"113",p:3,z:false,symbolOid:"2"},{p:4,h:"179"}]},k:"div",z:24,a:981,b:734},"287":{h:"70",p:"no-repeat",x:"visible",a:683,q:"100% 100%",bS:18,j:"absolute",b:455,c:282,k:"div",z:35,d:461,r:"inline"},"279":{h:"172",p:"no-repeat",x:"visible",bS:18,q:"100% 100%",a:1219,j:"absolute",b:858,z:29,k:"div",c:186,d:15,r:"inline",aP:"auto"},"291":{p:"no-repeat",c:390,q:"100% 100%",bS:82,d:90,r:"inline",cY:"0",cQ:1,e:0,cR:1,aP:"pointer",h:"104",i:"connect",j:"absolute",x:"visible",aA:{a:[{b:"88",p:3,z:false,symbolOid:"2"},{b:"113",p:3,z:false,symbolOid:"2"},{b:"116",p:3,z:false,symbolOid:"2"},{p:4,h:"179"}]},k:"div",z:28,a:981,b:466},"283":{h:"9",p:"no-repeat",x:"visible",a:120,q:"100% 100%",bS:18,j:"absolute",b:60,c:220,k:"div",z:4,d:220,r:"inline"}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
