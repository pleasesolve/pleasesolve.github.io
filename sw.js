if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8b4b545e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/css/just-the-docs-dark.css",revision:"b31cde5410296e2d9078f19611ee183f"},{url:"assets/css/just-the-docs-default.css",revision:"b1179667e9e305db593d392913fc6d2e"},{url:"assets/css/just-the-docs-light.css",revision:"b1179667e9e305db593d392913fc6d2e"},{url:"assets/images/ch1/py_1_files/2020-07-01-1python-freq-diag-mean-std_3_0.png",revision:"e9229c131f1f026c66dc6dc1f302f5d0"},{url:"assets/images/ch1/py_1_files/2020-07-01-1python-freq-diag-mean-std_5_2.png",revision:"03ce682d01a74572f5db810ee57de14a"},{url:"assets/images/ch1/py_1_files/2020-07-01-1python-freq-diag-mean-std_6_2.png",revision:"8be7a8c49ddad5f98ce657fd64f6aa41"},{url:"assets/images/ch1/R_1_files/R_1_2_0.png",revision:"8c1b11851ed43c6ea51b397536ec0274"},{url:"assets/images/ch1/R_1_files/R_1_3_0.png",revision:"e98029e62e1a1d1a353c90bd0b558101"},{url:"assets/images/ch1/R_1_files/R_1_4_0.png",revision:"04f3ac80a6769aa1d035d5759e5167cd"},{url:"assets/images/datavis/1.gif",revision:"3d2b210d0f313f748afa691fffd59959"},{url:"assets/images/just-the-docs.png",revision:"1dab3fa620026cbf32687c1bb04c7551"},{url:"assets/images/phy/11/ch1/1_both.png",revision:"0cfe5c7f7cec547e1cbed1af91ec6f4e"},{url:"assets/images/phy/11/ch1/2_both.png",revision:"716ce2616cc99d06903b640a7e3a01c9"},{url:"assets/images/phy/11/ch1/3_both.png",revision:"3dfbc25177243bf61a28398e7f1747b3"},{url:"assets/images/phy/11/ch1/4_both.png",revision:"5b40bfb774ad48cc79aca8346b4f92aa"},{url:"assets/images/phy/11/ch1/5_both.png",revision:"bd0fbb14b968806616506fde85fad228"},{url:"assets/images/phy/12/ch1/1_both.png",revision:"648233dd355cf9e87cf5721598333787"},{url:"assets/images/phy/12/ch1/10_both_1.png",revision:"ecfd0c5060cba804b2c6a7ff9318d243"},{url:"assets/images/phy/12/ch1/10_both.png",revision:"e1c45aa2c52928b83a0974cf08faabec"},{url:"assets/images/phy/12/ch1/11_both_1.png",revision:"e4ed41479042f8fca8fd5250d55bc75e"},{url:"assets/images/phy/12/ch1/11_both_2.png",revision:"1b4ade1f108e068cfd41439a543559a0"},{url:"assets/images/phy/12/ch1/11_both.png",revision:"b6dc8ffb7bd83edbf5e60d97bc24b733"},{url:"assets/images/phy/12/ch1/2_both.png",revision:"9987f70c1a0ee3fe5d727990262a698b"},{url:"assets/images/phy/12/ch1/3_both_2.png",revision:"7068a4768825d9e14627e9ed2000f8d2"},{url:"assets/images/phy/12/ch1/3_both.png",revision:"c905f737b16e4ebb1194e8684b4297cd"},{url:"assets/images/phy/12/ch1/4_both.png",revision:"05813952c75a8b5e8ad0dfb7d07ea43a"},{url:"assets/images/phy/12/ch1/5_both_1.png",revision:"a76d25d0f292d58b6b4100bd1b059219"},{url:"assets/images/phy/12/ch1/5_both_2.png",revision:"bcb61acdf6e36516ba836ffeba0a3ab7"},{url:"assets/images/phy/12/ch1/5_both_3.png",revision:"e395a39e098b91bc3a32b7b57aaf96f8"},{url:"assets/images/phy/12/ch1/5_both.png",revision:"ff3226ea512b47b33ed1051fea5070c7"},{url:"assets/images/phy/12/ch1/6_both_1.png",revision:"82f6f68eba9a054175b0afe850f866b7"},{url:"assets/images/phy/12/ch1/6_both.png",revision:"1d95d4652466d806524fd31b1bca6456"},{url:"assets/images/phy/12/ch1/7_both_1.png",revision:"7528f1893ed87480606a30df63c33b6d"},{url:"assets/images/phy/12/ch1/7_both.png",revision:"9504fa7d054ffa7ac3247eebc80f147b"},{url:"assets/images/phy/12/ch1/8_both_1.png",revision:"2bb24113b13066fceb17ee338381c2d0"},{url:"assets/images/phy/12/ch1/8_both_2.png",revision:"9e01b8ab2dd55608795250921fc7910d"},{url:"assets/images/phy/12/ch1/8_both.png",revision:"aa9e8b97811d17b17af18458a4288e10"},{url:"assets/images/phy/12/ch1/9_both_1.png",revision:"77aec5fc49e6ac493585576f252cdde2"},{url:"assets/images/phy/12/ch1/9_both.png",revision:"5b3446b16e0b6af0a30b770dc5149f68"},{url:"assets/images/please_solve3.gif",revision:"73eafa9d834cf05c0a8912a85d843769"},{url:"assets/images/search.svg",revision:"0265707cf348e44eb5d0d935ea34176a"},{url:"assets/images/stats/ch1/qn.png",revision:"7c335d93092215e4e25c6cb434b7da95"},{url:"assets/images/thinking2.png",revision:"16d7a4947ecfc49355a055aa01695dee"},{url:"assets/images/thinking3.png",revision:"c1091c1cbcdbbcc5e5879f0276febf2c"},{url:"assets/js/just-the-docs.js",revision:"e2148d73433a94bf0aa70a615d8cd8a1"},{url:"assets/js/main.js",revision:"41cceb1a477badbf2997118f7125987f"},{url:"assets/js/search-data.json",revision:"3288f2f12511639b0e86cf6b7b60abcb"},{url:"assets/js/vendor/lunr.min.js",revision:"a11f1b9f94b088babdc9efa11c4daf59"},{url:"datavis/hist.html",revision:"97a0d09d954ce849a4a4708f1d4220ef"},{url:"datavisual.html",revision:"99260333d46ac8dd9f21fb14cf202c40"},{url:"feed.xml",revision:"54464624f4d5c5692e4643946cdbf04c"},{url:"index.html",revision:"696581e61db6d7e7f7def3010536cd3d"},{url:"manifest.json",revision:"8e19bf8cd6552ca9e0314793ca0e2da5"},{url:"physics.html",revision:"2e2c07afdcee188838c1789da4597d8e"},{url:"physics/11th.html",revision:"b3921934145091ba81906917274bfe28"},{url:"physics/11th/measurements.html",revision:"0b76aa9712c9a76f455ca0c5da29d33c"},{url:"physics/12th.html",revision:"10c28d7e6a1e0ff4d5aad166a6196949"},{url:"physics/12th/electrostatics.html",revision:"cd0067dc340b803b2e5a576e62d68967"},{url:"python-r/index.html",revision:"e958ba303bade3e6291a5feb0db72611"},{url:"pythonr/1_creating_obj/1_creating_obj.html",revision:"452ed27b295afda63a90c173670468d5"},{url:"redirects.json",revision:"99914b932bd37a50b983c5e7c90ae93b"},{url:"robots.txt",revision:"45fa963a5e67c6a3ef67c8ffa71b2b88"},{url:"sitemap.xml",revision:"e2dbdf59f4c0d3126d93f749dbc58d68"},{url:"statistics.html",revision:"38f1e7b7966bf61ad09ce14173d41dbd"},{url:"statistics/ch1/ch1-1.html",revision:"087b4de4f82a1539213b1c80289518e0"},{url:"statistics/ch1/ch1.html",revision:"9263fb6bf6254baba3e410c7f30dc88d"}],{})}));
//# sourceMappingURL=sw.js.map
