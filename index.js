const descriptions = document.querySelectorAll(".description");
const btns = document.querySelectorAll(".tab-btn");


btns.forEach((btn) => {
    btn.addEventListener("click", function(e) {
        let id = e.target.dataset.id;
        btns.forEach((btn) => {
            btn.classList.remove("active");
        })
        btn.classList.add("active");

        descriptions.forEach((description) => {
            description.classList.remove("active")
        })
        let element = document.getElementById(id);
        element.classList.add("active");

    })
})