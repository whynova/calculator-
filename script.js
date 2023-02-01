class Calculator{
    constructor(currout,prevout)
    {
        this.currout = currout;
        this.prevout = prevout;
        this.clear();
    }
    clear(){
        this.currentout='';
        this.previousout='';
        this.operation=undefined;
    }
    appendnum(number){
        if(number==='.' && this.currentout.includes('.'))return;

        this.currentout= this.currentout.toString()+ number.toString();
    }
    delete(){
        this.currentout= this.currentout.toString().slice(0,-1);


    }
    selope(op){

        if(this.currentout==='')
        return;
        if(this.previousout !== '')
        {this.compute();}
        this.op = op;
        this.previousout=this.currentout;
        this.currentout='';


    }
    compute(){
        let computation ;
        var prev = parseFloat(this.previousout);
        var curr = parseFloat(this.currentout);
        
        if(isNaN(prev) || isNaN(curr))
        return;
        switch(this.op){
            case '+': 
                computation= prev+curr;
                break;
            case '-' : 
                computation = prev-curr;
                break;
            case '*' :
                computation = prev*curr;
                break;
            case '÷' :
                computation = prev/curr;
                break;
            default :
                return;

        }
        this.currentout = computation;
        this.op = undefined;
        this.previousout='';


    }
    updatetodisp(){
        //console.log(this.currout);
        this.currout.innerText= this.currentout;
        if(this.op!=null)
        {
            this.prevout.innerText=
            `${this.previousout} ${this.op}`;
        }
        else
        {
            this.prevout.innerText = this.previousout;
        }
        
    }

};
const num = document.querySelectorAll('[data-number]');
const opr = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const delbtn = document.querySelector('[data-delete]');
const acbtn = document.querySelector('[data-all-clear]');
const currout = document.querySelector('[data-current-operand]');
const prevout = document.querySelector('[data-previous-operand]');

const calculator = new Calculator(currout,prevout);

num.forEach(button=>{
    button.addEventListener('click',()=>{
    calculator.appendnum(button.innerText);
    calculator.updatetodisp();
    })
})
opr.forEach(button=>{
    button.addEventListener('click',()=>{
    calculator.selope(button.innerText);
    calculator.updatetodisp();
    })
})
equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updatetodisp()
  })
  acbtn.addEventListener('click',btn=>{
      calculator.clear();
      calculator.updatetodisp();
  })

  delbtn.addEventListener('click',btn=>{
    calculator.delete();
    calculator.updatetodisp();
})