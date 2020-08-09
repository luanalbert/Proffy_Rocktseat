//procurar o botão 
document.querySelector('#add-time')
//quando clicar no botão
.addEventListener('click', cloneFiel) //addEventListener = ouvinte de eventos nesse caso um click


//executar um ação
function cloneFiel(){
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //const = variável constante, cloneNode(true) é o que vai possibilitar a clonagem do elemento selecionado

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

     // para cada campo limpar
     fields.forEach(function(field){
         // pegar o field do momento e limpa ele
        field.value = ""
     })

     //colocar na pagina
     document.querySelector('#schedule-items').appendChild(newFieldContainer)//especificação da onde o clone vai ser inserido e ta dizendo que deve ser inserido como filho de #schedule-item
    
}

   
