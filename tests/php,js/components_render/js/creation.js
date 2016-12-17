const Replaced = function(value_replace, regex_condiction = /#{(.*?)}/gi){

    return value_replace[0].replace(regex_condiction, (x, y) => {

      if(__GLOBAL_DATAsource[y] !== undefined && __GLOBAL_DATAsource[y] !== null &&__GLOBAL_DATAsource[y].constructor === Function){

          return __GLOBAL_DATAsource[y].call() !== undefined && __GLOBAL_DATAsource[y].call() !== null ? __GLOBAL_DATAsource[y].call() : x

      }

      return __GLOBAL_DATAsource[y] !== undefined && __GLOBAL_DATAsource[y] !== null ? __GLOBAL_DATAsource[y] :  x

    })
}


/*
    Metodo de renderização de pagina por meio de component (Custom Elements)
    BEGIN:
*/

// CustomALL with parameter array
const CustomALL = function (options) {

    if(options.constructor === Array){

        options.forEach( option =>{
            //customElements.define(option[0], option[1], option[2] !== undefined ? option[1] : null)
            for(component in option){
                customElements.define(component, option[component][0], option[component][1] !== undefined ? option[component][1] : null)
            }
        })

    }else{
        throw `Expected Parâmeter Array But Passed ${options.constructor}`
    }
}



class View_App extends HTMLElement{

    constructor(template){

        super()
        this.__template = template
    }

    static get observedAttributes() { return ['view'] }

    attributeChangedCallback(atr, oldvalue, newValue){

        if(atr == "view"){



            if(this.hasAttribute('base')){
                this.__template = GLOBAL_templates_View[this.getAttribute('base')]
            }

            this.__template !== undefined && this.__template[newValue] !== undefined? this.innerHTML = Replaced([this.__template[newValue], this]) :
            GLOBAL_templates_View[newValue] !== undefined ? this.innerHTML = Replaced([GLOBAL_templates_View[newValue], this]) :
            this.innerHTML = GLOBAL_templates_View.error !== undefined ? Replaced([GLOBAL_templates_View.error, this]) :
            Replaced([this.__template.error, this])

            __GLOBAL_methods.__init__.call()


        }
    }

    connectedCallback(){

        var viewpage = localStorage.getItem('ViewPage')
        if(viewpage !== undefined && viewpage !== null ){
            this.setAttribute('view', viewpage)

        }
    }
}

class ChangeView extends HTMLElement {

    static get observedAttributes() { return ['elm'] }

    attributeChangedCallback(atr , oldvalue, newValue){

        if(atr == "elm"){



            if(this.hasAttribute('call')){
                var func = this.getAttribute('call')
                this.removeAttribute('call')
            }

            this.addEventListener('click', () => {

                if(func !== undefined)
                  __GLOBAL_methods[func].call()

                __GLOBAL_methods.__init__.call()

                var elm = document.querySelector(this.getAttribute('elm'))
                var atr = this.getAttribute('new-view')
                elm.setAttribute('view', atr)
                localStorage.setItem('ViewPage', atr)


            }, false)
        }
    }
}

class viewNameUser extends HTMLElement {

    constructor(){

        super()
        this.content = "Seja Bem Vindo <b> #{UserName} </b>"
        this.CountUpdates = 0
    }

    connectedCallback(){

          this.div = document.createElement('div')
          this.div.setAttribute('if', "checkIsLoged")
          this.div.setAttribute('class', "user")

          var content = Replaced([this.content])


          this.div.innerHTML = `<i class="fa fa-user-circle" aria-hidden="true"> </i> ${content}`

          this.appendChild(this.div)
          this._updateRendering()

    }

    _updateRendering() {
        this.content.replace(/#{(.*?)}/gi, (x, y) => {
            __GLOBAL_DATAsource.watch(y, () => {
                var content = Replaced([this.content])
                this.div.innerHTML = `<i class="fa fa-user-circle" aria-hidden="true"> </i> ${content}`
            })
        })
    }

}

const ElementsDefine = [

    {
        'view-app':[View_App],
    },

    {
        "change-view":[ChangeView, { extends:"button" } ]
    },

    {
        "wellcome-user":[viewNameUser]
    }

]

CustomALL(ElementsDefine)

// prototype of indexOf for objects
Object.prototype.indexOf = function(atribute){

    var index = -1
    var count =  0
    for(atr in this){
      if(atr == atribute){
         index = count
         break
      }
      count++
    }
    return index
}

//prototype of watch for objects
Object.prototype.watch = function (atribute, callback){

    var old_data = null
    var actual_data = this[atribute].constructor === Function ? this[atribute].call() : this[atribute]
    var call_get
    setInterval( () => {
       call_get = this[atribute].constructor === Function ? this[atribute].call() : this[atribute]
       if(actual_data != call_get) {
         old_data = actual_data
         actual_data = call_get
         var index = this.indexOf(atribute)
         callback(index, old_data, call_get)
       }
    } , 0)
}


//END

/*
    Outro Methodo de renderização para uma aplicação single page
    BEGIN:
*/
var RawRender = function (options, templates){

      var element
      var elm
      var _condiction

      templates !== undefined ? this.templates = templates : null

      options.forEach( option => {

          if(option !== undefined && option[0].constructor !== String)
              _condiction = true
          else
              option = option.split(":")

          elm = _condiction === true ? option[0] : document.querySelector(option[0])
          if(elm.hasAttribute('initial')){

              elm.innerHTML = Replaced(this.templates[option[1]][elm.getAttribute('initial')])

          }

          this[option[1]] = {

              events: (elmevent, templatename) => {

                  elm = _condiction === true ? option[0] : document.querySelector(option[0])

                  elmevent.addEventListener("click", () => {

                      elm.innerHTML = Replaced(this.templates[option[1]][templatename])

                  }, true)
              }

          }

      })

      var docs
      var atr
      docs = document.querySelectorAll("button[RawRender], a[RawRender], input[type='button'][RawRender]")
      docs.forEach( element => {

          atr = element.getAttribute("RawRender")

          if(atr !== undefined && atr !== null){
              atr = atr.split(":")

              if(this[atr[0]] !== undefined){
                  this[atr[0]].events(element, atr[1])
                  element.removeAttribute("RawRender")
              }
          }

      })

}

function veirifyCondictions () {


    document.querySelectorAll('[if]').forEach( elm => {

        var condiction
        var option = elm.getAttribute('if')
        if(option[0] === "!"){
            var option = option.substr(1)
            condiction = true;
        }
        else
            condiction = false

        option = option.split(":")

        if(option[1] !== undefined)
            option[1] = options[1].split(",")

        condiction = condiction === false ? !__GLOBAL_methods[option[0]].call(this, option[1]) : __GLOBAL_methods[option[0]].call(this, option[1])

        if(condiction)
            elm.style.display = "none"

        else{
            elm.style.display = "block"

        }



    })

}

function loadMethods () {

    var elms = document.querySelectorAll('[method]')
    elms.forEach( elm => {
        var options = elm.getAttribute('method').split(":")

        if(options[2] !== undefined)
            options[2] = options[2].split(",")

        elm.addEventListener(options[0], function () { __GLOBAL_methods[options[1]].call(this, options[2]) }, false )
        elm.removeAttribute('method')
    })
}

function Render(){

      var beforestate

      var elms = document.querySelectorAll('[render="true"]')

      elms.forEach( elm => {
          beforestate = elm.innerHTML
          elm.innerHTML = Replaced([beforestate])
      })
}




window.onload = function(){

    __GLOBAL_methods.__init__ !== undefined ? __GLOBAL_methods.__init__.call() : null

    var elmts =  document.querySelectorAll('[RawRenderElement]')
    var atr
    var content = []

    elmts.forEach( (elements, index) => {
        content.push([elements, elements.getAttribute('RawRenderElement')])

    })

    var __Raw = content.length > 0 ? new RawRender(content, GLOBAL_templates_View) : null

}
