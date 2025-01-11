// check if input enter a empy
function checkIfEmpty(checkResponse) {
  if (checkResponse === null) {
    console.log("Game master canceled the prompt!");
    return false;
  } else if (checkResponse.trim() === "") {
    alert("You have entered an empty string.");
    return false;
  } else {
    return true;
  }
}

// for pokemon
class Pokemon {
  constructor(name, type, level, maxHp, defense, damage, criticalChance) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = maxHp;
    this.maxHp = maxHp;
    this.defense = defense;
    this.damage = damage;
    this.criticalChance = criticalChance;
    this.attackName = [
      `${type} Basic Attack!`,
      `${type} Secondary Attack!`,
      `${type} ULTIMATE Attack!`,
    ];
    this.cooldown = [
      [true, true, true, true, true],
      [true, true, true, true],
    ];
    this.isFainted = false;
  }
  attack(opponent) {
    // declaring the damage of the attacks
    let damageToOpponent;
    // identifying whats attack used
    let isUltimateReady = this.cooldown[0].every(function (coold) {
      return coold == true;
    });
    let isSecondaryReady = this.cooldown[1].every(function (coold) {
      return coold == true;
    });
    let useAttack;
    this.displayAvailabeAttack(isSecondaryReady, isUltimateReady);
    if (isUltimateReady) {
      useAttack = 2;
      damageToOpponent = this.damage * 2.5;
      this.cooldown.forEach(function (cooldown, index) {
        if (index == 0) {
          cooldown.forEach(function (coold, index) {
            cooldown[index] = false;
          });
        } else {
          cooldown.sort();
          cooldown[0] = true;
        }
      });
    } else if (isSecondaryReady) {
      useAttack = 1;
      damageToOpponent = this.damage * 1.5;
      this.cooldown.forEach(function (cooldown, index) {
        if (index == 1) {
          cooldown.forEach(function (coold, index) {
            cooldown[index] = false;
          });
        } else {
          cooldown.sort();
          cooldown[0] = true;
        }
      });
    } else {
      useAttack = 0;
      damageToOpponent = this.damage;
      this.cooldown.forEach(function (cooldown, index) {
        cooldown.sort();
        cooldown[0] = true;
      });
    }

    // switch is to indetify type and change background color based on it
    switch (this.type) {
      case "Water":
        console.log(
          `${this.name} used an %c💧 ${this.attackName[useAttack]}`,
          "background: #489fb5; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name}`
        );
        break;
      case "Fire":
        console.log(
          `${this.name} used an %c🔥 ${this.attackName[useAttack]}`,
          "background: #d00000; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name}`
        );
        break;
      case "Electric":
        console.log(
          `${this.name} used an %c⚡ ${this.attackName[useAttack]}`,
          "background: #ffd60a; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
        z;
      case "Poison":
        console.log(
          `${this.name} used an %c☠️ ${this.attackName[useAttack]}`,
          "background: #001219; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
      case "Flying":
        console.log(
          `${this.name} used an %c🌟${this.attackName[useAttack]}`,
          "background: linear-gradient(to bottom, #ffffcc 0%, #00ffcc 100%); color: black; padding: 10px; font-weight: bold; border: solid 1px black; font-size: 20px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
      case "Legendary":
        console.log(
          `${this.name} used an %c${this.attackName[useAttack]} ⚔️`,
          "background: linear-gradient(to bottom, #ff7f50 0%, #1e90ff 100%); color: white; padding: 10px; font-weight: bold; border: solid 1px black; font-size: 20px; border-radius: 10px;",
          ` on ${opponent.name} `
        );

        break;
    }
    // critical hit is depends on outcome its either true or false
    // critaacal probability depends on critical chance
    if (this.criticalHit(this.criticalChance)) {
      console.log(
        `%c💥 Critical hit! Damage: ${damageToOpponent * 2} `,
        "background: #d62828; color: #ffffff; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
      );
      opponent.damageReceived(damageToOpponent * 2);
    } else {
      console.log(
        `%c⚔️ Regular hit! Damage: ${damageToOpponent} `,
        "background: #f77f00; color: #ffffff; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
      );
      opponent.damageReceived(damageToOpponent);
    }
  }
  displayAvailabeAttack(skill2, ultimate) {
    let skill2Status = skill2 ? "Ready ⚔️" : "On cooldown ⏳";
    let ultimateStatus = ultimate ? "Ready ⚔️" : "On cooldown ⏳";
    console.log(
      `%cSecondary Attack: ${skill2Status} | Ultimate Attack: ${ultimateStatus}`,
      "background: #007BFF; color: white; padding: 10px; font-size: 15px; border-radius: 10px; font-weight: bold;"
    );
  }
  // gameMasterAttack
  gameMAsterAttack(opponent, numberOfAttack) {
    // declaring the damage of the attacks
    let damageToOpponent;
    let useAttack;
    if (numberOfAttack == 2) {
      useAttack = 2;
      damageToOpponent = this.damage * 2.5;
      this.cooldown.forEach(function (cooldown, index) {
        if (index == 0) {
          cooldown.forEach(function (coold, index) {
            cooldown[index] = false;
          });
        } else {
          cooldown.sort();
          cooldown[0] = true;
        }
      });
    } else if (numberOfAttack == 1) {
      useAttack = 1;
      damageToOpponent = this.damage * 1.5;
      this.cooldown.forEach(function (cooldown, index) {
        if (index == 1) {
          cooldown.forEach(function (coold, index) {
            cooldown[index] = false;
          });
        } else {
          cooldown.sort();
          cooldown[0] = true;
        }
      });
    } else if (numberOfAttack == 0) {
      useAttack = 0;
      damageToOpponent = this.damage;
      this.cooldown.forEach(function (cooldown, index) {
        cooldown.sort();
        cooldown[0] = true;
      });
    }

    // switch is to indetify type and change background color based on it
    switch (this.type) {
      case "Water":
        console.log(
          `${this.name} used an %c💧 ${this.attackName[useAttack]}`,
          "background: #489fb5; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name}`
        );
        break;
      case "Fire":
        console.log(
          `${this.name} used an %c🔥 ${this.attackName[useAttack]}`,
          "background: #d00000; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name}`
        );
        break;
      case "Electric":
        console.log(
          `${this.name} used an %c⚡ ${this.attackName[useAttack]}`,
          "background: #ffd60a; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
        z;
      case "Poison":
        console.log(
          `${this.name} used an %c☠️ ${this.attackName[useAttack]}`,
          "background: #001219; color: white; padding: 10px; font-size: 15px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
      case "Flying":
        console.log(
          `${this.name} used an %c🌟${this.attackName[useAttack]}`,
          "background: linear-gradient(to bottom, #ffffcc 0%, #00ffcc 100%); color: black; padding: 10px; font-weight: bold; border: solid 1px black; font-size: 20px; border-radius: 10px; display: inline-block;",
          ` on ${opponent.name} `
        );
        break;
      case "Legendary":
        console.log(
          `${this.name} used an %c${this.attackName[useAttack]} ⚔️`,
          "background: linear-gradient(to bottom, #ff7f50 0%, #1e90ff 100%); color: white; padding: 10px; font-weight: bold; border: solid 1px black; font-size: 20px; border-radius: 10px;",
          ` on ${opponent.name} `
        );
        break;
    }

    // critical hit is depends on outcome its either true or false
    // critaacal probability depends on critical chance
    if (this.criticalHit(this.criticalChance)) {
      console.log(
        `%c💥 Critical hit! Damage: ${damageToOpponent * 2} `,
        "background: #d62828; color: #ffffff; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
      );
      opponent.damageReceived(damageToOpponent * 2);
    } else {
      console.log(
        `%c⚔️ Regular hit! Damage: ${damageToOpponent} `,
        "background: #f77f00; color: #ffffff; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
      );
      opponent.damageReceived(damageToOpponent);
    }
  }
  // evovle if reach lvl 15
  pokemonEvolve() {
    this.type = "Legendary";
    this.attackName = this.attackName.map(function (attack) {
      return "Legendary " + attack;
    });
    console.log(
      `%c🌟 ${this.name} is now a Legendary Pokemon!!!`,
      "background: linear-gradient(to bottom, #ffffcc 0%, #00ffcc 100%); color: black; padding: 15px; font-weight: bold; font-size: 20px; border-radius: 10px; display: inline-block;"
    );
  }

  damageReceived(damage) {
    // check first if the pokemon has no defense left
    if (this.defense <= 0) {
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(
          `%c💀 ${this.name} has fainted!`,
          "color: grey; font-weight: bold; text-transform: uppercase; font-size: 15px; padding: 10px; border-radius: 5px; background: #f0f0f0; display: inline-block;"
        );
        this.hp = 0;
      } else {
        console.log(
          `%c❤️ ${this.name} has ${this.hp} HP left`,
          "color: white; background: red; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
        );
      }
    } else {
      // check if the defense is greater that damage
      if (this.defense >= damage) {
        this.defense -= damage;
        console.log(
          `%c🛡️ Shield has been used, ${this.name} has ${this.defense} defense left`,
          "color: white; background: blue; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
        );
      } else {
        // subtracting damage and defense the total will be subtract in hp
        let damageRemaining = damage - this.defense;
        this.hp -= damageRemaining;
        this.defense = 0;
        if (this.hp <= 0) {
          console.log(
            `%c💀 ${this.name} has fainted!`,
            "color: grey; font-weight: bold; text-transform: uppercase; font-size: 15px; padding: 10px; border-radius: 5px; background: #f0f0f0; display: inline-block;"
          );
        } else {
          console.log(
            `%c🛡️ All remaining shield has been used.  ${this.name} has ${this.hp} HP left`,
            "color: white; background: orange; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
          );
        }
      }
    }
    if (this.hp < 0) this.hp = 0;
  }

  levelUp() {
    // level up if the pokemon win battle and when the pokemon reach level 5, 10, and 15 the level up will give more that its usual
    this.level += 1;
    console.log(
      `%c⭐ ${this.name} is now on level ${this.level}!`,
      "background: #ffff3f; color: black; padding: 10px; font-weight: bold; border: solid 1px black; border-radius: 5px; display: inline-block;"
    );
    if (this.level == 5) {
      this.damage *= 2;
      this.defense += 25;
      this.maxHp *= 2;
      this.criticalChance += 0.05;
      // sort to make sure that i remove a false item in array
      this.cooldown[1].sort();
      // remove 1 match calldown for 2nd Skill
      let remove2ndCooldown = this.cooldown[1].shift();
    } else if (this.level == 10) {
      this.damage = Math.round(this.damage * 2.5);
      this.defense += 50;
      this.maxHp = Math.round(this.maxHp * 2.5);
      this.criticalChance += 0.15;
      // sort to make sure that i remove a false item in array
      this.cooldown[0].sort();
      // remove 1 match calldown for Ultimate Skill
      let removeUltimateCooldown = this.cooldown[0].shift();
    } else if (this.level == 15) {
      this.damage = Math.round(this.damage * 3);
      this.defense += 100;
      this.maxHp = Math.round(this.maxHp * 3);
      this.criticalChance += 0.2;
      this.pokemonEvolve();
      // sort to make sure that i remove a false item in array
      this.cooldown[0].sort();
      this.cooldown[1].sort();
      // remove 1 match calldown for Ultimate and 2nd Skill
      let removeUltimate1Cooldown = this.cooldown[0].shift();
      let removeSecond1Cooldown = this.cooldown[1].shift();
    } else {
      // normal level up
      this.damage = Math.round(this.damage * 1.5);
      this.defense += 10;
      this.maxHp = Math.round(this.maxHp * 1.5);
    }
    console.log(
      `This is second attack: ${this.cooldown[1]}\nThis is ultimate attack: ${this.cooldown[0]}`
    );
    console.log(
      `%c 💔 HP ${this.hp} | ❤️ MAX-HP ${this.maxHp} | 🛡️ DEFENSE ${
        this.defense
      } | ⚔️ DAMAGE ${this.damage} | 🎯 CRIT. CHANCE ${Math.round(
        this.criticalChance * 100
      )}% |`,
      "background: #ffff3f; color: black; padding: 10px; font-weight: bold; border: solid 1px black; border-radius: 5px; display: inline-block;"
    );
  }
  //  to randomize crtical depending on critical chacne
  criticalHit(criticalChance) {
    const randomNumber = Math.random();
    if (randomNumber <= criticalChance) {
      return true;
    } else {
      return false;
    }
  }
}
// For trainer
class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }
  // for shwong available pokemons i used arraMadeinBattle because
  // i created a new array in the tournament battle and thats what i identify here
  showAvailablePokemons(arrayMadeinBattle) {
    console.log(
      `%c${this.name} available pokemon's;`,
      "font-size: 15px; margin-top: 10px"
    );
    for (let i = 0; i < arrayMadeinBattle.length; i++) {
      if (!arrayMadeinBattle[i].isFainted) {
        console.log(
          `%c${i + 1}. ${arrayMadeinBattle[i].name} | LVL: ${
            arrayMadeinBattle[i].level
          } | HP: ${arrayMadeinBattle[i].hp} | MAX-HP: ${
            arrayMadeinBattle[i].maxHp
          } | TYPE: ${arrayMadeinBattle[i].type} | DEFENSE: ${
            arrayMadeinBattle[i].defense
          }`,
          "background: #007BFF; padding: 10px; color: white; margin: 2px; border-radius: 1rem; font-weight: bold; display: inline-block;"
        );
      }
    }
  }
  checkAvailableAttack(pokemon) {
    // identifying whats attack used
    let isUltimateReady = pokemon.cooldown[0].every(function (coold) {
      return coold == true;
    });
    let isSecondaryReady = pokemon.cooldown[1].every(function (coold) {
      return coold == true;
    });
    pokemon.displayAvailabeAttack(isSecondaryReady, isUltimateReady);
    console.log(
      `%cHey ${this.name}, Its your pokemon: ${pokemon.name} turn to attack!`,
      "background: #28a745; color: white; padding: 10px; font-size: 15px; border-radius: 10px;"
    );
    if (isUltimateReady && isSecondaryReady) {
      let attackChoice = prompt(
        `Which attack would you like to use?\n1. Basic Attack\n2. Secondary Attack\n3. ULTIMATE Attack`
      );
      // Check if the user cancelled the prompt
      if (attackChoice === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        return;
      }
      switch (attackChoice) {
        case "1":
          return 0;
        case "2":
          return 1;
        case "3":
          return 2;
        default:
          alert("Invalid choice. Please try again.");
          return this.checkAvailableAttack(pokemon);
      }
    } else if (isUltimateReady) {
      let attackChoice = prompt(
        `Which attack would you like to use?\n1. Basic Attack\n2. ULTIMATE Attack`
      );
      // Check if the user cancelled the prompt
      if (attackChoice === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        return;
      }
      switch (attackChoice) {
        case "1":
          return 0;
        case "2":
          return 2;
        default:
          alert("Invalid choice. Please try again.");
          return this.checkAvailableAttack(pokemon);
      }
    } else if (isSecondaryReady) {
      let attackChoice = prompt(
        `Which attack would you like to use?\n1. Basic Attack\n2. Secondary Attack`
      );
      // Check if the user cancelled the prompt
      if (attackChoice === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        return;
      }
      switch (attackChoice) {
        case "1":
          return 0;
        case "2":
          return 1;
        default:
          alert("Invalid choice. Please try again.");
          return this.checkAvailableAttack(pokemon);
      }
    } else {
      let attackChoice = prompt(
        `Which attack would you like to use?\n1. Basic Attack`
      );
      // Check if the user cancelled the prompt
      if (attackChoice === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        return;
      }
      switch (attackChoice) {
        case "1":
          return 0;
        default:
          alert("Invalid choice. Please try again.");
          return this.checkAvailableAttack(pokemon);
      }
    }
  }
  // This funtion is for reviving all of the pokemon once the match is over
  allPokemonBecomeStrong() {
    this.pokemons = this.pokemons.map(function (pokemon) {
      pokemon.hp = pokemon.maxHp;
      pokemon.isFainted = false;
      return pokemon;
    });
    console.log(
      `%c❤️ All ${this.name} pokemons has gained full HP and recovered!`,
      "background: green; color: white; padding: 10px; font-size: 15px; border-radius: 5px; display: inline-block;"
    );
    console.log(
      `%cThis happens after every battle.`,
      "background: #f0f0f0; color: black; padding: 10px; font-size: 12px; border-radius: 5px; display: inline-block; margin-top: 5px;"
    );
  }
  choosePokemon() {
    // random choose for battle in tournament
    const randomIndex = Math.floor(Math.random() * this.pokemons.length);
    return this.pokemons[randomIndex];
  }
}
// for game master
class gameMaster {
  constructor(name, trainers, pokemonList, isPlaying) {
    this.name = name;
    this.trainers = trainers;
    this.pokemonList = pokemonList;
    // i declared empty array to determine who is in upper/winner bracker and loser/lower brackert
    this.winnerBracket = [];
    this.loserBracket = [];
    this.numOfTrainer = 0;
    this.numOfPokemon = 0;
    this.winner;
    this.isPlaying = isPlaying;
  }
  // Welcome function is to display all contestan/trainers before it start
  welcome() {
    console.log(
      "%c🏆 Welcome to the Tournament!",
      "background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color: #fffcf2; font-weight: bold; padding: 20px; font-size: 20px; border-radius: 10px;"
    );
    console.log(
      "%cThe tournament will begin shortly.\n",
      "color: #4CAF50; font-weight: bold; font-size: 16px;"
    );
    console.log(
      "%cContestants:",
      "color: #2196F3; font-weight: bold; font-size: 16px;"
    );
    // for loop for console the players
    for (let i = 0; i < this.trainers.length; i++) {
      console.log(
        `%c${i + 1}. ${this.trainers[i].name}`,
        "color: #555; font-size: 14px; padding: 5px; border-radius: 5px; background: #f0f0f0; margin: 2px 0;"
      );
    }
    console.log("\n");
    console.log(
      "%cLet the tournament begin!",
      "color: #FF5722; font-weight: bold; font-size: 16px;"
    );
  }
  mainMenu() {
    // this the first screen shows up after entring the trainers and pokemons
    let choice;
    //  while loop switch for the choices of the game master
    while (true) {
      choice = prompt(
        `Hello Game master ${this.name}! Welcome to the Pokemon World!\n\n1. Start Tournament\n2. Exit`
      );
      if (choice === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        break; // Exit the loop if user cancels
      }
      switch (choice) {
        case "1":
          this.enterTrainer();
          // Call start game function here
          return;
        case "2":
          this.exit();
          return;
        default:
          alert(
            "Invalid choice. Please try again.\nChoose only between number 1 and 2 "
          );
          this.mainMenu();
          return;
      }
    }
  }
  // This is function is for identifying how many the trainer are
  enterTrainer() {
    let gameMaster;
    if (this.isPlaying) {
      gameMaster = new Trainer(this.name);
    }
    while (true) {
      let numberOfTrainer = prompt(
        `HELLO ${this.name}! Please enter the number of trainers.`
      );
      if (numberOfTrainer === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        break; // Exit the loop if user cancels
      }
      if (numberOfTrainer == "5") {
        this.numOfTrainer = 5;
        this.isPlaying
          ? this.removeTrainerRandomlyAndAddGameMaste(gameMaster)
          : this.enterPokemon();
        break;
      } else if (numberOfTrainer == "4") {
        this.randomRemoveTrainer(1);
        this.numOfTrainer = 4;
        this.isPlaying
          ? this.removeTrainerRandomlyAndAddGameMaste(gameMaster)
          : this.enterPokemon();
        break;
      } else if (numberOfTrainer == "3") {
        this.randomRemoveTrainer(2);
        this.numOfTrainer = 3;
        this.isPlaying
          ? this.removeTrainerRandomlyAndAddGameMaste(gameMaster)
          : this.enterPokemon();
        break;
      } else {
        alert(
          "Invalid choice. Please try again.\nChoose only between number 3, 4 and 5 "
        );
      }
    }
  }
  // for identifiying how many pokemons are
  enterPokemon() {
    while (true) {
      let numOfPokemon = prompt(`Next, please enter the number of Pokemon.`);
      if (numOfPokemon === null) {
        console.log(`${this.name} cancelled, Exiting..`);
        break; // Exit the loop if user cancels
      }

      if (numOfPokemon == "5" || numOfPokemon == "4" || numOfPokemon == "3") {
        this.numOfPokemon = parseInt(numOfPokemon); // Assign number of Pokemon as integer
        this.distributePokemon(); //Randomized the pokemons each trainer
        this.startMatch(); //Start the tournamnt
        this.roundRobinMatchmaking(this.winnerBracket); //Calling the roundRobin if the remaing 3 has been identify
        break;
      } else {
        alert(
          "Invalid choice. Please try again.\nChoose only between number 3, 4 and 5 "
        );
        // if the user input invalid
      }
    }

    if (this.winner) {
      alert("The tournament has just ended");
      const element = document.getElementById("champ");
      element.innerHTML = this.winner;
    }
  }
  startMatch() {
    this.welcome();
    if (this.numOfTrainer == 5) {
      this.bracketBattlefor5("game1");
      this.bracketBattlefor5("game2");
      this.bracketBattlefor5("game3");
      this.bracketBattlefor5("game4");
      this.bracketBattlefor5("game5");
    } else if (this.numOfTrainer == 4) {
      this.bracketBattlefor4("game1");
      this.bracketBattlefor4("game2");
      this.bracketBattlefor4("game3");
    } else if (this.numOfTrainer == 3) {
      this.winnerBracket = this.trainers;
    }
  }
  exit() {
    // Confrimation if the user really want to exit the game
    let confirmExit = confirm(
      `${this.name}, are you sure you want to exit the game?`
    );
    if (confirmExit) {
      console.log(`${this.name} has exited the game.`);
      return;
    } else {
      this.mainMenu(); // return to main menu if exit is canceled
    }
  }
  bracketBattlefor5(gameNumber) {
    let trainer1, trainer2;
    // game 1, 2, 3, to lower bracket
    // game 4 and 5
    if (gameNumber == "game1" || gameNumber == "game2") {
      trainer1 = this.trainers.shift();
      trainer2 = this.trainers.shift();
      console.log(
        `%c${gameNumber.toUpperCase()} - UPPER BRACKET MATCH IS BETWEEN ${
          trainer1.name
        } vs ${trainer2.name} `,
        "background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
      );
    } else if (gameNumber == "game3") {
      trainer1 = this.winnerBracket.shift();
      trainer2 = this.trainers.shift();
      console.log(
        `%c${gameNumber.toUpperCase()} - UPPER BRACKET MATCH IS BETWEEN ${
          trainer1.name
        } vs ${trainer2.name} `,
        "background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
      );
    } else if (gameNumber == "game4" || gameNumber == "game5") {
      trainer1 = this.loserBracket.shift();
      trainer2 = this.loserBracket.shift();
      console.log(
        `%c${gameNumber.toUpperCase()} - LOWER BRACKET MATCH IS BETWEEN ${
          trainer1.name
        } vs ${trainer2.name} `,
        "background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
      );
    }
    this.battle(trainer1, trainer2, gameNumber, true);
  }
  // Battle for 4 trainers
  bracketBattlefor4(gameNumber) {
    let trainer1, trainer2;
    // game 1, 2, from winner bracket
    // game 3 from lower bracker
    if (gameNumber == "game1" || gameNumber == "game2") {
      trainer1 = this.trainers.shift();
      trainer2 = this.trainers.shift();
      console.log(
        `%c${gameNumber.toUpperCase()} - UPPER BRACKET MATCH IS BETWEEN ${
          trainer1.name
        } vs ${trainer2.name} `,
        "background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
      );
    } else if (gameNumber == "game3") {
      trainer1 = this.loserBracket.shift();
      trainer2 = this.loserBracket.shift();
      console.log(
        `%c${gameNumber.toUpperCase()} - LOWER BRACKET MATCH IS BETWEEN ${
          trainer1.name
        } vs ${trainer2.name} `,
        "background: linear-gradient(to bottom, #33ccff 0%, #ff0000 100%); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
      );
    }
    this.battle(trainer1, trainer2, gameNumber, false);
  }
  // battle for 2 trainers
  battle(trainer1, trainer2, gameNumber, isBattleFor5) {
    let stillHadPokemon = true;
    let numOfPokemonFight = 0;
    // while loop untni one of the trainer has no pokemon left
    while (stillHadPokemon) {
      let trainer1Pokemons = trainer1.pokemons.filter(function (pokemon) {
        if (!pokemon.isFainted) {
          return pokemon;
        }
      });
      let trainer2Pokemons = trainer2.pokemons.filter(function (pokemon) {
        if (!pokemon.isFainted) {
          return pokemon;
        }
      });
      // check if the trainer1 has no pokemon left
      if (trainer1Pokemons.length == 0) {
        stillHadPokemon = false;
        console.log(
          `%c⚔️ ${trainer1.name} has no pokemon left. ${trainer2.name} wins the battle! 🏆`,
          "background: linear-gradient(to right, #ff0000, #ffcc00); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);"
        );
        if (isBattleFor5) {
          if (
            gameNumber == "game1" ||
            gameNumber == "game2" ||
            gameNumber == "game3"
          ) {
            console.log(
              `%c⚔️ ${trainer1.name} has been sent to the loser bracket`,
              "background: linear-gradient(to right, #808080, #d3d3d3); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer2);
            this.loserBracket.push(trainer1);
          } else if (gameNumber == "game4") {
            console.log(
              `%c💀 ${trainer1.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.loserBracket.push(trainer2);
          } else if (gameNumber == "game5") {
            console.log(
              `%c💀 ${trainer1.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer2);
          }
        } else {
          if (gameNumber == "game1" || gameNumber == "game2") {
            console.log(
              `%c⚔️ ${trainer1.name} has been sent to the loser bracket`,
              "background: linear-gradient(to right, #808080, #d3d3d3); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer2);
            this.loserBracket.push(trainer1);
          } else if (gameNumber == "game3") {
            console.log(
              `%c💀 ${trainer1.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer2);
          }
        }

        break;
      }
      // check if the trainer2 has no pokemon left
      else if (trainer2Pokemons.length == 0) {
        stillHadPokemon = false;

        console.log(
          `%c⚔️ ${trainer2.name} has no pokemon left. ${trainer1.name} wins the battle! 🏆`,
          "background: linear-gradient(to right, #ff0000, #ffcc00); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px;"
        );
        if (isBattleFor5) {
          if (
            gameNumber == "game1" ||
            gameNumber == "game2" ||
            gameNumber == "game3"
          ) {
            console.log(
              `%c⚔️ ${trainer2.name} has been sent to the loser bracket`,
              "background: linear-gradient(to right, #808080, #d3d3d3); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer1);
            this.loserBracket.push(trainer2);
          } else if (gameNumber == "game4") {
            console.log(
              `%c💀 ${trainer2.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.loserBracket.push(trainer1);
          } else if (gameNumber == "game5") {
            console.log(
              `%c💀 ${trainer2.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer1);
          }
        } else {
          if (gameNumber == "game1" || gameNumber == "game2") {
            console.log(
              `%c💀 ${trainer2.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );

            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer1);
            this.loserBracket.push(trainer2);
          } else if (gameNumber == "game3") {
            console.log(
              `%c💀 ${trainer2.name} has been eliminated from the tournament`,
              "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
            );
            trainer1.allPokemonBecomeStrong();
            trainer2.allPokemonBecomeStrong();
            this.winnerBracket.push(trainer1);
          }
        }
        break;
      }
      // showing available pokemons
      trainer1.showAvailablePokemons(trainer1Pokemons);
      trainer2.showAvailablePokemons(trainer2Pokemons);
      // choose random pokemon
      let lastPlayer1Pokemon = trainer1Pokemons.pop();
      // this indez is for removing the selected random plaer

      // this is for loop for the console of pokemon batle
      numOfPokemonFight++;
      if (numOfPokemonFight == 1) {
        console.log(`\n`);
        console.log(
          `%c⚔️ The ${numOfPokemonFight}st round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin! ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      } else if (numOfPokemonFight == 2) {
        console.log(`\n`);
        console.log(
          `%c⚔️ The ${numOfPokemonFight}nd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      } else if (numOfPokemonFight == 3) {
        console.log(`\n`);
        console.log(
          `%c⚔️ The ${numOfPokemonFight}rd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      } else {
        console.log(`\n`);
        console.log(
          `%c⚔️ The ${numOfPokemonFight}th round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      }

      console.log(`\n`);
      // console what random chosed
      console.log(
        `${trainer1.name}: ` + `%cI chose you ${lastPlayer1Pokemon.name}!`,
        "background: #FFCC01; color: rgb(0, 84, 252); padding: 10px; border: solid 1px black; font-weight: bold; text-transform: uppercase; font-size: 20px; border-radius: 5px;"
      );

      let lastPlaye2Pokemon = trainer2Pokemons.pop();
      let pokemon1 = lastPlayer1Pokemon;
      let pokemon2 = lastPlaye2Pokemon;

      console.log(
        `${trainer2.name}: ` + `%cI chose you ${lastPlaye2Pokemon.name}!`,
        "background: #FFCC01; color: rgb(0, 84, 252); padding: 10px; border: solid 1px black; font-weight: bold; text-transform: uppercase; font-size: 20px; border-radius: 5px;"
      );

      console.log(
        `%c⚔️ The battle between ${pokemon1.name} and ${pokemon2.name} has begun!`,
        "background: linear-gradient(to right, #FF4500, #1E90FF); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px;"
      );
      // while looop check if one of the pokemon has no hp
      while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        // randomInt is to randmized who goes first
        // if player1 goes first player2 next, and vice versa
        const randomInt = Math.floor(Math.random() * 2) + 1;
        // 1 means plyer 1 fist
        if (randomInt == 1) {
          if (trainer1.name == this.name) {
            let attackNum = trainer1.checkAvailableAttack(pokemon1);
            pokemon1.gameMAsterAttack(pokemon2, attackNum);
          } else {
            pokemon1.attack(pokemon2);
          }

          if (pokemon2.hp <= 0) {
            console.log(
              `%c🏆 ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
              "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
            );

            pokemon1.levelUp();
            trainer1Pokemons.push(pokemon1);
            // fainted pokemon
            pokemon2.isFainted = true;
            trainer2Pokemons.push(pokemon2);
            break;
          } else {
            if (trainer2.name == this.name) {
              let attackNum = trainer2.checkAvailableAttack(pokemon2);
              pokemon2.gameMAsterAttack(pokemon1, attackNum);
            } else {
              pokemon2.attack(pokemon1);
            }
            if (pokemon1.hp <= 0) {
              console.log(
                `%c🏆 ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
                "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
              );
              pokemon2.levelUp();
              trainer2Pokemons.push(pokemon2);
              // fainted pokemon
              pokemon1.isFainted = true;
              trainer1Pokemons.push(pokemon1);
              break;
            }
          }
        }
        // this is player 2 first
        else {
          if (trainer2.name == this.name) {
            let attackNum = trainer2.checkAvailableAttack(pokemon2);
            pokemon2.gameMAsterAttack(pokemon1, attackNum);
          } else {
            pokemon2.attack(pokemon1);
          }
          if (pokemon1.hp <= 0) {
            console.log(
              `%c🏆 ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
              "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
            );
            pokemon2.levelUp();
            trainer2Pokemons.push(pokemon2);
            // fainted pokemon
            pokemon1.isFainted = true;
            trainer1Pokemons.push(pokemon1);
            break;
          } else {
            if (trainer1.name == this.name) {
              let attackNum = trainer1.checkAvailableAttack(pokemon1);
              pokemon1.gameMAsterAttack(pokemon2, attackNum);
            } else {
              pokemon1.attack(pokemon2);
            }
            if (pokemon2.hp <= 0) {
              console.log(
                `%c🏆 ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
                "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
              );
              pokemon1.levelUp();
              trainer1Pokemons.push(pokemon1);
              // fainted pokemon
              pokemon2.isFainted = true;
              trainer2Pokemons.push(pokemon2);
              break;
            }
          }
        }
      }
    }
  }
  randomRemoveTrainer(numberToRemove) {
    // random choose for battle in tournament
    for (let i = 0; i < numberToRemove; i++) {
      let randomIndex = Math.floor(Math.random() * this.trainers.length);
      this.trainers.splice(randomIndex, 1);
    }
  }
  removeTrainerRandomlyAndAddGameMaste(gameMaster) {
    // random choose for battle in tournament
    let randomIndex = Math.floor(Math.random() * this.trainers.length);
    this.trainers.splice(randomIndex, 1, gameMaster);
    this.enterPokemon();
  }

  distributePokemon() {
    let numTrainers = this.trainers.length;
    // Make a copy of the pokemonList to avoid modifying the original list
    let shuffledPokemon = [...this.pokemonList];

    // Shuffle the list using Fisher-Yates algorithm
    for (let i = shuffledPokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPokemon[i], shuffledPokemon[j]] = [
        shuffledPokemon[j],
        shuffledPokemon[i],
      ];
    }

    // Ensure that each trainer gets exactly pokemon what game master wants
    let pokemonIndex = 0;
    const maxPokemonsPerTrainer = this.numOfPokemon;

    // Distribute exactly 5 Pokemon to each trainer, no repeats
    for (let i = 0; i < numTrainers; i++) {
      for (let j = 0; j < maxPokemonsPerTrainer; j++) {
        if (pokemonIndex < shuffledPokemon.length) {
          this.trainers[i].pokemons.push(shuffledPokemon[pokemonIndex]);
          pokemonIndex++;
        }
      }
    }
  }
  roundRobinMatchmaking(trainers) {
    if (trainers.length !== 3) {
      alert("There should be exactly 3 trainers.");
      return;
    }
    let trainer1, trainer2;
    let trainer1Wins = 0;

    let trainer2Wins = 0;

    let trainer3Wins = 0;

    let currentMatch = 0;

    let wBracket1 = trainers.shift();
    let wBracket2 = trainers.shift();
    let wBracket3 = trainers.shift();
    while (currentMatch < 3) {
      if (currentMatch == 0) {
        trainer1 = wBracket1;
        trainer2 = wBracket2;
        console.log(`\n`);
        console.log(
          `%c⚔️ ROUND ROBIN MATCH NUMBER: ${currentMatch + 1} IS BETWEEN ${
            trainer1.name
          } vs ${trainer2.name} ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      } else if (currentMatch == 1) {
        trainer1 = wBracket1;
        trainer2 = wBracket3;
        console.log(`\n`);
        console.log(
          `%c⚔️ ROUND ROBIN MATCH NUMBER: ${currentMatch + 1} IS BETWEEN ${
            trainer1.name
          } vs ${trainer2.name} ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      } else if (currentMatch == 2) {
        trainer1 = wBracket2;
        trainer2 = wBracket3;
        console.log(`\n`);
        console.log(
          `%c⚔️ ROUND ROBIN MATCH NUMBER: ${currentMatch + 1} IS BETWEEN ${
            trainer1.name
          } vs ${trainer2.name} ⚔️`,
          "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
        );
      }

      let stillHadPokemon = true;
      let numOfPokemonFight = 0;
      // while loop untni one of the trainer has no pokemon left
      while (stillHadPokemon) {
        let trainer1Pokemons = trainer1.pokemons.filter(function (pokemon) {
          if (!pokemon.isFainted) {
            return pokemon;
          }
        });
        let trainer2Pokemons = trainer2.pokemons.filter(function (pokemon) {
          if (!pokemon.isFainted) {
            return pokemon;
          }
        });

        // check if the trainer1 has no pokemon left
        if (trainer1Pokemons.length == 0) {
          stillHadPokemon = false;
          console.log(
            `%c⚔️ ${trainer1.name} has no pokemon left. ${trainer2.name} wins the battle! 🏆`,
            "background: linear-gradient(to right, #ff0000, #ffcc00); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px; "
          );

          console.log(
            `%c💀 ${trainer1.name} has been lose`,
            "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
          );
          trainer1.allPokemonBecomeStrong();
          trainer2.allPokemonBecomeStrong();
          if (currentMatch == 0) {
            trainer2Wins++;
            currentMatch++;
          } else if (currentMatch == 1) {
            trainer3Wins++;
            currentMatch++;
          } else if (currentMatch == 2) {
            trainer3Wins++;
            currentMatch++;
          }

          break;
        }
        // check if the trainer2 has no pokemon left
        else if (trainer2Pokemons.length == 0) {
          stillHadPokemon = false;

          console.log(
            `${trainer2.name} has no pokemon left. ` +
              `%c${trainer1.name} wins the battle!`,
            "font-size: 20px; font-weight: bold"
          );
          console.log(
            `%c💀 ${trainer2.name} has been lose`,
            "background: linear-gradient(to right, #000000, #434343); color: white; font-weight: bold; padding: 10px 20px; font-size: 15px; border-radius: 10px;"
          );
          trainer1.allPokemonBecomeStrong();
          trainer2.allPokemonBecomeStrong();
          if (currentMatch == 0) {
            trainer1Wins++;
            currentMatch++;
          } else if (currentMatch == 1) {
            trainer1Wins++;
            currentMatch++;
          } else if (currentMatch == 2) {
            trainer2Wins++;
            currentMatch++;
          }
          break;
        }
        // showing available pokemons
        trainer1.showAvailablePokemons(trainer1Pokemons);
        trainer2.showAvailablePokemons(trainer2Pokemons);
        // choose random pokemon
        let lastPlayer1Pokemon = trainer1Pokemons.pop();
        // this index is for removing the selected random plaer

        // this is for loop for the console of pokemon batle
        numOfPokemonFight++;
        if (numOfPokemonFight == 1) {
          console.log(`\n`);
          console.log(
            `%c⚔️ The ${numOfPokemonFight}st round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin! ⚔️`,
            "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
          );
        } else if (numOfPokemonFight == 2) {
          console.log(`\n`);
          console.log(
            `%c⚔️ The ${numOfPokemonFight}nd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin ⚔️`,
            "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
          );
        } else if (numOfPokemonFight == 3) {
          console.log(`\n`);
          console.log(
            `%c⚔️ The ${numOfPokemonFight}rd round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin`,
            "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
          );
        } else {
          console.log(`\n`);
          console.log(
            `%c⚔️ The ${numOfPokemonFight}th round of POKEMON MATCH between ${trainer1.name} and ${trainer2.name} is about to begin ⚔️`,
            "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px; text-transform: uppercase;"
          );
        }

        console.log(`\n`);
        // console what random chosed
        console.log(
          `${trainer1.name}: ` + `%cI chose you ${lastPlayer1Pokemon.name}!`,
          "background: #FFCC01; color: rgb(0, 84, 252); padding: 10px; border: solid 1px black; font-weight: bold; text-transform: uppercase; font-size: 20px; border-radius: 5px;"
        );

        let lastPlaye2Pokemon = trainer2Pokemons.pop();
        let pokemon1 = lastPlayer1Pokemon;
        let pokemon2 = lastPlaye2Pokemon;

        console.log(
          `${trainer2.name}: ` + `%cI chose you ${lastPlaye2Pokemon.name}!`,
          "background: #FFCC01; color: rgb(0, 84, 252); padding: 10px; border: solid 1px black; font-weight: bold; text-transform: uppercase; font-size: 20px; border-radius: 5px;"
        );

        console.log(
          `%c⚔️ The battle between ${pokemon1.name} and ${pokemon2.name} has begun!`,
          "background: linear-gradient(to right, #FF4500, #1E90FF); color: white; font-weight: bold; padding: 10px 20px; font-size: 18px; border-radius: 10px;"
        );
        // while looop check if one of the pokemon has no hp
        while (pokemon1.hp > 0 && pokemon2.hp > 0) {
          // randomInt is to randmized who goes first
          // if player1 goes first player2 next, and vice versa
          const randomInt = Math.floor(Math.random() * 2) + 1;
          // 1 means plyer 1 fist
          if (randomInt == 1) {
            if (trainer1.name == this.name) {
              let attackNum = trainer1.checkAvailableAttack(pokemon1);
              pokemon1.gameMAsterAttack(pokemon2, attackNum);
            } else {
              pokemon1.attack(pokemon2);
            }
            if (pokemon2.hp <= 0) {
              console.log(
                `%c🏆 ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
                "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
              );

              pokemon1.levelUp();
              trainer1Pokemons.push(pokemon1);
              // fainted pokemon
              pokemon2.isFainted = true;
              trainer2Pokemons.push(pokemon2);

              break;
            } else {
              if (trainer2.name == this.name) {
                let attackNum = trainer2.checkAvailableAttack(pokemon2);
                pokemon2.gameMAsterAttack(pokemon1, attackNum);
              } else {
                pokemon2.attack(pokemon1);
              }

              if (pokemon1.hp <= 0) {
                console.log(
                  `%c🏆 ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
                  "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
                );
                pokemon2.levelUp();
                trainer2Pokemons.push(pokemon2);
                // fainted pokemon
                pokemon1.isFainted = true;
                trainer1Pokemons.push(pokemon1);

                break;
              }
            }
          }
          // this is player 2 first
          else {
            if (trainer2.name == this.name) {
              let attackNum = trainer2.checkAvailableAttack(pokemon2);
              pokemon2.gameMAsterAttack(pokemon1, attackNum);
            } else {
              pokemon2.attack(pokemon1);
            }

            if (pokemon1.hp <= 0) {
              console.log(
                `%c🏆 ${pokemon2.name} has gained the victory over ${pokemon1.name} `,
                "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
              );
              pokemon2.levelUp();
              trainer2Pokemons.push(pokemon2);
              // fainted pokemon
              pokemon1.isFainted = true;
              trainer1Pokemons.push(pokemon1);

              break;
            } else {
              if (trainer1.name == this.name) {
                let attackNum = trainer1.checkAvailableAttack(pokemon1);
                pokemon1.gameMAsterAttack(pokemon2, attackNum);
              } else {
                pokemon1.attack(pokemon2);
              }
              if (pokemon2.hp <= 0) {
                console.log(
                  `%c🏆 ${pokemon1.name} has gained the victory over ${pokemon2.name} `,
                  "background: green; color: white; padding: 10px; font-weight: bold; font-size: 18px; border-radius: 10px;"
                );
                pokemon1.levelUp();
                trainer1Pokemons.push(pokemon1);
                // fainted pokemon
                pokemon2.isFainted = true;
                trainer2Pokemons.push(pokemon2);

                break;
              }
            }
          }
        }
      }

      // finalllyyy! there is a winner console with style
    }
    console.log(
      `%c${wBracket1.name}: ${trainer1Wins}W  |  ${wBracket2.name}: ${trainer2Wins}W  |  ${wBracket3.name}: ${trainer3Wins}W`,
      "background: linear-gradient(to right, #FFCB05, #3B4CCA); color: white; font-weight: bold; padding: 10px 20px; font-size: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);"
    );

    if (trainer1Wins == 2) {
      this.winner = wBracket1.name;
      console.log(`\n`);
      console.log(
        `%c🏆 ${wBracket1.name} has emerged victorious in the tournament and is the ultimate POKEMON CHAMPION! 🏆`,
        "  background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color:#fffcf2; font-weight: 900; padding: 20px;   font-size: 26px; -webkit-text-stroke: 1px #010088; -webkit-text-fill-color: white; border-radius: 2rem"
      );
      console.log(`\n`);
    } else if (trainer2Wins == 2) {
      this.winner = wBracket2.name;
      console.log(`\n`);
      console.log(
        `%c🏆 ${wBracket2.name} has emerged victorious in the tournament and is the ultimate POKEMON CHAMPION! 🏆`,
        "  background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color:#fffcf2; font-weight: 900; padding: 20px;   font-size: 26px; -webkit-text-stroke: 1px #010088; -webkit-text-fill-color: white; border-radius: 2rem"
      );
      console.log(`\n`);
    } else if (trainer3Wins == 2) {
      this.winner = wBracket3.name;
      console.log(`\n`);
      console.log(
        `%c🏆 ${wBracket3.name} has emerged victorious in the tournament and is the ultimate POKEMON CHAMPION! 🏆`,
        "  background: linear-gradient(to bottom, #ff0000 60%, #ffff00 100%); color:#fffcf2; font-weight: 900; padding: 20px;   font-size: 26px; -webkit-text-stroke: 1px #010088; -webkit-text-fill-color: white; border-radius: 2rem"
      );
      console.log(`\n`);
    } else {
      this.winnerBracket = [wBracket1, wBracket2, wBracket3]; // bring back the winner bracket
      this.roundRobinMatchmaking(this.winnerBracket);
    }
  }
}

// Water type pokemons
let Blastoise = new Pokemon("Blastoise", "Water", 1, 20, 10, 10, 0.1);
let Squirtle = new Pokemon("Squirtle", "Water", 1, 20, 10, 10, 0.1);
let Azumarill = new Pokemon("Azumarill", "Water", 1, 20, 10, 10, 0.1);
let Chinchou = new Pokemon("Chinchou", "Water", 1, 20, 10, 10, 0.1);
let Staryu = new Pokemon("Staryu", "Water", 1, 20, 10, 10, 0.1);

// Fire type
let Charmander = new Pokemon("Charmander", "Fire", 1, 20, 10, 10, 0.1);
let Rapidash = new Pokemon("Rapidash", "Fire", 1, 20, 10, 10, 0.1);
let Charizard = new Pokemon("Charizard", "Fire", 1, 20, 10, 10, 0.1);
let Charmeleon = new Pokemon("Charmeleon", "Fire", 1, 20, 10, 10, 0.1);
let Vulpix = new Pokemon("Vulpix", "Fire", 1, 20, 10, 10, 0.1);

// Electric type
let Pikachu = new Pokemon("Pikachu", "Electric", 1, 20, 10, 10, 0.1);
let Raichu = new Pokemon("Raichu", "Electric", 1, 20, 10, 10, 0.1);
let Magnemite = new Pokemon("Magnemite", "Electric", 1, 20, 10, 10, 0.1);
let Magneton = new Pokemon("Magneton", "Electric", 1, 20, 10, 10, 0.1);
let Electabuzz = new Pokemon("Electabuzz", "Electric", 1, 20, 10, 10, 0.1);

// Poison type
let Ekans = new Pokemon("Ekans", "Poison", 1, 20, 10, 10, 0.1);
let Arbok = new Pokemon("Arbok", "Poison", 1, 20, 10, 10, 0.1);
let Nidoran = new Pokemon("Nidoran", "Poison", 1, 20, 10, 10, 0.1);
let Nidorino = new Pokemon("Nidorino", "Poison", 1, 20, 10, 10, 0.1);
let Nidoking = new Pokemon("Nidoking", "Poison", 1, 20, 10, 10, 0.1);

// Flying typr
let Pidgeot = new Pokemon("Pidgeot", "Flying", 1, 20, 10, 10, 0.1);
let Spearow = new Pokemon("Spearow", "Flying", 1, 20, 10, 10, 0.1);
let Articuno = new Pokemon("Articuno", "Flying", 1, 20, 10, 10, 0.1);
let Zapdos = new Pokemon("Zapdos", "Flying", 1, 20, 10, 10, 0.1);
let Aerodactyl = new Pokemon("Aerodactyl", "Flying", 1, 20, 10, 10, 0.1);

let pokemonList = [
  Blastoise,
  Squirtle,
  Azumarill,
  Chinchou,
  Staryu,
  Charmander,
  Rapidash,
  Charizard,
  Charmeleon,
  Vulpix,
  Pikachu,
  Raichu,
  Magnemite,
  Magneton,
  Electabuzz,
  Pidgeot,
  Spearow,
  Articuno,
  Zapdos,
  Aerodactyl,
];
// Pokemon Trainers
let Kahili = new Trainer("Kahili");
let Agatha = new Trainer("Agatha");
let Ash = new Trainer("Ash");
let Asahi = new Trainer("Asahi");
let Misty = new Trainer("Misty");
// first prompt in the screen
let gameMasterName = prompt("WELCOME GAME MASTER! Please enter your name:");
// check if the input is empty
if (checkIfEmpty(gameMasterName)) {
  gameMasterName = gameMasterName.toLowerCase();
  gameMasterName =
    gameMasterName.charAt(0).toUpperCase() + gameMasterName.slice(1);
  let play, newGameMaster;
  let isDecided = true;
  //  while loop switch for the choices of the game master
  while (isDecided) {
    play = prompt(
      `Hello Game master ${gameMasterName}! Are you going to play in the tournament?!\n\n1. Yes\n2. No`
    );
    if (play === null) {
      console.log(`${this.name} cancelled, Exiting..`);
      break; // Exit the loop if user cancels
    }
    switch (play) {
      case "1":
        isDecided = false;
        newGameMaster = new gameMaster(
          gameMasterName,
          [Misty, Asahi, Ash, Agatha, Kahili],
          pokemonList,
          true
        );
        // Call start game function here
        break;
      case "2":
        isDecided = false;
        newGameMaster = new gameMaster(
          gameMasterName,
          [Misty, Asahi, Ash, Agatha, Kahili],
          pokemonList,
          false
        );
        break;
      default:
        alert(
          "Invalid choice. Please try again.\nChoose only between number 1 and 2 "
        );
    }
    newGameMaster.mainMenu();
  }
  // if the return value is true then creatw a gameMaster and open mainMenu
}
