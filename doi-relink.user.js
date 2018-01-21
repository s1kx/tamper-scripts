// ==UserScript==
// @name        DOI URL relinker
// @author      Patrick Glandien
// @description Automatically turns each DOI link to one on a different host.
// @downloadURL https://github.com/s1kx/tamper-scripts/raw/master/doi-relink.user.js
// @supportURL  https://github.com/s1kx/tamper-scripts/issues
// @version     1.0
// @grant       none
// @match       *://*.nih.gov/*
// @exclude     http*://*.google.*
// @exclude     http*://*.stackexchange.com/*
// @exclude     http*://*.stackoverflow.com/*
// @exclude     http*://*.superuser.com/*
// @exclude     http*://*.askubuntu.com/*
// @exclude     http*://*.reddit.com/*
// @run-at      document-idle
// ==/UserScript==

var customDOI = 'https://free.science/'
window.addEventListener('load', function() {
   var scihubUrl = '';
   var els = document.getElementsByTagName("A");
   for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      var link = el.href.replace(/^((http(s|))?:?\/\/)?(www\.)?(dx\.|)doi\.org\//gi, scihubUrl);
      el.href = link;

      // Supposed to add a new link rather than replacing the current one,
      // however, doesn't work, so I give up.
      //
      //var sciButton = document.createElement("a");
      //sciButton.href = link;
      //sciButton.innerHTML = "[ local ]";
      //el.parentNode.insertBefore(sciButton, el.nextSibling);
   }
}, false);
