let selectText = document.querySelector(".text");
let imageContainer = document.querySelector(".container");
let load = 0; // set the load counter to 0
//set the counter by 30ms
let int = setInterval(increaseCounter,30);
//creating function to incrementt the counter by 30ms
function increaseCounter(){
    load ++;  // increment the counter  
    //if the load value greater than 99 then clear it to 0
    if(load > 99){
        clearInterval(int);
    }
    //append the value image to the selectimage
    selectText.innerText = `${load}%`;
    selectText.getElementsByClassName.opacity = range(load,0,100,1,0);
    imageContainer.getElementsByClassName.filter = `blur(${scale(load,0,100,30,0)}px)`;
}
//mapping a range of numbers to another range of numbers
let range = (number, in_min, in_max,out_min,out_max) => {
    return ((num -in_min) * (out_max - out_min) / (in_max-in_min) + out_min);
}