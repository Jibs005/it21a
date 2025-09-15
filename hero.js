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

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} use fireball`);
    }
}


const warrior = new Warrior("Thorin",100,10);
warrior.useAbility();

const mage = new Mage("Gandalf",80,8,50);
mage.useAbility();
