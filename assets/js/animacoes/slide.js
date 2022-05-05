let sliders = document.querySelector(".containerSlide .sliders .slide");
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let a = document.createElement("a");
let index = 0;

/*<div class="slide slide1 font-w font-m-b">
<p class="disclaimer fadeInRight" data-anime="500">Desenvolvedor web</p>
<p class="disclaimerSub fadeInRight" data-anime="700">Aprenda a construir sites como um mestre e seja encaminhado para o mercado de trabalho.</p>
<a href="cursos/devweb.html"><button class="btn btn-large font-w fadeInRight" data-anime="800">Conheça mais</button></a> 
</div>*/

acao();

function acao(){
    if(index === slides.length){
        index = 0;
    }
    sliders.append(p1)
    p1.classList.add("disclaimer", "fadeInRight")
    p1.setAttribute("data-anime", "500")
    p1.innerHTML = slides[index].disclaimer;

    sliders.append(p2)
    p2.setAttribute("data-anime", "500")
    p2.classList.add("disclaimerSub", "fadeInRight")
    p2.innerHTML = slides[index].disclaimerSub;

    sliders.append(a)
    a.setAttribute("href", `${slides[index].linked}`)
    a.innerHTML = '<button class="btn btn-large font-w fadeInRight" data-anime="800">Conheça mais</button>'
    index++;
 
}

setInterval(acao, 7000)

