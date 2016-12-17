/*
      * Aqui será registrado todos os templates que pretende-se usar dentro do component view-app ou dos outros elementos
      * em que será usando o segundo metodo de renderização da pagina
      * use um minificador de html para aplicar de uma melhor forma a renderização da página
      * ......

*/

const GLOBAL_templates_View = {

      main:{

          index:'<h2 class = "title"> Título do conteúdo </h2> <button id="btn-remove" type="button" class="typebtn purple" method="click:remove:#btn-remove" name="button"> remove-me </button> <button id="btn-remove2" type="button" class="typebtn red" method="click:remove:#btn-remove2" name="button"> remove-me </button> <button id="btn-remove3" type="button" class="typebtn teal" method="click:remove:#btn-remove3" name="button"> remove-me </button> <button id="btn-remove4" type="button" class="typebtn purple" method="click:remove:#btn-remove4" name="button"> remove-me </button> <button id="btn-remove5" type="button" class="typebtn red" method="click:remove:#btn-remove5" name="button"> remove-me </button> <button id="btn-remove6" type="button" class="typebtn deep_orange" method="click:remove:#btn-remove6" name="button"> remove-me </button> <button id="btn-remove7" type="button" class="typebtn red" method="click:remove:#btn-remove7" name="button"> remove-me </button> <button id="btn-remove8" type="button" class="typebtn purple" method="click:remove:#btn-remove8" name="button"> remove-me </button> <button id="btn-remove9" type="button" class="typebtn teal" method="click:remove:#btn-remove9" name="button"> remove-me </button> <button id="btn-remove10" type="button" class="typebtn purple" method="click:remove:#btn-remove10" name="button"> remove-me </button> <button id="btn-remove11" type="button" class="typebtn red" method="click:remove:#btn-remove11" name="button"> remove-me </button> <button id="btn-remove12" type="button" class="typebtn deep_orange" method="click:remove:#btn-remove12" name="button"> remove-me </button> <button id="btn-remove13" type="button" class="typebtn red" method="click:remove:#btn-remove13" name="button"> remove-me </button> <button id="btn-remove14" type="button" class="typebtn teal" method="click:remove:#btn-remove14" name="button"> remove-me </button> <button id="btn-remove15" type="button" class="typebtn purple" method="click:remove:#btn-remove15" name="button"> remove-me </button> <button id="btn-remove16" type="button" class="typebtn red" method="click:remove:#btn-remove16" name="button"> remove-me </button> <button id="btn-remove17" type="button" class="typebtn purple" method="click:remove:#btn-remove17" name="button"> remove-me </button> <button id="btn-remove18" type="button" class="typebtn deep_orange" method="click:remove:#btn-remove18" name="button"> remove-me </button> <button id="btn-remove19" type="button" class="typebtn teal" method="click:remove:#btn-remove19" name="button"> remove-me </button> <button id="btn-remove20" type="button" class="typebtn red" method="click:remove:#btn-remove20" name="button"> remove-me </button> <button id="btn-remove21" type="button" class="typebtn purple" method="click:remove:#btn-remove21" name="button"> remove-me </button>',
          login:'<h3 class="title title-article"> Login Do usuário </h3> <div class="form col-5"> <form name="formlogin"> <input type="text" class="typeinp-pl teal fade_fc_bc col-10" name="username" placeholder="Usuário"> <input type="password" class="typeinp-pl teal fade_fc_bc col-10" name="password" placeholder="Senha"> <input type="button" class="typebtn teal col-10" method="click:login" value="Logar"> </form> <div id="result"></div></div>',
          ssl:'<h3 class="title title-article"> SSL Info</h3> <div class="content"> <p> <b> SSL </b> é a abreviação de Secure Sockets Layer, ou seja, uma ferramenta de encriptação de páginas antes de serem transmitidas pela internet que autentifica as partes envolvidas. É muito utilizada para pagamentos online com cartão de crédito. Diversas versões dos protocolos de segurança estão em uso generalizado em navegação na web, serviços de e-mail, mensagens instantâneas e VoIP. </br></br> O SSL versão 3.0 foi lançado em 1996 e serviu posteriormente de base para o desenvolvimento do TLS versão 1.0, um protocolo padronizado da IETF originalmente definido pelo RFC 2246. "A criptografia torna muito difícil que pessoas não autorizadas compreendam informações transmitidas entre dois computadores. Portanto é muito improvável que alguém tenha interceptado esta página durante a transmissão pela rede", esta é a mensagem que o Mozilla Firefox exibe ao detectar um certificado de segurança SSL em uma página. </br></br> veja mais em : <a target="_blank" href="http://www.techtudo.com.br/artigos/noticia/2012/01/o-que-e-ssl.html"> TechTudo </a> </p></div>',
          components:'<h3 class="title title-article"> WebComponents </h3> <div class="content"> <p> <b> Componentes Web </b> são um conjunto de normas atualmente sendo produzidos por engenheiros do Google como também uma especificação da W3C que permitem a criação componentes reutilizáveis em documentos e aplicações web. A intenção por trás deles é trazer a engenharia de software baseada em componentes para a web. O modelo de componentes permite encapsulamento e interopabilidade de elementos HTML individuais.</br></br> O suporte para os componentes web está presente em alguns navegadores baseados no WebKit como o Google Chrome o Opera e no Mozilla Firefox (requer alteração manual de configuração). Microsoft Internet Explorer ainda está considerando implementar as especificações de componentes web.[1] A compatibilidade com os navegadores mais antigos é implementada em javascript, conhecido também como <a href="#"> polyfill </a> .</br></br> Componentes Web consistem em 4 elementos principais que podem ser utilizados em conjunto ou separadamente: <ul> <li> Elementos personalizados </li><li> Sombra do DOM </li><li> Importação de HTML </li><li> Modelos HTML </li></ul> <p> Veja Mais Em : <a href="https://pt.wikipedia.org/wiki/Componentes_Web"> Wikipedia </a> </p></p></div>',
          elements:'<h3 class = "title title-article"> Elementos </h3> <button class="typebtn purple fade_bg"> Button 1 </button> <button class="typebtn red"> Button 2 </button> <button class="typebtn teal fade_bg"> Button 3 </button> <button class="typebtn deep_orange"> Button 4 </button> <input class="typeinp purple fade_fc_bc col-12" type="text" name="" placeholder="This is a Input 1"> <input class="typeinp red fade_fc_bc col-10" type="text" name="" placeholder="This is a Input 2"> <input class="typeinp teal fade_fc_bc col-8" type="text" name="" placeholder="This is a Input 3"> <input class="typeinp deep_orange fade_fc_bc col-6" type="text" name="" placeholder="This is a Input 4">',
          form:'<h3 class = "title title-article"> Formulários </h3><div class="form col-4"> <form> <input type="text" class="typeinp-pl deep_orange fade_fc_bc col-11" placeholder="Usuário"> <input type="password" class="typeinp-pl deep_orange fade_fc_bc col-11" placeholder=" Senha"> <input type="button" class="typebtn deep_orange fade_bg col-5" value="Logar"> <input type="button" class="typebtn deep_orange fade_bg col-5" value="Registrar"> </form> </div><div class="form col-4"> <form> <input type="text" class="typeinp-pl purple fade_fc_bc col-11" placeholder="Usuário"> <input type="password" class="typeinp-pl purple fade_fc_bc col-11" placeholder=" Senha"> <input type="button" class="typebtn purple fade_bg col-5" value="Logar"> <input type="button" class="typebtn purple fade_bg col-5" value="Registrar"> </form> </div><div class="form col-4"> <form> <input type="text" class="typeinp-pl red fade_fc_bc col-11" placeholder="Usuário"> <input type="password" class="typeinp-pl red fade_fc_bc col-11" placeholder=" Senha"> <input type="button" class="typebtn red fade_bg col-5" value="Logar"> <input type="button" class="typebtn red fade_bg col-5" value="Registrar"> </form> </div><div class="form col-4"> <form> <input type="text" class="typeinp-pl teal fade_fc_bc col-11" placeholder="Usuário"> <input type="password" class="typeinp-pl teal fade_fc_bc col-11" placeholder=" Senha"> <input type="button" class="typebtn teal fade_bg col-5" value="Logar"> <input type="button" class="typebtn teal fade_bg col-5" value="Registrar"> </form> </div>',
          textrender:'<h3 class = "title title-article"> #{title} </h3> #{content}',
          CepInfo:'<div class="form col-12"> <form id="a_complete" name="autocomplete"> <input type="text" class="typeinp-pl purple fade_fc_bc" placeholder="CEP"> <input type="text" class="typeinp-pl purple fade_fc_bc" placeholder="Rua"> <input type="text" class="typeinp-pl purple fade_fc_bc" placeholder="Bairro"> <input type="text" class="typeinp-pl purple fade_fc_bc" placeholder="Cidade"> <input type="text" class="typeinp-pl purple fade_fc_bc" placeholder="Estado"> <input type="button" value="Send" method="click:autoComplete:#a_complete" class="typebtn purple col-8"> </div></form> </div>',
          error:'<h2 class = "error" > Esta Página Não Está Registrada Nos Templates !! </h2>'
      }
}

const __GLOBAL_DATAsource = {

    title:'Teste Renderização',
    content:'<div class = "content"> <p> <b> Renderização </b> O processo de tratamento digital de imagens e sons consome muitos recursos dos processadores, e pode tornar-se pesado de forma que sua realização em tempo real fica inviável. Neste caso, os softwares trabalham em um modo de baixa resolução para poder mostrar uma visão prévia do resultado. Quando o projeto está concluído, ou em qualquer momento que se queira fazer uma aferição de qual será o resultado final, faz-se a "renderização" do trabalho. </p> </div>',
    Count:1,
    UserName () {
        return localStorage.getItem('username')
    }


}

const __GLOBAL_methods = {

    __init__ () {

        veirifyCondictions()
        loadMethods()
        Render()

    },

    login () {

        var username = document.formlogin.username.value
        var password = document.formlogin.password.value
        var login
        axios.get('accountsteste.json').then( function(response) {

            response.data.forEach( datauser => {

                if(datauser.UserName === username && datauser.Password === password){

                    document.querySelector('#result').innerHTML = "Logado Com Sucesso"
                    localStorage.setItem('sessionLogin', true)
                    localStorage.setItem('username', username)
                    document.querySelector("#allView").setAttribute('view', "index")
                    login = true
                    return
                }
                else
                    login = false


            })

            var result = document.querySelector('#result')
            result !== null ? result.innerHTML = "Dados de usuário incorretos" : null

        }).catch(function(error){
            console.log(error)
        })
    },

    logout (){

        localStorage.setItem('sessionLogin', false)
        localStorage.removeItem('username')

    },

    checkIsLoged (){
        var sessionLogin = localStorage.getItem('sessionLogin')

        if(sessionLogin === "true")
            return true
        else
            return false
    },

    remove (elm) {

        document.querySelector(elm).remove()
    },

    increment () {
        __GLOBAL_DATAsource.Count++
    },

    autoComplete (form) {

        inputs = document.querySelector(form).querySelectorAll('input[type="text"]')

        axios.get(`https://viacep.com.br/ws/${inputs[0].value}/json/`).then(function(response) {

            if(!("error" in response.data)){
              inputs[1].value = response.data.logradouro
              inputs[2].value = response.data.bairro
              inputs[3].value = response.data.localidade
              inputs[4].value = response.data.uf

            }
            else
                console.log("Cep Inválido !")

        }).catch(function(error){
            console.log(error)
        })
    }
}
