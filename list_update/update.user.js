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

  // const list_css = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dethMastery/amq-scripts@main/list_update/css/button.css">`;
  // document.head.appendChild();

  var list_button_menu = `<div onClick="list_update_function()" id="list_menu_button" class="button floatingContainer mainMenuButton">
    <h1>Update List</h1>
</div>`;
  document.querySelector("#mainMenu").innerHTML += list_button_menu;

  document.querySelector("#list_menu_button").addEventListener("click", (e) => {
    e.preventDefault();

    // Kitzu
    if (
      String(document.querySelector("#kitsuUserNameInput").value).length > 0
    ) {
      options.updateKitsu();
    }

    // AniList
    if (
      String(document.querySelector("#aniListUserNameInput").value).length > 0
    ) {
      options.updateAniList();
    }

    // MAL
    if (String(document.querySelector("#malUserNameInput").value).length > 0) {
      options.updateMal();
    }
  });
})();
