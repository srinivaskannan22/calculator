function handleClick(event) {
    const element = event.target.innerText; // Get the text content of the clicked element
    const inputElement = document.querySelector(".input");
    inputElement.addEventListener("keydown",(event)=>{
        if(event.key==="Enter"){
            inputElement.value!=''?
            inputElement.value=eval(inputElement.value):inputElement.value="0";
        }
    }) 
    // Select the input element

    // If "C" is clicked, clear the input
    if (element === "C") {
        inputElement.value = ""; // Clear the input field
    } 
    // If "=" is clicked, evaluate the expression
    else if (element === "=") {
        try {
            inputElement.value!=""?
            inputElement.value = eval(inputElement.value):
            inputElement.value="0";
            change();// Evaluate the input content
        } catch {
            inputElement.value = "Error"; // Display error if evaluation fails
        }
    } 
    else if (element=='x'){
        inputElement.value+='*'
    }
    // Otherwise, append the clicked value to the input field
    else {
        inputElement.value += element; // Append the clicked button's value
    }
    blinkedinbox(inputElement)
}

// Select all elements with the class name "input"
function blinkedinbox(inputElement){
    inputElement.style.backgroundColor = 'red';
    setTimeout(() => {
        inputElement.style.backgroundColor = '#fff';  // Reset to original color
    }, 300);
   
}

function change() {
    const inputElement = document.querySelector(".input").value; 
    const outputElement = document.querySelector(".output"); 
    
    // Update the output area with the current input value
    outputElement.textContent = inputElement;
}
document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        b=document.querySelector("input");
        b.focus();
    }
})
document.addEventListener('touchstart',function(event){
        b=document.querySelector("input");
        b.focus();
})



