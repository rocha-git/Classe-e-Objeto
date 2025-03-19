class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    classe() {
      let ataque;
  
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";
      }
  
      console.log(`${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let classeHeroi = new heroi("Jarvan", "23", "ninja");
  classeHeroi.classe();