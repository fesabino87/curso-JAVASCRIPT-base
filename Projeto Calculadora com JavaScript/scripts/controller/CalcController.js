class CalcController {

    constructor(){
        //atributo e similar a uma variavel, porem com mais recursos. Podemos controlçar o atributo, quem pode e quem nao pode acessar ele( privado usa o _)
        //com o this todo lugar dentro dessa classe eu consigo chara o displayCalc e a dataAtual 
        this.initButtonsEvents()
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
    }

    initialize(){
        this.setDisplayDateTime()
        setInterval(()=>{
            this.setDisplayDateTime()
        }, 1000)
    }

    addEventListenerAll(elements, events, fn){

    }

    initButtonsEvents(){
       let buttons = document.querySelector("#buttons > g, #parts > g")

       buttons.forEach((btn, index) =>{
        this.addEventListenerAll("click drag", e =>{

        })
       })
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }

    //os metodos getters e setters permitem definir como acessar os valores 
    get displayTime(){
        return this._timeEl.innerHTML
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value
    }

    get displayDate(){
        return this._dateEl.innerHTML
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value
    }

    get displayCalc(){
        return this._displayCalc.innerHTML
    }
    set displayCalc(value){
        this._displayCalc.innerHTML = value
    }

    get currentDate(){
        return new Date()
    }
    set currentDate(value){
        this._currentDate = value
    }

}













