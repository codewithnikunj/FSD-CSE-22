function addParagraph() {
  const para = document.createElement("p");

  para.innerText = "This is a new paragraph";
  para.style.color = "red";

  const el = document.getElementById("para");
  el.appendChild(para);
}

function removeParagraph() {
  const el = document.querySelector("p");

  if (el) {
    el.remove();
  }
}

function removeAllParagraphs() {
  const parent = document.getElementById("para");
  parent.innerHTML = "";
}
