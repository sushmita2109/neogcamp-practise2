var increaseBtn=document.querySelector('#increase-btn');
var decreaseBtn=document.querySelector('#decrease-btn');
var outputDiv=document.querySelector('#output-div');
var inputText=document.querySelector('#input-text');

function captureText(){
    outputDiv.innerText=inputText.value;
}

function increasefont(){
  captureText();
 outputDiv.style.fontSize="2rem";

}

function decreaseFont(){
    captureText();
 outputDiv.style.fontSize="1rem";
}

increaseBtn.addEventListener('click',increasefont);
decreaseBtn.addEventListener('click',decreaseFont);