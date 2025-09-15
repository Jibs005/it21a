class hero{
    shealth;

    constructor(name,health,attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    gethealth(){
      return this.health;
  }
}
 
const hero = new hero("Thorin",100,10);

console.log(hero.gethealth());
