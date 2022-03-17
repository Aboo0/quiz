class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  
    question.hide()
  
    background("blue");

    textSize(25);
    text("quiz results: ",400,70)

    Contestant.getPlayerInfo() 

   if(allContestants !== undefined){
  
   var position = 300
   

   fill("pink");
   textSize(20);
   text("o jogador que acertou sera destacado em roxo:" ,130,230)
   }

    for(var jogador in allContestants){

    var respostaCerta = "2";

    if(respostaCerta == allContestants[jogador].answer){

    fill("purple")
    }
    
   else{

   fill("red")
   }
  
   position = position + 30;
    
   textSize(20)
   text (allContestants[jogador].name + ": " + allContestants[jogador].answer, 250,position)


    }
    
  }

}
