document.addEventListener("DOMContentLoaded", () => {
  // Replace in all visible text nodes
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue
      .replace(/Medi Plus/gi, "Medivanta")
      .replace(/Medicare/gi, "Medivanta");
  }

  // Replace in placeholders, alt tags, titles, and input values
  document.querySelectorAll("[placeholder], [alt], [title], [value],").forEach(el => {
    if (el.placeholder) el.placeholder = el.placeholder.replace(/Medi Plus/gi, "Medivanta").replace(/Medicare/gi, "Medivanta");
    if (el.alt) el.alt = el.alt.replace(/Medi Plus/gi, "Medivanta").replace(/Medicare/gi, "Medivanta");
    if (el.title) el.title = el.title.replace(/Medi Plus/gi, "Medivanta").replace(/Medicare/gi, "Medivanta");
    if (el.value && el.tagName !== "SCRIPT") el.value = el.value.replace(/Medi Plus/gi, "Medivanta").replace(/Medicare/gi, "Medivanta");
  });
});



/*======================== PRE-LOADERS ========================*/ 

  window.addEventListener("load", function () {
    const loader = document.getElementById("medivantaLoader");
    if (loader) {
     loader.style.opacity = "0";
loader.style.transition = "opacity 10s ease"; // Smooth fade effect
setTimeout(() => {
  loader.style.display = "none";
}, 3000); // 2-second delay to match fade duration

    }
  });
  
