<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Rodada {{round}} / {{rounds}}
        </h1>
        <h2>{{messageGame}}</h2>
      </v-flex>

    </v-layout>

    <v-layout 
      wrap 
      text-center 
      align-center
    >
      <v-flex xs5>
        <v-card
          class="mx-auto"
          max-width="344"
          color="#385F73"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              <span style="color: white">{{player1.name}}</span>
            </p>
            <p class="display-1 text--primary">
              <span style="color: white">{{player1.choice}}</span>
            </p>
            <p class="display-1 text--primary">
              <span style="color: white">{{player1.points}}</span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <h1>X</h1>
      </v-flex>
      <v-flex xs5>
        <v-card
          class="mx-auto"
          max-width="344"
          color="#1F7087"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              <span style="color: white">{{player2.name}}</span>
            </p>
            <p class="display-1 text--primary">
              <span style="color: white">{{player2.choice}}</span>
            </p>
            <p class="display-1 text--primary">
              <span style="color: white">{{player2.points}}</span>
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout 
      wrap 
      text-center
    >
      <v-flex xs12>
          <v-btn color="primary" dark large style="margin: 1%" @click="clickButtonChoice('Pedra')" :disabled="disableButton">
            Pedra
          </v-btn>
          <v-btn color="error" dark large style="margin: 1%" @click="clickButtonChoice('Papel')" :disabled="disableButton">
            Papel
          </v-btn>
          <v-btn color="info" dark large style="margin: 1%" @click="clickButtonChoice('Tesoura')" :disabled="disableButton">
            Tesoura
          </v-btn>
      </v-flex>
    </v-layout>

    <v-layout 
      wrap 
      text-center
    >
      <v-flex xs12>
          <v-btn color="success" dark  x-large style="margin: 1%" :disabled="disableButtonNewGame" @click="newGame()">
            Novo jogo
          </v-btn>
      </v-flex>
    </v-layout>

    <v-layout 
      wrap 
      text-center
    >
      <v-flex xs12>
          <h3>Desenvolvido por <a href="http://rbalves.github.io" target="_blank">Rafael Alves</a></h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    round: 1,
    rounds: 5,
    messageGame: 'Aguardando sua escolha...',
    player1: {
      name: "Você",
      choice: "?",
      points: 0
    },
    player2: {
      name: "Máquina",
      choice: "?",
      points: 0
    },
    disableButton: false,
    disableButtonNewGame: false,
  }),
  methods: {
    clickButtonChoice(choice){
      this.player1.choice = choice;
      this.player2.choice = this.randomChoice();
      this.disableButton = true;
      this.disableButtonNewGame = true;
      this.checkWinnerRound();
      setTimeout(this.nextRound, 2000);
    },
    randomChoice(){
      let choices = ['Pedra', 'Papel', 'Tesoura'];
      let min = Math.ceil(0);
      let max = Math.floor(2);
      let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      return choices[numberRandom];
    },
    player1Win(){
      this.player1.points++;
      this.messageGame = 'Você ganhou a rodada!';
    },
    player2Win(){
      this.player2.points++;
      this.messageGame = 'Você perdeu a rodada!';
    },
    checkWinnerRound() {
      if(this.player1.choice.includes(this.player2.choice)){
        this.player1.points++;
        this.player2.points++;
        this.messageGame = "Rodada empatada!";
      }else{
        switch (this.player1.choice) {
          case "Pedra":
            this.player2.choice.includes("Tesoura") ? this.player1Win() : this.player2Win();
            break;
          case "Papel":
            this.player2.choice.includes("Pedra") ? this.player1Win() : this.player2Win();
            break;
          default:
            this.player2.choice.includes("Papel") ? this.player1Win() : this.player2Win();
            break;
        }
      }
    },
    nextRound() {
      this.round++;
      if (this.round <= this.rounds) {
        this.player1.choice = "?";
        this.player2.choice = "?";
        this.messageGame = "Aguardando sua escolha...";
        this.disableButton = false;
        this.disableButtonNewGame = false;
      }else{
        if(this.player1.points > this.player2.points){
            alert("Você ganhou a partida!");
        }else if(this.player1.points < this.player2.points){
            alert("Você perdeu a partida!");
        }else{
            alert("Partida empatada!");
        }
        this.round--;
        this.disableButtonNewGame = false;
      }
      
    },
    newGame() {
      this.round = 1;
      this.player1.choice = "?";
      this.player1.points = 0;
      this.player2.choice = "?";
      this.player2.points = 0;
      this.messageGame = "Aguardando sua escolha...";
      this.disableButton = false;
      this.disableButtonNewGame = false;
    }
  }
};
</script>
