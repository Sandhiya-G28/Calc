let displayValue='';

function appendToDisplay(value){
    displayValue +=value;
    document.getElementById('display').value=displayValue;
}
function clearDisplay(){
    displayValue='';
    document.getElementById('display').value='';
}
function calculate(){
    try{
        const result = eval(displayValue.replace(/x/g, '*')); 
        document.getElementById('display').value = result;
        displayValue=result.toString();
    }catch(error){
            alert('invalid input');
    }
}


