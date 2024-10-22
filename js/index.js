$("document").ready(function () {
    let imageSlide = document.querySelector(".slide-inner-box");
    setInterval(() => {
        let slide = document.querySelectorAll(".slide");
        let firstNode = slide[0].cloneNode();
        let firstImg = slide[0].children[0].cloneNode();
        firstNode.append(firstImg);
        slide[0].style.marginLeft = "-100%";
        setTimeout(() => {
            slide[0].remove();
            imageSlide.append(firstNode);
        }, 1000);
    }, 3000);
});
