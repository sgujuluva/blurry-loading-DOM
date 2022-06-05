let selectText = document.querySelector(".text");
let imageContainer = document.querySelector(".container");
let load = 0;
let int = setInterval(increaseCounter,30);

function increaseCounter(){
    load ++;   
    if(load > 99){
        clearInterval(int)
    }
}
