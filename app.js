let enemyImages = ['https://static.wikia.nocookie.net/fantendo/images/1/10/BokoblinBotWSplotchless.png/revision/latest?cb=20180108050759', 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/f/fd/BotW_Lizalfos_Model.png/revision/latest/scale-to-width-down/320?cb=20181006051518', 'https://www.zeldadungeon.net/wiki/images/e/e6/Black-Moblin.png', 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/6/6e/BotW_Blue_Hinox_Model.png/revision/latest/scale-to-width-down/320?cb=20170520171441', 'https://i.imgur.com/phJs3dV.png', 'http://images6.fanpop.com/image/photos/39300000/Princess-Zelda-the-legend-of-zelda-39300220-3230-3760.png', 'https://static.wikia.nocookie.net/p__/images/8/84/Link_SSBU.png/revision/latest/scale-to-width-down/2000?cb=20201226182109&path-prefix=protagonist']

////PLAYER AND ENEMY VARIABLES////
/////PROPERTY FUNCTIONS//////
let playerBaseAttack = () => {
  ///range 7-15
  return (Math.floor(Math.random() * 8) + 7)
}
let enemyLoot = () => {
  //range 5-20
  return ((Math.floor(Math.random() * 15) + 5))
}

///////VARIABLES//////
let player = {
  health: 100,
  baseAttack: playerBaseAttack(),
  accuracy: .8,
  money: 0,
  weapons: ['']
}
let enemyOne = {
  name: 'Bokoblin',
  health: 10,
  baseAttack: 3,
  accuracy: .6,
  order: `first`,
  loot: enemyLoot()
}

let enemyTwo = {
  name: `Lizalfos`,
  health: 20,
  baseAttack: 5,
  accuracy: .7,
  order: `second`,
  loot: enemyLoot()
}

let enemyThree = {
  name: 'Moblin',
  health: 30,
  baseAttack: 8,
  accuracy: .7,
  order: `third`,
  loot: enemyLoot()
}

let enemyFour = {
  name: 'Hinox',
  health: 40,
  baseAttack: 12,
  accuracy: .7,
  order: `fourth`,
  loot: enemyLoot()
}

let enemyFive = {
  name: `Ganondorf`,
  health: 10,
  baseAttack: 15,
  accuracy: .7,
  order: 'fifth',
  loot: 25

}

let enemies = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive]

let currentEnemy = enemies[0]

/////ENEMY FUNCTIONS////
const $bokoblin = () => {
  let $bokoblinDiv = $('<div>').addClass('bokoblin').appendTo('.map')
  $(`<img src = ${enemyImages[0]}>`).addClass('bokoblin-image').appendTo($bokoblinDiv)
};

const $lizalfos = () => {
  let $lizalfosDiv = $('<div>').addClass('lizalfos').appendTo('.map')
  $(`<img src = ${enemyImages[1]}>`).addClass('lizalfos-image').appendTo($lizalfosDiv)
}

const $moblin = () => {
  let $moblinDiv = $('<div>').addClass('moblin').appendTo('.map')
  $(`<img src = ${enemyImages[2]}>`).addClass('moblin-image').appendTo($moblinDiv)
}

const $hinox = () => {
  let $hinoxDiv = $('<div>').addClass('hinox').appendTo('.map')
  $(`<img src = ${enemyImages[3]}>`).addClass('hinox-image').appendTo($hinoxDiv)
}

const $ganondorf = () => {
  let $ganondorfDiv = $('<div>').addClass('ganondorf').appendTo('.map')
  $(`<img src = ${enemyImages[4]}>`).addClass('ganondorf-image').appendTo($ganondorfDiv)
}

const $zelda = () => {
  let $zeldaDiv = $('<div>').addClass('zelda').appendTo('.text')
  $(`<img src = ${enemyImages[5]}>`).addClass('zelda-image').appendTo($zeldaDiv)
};

const $link = () => {
  let $linkDiv = $('<div>').addClass('link').appendTo('.text')
  $(`<img src = ${enemyImages[6]}>`).addClass('link-image').appendTo($linkDiv)
};

////READY FUNCTION////
let ready = () => {
  let readyPrompt = $('<div>').text(`Ready to head into the forest? Enter 'yes' or 'no': `).appendTo('.BBB').addClass('ready-question')
  $('<button>').addClass('ready-yes').appendTo('.BBB').text('Yes').on('click', () => {
    $('.welcome').hide()
    $('<div>').text(`That's the spirit!`).appendTo('.text').addClass('spirit')
    $battle1()
  })
  $('<button>').addClass('ready-no ').appendTo('.BBB').text('No').on('click', () => {
    $('.welcome').hide()
    $('<div>').text(`There's no turning back. You must try to save her anyways.`).appendTo('.text')
    $battle1()
  })
  }


////BATTLE 1: BOKOBLIN////
const $battle1 = () => {
  $('.spirit').hide()
  $('.intro-div').hide()
  $('.ready-yes').hide()
  $('.ready-no').hide()
  $('.ready-question').hide()
  $('.player-health').show()
  $('<div>').text('You head into the forest. As the leaves crunch under your feet, you see a shadowy figure up ahead.').appendTo('.text').addClass('battle1-intro')
  $('<div>').text(`Your first opponent! The monster turns around. It's a ${currentEnemy.name}!`).appendTo('.text').addClass('battle1-intro')
  $bokoblin()

  let $buttons = $('<div>').appendTo('.BBB').addClass('battle-buttons')
  $('<div>').text('Click attack or retreat:').appendTo($buttons).addClass('battle-buttons')
  $('<button>').text('Attack').appendTo($buttons).addClass('attack-button').addClass('battle-buttons')
  $('.attack-button').on('click', playerAttack1)
  $('<button>').text('Retreat').appendTo($buttons).addClass('retreat-button').addClass('battle-buttons')
  $('.retreat-button').on('click', retreat)
}

////BATTLE 2: LIZALFOS//////
const $battle2 = () => {
  nextEnemy();
  $('.player-health').show()
  $('.battle-buttons').hide()
  $('.battle-moves').hide()
  $('<div>').text(`Good work, you killed that ${currentEnemy.name} pretty easily. You feel pretty confident with your skills.`).appendTo('.text').addClass('battle2-intro')
  $('<div>').text(`You work your way through the brush. A jet of water shoots out and hits you. You look over and see a ${currentEnemy.name} hissing at you!`).appendTo('.text').addClass('battle2-intro')
  $lizalfos()

    let $buttons = $('<div>').appendTo('.BBB').addClass('battle-buttons')
    $('<div>').text('Click attack or retreat:').appendTo($buttons).addClass('battle-buttons')
    $('<button>').text('Attack').appendTo($buttons).addClass('attack-button').addClass('battle-buttons')
    $('.attack-button').on('click', playerAttack1)
    $('<button>').text('Retreat').appendTo($buttons).addClass('retreat-button').addClass('battle-buttons')
    $('.retreat-button').on('click', retreat)

}

////BATTLE 3: MOBLIN//////
const $battle3 = () => {
  nextEnemy();
  $('.battle-buttons').hide()
  $('.battle-moves').hide()
  $('<div>').text(`It starts getting a bit foggy. It gets harder to see but you can't miss the shadow that is coming up from behind you.`).appendTo('.text').addClass('battle3-intro')
  $('<div>').text(`You turn around to see an angry ${currentEnemy.name} staring back at you.`).appendTo('.text').addClass('battle3-intro')
  $moblin()
  let $buttons = $('<div>').appendTo('.text').addClass('battle-buttons')
  $('<div>').text('Click attack or retreat:').appendTo($buttons)
  $('<button>').text('Attack').appendTo($buttons).addClass('attack-button')
  $('.attack-button').on('click', playerAttack3)
  $('<button>').text('Retreat').appendTo($buttons).addClass('retreat-button')
  $('.retreat-button').on('click', retreat)

}

////BATTLE 4: HINOX//////
const $battle4 = () => {
  nextEnemy();
  $('.battle-buttons').hide()
  $('.battle-moves').hide()
  $('<div>').text(`You stop at a small stream to drink water. You sit on a large rock to rest for a few minutes.`).appendTo('.text').addClass('battle4-intro')
  $('<div>').text(`You see a very large creature sleeping ahead of you. It's a ${currentEnemy.name}!`).appendTo('.text').addClass('battle4-intro')
  $('<div>').text(`You should probably try to get out of here before it wakes up. You try to sneak away but you snap a twig a few steps in.`).appendTo('.text').addClass('battle4-intro')
  $('<div>').text(`The ${currentEnemy.name} wakes up and charges towards you.`).appendTo('.text').addClass('battle4-intro')
  $hinox()
  let $buttons = $('<div>').appendTo('.text').addClass('battle-buttons')
  $('<div>').text('Click attack or retreat:').appendTo($buttons)
  $('<button>').text('Attack').appendTo($buttons).addClass('attack-button')
  $('.attack-button').on('click', playerAttack4)
  $('<button>').text('Retreat').appendTo($buttons).addClass('retreat-button')
  $('.retreat-button').on('click', retreat)
}

////BATTLE 5: GANONDORF//////
const $battle5 = () => {
  nextEnemy();
  $('.battle-buttons').hide()
  $('.battle-moves').hide()
  $('<div>').text(`You hear muffled crying in the distance. You follow the sound, and see Princess Zelda tied to a tree.`).appendTo('.text').addClass('battle5-intro')
  $('<div>').text(`${currentEnemy.name} steps out from the bushes. "The princess is mine!!!" says Ganondorf.`).appendTo('.text').addClass('battle5-intro')
  $('<div>').text('He walks towards you and raises his sword. "I will end you!" he says.')
  $ganondorf()
  let $buttons = $('<div>').appendTo('.text').addClass('battle-buttons')
  $('<div>').text('Click attack or retreat:').appendTo($buttons)
  $('<button>').text('Attack').appendTo($buttons).addClass('attack-button')
  $('.attack-button').on('click', playerAttack5)
  $('<button>').text('Retreat').appendTo($buttons).addClass('retreat-button')
  $('.retreat-button').on('click', retreat)
}

/////PLAYER ATTACK 1/////
let playerAttack1 = () => {
  $('.battle1-intro').hide()
  if (Math.random() < player.accuracy) {
    let playerDamage = playerBaseAttack()
    player.baseAttack = playerDamage
    currentEnemy.health -= player.baseAttack
    if (currentEnemy.health < 0) {
      currentEnemy.health = 0
    }
    // $('.battle-moves').hide()
    $('<div>').text(`YOUR MOVE: You attacked the ${currentEnemy.name} and did ${player.baseAttack} damage. They now have ${currentEnemy.health} health left. `).appendTo('.text').addClass('battle-moves')
    if (currentEnemy.health <= 0) {
      $('.battle-moves').hide()
      $('<div>').text(`You defeated the ${currentEnemy.name}. You won!`).appendTo('.text').addClass('battle-moves')
      $('<div>').text(`You have  ${player.health} health left. `).appendTo('.text').addClass('battle-moves')
      $('.battle-buttons').hide()
      $('.bokoblin-image').hide()
      $('.player-health').hide()
      $('<button>').text('Keep moving').addClass('move-button').appendTo('.text')
      $('.move-button').on('click', $battle2).addClass('battle-moves')
    } else if (currentEnemy.health > 0 && player.health > 0) {
      if (Math.random() < currentEnemy.accuracy) {
        player.health -= currentEnemy.baseAttack
        if (player.health < 0) {
          player.health = 0
        }
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
        // $('.player-health').hide()
        // $('.player-health').show()
      } else if (Math.random() > currentEnemy.accuracy) {
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      }
    }
  } else {
    $('<div>').text(`YOUR MOVE: You missed! `).appendTo('.text').addClass('battle-moves')
    if (Math.random() < currentEnemy.accuracy) {
      player.health -= currentEnemy.baseAttack
      if (player.health < 0) {
        player.health = 0
      }
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
      $('.player-health').hide()
      // $('.player-health').show()
    } else {
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      playerAttack()


  }
}
}

/////END GAME//////
let endGame = () => {
  $zelda()
  $link()
  $('.battle-moves').hide()
  $('.move-button').hide()
  $('<div>').text(`You rush over to Zelda to untie her.`).appendTo('.text')
  $('<div>').text(`"You saved me! Thank you!" says Zelda.`).appendTo('.text')
  $('<div>').text(`You win!! You rescued the princess!`).appendTo('.text')
  $('<div>').text(`Refresh the page to play again.`).appendTo('.text')
}

////PLAYER ATTACK 2/////
let playerAttack2 = () => {
  $('.battle2-intro').hide()
  if (Math.random() < player.accuracy) {
    let playerDamage = playerBaseAttack()
    player.baseAttack = playerDamage
    currentEnemy.health -= player.baseAttack
    if (currentEnemy.health < 0) {
      currentEnemy.health = 0
    }
    $('.battle-moves').hide()
    $('<div>').text(`YOUR MOVE: You attacked the ${currentEnemy.name} and did ${player.baseAttack} damage. They now have ${currentEnemy.health} health left. `).appendTo('.text').addClass('battle-moves')
    if (currentEnemy.health <= 0) {
      $('.battle-moves').hide()
      $('<div>').text(`You defeated the ${currentEnemy.name}. You won!`).appendTo('.text').addClass('battle-moves')
      $('<div>').text(`You have  ${player.health} health left. `).appendTo('.text').addClass('battle-moves')
      $('.battle-buttons').hide()
      $('.lizalfos-image').hide()
      // $('.player-health').hide()
      $('<button>').text('Keep moving').addClass('move-button').appendTo('.text').addClass('battle-moves')
      $('.move-button').on('click', $battle3)
    } else if (currentEnemy.health > 0 && player.health > 0) {
      if (Math.random() < currentEnemy.accuracy) {
        player.health -= currentEnemy.baseAttack
        if (player.health < 0) {
          player.health = 0
        }
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
      } else if (Math.random() > currentEnemy.accuracy) {
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      }
    }
  } else {
    $('.battle-moves').hide()
    $('<div>').text(`YOUR MOVE: You missed! `).appendTo('.text').addClass('battle-moves')
    if (Math.random() < currentEnemy.accuracy) {
      player.health -= currentEnemy.baseAttack
      if (player.health < 0) {
        player.health = 0
      }
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
    } else {
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      playerAttack()
    }

  }
}

////PLAYER ATTACK 3/////
let playerAttack3 = () => {
  $('.battle3-intro').hide()
  if (Math.random() < player.accuracy) {
    let playerDamage = playerBaseAttack()
    player.baseAttack = playerDamage
    currentEnemy.health -= player.baseAttack
    if (currentEnemy.health < 0) {
      currentEnemy.health = 0
    }
    $('<div>').text(`YOUR MOVE: You attacked the ${currentEnemy.name} and did ${player.baseAttack} damage. They now have ${currentEnemy.health} health left. `).appendTo('.text').addClass('battle-moves')
    if (currentEnemy.health <= 0) {
      $('.battle-moves').hide()
      $('<div>').text(`You defeated the ${currentEnemy.name}. You won!`).appendTo('.text').addClass('battle-moves')
      $('<div>').text(`You have  ${player.health} health left. `).appendTo('.text').addClass('battle-moves')
      $('.battle-buttons').hide()
      $('.moblin-image').hide()
      $('<button>').text('Keep moving').addClass('move-button').appendTo('.text').addClass('battle-moves')
      $('.move-button').on('click', $battle4)
    } else if (currentEnemy.health > 0 && player.health > 0) {
      if (Math.random() < currentEnemy.accuracy) {
        player.health -= currentEnemy.baseAttack
        if (player.health < 0) {
          player.health = 0
        }
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
      } else if (Math.random() > currentEnemy.accuracy) {
        $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      }
    }
  } else {
    $('<div>').text(`YOUR MOVE: You missed! `).appendTo('.text').addClass('battle-moves')
    if (Math.random() < currentEnemy.accuracy) {
      player.health -= currentEnemy.baseAttack
      if (player.health < 0) {
        player.health = 0
      }
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
    } else {
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      playerAttack()
    }

  }
}

////PLAYER ATTACK 4/////
let playerAttack4 = () => {
  $('.battle4-intro').hide()
  if (Math.random() < player.accuracy) {
    let playerDamage = playerBaseAttack()
    player.baseAttack = playerDamage
    currentEnemy.health -= player.baseAttack
    if (currentEnemy.health < 0) {
      currentEnemy.health = 0
    }
    $('<div>').text(`YOUR MOVE: You attacked the ${currentEnemy.name} and did ${player.baseAttack} damage. They now have ${currentEnemy.health} health left. `).appendTo('.text').addClass('battle-moves')
    if (currentEnemy.health <= 0) {
      $('.battle-moves').hide()
      $('<div>').text(`You defeated the ${currentEnemy.name}. You won!`).appendTo('.text').addClass('battle-moves')
      $('<div>').text(`You have  ${player.health} health left. `).appendTo('.text').addClass('battle-moves')
      $('.battle-buttons').hide()
      $('.hinox-image').hide()
      $('<button>').text('Keep moving').addClass('move-button').appendTo('.text').addClass('battle-moves')
      $('.move-button').on('click', $battle5)
  } if (currentEnemy.health > 0 && player.health <= 0) {
    lostBattle()
  } else if (currentEnemy.health > 0 && player.health > 0) {
    if (Math.random() < currentEnemy.accuracy) {
      player.health -= currentEnemy.baseAttack
      if (player.health < 0) {
        player.health = 0
      }
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
    } else if (Math.random() > currentEnemy.accuracy) {
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
    }
  }
  } else {
    $('<div>').text(`YOUR MOVE: You missed! `).appendTo('.text').addClass('battle-moves')
    if (Math.random() < currentEnemy.accuracy) {
      player.health -= currentEnemy.baseAttack
      if (player.health < 0) {
        player.health = 0
      }
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
    } if (currentEnemy.health > 0 && player.health <= 0) {
      lostBattle()
    } else {
      $('<div>').text(`ENEMY MOVE: The ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      playerAttack()
    }

  }
  }

  ////PLAYER ATTACK 5/////
  let playerAttack5 = () => {
    $('.battle5-intro').hide()
    if (Math.random() < player.accuracy) {
      let playerDamage = playerBaseAttack()
      player.baseAttack = playerDamage
      currentEnemy.health -= player.baseAttack
      if (currentEnemy.health < 0) {
        currentEnemy.health = 0
      }
      $('<div>').text(`YOUR MOVE: You attacked ${currentEnemy.name} and did ${player.baseAttack} damage. They now have ${currentEnemy.health} health left. `).appendTo('.text').addClass('battle-moves')
      if (currentEnemy.health <= 0) {
        $('.battle-moves').hide()
        $('<div>').text(`You defeated ${currentEnemy.name}. You won!`).appendTo('.text').addClass('battle-moves')
        $('<div>').text(`You have  ${player.health} health left. `).appendTo('.text').addClass('battle-moves')
        $('.battle-buttons').hide()
        $('.ganondorf-image').hide()
        $('<button>').text('Save Zelda').addClass('move-button').appendTo('.text')
        $('.move-button').on('click', endGame)
    } if (currentEnemy.health > 0 && player.health <= 0) {
      lostBattle()
    } else if (currentEnemy.health > 0 && player.health > 0) {
      if (Math.random() < currentEnemy.accuracy) {
        player.health -= currentEnemy.baseAttack
        if (player.health < 0) {
          player.health = 0
        }
        $('<div>').text(`ENEMY MOVE: ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
      } else if (Math.random() > currentEnemy.accuracy) {
        $('<div>').text(`ENEMY MOVE: ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
      }
    }
    } else {
      $('<div>').text(`YOUR MOVE: You missed! `).appendTo('.text').addClass('battle-moves')
      if (Math.random() < currentEnemy.accuracy) {
        player.health -= currentEnemy.baseAttack
        if (player.health < 0) {
          player.health = 0
        }
        $('<div>').text(`ENEMY MOVE: ${currentEnemy.name} attacked you and did ${currentEnemy.baseAttack} damage. You now have ${player.health} health left.`).appendTo('.text').addClass('battle-moves')
      } if (currentEnemy.health > 0 && player.health <= 0) {
        lostBattle()
      } else {
        $('<div>').text(`ENEMY MOVE: ${currentEnemy.name} missed! `).appendTo('.text').addClass('battle-moves')
        playerAttack()
      }

    }
    }

////LOST BATTLE////
let lostBattle = () => {
  alert(`You died! Game over. Refresh the page to start over. `)

  // tryAgain()
}

////RETREAT/////
let retreat = () => {
  alert(`You decided to retreat. Game over. Refresh the page to start over.`);
}

///////SHIFT FUNCTION/////
let nextEnemy = () => {
  enemies.shift()
  currentEnemy = enemies[0]
}

////USERNAME FUNCTION/////
let $usernameFunc = () => {
  const $usernameSubmit = $('.name').val()
  $('.text').hide()
  $('<div>').text(`Welcome, ${$usernameSubmit}!`).appendTo('.text').addClass('welcome')

  $intro()

}
////USERNAME INPUT/////
const $usernameInput = () => {
  const $usernameDiv =
  $('.text').show()
  $('<div>').appendTo('.text').addClass('username-input')
  // $('.player-health').hide()
  $('<p>').text('What is your name?').appendTo($usernameDiv).addClass('username-input')
  $username= $('<input class="name" type="text"/>').appendTo($usernameDiv).addClass('username-input')
  $('<input class="submit" type="submit"/>').appendTo($usernameDiv).addClass('username-input')

  $('.submit').on('click', $usernameFunc)
}

/////START BUTTON FUNCTION/////
const $startButton = () => {
  $('.start').on('click', $usernameInput)
  // $startButton()
  // $usernameInput()
}

////WELCOME////
const $welcomeMessage = () => {
  $('<div>').text(`Welcome, ${$usernameSubmit}!`).appendTo('.text')
}


////INTRO/////
const $intro = () => {
  // $('.ready').hide()
  // $('.welcome').hide()
  $('.username-input').hide()
  $('.text').show()
  $('<div>').addClass('intro-div').appendTo('.text')
  $('<div>').text('Princess Zelda is being held hostage somewhere in Korok Forest by Ganondorf.').appendTo('.intro-div')
  $('<div>').text('Your goal is to navigate through the forest to save the princess.').appendTo('.intro-div')
  $('<div>').text('However, you may come across enemies along the way...').appendTo('.intro-div')
  ready()
  // $('<div>').text('Are you ready to start?').appendTo('.intro-div').addClass('ready')
  // $('<button>').text('Yes').appendTo('.ready').addClass('ready-button').on('click', $battle1)

}

let $playerHPval = player.health
////JQUERY//////
$(() => {
  // for (let i = 0; i < enemyImages.length; i++) {
  //       let $imageDiv = $('<div>').addClass('monsters')
  //       $(`<img src = ${enemyImages[i]}>`).addClass('monster-images').appendTo($imageDiv)
  //       $imageDiv.appendTo('.map')
  //
  //     }
  //     $('.monster-images').hide()

  ////PLAYER HEALTH VALUE/////
  // let $playerHealth = () => {

  const $playerHP = $('<div>').addClass('player-health').text(`Player health: ${$playerHPval}`).prependTo('.text').show()
// }

  ///////GAMEPLAY////
  $('.text').hide()
  $startButton()
  // $bokoblin()
  // $lizalfos()
  // $moblin()
  // $hinox()
  // $ganondorf()
  // $link()
  // $zelda()
})
