const acessHeader = document.querySelector(".acess-header"),
    modalForm = document.querySelector(".modal-form-toggle"),
    backgroundBackModal = document.querySelector(".background-back-modal");

function toggleModal() {
    modalForm.classList.toggle("toggle-modal");
    backgroundBackModal.classList.toggle("toggle-modal");
}

acessHeader.addEventListener("click", toggleModal);

function closeModal() {
    backgroundBackModal.classList.remove("toggle-modal");
    modalForm.classList.remove("toggle-modal");
}

backgroundBackModal.addEventListener("click", closeModal);


const mainContainer = document.querySelector("main"),
titleContainer = mainContainer.querySelector(".title-main"),
textContainer = mainContainer.querySelector(".text-main"),
buttonMain = mainContainer.querySelector(".btn-main"),
arrowLeftMain = mainContainer.querySelector(".arrow-left"),
arrowRightMain = mainContainer.querySelector(".arrow-right");

arrowRightMain.addEventListener("click", () => {
    mainContainer.style.backgroundImage = "url(./assets/second-background-main.avif)";
    mainContainer.classList.add("style-background-main");

    titleContainer.textContent = "É tempo de crédito Itaú";
    textContainer.innerHTML = "Chegou a hora de organizar as despesas de <br> início de ano"
    buttonMain.textContent = "confira";
});

arrowLeftMain.addEventListener("click", () => {
    mainContainer.style.backgroundImage = "url(./assets/background-main-itaú.webp)";
    mainContainer.classList.remove("style-background-main");

    titleContainer.textContent = "O cartão de crédito ideal";
    textContainer.innerHTML = "São mais de 70 cartões para escolher o que dá <br> match com você";
    buttonMain.textContent = "peça já o seu";
});