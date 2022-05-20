window.addEventListener('scroll', onScroll);

onScroll();

// essa funçao esta sendo executada pois se a pagina for carregada em alguma parte diferente nao no home
// ela execute as funçoes de mostrar a nav e se preciso mostrar o botao

function onScroll(){
    showNav();
    showButton();
    menu();
}

function showNav(){
    if(scrollY > 1 ){
        // console.log(scrollY);  escreve o valor do scrollY 
        // adiciona a classe scroll no id navigation
        navigation.classList.add("scroll");
    }
    else{
        // se  o scroll nao for maior que 1 ele vai remover a classe scroll
        navigation.classList.remove("scroll");
    }
}


function showButton(){
    ;
    // 600
    if(scrollY>= services.offsetTop){
       ToTopButton.classList.add('show');
    }
    else{
        ToTopButton.classList.remove('show');
    }
    colorChange();
}

function colorChange(){
    if(scrollY + innerHeight > (contato.offsetTop + contato.offsetHeight + 25)){
        ToTopButton.classList.add('color1');
    }
    else{
        ToTopButton.classList.remove('color1');
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded');
}

function closeMenu(){
    document.body.classList.remove('menu-expanded');
}


ScrollReveal({
        origin:'top',
        distance:'30px',
        duration:700,
}).reveal('#home,img, .card ,#services, #about,#contato, img, footer');


function menu(){
    const line = scrollY + innerHeight / 2;
   if(line<=services.offsetTop){
       l1.classList.add('borderMenu');
       l2.classList.remove('borderMenu');
       l3.classList.remove('borderMenu');
   }
   else if(line > services.offsetTop && line < about.offsetTop){
    l2.classList.add('borderMenu');
    l1.classList.remove('borderMenu');
    l3.classList.remove('borderMenu');
   }
   else{
       l3.classList.add('borderMenu');
       l1.classList.remove('borderMenu');
       l2.classList.remove('borderMenu');
   }
}


// function activateMenuSection(section){
//     const line = scrollY + innerHeight/2;


//     const sectionTop = section.offsetTop;
//     const sectionEnd = sectionTop + section.offsetHeight;

//     const sectionTopPassedLine = line >= sectionTop;
//     const sectionEndPassedLine =  sectionEnd <= line ;

//     const result = sectionTopPassedLine && !sectionEndPassedLine;

//     const elementId = section.getAttribute('id');
   
//     const element = document.querySelector(`.menu a[href*=${elementId}] `);

  
//     if(result){
//         element.classList.add('boderMenu');
//        console.log(element);
//     }
//     else{
//         element.classList.remove('boderMenu');
//     }

// }
