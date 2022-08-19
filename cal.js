
  

let display= document.getElementById('display');


let buttons= Array.from( document.getElementById('click'));



buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                
                    screen.innerText = eval(screen.innerText)

                break;
            default:
                screen.innerText += e.target.innerText;
        }
    });
});



