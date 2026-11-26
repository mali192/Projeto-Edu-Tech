/*=====================
1)Pegar os elementos no HTML
=======================*/
//Onde oa cards vao parecer

const listaCursos = document.querySelector("#listaCursos");

//campo de busca
const buscaCursos = document.querySelector("#buscarcursos")  

/*=====================
2)Criar uma variavel para guardar os cursos
=======================*/ 

let cursos =[]; //aqui vai ficar a lista carregada do JSON

/*=====================
3)funcao para carregar o json
=======================*/
async function carregarCursos(){
    //buscar o arquivo cursos.json (como se fosse uma mini api)
const reposta = fetch("../DATA/cursos.json")
 

//Tranformar o json em dados que o js entende 

cursos = await reposta.json();

//depois de carregar, ja renderiza na tela 
rendenrizarCursos(cursos);
}

/*=====================
4)Funcao pra criar os cards na tela 
=======================*/

function rendenrizarCursos(lista){
    //limpa o conteudo antes de desenhar de novo
    listaCursos.innerHTML=""

    //para cada curso da lista, cria um card 
    lista.array.forEach((cursos) => {
        //criar um elemento HTML <div>
        const card = document.createElement("div");

        //coloca uma class (para o CSS estilizar)
        card.classList.add("card-curso");

        //coloca o conteudo dentro do CARD
        card.innerHTML=`
        <a class="curso" href="../PAGES/detalhes-curso.html">
        <h3>${cursos.titulo}</h3>
        img src="${curso.img}"
        <p>${curso.descricao}</p>
        <p><strong>CH:</strong>${curso.cargahoraria}h</p>
        `   

        //coloca o card dentro da lista de cursos
        listaCursos.appendChild(card);

    });

}
/*=====================
5)Busca:Filtrar a lista quando digitar  
=======================*/
buscaCursos.addEventListener("input",function(){
    const texto = buscaCursos.value.tolowerCase();
    
    const filtrados = cursos.filter((curso) =>
    cursos.titulo.tolowerCase().includes(texto)
   );

rendenrizarCursos(filtrados);

})

/*=====================
6)CHAMA A FUNCAO PARA INICIAR TUDO  
=======================*/

carregarCursos();