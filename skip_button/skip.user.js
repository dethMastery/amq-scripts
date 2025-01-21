// ==UserScript==
// @name         AMQ Skip
// @namespace    https://suphakit.net/
// @version      1.0.1
// @description  Just AMQ Auto answer on key press
// @author       dethz
// @match        https://animemusicquiz.com/*
// @icon         https://suphakit.net/favicon.png
// @downloadURL  https://amq.dethz.one/cdn/userscripts/AMQ_skip.user.js
// @updateURL    https://amq.dethz.one/cdn/userscripts/AMQ_skip.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("keydown", (event) => {
    if (event.code === "Backquote") {
      event.preventDefault();
      quiz.skipClicked();
    }
  });
})();
