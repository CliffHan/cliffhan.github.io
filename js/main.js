// "use strict";
//
// window.onload = function(){
//   // console.log('window.onload');
//
//   var indexView = document.getElementById("index-view");
//   if (!indexView)
//     return;
//
//   var xhrBing = new XMLHttpRequest();
//   if (null != xhrBing) {
//     xhrBing.onreadystatechange = function() {
//       // console.log('xhrBing.readyState = '+xhrBing.readyState);
//       // console.log('xhrBing.status = '+xhrBing.status);
//       // console.log('xhrBing.statusText = '+xhrBing.statusText);
//       // console.log('xhrBing.responseText = '+xhrBing.responseText);
//       if ((4 == xhrBing.readyState)&&(200 == xhrBing.status)) {
//         var xhrBingObj = JSON.parse(xhrBing.responseText);
//         var bingImageSrc = 'https://www.bing.com' + xhrBingObj.images[0].url;
//         // console.log("bingImageSrc="+bingImageSrc);
//         indexView.style.background = "url(\""+bingImageSrc+"\")no-repeat center center fixed";
//       }
//     };
//     xhrBing.open("GET", 'http://phpapi.clifftop.win/bingajaxproxy.php', true);
//     xhrBing.send(null);
//   }
// };
