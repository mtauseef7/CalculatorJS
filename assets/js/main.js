let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("display");

let operation = "";


for (let i =0; i < buttons.length; i++)
{
    let button = buttons[i];

    button.addEventListener("click", function(){
        switch(button.classList.contains("action")) {
            case true:
                if (button.classList.contains("operator"))
                {
                    concatOperation(button);
                }

                else (button.classList.contains("action"))
                {
                    callAction(button);
                }

                break;

            case false:
                concatOperation(button);
                break;

            default:
                break;
        }

});

}

function concatOperation(button) {
    if (button.classList.contains("operator")) {
        if(!operation) {
            return;
        }
    }

    operation += button.dataset.value;
    
    display.innerHTML = operation;
}

function callAction(button) {

    switch (button.dataset.value) {
        case "calculate":
            operation = eval(operation).toString();
            display.innerHTML = operation;
            break;

        case "backspace":
            operation = operation.slice(0,-1);
            display.innerHTML = operation;
            break;

        case "clear":
            operation ="";
            display.innerHTML = "";
            break;    
        
    }
}

