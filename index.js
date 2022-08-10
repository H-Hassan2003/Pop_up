const overLay = document.getElementById("overlay")
const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")


openModal.addEventListener("click", function() {
  overLay.style.display = "block"
})

closeModal.addEventListener("click", function() {
  overLay.style.display = "none"
})