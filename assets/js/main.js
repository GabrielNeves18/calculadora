function Calculadora(){
    this.display = document.querySelector('.display');


    this.capturaCliques = () =>{
        document.addEventListener('click', (event) => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.AddNumDisplay(element);
            if(element.classList.contains('btn-del')) this.del();
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-eq')) this.realizaConta();  

        });
    };

    this.AddNumDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus();
    };
    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    }
    this.clear = () => {
        this.display.value = ' ';
    }

    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value)
            if (!conta){
                alert('Conta Inválida');
                return;
            } 
            this.display.value = conta;
        }catch(e){
            alert('Conta Inválida');
            return;
        }
    }

    this.inicia = () =>{
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', (event) =>{
            if(event.keyCode === 13) {
                this.realizaConta();
            }
            
        });
    }
}

let calculadora = new Calculadora();
calculadora.inicia();

