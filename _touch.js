/* Rimon Games touch helper: swipe -> arrow keys. No network, no tracking. */
(function(){
  var K={L:[37,'ArrowLeft'],U:[38,'ArrowUp'],R:[39,'ArrowRight'],D:[40,'ArrowDown']};
  function fire(k){
    ['keydown','keyup'].forEach(function(t){
      var e=new KeyboardEvent(t,{key:k[1],code:k[1],keyCode:k[0],which:k[0],bubbles:true,cancelable:true});
      document.dispatchEvent(e);
    });
  }
  window.__rimonKey=fire;
  var sx,sy,TH=22;
  document.addEventListener('touchstart',function(e){var t=e.touches[0];sx=t.clientX;sy=t.clientY;},{passive:true});
  document.addEventListener('touchmove',function(e){
    if(sx==null)return; var t=e.touches[0],dx=t.clientX-sx,dy=t.clientY-sy;
    if(Math.abs(dx)<TH&&Math.abs(dy)<TH)return;
    fire(Math.abs(dx)>Math.abs(dy)?(dx>0?K.R:K.L):(dy>0?K.D:K.U)); sx=t.clientX;sy=t.clientY;
    e.preventDefault();
  },{passive:false});
  document.addEventListener('touchend',function(){sx=null;},{passive:true});
})();
