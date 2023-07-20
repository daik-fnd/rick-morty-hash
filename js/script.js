let rick = document.querySelector(".rick-player");
let morty = document.querySelector(".morty-player");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#container-buttons button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let turnMessage = document.querySelector("#playerTurn p");
let turnContainer = document.querySelector('#playerTurn');
let secondPlayer;

//Contador de jogadas.
let player1 = 0;
let player2 = 0;

//Elementos de click.
for(let i=0; i < boxes.length; i++){

    //quando alguém clica na caixa.
    boxes[i].addEventListener('click', function(){

        let elemento = checkEl(player1, player2);

        //verifica se o espaço já foi usado.
        if(this.childNodes.length == 0){

            let cloneEl = elemento.cloneNode(true);
            this.appendChild(cloneEl);

            //computa as jogadas.
            if(player1 == player2){
                player1++;
                turnMessage.innerHTML = "Agora é a vez do Morty!";

                //jogada ia
                if(secondPlayer == 'solo-player'){
                    computerPlay();
                    turnContainer.classList.add('hide');
                    player2++;
                }

            }
            else{
                player2++;
                turnMessage.innerHTML = "Agora é a vez do Rick!";
            }
        }

        //Checa quem venceu
        checkWinCondition();
    });

};

//evento para saber se é multiplayer ou solo
for(let i=0; i<buttons.length; i++){

    buttons[i].addEventListener("click", function(){
  
      secondPlayer = this.getAttribute("id");
  
      for(let j=0; j < buttons.length; j++){
        buttons[j].style.display = 'none';
      }

      setTimeout(function(){

        let container = document.querySelector("#container-main");
        container.classList.remove("hide");

      },500);

    });
  
  }

//Checa quem vai jogar.
function checkEl(player1, player2){
    if(player1 == player2){
        //vez do rick.
        elemento = rick;

    }
    else{
        //vez do morty.
        elemento = morty;
    }

    return elemento;
}

//Condição de vitória
function checkWinCondition(){

    let b1 = document.getElementById("block1");
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4");
    let b5 = document.getElementById("block5");
    let b6 = document.getElementById("block6");
    let b7 = document.getElementById("block7");
    let b8 = document.getElementById("block8");
    let b9 = document.getElementById("block9");

    //-------- Horizontal -----------------

    //Linha 1 (horizontal)
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length >0){

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "rick-player" && b2Child == "rick-player" && b3Child == "rick-player"){
            declareWinner('rick-player');
        }
        else if(b1Child == "morty-player" && b2Child == "morty-player" && b3Child == "morty-player"){
            declareWinner('morty-player');
        }
    }

    //Linha 2 (horizontal)
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "rick-player" && b5Child == "rick-player" && b6Child == "rick-player"){
             declareWinner('rick-player');
        }
        else if(b4Child == "morty-player" && b5Child == "morty-player" && b6Child == "morty-player"){
            declareWinner('morty-player');
        }
    }

    //Linha 3 (horizontal)
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "rick-player" && b8Child == "rick-player" && b9Child == "rick-player"){
             declareWinner('rick-player');
        }
        else if(b7Child == "morty-player" && b8Child == "morty-player" && b9Child == "morty-player"){
            declareWinner('morty-player');
        }
    }

    //-------- Diagonal -----------------
    //Sentido horário (diaognal)
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "rick-player" && b5Child == "rick-player" && b9Child == "rick-player"){
             declareWinner('rick-player');
        }
        else if(b1Child == "morty-player" && b5Child == "morty-player" && b9Child == "morty-player"){
            declareWinner('morty-player');
        }
    }


    //Sentido antihorário (diaognal)
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        
        if(b3Child == "rick-player" && b5Child == "rick-player" && b7Child == "rick-player"){
             declareWinner('rick-player');
        }
        else if(b3Child == "morty-player" && b5Child == "morty-player" && b7Child == "morty-player"){
            declareWinner('morty-player');
        }
    }

    //-------- Vertical -----------------

    //Coluna 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "rick-player" && b4Child == "rick-player" && b7Child == "rick-player"){
            declareWinner('rick-player');
       }
       else if(b1Child == "morty-player" && b4Child == "morty-player" && b7Child == "morty-player"){
        declareWinner('morty-player');
       }

    }

    //Coluna 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b1Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b1Child == "rick-player" && b5Child == "rick-player" && b8Child == "rick-player"){
            declareWinner('rick-player');
       }
       else if(b1Child == "morty-player" && b5Child == "morty-player" && b8Child == "morty-player"){
           declareWinner('morty-player');
       }

    }

    //Coluna 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "rick-player" && b6Child == "rick-player" && b9Child == "rick-player"){
            declareWinner('rick-player');
       }
       else if(b3Child == "morty-player" && b6Child == "morty-player" && b9Child == "morty-player"){
            declareWinner('morty-player');
       }

    }

    //deu velha

    let cont = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            cont ++;
        }   
    }
    
    if(cont == 9){
        declareWinner("velha");
    }
}

//reinicia o jogo, declara quem ganhou e atualiza a contagem.
function declareWinner(winner){

    let scoreRick = document.querySelector("#scoreboard-1");
    let scoreMorty = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'rick-player'){
        scoreRick.textContent = parseInt(scoreRick.textContent) + 1;
        turnMessage.innerHTML = " ";
        msg = 'Wubba Lubba Dub Dub! Rick venceu essa!!!!'
    }
    else if(winner == 'morty-player'){
        scoreMorty.textContent = parseInt(scoreMorty.textContent) + 1; 
        turnMessage.innerHTML = " ";
        msg = 'Morty venceu essa!!!!'
    }
    else{
        turnMessage.innerHTML = " ";
        msg = 'Ninguém venceu essa!';
    }

    //exibe mensagem
    messageText.innerHTML = msg;

    //remove mensagem
    setTimeout(()=>{
        messageText.innerHTML = '';
    }, 500);

    //zera a jogada
    player1 = 0;
    player2 = 0;

    //reinicia o jogo
    function restartGame(){
        let boxesToRemove = document.querySelectorAll(".box div");
        for(let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }
    setTimeout(restartGame, 500);
}

// executar a lógica de jogada da CPU
function computerPlay(){

    let cloneMorty = morty.cloneNode(true);
    counter = 0;
    filled = 0;

    //Só preencher se estiver vazio
    for(let i=0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined){

            if(randomNumber <= 1){
                boxes[i].appendChild(cloneMorty);
                counter++;
                break;
            }
        }
        //checagem de quantas foram preenchidas
        else{
            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}