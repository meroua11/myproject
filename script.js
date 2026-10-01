

const checkbox1 = getElementById("checkbox1");
const checkbox2 = getElementById("checkbox2");
const textbox = getElementById("textbox");
const result = getElementById("result");
const submitbut = getElementById("submitbut");
let temp ;
submitbut.onclick = function (){
    if(checkbox1.checked){

    }
    else if(checkbox2.checked){

    }
    else{
        result.textContent = "chous a unit"
    }
}