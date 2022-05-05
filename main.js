
function onScroll(){
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