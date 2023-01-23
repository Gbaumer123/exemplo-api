const url = "http://localhost:5500/api" //retorna o usuario cadastrado nessa rota

const newUser = {   
name: "julio",
avatar: "http://lorempixel.com.br/500/400/",
city: "maringa"
}
const userUpdate = {   
    name: "Joaquim",
    avatar: "http://lorempixel.com.br/500/400/",
    city: "Arapuã"
    }

//getUser significa pegar usuário
function getUser(){  

    axios.get(url) //axios pega a resposta da url e ira trazer
        
    .then(response => { //se der tudo certo entra no then
           
            const data = response.data  // recebo o conteúdo na response.data e armazena na const data
           
            renderResults.textContent = JSON.stringify(data) //acessa o conteúdo de texto da div pelo id e o conteudo da div receberá JSON.STRINGFY(data) que esta armazenando os 
            //elementos da url.  JSON.stringify transforma o objeto em texto
    
            console.log(response)
        })
    
        .catch(error => console.log(error)) //se der algum erro entra no caStch
}
getUser()

//addNewUser adiciona um novo objeto
function addNewUser(){ 
    axios.post(url, newUser) //post envia novo usuario
    .then(response => { //se der tudo certo passa no then
    //console.log(response.data)  //mostra se o obejto foi enviado ou nao, respnde.data mostra a resposta da api
    alert(JSON.stringify(response.data))
    })
    .catch (error => console.log(error)) //chega nele se caso der erro
    }
    //addNewUser()

//atualiza as informações de um usuário
function updateUser(){ 
axios.put (`${url}/2`, userUpdate) // atualiza o id selecionado pelo usuário
    .then(response =>{ 
        alert(response.status)
    })
    .catch (error => {

        alert(error.response.data.message) 
        console.log(error)
    } )
    
} 
//updateUser()



//deleta um usuario
function deleteUser(){ 

    axios.delete(`${url}/4`) //deleta o id selecionado
    .then(response => {
        alert(response.status)
    })
    .catch(error =>{
        alert(error.response.data.message) 
        console.log(error)
    })
}
//deleteUser()


//pesquisa pelo id
function getOneUser(){
    axios.get(`${url}/1`) //mostra só o id selecionado
    .then(response =>{
            const data = response.data 
            renderResults.textContent = JSON.stringify(data) //JSON.STRINGIFY retorna o objeto em texto
    })
    .catch(error =>{ console.log(error)})
}
getOneUser()
