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

  getstatus(){
    console.log("name: " + this.name);
    console.log("health: " + this.health);
    console.log("attack: " + this.attack);
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


const Thorin= new Warrior("Thorin",100,10);
Thorin.useAbility();
Thorin.getstatus();

const Gandalf = new Mage("Gandalf",80,8,50);
Gandalf.useAbility();
Gandalf.getstatus();

function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}

performAbility(Thorin);
performAbility(Gandalf);