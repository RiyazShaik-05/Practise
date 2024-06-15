let buttons = document.querySelectorAll(".buttons button");
let input = document.querySelector("#input");
let first = true;
let afterCalculating = false;
for(let button of buttons){
    button.addEventListener("click", () => {
        if(button.innerText == "="){
            input.value = eval(input.value);
            afterCalculating = true;
        }else if(button.innerText == "AC"){
            input.value = "0";
            first = true;
        }else if(button.innerText == "⌫"){
            input.value = input.value.substring(0,input.value.length -1);
        }else{
            if(first){
                input.value = "";
                input.value += button.innerText;
                first = false;
            }else if(afterCalculating){
                input.value = "";
                input.value += button.innerText;
                afterCalculating = false;
            }else{
                input.value += button.innerText;
            }
        }
    });
}