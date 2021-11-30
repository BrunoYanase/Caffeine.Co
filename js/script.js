const btnOpenEspresso = document.querySelector(".openEspresso");
const btnOpenMoka = document.querySelector(".openMoka");
const btnOpenCappuccino = document.querySelector(".openCappuccino");

const modalContainerEspresso = document.querySelector(".modal-container-espresso");
const modalContainerMoka = document.querySelector(".modal-container-moka");
const modalContainerCappuccino = document.querySelector(".modal-container-cappuccino");

const btnCloseEspresso = document.querySelector(".closeEspresso");
const btnCloseMoka = document.querySelector(".closeMoka");
const btnCloseCappuccino = document.querySelector(".closeCappuccino");



btnOpenEspresso.addEventListener("click", () =>{
  modalContainerEspresso.classList.add("show");
})

btnOpenMoka.addEventListener("click", () =>{
  modalContainerMoka.classList.add("show");
})
btnOpenCappuccino.addEventListener("click", () =>{
  modalContainerCappuccino.classList.add("show");
})

btnCloseEspresso.addEventListener("click", () =>{
  modalContainerEspresso.classList.remove("show");
})

btnCloseMoka.addEventListener("click", () =>{
  modalContainerMoka.classList.remove("show");
})

btnCloseCappuccino.addEventListener("click", () =>{
  modalContainerCappuccino.classList.remove("show");
})