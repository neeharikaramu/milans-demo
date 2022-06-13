const els = document.querySelectorAll(".ukiyo");
els.forEach((el) => {
  const parallax = new Ukiyo(el);
});



const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    scrollFromAnywhere: true
  });


  imagesLoaded(document.querySelector('[data-scroll-container]'), { background: true }, function () {
    scroll.update();
  });


const boxy=document.querySelector('#box');
const image=document.querySelector('#mainImage');
const items=document.querySelectorAll('.menuItem');
const menuBox=document.querySelector('#menuContent');
//apparently you can use queryselctorall with other elemtents duh, so instead of checking all over body it selects the images from #container. i tired to get src only but i didnt work. '.innerImage[src]' there works the same as if you put in .innerImage there
const container=document.querySelector('#container');
const innerMenuImages=container.querySelectorAll('.innerImage[src]');// dont actually need src since i havent used it below. see other comments and the rest of code to understand why
// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(this.);
const addressSectionDubai = document.querySelector('.addressSectionDubai');
const testSection = document.querySelector('#testSection');
console.log(innerMenuImages);

// const contactInformation = document.querySelector('#contactInformationBlock');
// const contactContent = document.querySelector('#contactContent');
// const mapSection = document.querySelector('.mapSection');

// document.querySelector('#contactInfoLink').addEventListener('click', showContactInformation);
// document.querySelector('#contactContentButton').addEventListener('click', closeContactInformation);

// let imageArray = ["css/array_image1.jpg","css/array_image2.jpg","css/array_image3.JPG"]; // dont need this since we didnt use it

//creating array from the innermenu images so we can use it to dynamically add classes (view classs to chnage opacity) to the images within the loop instead of manually writing it. we will try to associate menu-inner-image[0] with menuitem[0] and so on.

let anotherArray=Array.from(innerMenuImages);
console.log(typeof(anotherArray[0].attributes.src.value)); //dont acutually need src and value because we arent setting src fo for anything we are merely toggling classes (for addding and renoveing opacity) for mouseover. you can  however use this for setting src. or to get src
console.log(anotherArray);
console.log(anotherArray[2].attributes.src.value); //gets you the src of image. i checked its type above it is a string


document.querySelector('#menu').addEventListener('click',show);
// document.querySelector('.locationSelectionBlockOne').addEventListener('click', viewMap);



// document.querySelector('#about').addEventListener('mouseover',change);
// document.querySelector('#about').addEventListener('mouseout',changeBack);

// let arr=Array.from(items).map(element => element.addEventListener('mouseover', changeImage));
let arr=Array.from(items);
// console.log(arr);
arr.map(element => element.addEventListener('mouseover', changeImage)); //giving event listerners to teh all of the menuitems by putting them in array 
arr.map(element => element.addEventListener('mouseout', prevImage));
// console.log(arr[0].id);


function show(){
    // boxy.classList.toggle('hidden');
    //doing this instead of toggle so we can control the transition spees and delay upon exit and onset of animation as upon the thing becoming hidden and visible
    if(boxy.classList.contains('hidden')){
        boxy.classList.remove('hidden');
        boxy.style.transition= "height 1s ease-in-out";
        boxy.style.MozTransition= "height 1s ease-in-out";
        boxy.style.WebkitTransition= "height 0.69s ease-in-out";
        boxy.style.OTransition= "height 1s ease-in-out";
        boxy.style.transitionDelay="0.2s";
        boxy.style.MozTransitionDelay="0.2s";
        boxy.style.WebkitTransitionDelay="0.2s";
        boxy.style.OTransitionDelay="0.2s";
    }
    else{
        boxy.classList.add('hidden')
        boxy.style.transition="height 1s ease-in-out";
        boxy.style.MozTransition="height 1s ease-in-out";
        boxy.style.WebkitTransition="height 1s ease-in-out";
        boxy.style.OTransition="height 1s ease-in-out";
        boxy.style.transitionDelay="1.2s";
        boxy.style.WebkitTransitionDelay="1.2s";
        boxy.style.MozTransitionDelay="1.2s";
        boxy.style.OTransitionDelay="1.2s";
    }
    if(image.classList.contains('view')){
        image.classList.remove('view');
        image.style.transition="all 0.75s ease-in-out";
        image.style.MozTransition="all 0.75s ease-in-out";
        image.style.OTransition="all 0.75s ease-in-out";
        image.style.WebkitTransition="all 0.75s ease-in-out";
        image.style.transitionDelay='0.4s';
        image.style.MozTransitionDelay='0.4s';
        image.style.WebkitTransitionDelay='0.4s';
        image.style.transitionDelay='0.4s';
    }
    else{
        image.classList.add('view');
        image.style.transition="all 1.2s ease-in-out"; 
        image.style.MozTransition="all 1.2s ease-in-out"; 
        image.style.WebkitTransition="all 0.8s ease-in-out"; 
        image.style.OTransition="all 1.2s ease-in-out"; 
        image.style.transitionDelay='0.89s';
        image.style.MozTansitionDelay='0.89s';
        image.style.WebkitTransitionDelay='0.89s';
        image.style.OTransitionDelay='0.89s';
    }

    if(menuBox.classList.contains('close')){
        menuBox.style.transition="all 0.5s ease-in-out";
        menuBox.style.MozTransition="all 0.5s ease-in-out";
        menuBox.style.WebkitTransition="all 0.5s ease-in-out";
        menuBox.style.OTransition="all 0.5s ease-in-out";
        menuBox.classList.remove('close');
        
    }
    else{
        menuBox.classList.add('close');
        menuBox.style.transition="all 1s ease-in-out"; 
        menuBox.style.WebkitTransition="all 1s ease-in-out";
        menuBox.style.MozTransition="all 1s ease-in-out";
        menuBox.style.OTransition="all 1s ease-in-out";
        menuBox.style.transitionDelay='1.5s';
        menuBox.style.MozTransitionDelay='1.5s';
        menuBox.style.WebkitTransitionDelay='1.5s';
        menuBox.style.OTransitionDelay='1.5s';
    }
}

function changeImage(mouseover){
    console.log(this.id);

    if(image.classList.contains('view') && arr.length!==0){ //saying if array of menu items isnt empty and the main image is visible then hide main image with transition
        image.classList.remove('view'); 
        image.style.transition="all 0.4s ease-in-out";
        image.style.MozTransition="all 0.4s ease-in-out";
        image.style.WebkitTransition="all 0.4s ease-in-out";
        image.style.OTransition="all 0.4s ease-in-out";

    //then looping though the menu items and saying if the     
    for(i=0;i<arr.length;i++){
        if(arr[i].id===this.id){
            anotherArray[i].style.transition="all 0.4s ease-in-out";
            anotherArray[i].style.MozTransition="all 0.4s ease-in-out";
            anotherArray[i].style.WebkitTransition="all 0.4s ease-in-out";
            anotherArray[i].style.OTransition="all 0.4s ease-in-out";
            anotherArray[i].classList.add('view');
            // image.src=imageArray[i];
            // boxy.style.backgroundImage=imageArray[i];
        }
        // else{
        //     image.src='css/Screen Shot 2022-04-13 at 2.21.14 AM.png'; 
        // }
    }
}
else{
        image.src='css/main_menu_image.jpg'; 
    }
    
}


function prevImage(){
   
       if(!image.classList.contains('view')){
        image.classList.add('view');
       }
        for(i=0;i<arr.length;i++){
         anotherArray[i].classList.remove('view');
       }
    //  image.src='css/main_menu_image.jpg'; 
}

function viewMap(){

    if(testSection.classList.contains('hide')){
        testSection.classList.remove('hide');
        
    }
    else{
        testSection.classList.add('hide');
    }

}

// function showContactInformation(){
//     if(contactInformation.classList.contains('hidden')){
//         contactInformation.classList.remove('hidden');
//         contactInformation.style.transition= "height 1s ease-in-out";
//         contactInformation.style.MozTransition= "height 1s ease-in-out";
//         contactInformation.style.WebkitTransition= "height 0.69s ease-in-out";
//         contactInformation.style.OTransition= "height 1s ease-in-out";
//         contactInformation.style.transitionDelay="0.2s";
//         contactInformation.style.MozTransitionDelay="0.2s";
//         contactInformation.style.WebkitTransitionDelay="0.2s";
//         contactInformation.style.OTransitionDelay="0.2s";
//     }


//     if(contactContent.classList.contains('invisible')){
//         contactContent.classList.remove('invisible');
//         contactContent.style.transition="opacity 0.5s ease-in-out";
//         contactContent.style.MozTransition="opacity 0.5s ease-in-out";
//         contactContent.style.WebkitTransition="opacity 0.5s ease-in-out";
//         contactContent.style.OTransition="opacity 0.5s ease-in-out";
//         contactContent.style.transitionDelay="1s";
//         contactContent.style.MozTransitionDelay="1s";
//         contactContent.style.WebkitTransitionDelay="1s";
//         contactContent.style.OTransitionDelay="1s";
//     }

//     if(mapSection.classList.contains('noWidth')){
//         mapSection.classList.remove('noWidth');
//         mapSection.style.transition= "width 1s ease-in-out";
//         mapSection.style.MozTransition= "width 1s ease-in-out";
//         mapSection.style.WebkitTransition= "width 0.69s ease-in-out";
//         mapSection.style.OTransition= "width 1s ease-in-out";
//         mapSection.style.transitionDelay="0.9s";
//         mapSection.style.MozTransitionDelay="0.9s";
//         mapSection.style.WebkitTransitionDelay="0.9s";
//         mapSection.style.OTransitionDelay="0.9s";
//     }
// }

// function closeContactInformation(){
//     if(!contactContent.classList.contains('invisible')){
//         contactContent.classList.add('invisible')
//         contactContent.style.transition="opacaity 1s ease-in-out";
//         contactContent.style.MozTransition="opacity 1s ease-in-out";
//         contactContent.style.WebkitTransition="opacity 1s ease-in-out";
//         contactContent.style.OTransition="opacity 1s ease-in-out";
//         contactContent.style.transitionDelay="1.2s";
//         contactContent.style.WebkitTransitionDelay="1.2s";
//         contactContent.style.MozTransitionDelay="1.2s";
//         contactContent.style.OTransitionDelay="1.2s";

        
//     }

//     if(!contactInformation.classList.contains('hidden')){
//         contactInformation.classList.add('hidden');
//         contactInformation.style.transition= "height 1s ease-in-out";
//         contactInformation.style.transitionDelay="0.2s";
//     }

//     if(!mapSection.classList.contains('noWidth')){
//         mapSection.classList.add('noWidth');
//         mapSection.style.transition= "width 1s ease-in-out";
//         mapSection.style.MozTransition= "width 1s ease-in-out";
//         mapSection.style.WebkitTransition= "width 0.69s ease-in-out";
//         mapSection.style.OTransition= "width 1s ease-in-out";
//         mapSection.style.transitionDelay="0.9s";
//         mapSection.style.MozTransitionDelay="0.9s";
//         mapSection.style.WebkitTransitionDelay="0.9s";
//         mapSection.style.OTransitionDelay="0.9s";
//     }






   

// }



// image.classList.toggle('view');
    // menuBox.classList.toggle('close');
    // if(menuBox.classList.contains('close')){
    //     menuBox.style.transition="all 1s";
    //     // menuBox.style.transitionDelay='2s';
    // }
    // else{
    //     menuBox.style.transition="all 2s ease-in-out"; 
    // }



    // function change(){
//     document.querySelector('#box').style.backgroundColor='blue'
// }

// function changeBack(){
//     document.querySelector('#box').style.backgroundColor='orange';
// }

//----*******SLIDER*******----

let sliderArray = Array.from(document.querySelectorAll('.slides'));
let sliderNumberElement = document.querySelector('#sliderNumber');
document.querySelector('#clickArrow').addEventListener('click',checkDirection);
document.querySelector('#clickArrowBack').addEventListener('click',checkDirection);
let slidesLength = sliderArray.length;

for(i=0;i<sliderArray.length;i++){
   sliderArray[i].style.setProperty('left', `${i*100}%`);
}


function checkDirection(){
    if( this.id === 'clickArrow' && Number(sliderNumberElement.innerHTML)===Number(slidesLength-1)){
        document.querySelector('#clickArrow').style.color='white';
    }
    else if(this.id === 'clickArrowBack' && Number(sliderNumberElement.innerHTML)===1){
        document.querySelector('#clickArrowBack').style.color='white';
    }

    if( this.id === 'clickArrow' && Number(sliderNumberElement.innerHTML)<slidesLength){
        document.querySelector('#clickArrowBack').style.color='#BDA06A';
        moveSlider();
    }

    else if(this.id === 'clickArrowBack' && Number(sliderNumberElement.innerHTML)>1){
        document.querySelector('#clickArrow').style.color='#BDA06A';
        moveSliderBack();
    }
}

function moveSlider(){
changeNumber();
    sliderArray.forEach((element,ind)=>{
        let currentLeft = parseInt(element.style.left);
        element.style.left= (currentLeft - 100) + "%";
        element.style.transition="all 2s ease";
        element.style.MozTransition="all 2s ease";
        element.style.WebkitTransition="all 2s ease";
        element.style.OTransition="all 2s ease";
    });
}

function moveSliderBack(){
   changeNumber();
    sliderArray.forEach((element,ind)=>{
        let currentLeft = parseInt(element.style.left);
        element.style.left= (currentLeft + 100) + "%";
        element.style.transition="all 2s ease";
        element.style.MozTransition="all 2s ease";
        element.style.WebkitTransition="all 2s ease";
        element.style.OTransition="all 2s ease";       
    });
}

function changeNumber(){

   if(arguments.callee.caller.name == 'moveSlider'){
     return sliderNumberElement.innerHTML=++sliderNumberElement.innerHTML;
   }

   else if(arguments.callee.caller.name == 'moveSliderBack'){
    return sliderNumberElement.innerHTML=--sliderNumberElement.innerHTML;
   }
}



