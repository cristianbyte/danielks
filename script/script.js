window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    console.log(loader);
})

const btnSwitch = document.querySelector('#social-ul');
const ulActive = document.querySelector('#ul');
btnSwitch.addEventListener('click', () =>{
    ulActive.classList.toggle("active");
    btnSwitch.classList.toggle("active");
}); 
/* window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
  
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage;                            //Webkit, Safari, Chrome
}); */