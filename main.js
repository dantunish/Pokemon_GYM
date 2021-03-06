
class Pokemon{
  constructor(name,pokeHealth,pokeAttack,pokeDefense,pokeAbilities,pokePic){
    this.name=name;
    this.pokeHealth=pokeHealth;
    this.pokeAttack=pokeAttack;
    this.pokeDefense=pokeDefense;
    this.pokeAbilities=pokeAbilities;
    this.pokePic=pokePic;

    this.container = document.getElementById('pokeInfo');
    //make a div with classname product
    this.element = document.getElementById('dis');
    this.element.className = 'product';
  }

display(){
  //if statement to check if elements have been created
  let name = document.querySelector("ol");
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);

  this.container.appendChild(this.element);

  let pokeHealth = document.querySelector("ol");
  pokeHealth.innerHTML = "HP: " + this.pokeHealth;
  this.element.appendChild(pokeHealth);

  this.container.appendChild(this.element);


  let pokeAttack = document.querySelector("ol");
  pokeAttack.innerHTML = "Attack: " + this.pokeAttack;
  this.element.appendChild(pokeAttack);

  this.container.appendChild(this.element);

  let pokeDefense = document.querySelector("ol");
  pokeDefense.innerHTML = "Defense: " + this.pokeDefense;
  this.element.appendChild(pokeDefense);

  this.container.appendChild(this.element);

  let pokeAbilities = document.querySelector("ol");
  pokeAbilities.innerHTML = "Ability: " + this.pokeAbilities;
  this.element.appendChild(pokeAbilities);

  this.container.appendChild(this.element);

  let pokePic = document.getElementById("imgHolder");
  pokePic.src = this.pokePic;
  this.element.appendChild(pokePic);

  this.container.appendChild(this.element);

}
}


//**********************************************Kamran's Pokemon***************
function ho_Oh(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/ho-oh.json")
    .then(function(response){

      let name="Ho-oh";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Ho-oh.gif";

      let hooh = new Pokemon(name, hp, attack, defense, ability,pic);
      hooh.display();

});
}

function lu(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/lugia.json")
    .then(function(response){

      let name = "Lugia";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic="Lugia_Shiny.gif";


      let lugia = new Pokemon(name,hp,attack,defense,ability,pic);
      lugia.display();


});
}

function ray(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/rayquaza.json")
    .then(function(response){

      let name="Rayquaza";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic= "Rayquaza.gif";

      let rayquaza = new Pokemon(name,hp,attack,defense,ability,pic);
      rayquaza.display();


});
}

//*******************Event Listener********************************************
let hoOh_Clicker = document.getElementById("pokeBall1");
hoOh_Clicker.addEventListener('click',ho_Oh);

let lugia_Clicker = document.getElementById("pokeBall3");
lugia_Clicker.addEventListener('click',lu);

let ray_Clicker = document.getElementById("pokeBall6");
ray_Clicker.addEventListener('click',ray);


//****************************Kevin's Pokemon****************************************************

function meow(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/meowth.json")
    .then(function(response){

      let name="Meowth";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic= "meowthstrum.gif";

      let meowth = new Pokemon(name,hp,attack,defense,ability,pic);
      meowth.display();


});
}

function arb(){
axios.get
  ("https://fizal.me/pokeapi/api/v2/name/meowth.json")
    .then(function(response){

      let name="Arbok";

      let hp = response.data.stats[5].base_stat;
      console.log("HP: ", hp);

      let ability = response.data.abilities[0].ability.name;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }

      let attack= response.data.stats[4].base_stat;
      console.log("Attack: ", attack);

      let defense= response.data.stats[3].base_stat;
      console.log("Defense: ", defense);

      let pic= "arbokhiss.gif";

      let arbok = new Pokemon(name,hp,attack,defense,ability,pic);
      arb.display();


});

function wobb(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/wobbuffet.json")
      .then(function(response){

        let name="Wobbuffet";

        let hp = response.data.stats[5].base_stat;
        console.log("HP: ", hp);

        let ability = response.data.abilities[0].ability.name;
        for (var i = 0; i < response.data.abilities.length; i++) {
          let results= response.data.abilities[i].ability.name;
          console.log("Abilities: ", results);
        }

        let attack= response.data.stats[4].base_stat;
        console.log("Attack: ", attack);

        let defense= response.data.stats[3].base_stat;
        console.log("Defense: ", defense);

        let pic= "wobbuffetfood.gif";

        let wobbuffet = new Pokemon(name,hp,attack,defense,ability,pic);
        wobbuffet.display();


  });
}

//**************************************Ana's Pokemon**************************
function charman(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/charmander.json")
      .then(function(response){

        let name="Charmander";

        let hp = response.data.stats[5].base_stat;
        console.log("HP: ", hp);

        let ability = response.data.abilities[0].ability.name;
        for (var i = 0; i < response.data.abilities.length; i++) {
          let results= response.data.abilities[i].ability.name;
          console.log("Abilities: ", results);
        }

        let attack= response.data.stats[4].base_stat;
        console.log("Attack: ", attack);

        let defense= response.data.stats[3].base_stat;
        console.log("Defense: ", defense);

        let pic= "arbokhiss.gif";

        let charmander = new Pokemon(name,hp,attack,defense,ability,pic);
        charmander.display();


  });
}

function turtle(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/squirtle.json")
      .then(function(response){

        let name="Squirtle";

        let hp = response.data.stats[5].base_stat;
        console.log("HP: ", hp);

        let ability = response.data.abilities[0].ability.name;
        for (var i = 0; i < response.data.abilities.length; i++) {
          let results= response.data.abilities[i].ability.name;
          console.log("Abilities: ", results);
        }

        let attack= response.data.stats[4].base_stat;
        console.log("Attack: ", attack);

        let defense= response.data.stats[3].base_stat;
        console.log("Defense: ", defense);

        let pic= "arbokhiss.gif";

        let squirtle = new Pokemon(name,hp,attack,defense,ability,pic);
        squirtle.display();


  });
}


function jigg(){
  axios.get
    ("https://fizal.me/pokeapi/api/v2/name/jigglypuff.json")
      .then(function(response){

        let name="Jigglypuff";

        let hp = response.data.stats[5].base_stat;
        console.log("HP: ", hp);

        let ability = response.data.abilities[0].ability.name;
        for (var i = 0; i < response.data.abilities.length; i++) {
          let results= response.data.abilities[i].ability.name;
          console.log("Abilities: ", results);
        }

        let attack= response.data.stats[4].base_stat;
        console.log("Attack: ", attack);

        let defense= response.data.stats[3].base_stat;
        console.log("Defense: ", defense);

        let pic= "arbokhiss.gif";

        let jigglypuff = new Pokemon(name,hp,attack,defense,ability,pic);
        jigglypuff.display();


  });
}
