let sliders = document.querySelector(".containerSlide .sliders .slide");
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let a = document.createElement("a");
let index = 0;

acao();

function acao(){
    if(index === slides.length){
        index = 0;
    }

    let disclaimerText = slides[index].disclaimer
    let disclaimerSubText = slides[index].disclaimerSub
    let linkedText = slides[index].linked
    
    sliders.append(p1)
    p1.classList.add("disclaimer")
    p1.innerHTML = disclaimerText;
    
    sliders.append(p2)
    p2.classList.add("disclaimerSub")
    p2.innerHTML = disclaimerSubText;
    
    sliders.append(a)
    a.setAttribute("href", linkedText)
    a.innerHTML = '<button class="btn btn-large font-w">Conheça mais</button>'
    index++;
 
}

setInterval(acao, 7000)

