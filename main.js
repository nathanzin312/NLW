window.addEventListener('scroll', onScroll);

onScroll();

// essa funçao esta sendo executada pois se a pagina for carregada em alguma parte diferente nao no home
// ela execute as funçoes de mostrar a nav e se preciso mostrar o botao

function onScroll(){
    showNav();
    showButton();
    menu();
    console.log(scrollY);
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
    if(scrollY>=600){
       ToTopButton.classList.add('show');
    }
    else{
        ToTopButton.classList.remove('show');
    }
    colorChange();
}

function colorChange(){
    if(scrollY>=4824){
        ToTopButton.classList.add('color');
    }
    else{
        ToTopButton.classList.remove('color');
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
   if(scrollY<=1200){
       l1.classList.add('borderMenu');
       l2.classList.remove('borderMenu');
       l3.classList.remove('borderMenu');
   }
   else if(scrollY>1200 && scrollY <2700){
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
