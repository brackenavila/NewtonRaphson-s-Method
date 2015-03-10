$(function(){
 $erAgent='webkit'
 $br=navigator.userAgent
 if($br.toLowerCase().indexOf($erAgent)<0){
  alert('if You want to live a better experience\nthen You\u2018d better use Google Chrome')
  $erAgent='moz'}
 $div = document.createElement('div')
 $div.setAttribute('id','bracken','style')
 $($div).css('background-image','-'+$erAgent+'-linear-gradient(left, black, white)')
 $($div).appendTo('body')
 $A = backAnime, $An = $('#backAnime')[0].style
 $('#backAnime').css('-'+$erAgent+'-animation','CHangeBG 5s infinite')
 $Math=Math.random()
 $Mth=Math.floor($Math*100)
 $pct=$Mth>50?'px':'%'
 $('*').css('-'+$erAgent+'-border-radius',$Mth+$pct)
 $0=0, $inc=100/42, $95=95, $10=(95/10)
 $F='', $left='left', $COLOURS = 'white, whitesmoke, grey, black'
 while($0<101){
  if($0>25&&$0<76){
   if($left!=='right'){
    $left='right'
    $COLOURS = 'black,grey,whitesmoke,white'}}
  else{
   if($left!=='left'){
    $left='left'
    $COLOURS = 'white, whitesmoke, grey, black'}}
  if($95 === 95 || $95 === 0){$10*=-1}
  if(($0>26 && $0 < 27) || ($0>76 && $0 < 77)){$95=0}
  $F+=$0+'% {background-image:-'+$erAgent+'-linear-gradient('+$left+',transparent '+$95+'%, '+$COLOURS+')}\n  '
  $95+=$10,$0+=$inc}
 $('<style>\n\
::-'+$erAgent+'-scrollbar{width: 17px}\n\
::-'+$erAgent+'-scrollbar-track-piece {background-image:-'+$erAgent+'-radial-gradient(circle, darkgreen, forestgreen, green)}\n\
::-'+$erAgent+'-scrollbar-track-piece:hover {background-image:-'+$erAgent+'-radial-gradient(circle,lightgreen, green,lightgreen)}\n\
::-'+$erAgent+'-scrollbar-thumb {\n\
 background-image:-'+$erAgent+'-linear-gradient(forestgreen, green, forestgreen);\n\
 -'+$erAgent+'-border-radius:50px;\n\
 -'+$erAgent+'-box-shadow:inset 0 0 6px black}\n\
::-'+$erAgent+'-scrollbar-thumb:hover{-'+$erAgent+'-box-shadow:inset 0 0 10px black;\n\
 background-image:-'+$erAgent+'-linear-gradient(darkgreen, darkgreen,darkgreen)}\n\
::-'+$erAgent+'-scrollbar-corner { background-color: green}\n\
::-'+$erAgent+'-scrollbar-button { background-color: darkgreen}\n\
@-'+$erAgent+'-keyframes CHangeBG\n  {\n  '+$F+'}</style>').appendTo('head')
 $("<link rel=stylesheet href=css/NRM.css>").appendTo('head')
 $fern=$('#fern')[0]; $fI=$('#fern input')[6]; $fW=$('#fern div')[0].offsetWidth
 $13=1.3
 $eksL=($fern.offsetLeft+$fern.offsetWidth/5), $eksT=$fI.offsetLeft/1.27
 $fDivL=($eksL+$('#eks')[0].offsetWidth/3.3), $fDivT=($('#bracken')[0].offsetTop+$('#eks')[0].offsetHeight/1.6)
 $fInputL=($fW/$13), $fInputT=$fI.offsetLeft/1.337
 $OSTrootL=$fI.offsetLeft+$fI.offsetTop/1.3, $OSTrootT=$fI.offsetTop*1.825
 $luisL=$('#eks')[0].offsetLeft/1.7
 $('#eks')[0].setAttribute('style','position:absolute;left:'+$eksL+'px;top:'+$eksT+'px;')
 $('#fern div')[0].setAttribute('style','position:absolute;left:'+$fDivL+'px;top:'+$fDivT+'px;background:transparent; box-shadow:0 0 0 transparent;')
 $('#fern input')[16].setAttribute('style','position:absolute;left:'+$fInputL+'px;top:'+$fInputT+'px;')
 $('#OSTroot')[0].setAttribute('style','border-radius:35%;position:absolute;left:'+$OSTrootL+'px;top:'+$OSTrootT+'px;width:280px;')
 $('#luis').css('left',$luisL+'px')
 $('#fern div,#eks,#OSTroot,h4').css('visibility','hidden')})
function frInput(){
 $13===1.33?
  ($13=1.3,$27=1.0376,$v='hidden')
  :($13=1.33,$27=.987,$v='visible')
 $fInputL=($fW/$13), $fInputT=$fI.offsetLeft/$27
 $('#fern input')[16].setAttribute('style','position:absolute;left:'+$fInputL+'px;top:'+$fInputT+'px;')
 $('#fern div,#eks,#OSTroot,h4').css('visibility',$v)}
var ST=1
function BundleOrBunch(){
 db(),db2(),db3(),db4(),db5()
 var RealN,Ffth,Frth,Thrd,Snd,Fst,Cnst=parseFloat(Constant.value),x,xx,y,z,RealD,dFfth,dFrth,dThrd,dSnd,dFst=parseFloat(E.value),dx,dxx,dy,dz,Xn,Fn,dFn,RTn
 Xn=parseFloat(eks.value)
 $t=['x','f','df','rt']
 for (l=1; l<26 && Fn !== 0; l++){
  Fn=NumeratorSummation(RealN,Ffth,Frth,Thrd,Snd,Fst,Cnst,x,xx,y,z,Xn)
  dFn=DenominatorSummation(RealD,dFfth,dFrth,dThrd,dSnd,dFst,dx,dxx,dy,dz,Xn)
  OSTroot.value=RTn=Xn-(Fn/dFn)
  $p = document.createElement("span")
  $p.setAttribute("style","color:white")
  $p.innerHTML=l<10?
   ' 0'+l+' '
   :l+' '
  $($p).appendTo("#bracken")
  for($f=0; $f<4;$f++){
   if($f!==0)$("#bracken").append('<span> <span />')
   $tx = document.createElement("input")
   $tx.setAttribute("id",$t[$f]+l,"type","text")
   $($tx).appendTo("#bracken")[0].setAttribute('style','-'+$erAgent+'-border-radius:'+$Mth+$pct+';background-image:-'+$erAgent+'-linear-gradient(left, green 95%, white, whitesmoke, grey, black);')}
  $("#bracken").append('<br />')
  if(l===1)f1.value=Fn, df1.value=dFn, x1.value=Xn, Xn=rt1.value=RTn
  else{
   $("#f"+l)[0].value=(RTn-Xn)*(-dFn)
   $("#df"+l)[0].value=1/(-1*((RTn-Xn)/Fn))
   $("#x"+l)[0].value=(RTn+(Fn/dFn))
   Xn=$("#rt"+l)[0].value=RTn}}
 ST=2
 if($A.style.display !== 'block' ){$A.style.display='block'}
 $An.visibility='visible'
 if ($A.offsetTop!=='50px'){
  $Left = x1.offsetLeft,$Top = x1.offsetTop
  $An.left=$Left+'px',$An.top=$Top+'px'
 $('#bracken input').on('mouseover',
  function(){
   $X = $(this)[0].offsetLeft+'px', $Y = $(this)[0].offsetTop+'px'
   $($A)[0].style.left = $X; $($A)[0].style.top = $Y})}}
function NumeratorSummation(RealN,Ffth,Frth,Thrd,Snd,Fst,Cnst,x,xx,y,z,Xn){y=Fifth.value;z=A.value;
 for(i=1;i<6;i++){xx=x=Xn
  if (y!==0){
   if(y>1){
    for(j=1;j<y;j++){x*=xx}}
   else if(y<0){
    for(k=-1;k>y;k--){x=1/(x*=xx)}}
   z*=x}
  if(i===1){y=Fourth.value, Ffth=z, /*alert("A = "+Ffth),*/ z=B.value}
  else if(i===2){y=Cubed.value, Frth=z, z=C.value}
  else if(i===3){y=Squared.value, Thrd=z, z=D.value}
  else if(i===4){y=1, Snd=z, z=E.value}
  else if(i===5){Fst=z}}
 if(Plus5.value==="-"){Frth*=-1;} /*alert("B = "+Frth);*/
 if(Plus4.value==="-"){Thrd*=-1;} /*alert("C = "+Thrd);*/
 if(Plus3.value==="-"){Snd*=-1;} /*alert("D = "+Snd);*/
 if(Plus2.value==="-"){Fst*=-1;} /*alert("E = "+Fst);*/
 if(Plus.value==="-"){Cnst*=-1;} /*alert("Constant = "+Cnst);*/
 return RealN=Ffth+Frth+Thrd+Snd+Fst+Cnst;
}
function DenominatorSummation(RealD,dFfth,dFrth,dThrd,dSnd,dFst,dx,dxx,dy,dz,Xn){dy=dFifth.value;dz=dA.value;
 for(di=1;di<5;di++){dxx=dx=Xn
  if (dy!==0){
   if(dy>1){
    for(dj=1;dj<dy;dj++){dx*=dxx}}
   else if(dy<0){
    for(dk=-1;dk>dy;dk--){dx=1/(dx*=dxx)}}
   dz*=dx}
  if(di===1){dy=dFourth.value; dFfth=dz; dz=dB.value;
  }else if(di===2){dy=dCubed.value; dFrth=dz; dz=dC.value;
  }else if(di===3){dy=dSquared.value; dThrd=dz; dz=dD.value;
  }else if(di===4){dSnd=dz; dFst=parseFloat(E.value)}}
 if(dPlus5.value==="-"){dFrth*=-1}
 if(dPlus4.value==="-"){dThrd*=-1}
 if(dPlus3.value==="-"){dSnd*=-1}
 if(dPlus2.value==="-"){dFst*=-1}
 return RealD=dFfth+dFrth+dThrd+dSnd+dFst}
function db(){dA.value=parseFloat(Fifth.value)*parseFloat(A.value);if(Fifth.value!==0){dFifth.value=parseFloat(Fifth.value-1)}else{dFifth.value=0}}
function db2(){dB.value=parseFloat(Fourth.value)*parseFloat(B.value);if(Fourth.value!==0){dFourth.value=parseFloat(Fourth.value-1)}else{dFourth.value=0}}
function db3(){dC.value=parseFloat(Cubed.value)*parseFloat(C.value);if(Cubed.value!==0){dCubed.value=parseFloat(Cubed.value-1)}else{dCubed.value=0}}
function db4(){dD.value=parseFloat(Squared.value)*parseFloat(D.value);if(Squared.value!==0){dSquared.value=parseFloat(Squared.value-1)}else{dSquared.value=0}}
function db5(){dE.value=parseFloat(E.value)}
//Plus Functions
function plus(){if (Plus.value==="+"){Plus.value="-"}else{Plus.value="+"}}
function plus2(){if (Plus2.value==="+"){Plus2.value="-"}else{Plus2.value="+"}}
function plus3(){if (Plus3.value==="+"){Plus3.value="-"}else{Plus3.value="+"}}
function plus4(){if (Plus4.value==="+"){Plus4.value="-"}else{Plus4.value="+"}}
function plus5(){if (Plus5.value==="+"){Plus5.value="-"}else{Plus5.value="+"}}
//dPlus Functions
function dplus(){if (dPlus.value==="+"){dPlus.value="-"}else{dPlus.value="+"}}
function dplus2(){if (dPlus2.value==="+"){dPlus2.value="-"}else{dPlus2.value="+"}}
function dplus3(){if (dPlus3.value==="+"){dPlus3.value="-"}else{dPlus3.value="+"}}
function dplus4(){if (dPlus4.value==="+"){dPlus4.value="-"}else{dPlus4.value="+"}}
function dplus5(){if (dPlus5.value==="+"){dPlus5.value="-"}else{dPlus5.value="+"}}
function VacuumCleaner(){
 OSTroot.value!==null&&(OSTroot.value=null)
 $b = '#bracken '; b=', '+$b
 $($b+'input'+b+'span'+b+'br').remove()
 ST=1
 $An.visibility='hidden'}
function Question(){
 ST===1?
  BundleOrBunch()
  :VacuumCleaner()}