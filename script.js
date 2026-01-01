function openModal(product) {
  document.getElementById("productName").innerText = product;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
