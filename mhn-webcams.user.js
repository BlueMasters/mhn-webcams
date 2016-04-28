// ==UserScript==
// @author      Damien Goetschi / BlueMasters
// @date        28.04.2016
// @name        MHN-Webcams
// @namespace   tag:damieng002@gmail.com,2015:MHN-Webcams
// @include     http://appl.fr.ch/mhn_livecam/frame/livecam_*.htm
// @version     1
// @grant       none
// @require     https://code.jquery.com/jquery-2.2.3.min.js
// ==/UserScript==
window.stop();
webcamSrc=$(".video").children().attr('src');

newpage=`<head>
           <link rel="stylesheet" type="text/css" href="style_flex.css?reload">
         </head>
         <body>
           <div id="video">
             <table border="0" cellpadding="0" cellspacing="0" >
               <tr>
                 <td class="top_left_corner"></td>
                 <td class="top_middle"></td>
                 <td class="top_right_corner"></td>
               </tr>
               <tr>
                 <td class="side_left"></td>
                 <td class="video" style="position:relative;">
                   <img id="img1" src="'+webcamSrc+'" border="0" style="position:absolute;left:0;top:0px;"/>
                   <img id="img2" src="'+webcamSrc+'" border="0" style="position:absolute;left:0;top:0px;"/>
                 </td>
                 <td class="side_right"></td>
               </tr>
               <tr>
                 <td class="bottom_left_corner"></td>
                 <td class="bottom_middle"></td>
                 <td class="bottom_right_corner"></td>
               </tr>
             </table>
           </div>
         </body>`;
$('html').html(newpage);
function changeimg1() {
     $("#img1").attr("src",webcamSrc+"&date="+new Date());
     $("#img2").fadeTo(500,0);
     setTimeout(changeimg2, 1000);
}
function changeimg2() {
     $("#img2").attr("src",webcamSrc+"&date="+new Date());
     $("#img2").fadeTo(500,1);
     setTimeout(changeimg1, 1000);
}
changeimg2();
