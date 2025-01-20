// ==UserScript==
// @name         AMQ List Update Button
// @namespace    https://suphakit.net/
// @version      1.0.0
// @description  Update your list more easily on the menu
// @author       dethz
// @match        https://animemusicquiz.com/*
// @icon         https://suphakit.net/favicon.png
// @downloadURL  https://cdn.jsdelivr.net/gh/dethMastery/amq-scripts@main/list_update/update.user.js
// @updateURL    https://cdn.jsdelivr.net/gh/dethMastery/amq-scripts@main/list_update/update.user.js
// @grant        none

// ==/UserScript==

(function () {
  "use strict";

  const list_css = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dethMastery/amq-scripts@main/list_update/css/button.css">`;
  document.head.appendChild();

  const list_button_menu = `<div onClick="list_update_function()" id="list_menu_button" class="button floatingContainer mainMenuButton">
    Update List
</div>`;
  document.querySelector("#mainMenu").append(list_button_menu);

  const list_update_function = () => {
    console.log(document.querySelector("#kitsuUserNameInput").value);
    console.log(document.querySelector("#malUserNameInput").value);
    console.log(document.querySelector("#aniListUserNameInput").value);
  };
})();
