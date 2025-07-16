import "./style.css"

import createHomeTab from "./scripts/pageload.js"
import createMenuTab from "./scripts/menu.js"
import createContactTab from "./scripts/contact.js"

function loadTab(tabFn) {
  const content = document.getElementById("content")
  content.textContent = "" // Clear current content
  content.appendChild(tabFn())
}

document.addEventListener("DOMContentLoaded", () => {

  // Initial tab
  loadTab(createHomeTab)

  // Tab switching logic
  document
    .getElementById("homeBtn")
    .addEventListener("click", () => loadTab(createHomeTab))
  document
    .getElementById("menuBtn")
    .addEventListener("click", () => loadTab(createMenuTab))
  document
    .getElementById("contactBtn")
    .addEventListener("click", () => loadTab(createContactTab))
})
