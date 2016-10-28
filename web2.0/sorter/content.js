var script = ["jquery.js","lodash.js","sorter.js"];
for(var i=0;i<script.length;i++){
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(script[i]);
    s.onload = function(){
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(s);
}
