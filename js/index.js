const moveAutomaticSlider = function() {
    let slider = document.querySelector(".slider"),
        widthItemSlider = slider.querySelector(".item").getBoundingClientRect().width;
    btnsSlider = document.querySelectorAll(".buttons i"),
        index = 0;

    btnsSlider.forEach((elem, i) => {
        if (elem.classList.contains("bx-radio-circle-marked")) {
            index = elem.dataset.index;
        }
    })
    
    index < btnsSlider.length ? index++ : "";
    index == btnsSlider.length ? index = 0: "";

    slider.style.transform = `translateX(-${widthItemSlider*(index)}px)`;
    btnsSlider.forEach((elem)=>{
        elem.setAttribute("class", "bx bx-radio-circle")
    })
    btnsSlider[index].setAttribute("class", "bx bx-radio-circle-marked")
}

function moveItemSlider(e, wrapButtons) {
    let itemsSlider = document.querySelectorAll(".item"),
        widthItemSlider = itemsSlider[0].getBoundingClientRect().width,
        slider = document.querySelector(".slider"),
        index = e.target.dataset.index;

    slider.style.transform = `translateX(-${widthItemSlider*index}px)`;

    wrapButtons.querySelectorAll("i").forEach((elem) => {
        elem.setAttribute("class", "bx bx-radio-circle")

    })
    e.target.setAttribute("class", "bx bx-radio-circle-marked")


}

function app() {
    const itemsSlider = document.querySelectorAll(".item"),
        wrapButtons = document.querySelector(".buttons");
    let btns = "";
    setInterval(() => {

        moveAutomaticSlider()
    }, 2500)

    itemsSlider.forEach((elem, i) => {
        btns += `
            <i class='bx ${elem.classList.contains("first") ? "bx-radio-circle-marked" : "bx-radio-circle"}' data-index="${i}"></i>
        `;
    })
    wrapButtons.innerHTML = btns;
    wrapButtons.querySelectorAll("i").forEach((elem) => {
        elem.addEventListener("click", (e) => { moveItemSlider(e, wrapButtons) });

    })
}
app()