window.onload = function () {
    const buttons = [
        document.querySelector('.prev'),
        document.querySelector('.next')];
    let sliding = false;
    buttons.forEach(element => {
        switch (element) {
            case buttons[0]:
                element.addEventListener("click", slideLeft);
                break;
            case buttons[1]:
                element.addEventListener("click", slideRight);
                break;
        }
    });

    function slideLeft() {
        if (!sliding) {
            document.querySelector(".image:nth-child(3)").classList.add("slide_left");
            sliding = true;
        }
    }
    function slideRight() {
        if (!sliding) {
            let saved = document.querySelector(".image:nth-child(1)");
            document.querySelector(".mySlides").insertBefore(saved, document.querySelector(".mySlides .img-btn"));
            saved.classList.add("slide_right");
            sliding = true;
        }
    }
    const img = document.querySelectorAll(".image")
    img.forEach(element => {
        element.addEventListener("animationend", function () {
            if (this.classList.contains("slide_left")) {
                var saved = this;
                document.querySelector(".mySlides").insertBefore(saved, document.querySelector(".image:nth-child(1)"));
            }
            this.classList.remove("slide_left");
            this.classList.remove("slide_right");
            sliding = false;
        });
    });
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navContainer = document.querySelector(".nav-container");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("is-active");
        navContainer.classList.toggle("is-active");

    })
};