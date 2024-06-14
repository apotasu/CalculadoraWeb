let x;
let y;
let operador;

function onButtonClick(value){
    x = parseInt(value);
}

function Operador(valor){
    y = x;
    x = 0;
    operador = valor;
}

function resultado(){
    if (operador == '+'){
        return parseInt(x)+parseInt(y);
    } else {
        if (operador == '-'){
            return parseInt(x)-parseInt(y);
        } else {
            if (operador == '/'){
                return parseInt(y)/parseInt(x);
            } else {
                if (operador == '*'){
                    return parseInt(x)*parseInt(y);
            }
        } 
    }
}
}

