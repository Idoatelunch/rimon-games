/* Rimon: no-op GameAnalytics stub (no tracking) */
(function(){var noop=function(){};var P=new Proxy(noop,{get:function(t,k){if(k==='then')return undefined;return P;},apply:function(){return P;}});window.GameAnalytics={};window.gameanalytics={GameAnalytics:P,EGAResourceFlowType:{},EGAProgressionStatus:{},EGAErrorSeverity:{}};})();
