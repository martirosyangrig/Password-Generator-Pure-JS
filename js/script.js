const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn"),
passLengthSpan = document.querySelector(".pass-length span");


const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
};

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePass);
copyIcon.addEventListener("click", copyPassword);


function generatePass(){
    let password = "";
    let randomPass = "";

    options.forEach((option)=>{
        if(option.checked){
            password += characters[option.id];
        }
    });
    
    for(let i = 0; i < lengthSlider.value; i++){
        randomPass += password[Math.floor(Math.random() * password.length)];
    }
    passwordInput.value = randomPass;
    
}
function updateSlider(){
    passLengthSpan.textContent =  lengthSlider.value;
    generatePass();
    upadatePassIndicator();
}
function copyPassword(){
    navigator.clipboard.writeText(passwordInput.value);
}
function  upadatePassIndicator() {

    if(lengthSlider.value <= 8 ){
        passIndicator.id = "weak";
    } if(lengthSlider.value > 16){
        passIndicator.id = "medium";
    } if(lengthSlider.value > 23){
        passIndicator.id = "strong";
    } if( (lengthSlider.value <= 16 &&  lengthSlider.value > 8) && (options[1].checked || options[2].checked  || options[3].checked) ){
        passIndicator.id = "medium";
    } if( lengthSlider.value > 16  && (options[1].checked || options[2].checked  || options[3].checked)){
        passIndicator.id = "strong";
    }
};
