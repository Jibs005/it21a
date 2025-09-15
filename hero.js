class Hero{
    #health;

    constructor(name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    gethealth(){
      return this.#health;
  }
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} use power strike`);
    }
}


const warrior = new Warrior("Thorin",100,10);
warrior.useAbility();
