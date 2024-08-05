let buttons = document.querySelectorAll("button");
let string = "";
let result = document.querySelector(".result")



buttons.forEach((button) => {
button.addEventListener("click", (e)=>{
    result.style.color = 'black';
    if (e.target.innerHTML === '=')
        {
            string = eval(string);
            result.value = string;
            result.style.color = 'red';
        }
        else if (e.target.innerHTML == 'C') {
          string = '0';
          result.value = string;

        }
        else {
            string = string + e.target.innerHTML;
            result.value = string;
            console.log(string);
        }








})
})