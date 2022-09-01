// alert("bienvenue chez casa luna");

let containerhorizontal = document.querySelectorAll('.containerhorizontal');
let descriptionlien = document.querySelectorAll('.descriptionlien');
let img = document.querySelectorAll('.img');



for(let i in containerhorizontal, descriptionlien, img) {
    containerhorizontal[i].onmouseover = () => { 
        containerhorizontal[i].style.borderRadius = '10px';
        descriptionlien[i].style.borderRadius = '10px';  
        img[i].style.borderTopLeftRadius = '10px';
        img[i].style.borderTopRightRadius = '10px';
      }



    containerhorizontal[i].onmouseout = () => { 
        containerhorizontal[i].style.borderRadius = '';
        descriptionlien[i].style.borderRadius = '';  
        img[i].style.borderTopLeftRadius = '';
        img[i].style.borderTopRightRadius = '';
}
}


let drapeau = document.querySelectorAll(".drapeau1");


drapeau[0].onmouseover = () => {

    drapeau[0].style.height = "60%";
    drapeau[1].style.opacity = '0.5';
    drapeau[2].style.opacity = '0.5';

}

drapeau[0].onmouseout = () => {
    drapeau[0].style.height = "";
    drapeau[1].style.opacity = '';
    drapeau[2].style.opacity = '';

}

drapeau[1].onmouseover = () => {
    drapeau[1].style.height = "60%";
    drapeau[0].style.opacity = '0.5';
    drapeau[2].style.opacity = '0.5';

}

drapeau[1].onmouseout = () => {
    drapeau[1].style.height = "";
    drapeau[0].style.opacity = '';
    drapeau[2].style.opacity = '';

}

drapeau[2].onmouseover = () => {
    drapeau[2].style.height = "60%";
    drapeau[0].style.opacity = '0.5';
    drapeau[1].style.opacity = '0.5';

}

drapeau[2].onmouseout = () => {
    drapeau[2].style.height = "";
    drapeau[0].style.opacity = '';
    drapeau[1].style.opacity = '';

}

let logo0 = document.querySelector('.emailfixe');
let logo1 = document.querySelector('.whatappsfixe');
let logo2 = document.querySelector('.facebookfixe');

let logo = [logo0, logo1, logo2];
console.log('logo');
logo[0].onmouseover = () => {
    logo[1].style.opacity = '0.5';
    logo[2].style.opacity = '0.5';

}

logo[0].onmouseout = () => {
    logo[1].style.opacity = '';
    logo[2].style.opacity = '';

}

logo[1].onmouseover = () => {
    logo[0].style.opacity = '0.5';
    logo[2].style.opacity = '0.5';

}

logo[1].onmouseout = () => {
    logo[0].style.opacity = '';
    logo[2].style.opacity = '';

}

logo[2].onmouseover = () => {
    logo[0].style.opacity = '0.5';
    logo[1].style.opacity = '0.5';

}

logo[2].onmouseout = () => {
    logo[0].style.opacity = '';
    logo[1].style.opacity = '';

}