/* Local no-op replacement for the Poki SDK (no network, no ads). Every call resolves immediately. */
(function(){
  var ok=function(v){return Promise.resolve(v);};
  var base={
    init:function(){return ok();},
    setDebug:function(){},
    gameLoadingStart:function(){},gameLoadingFinished:function(){},gameLoadingProgress:function(){},
    gameplayStart:function(){},gameplayStop:function(){},
    roundStart:function(){},roundEnd:function(){},muteAd:function(){},
    commercialBreak:function(){return ok();},
    rewardedBreak:function(){return ok(true);},
    happyTime:function(){},customEvent:function(){},
    captureError:function(){},logError:function(){},
    shareableURL:function(){return ok(location.href.split('?')[0]);},
    getURLParam:function(){return '';},
    isAdBlocked:function(){return false;},
    movePokiLogo:function(){}
  };
  window.PokiSDK=new Proxy(base,{get:function(t,k){if(k in t)return t[k];if(typeof k!=='string'||k==='then')return undefined;return function(){return ok();};}});
})();
