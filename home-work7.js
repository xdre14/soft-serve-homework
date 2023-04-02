// task 1 


// const newWindow = window.open("", "", "width=300,height=300");

// setTimeout(() => {
  
//   newWindow.resizeTo(500, 500);


//   setTimeout(() => {
   
//     newWindow.moveTo(200, 200);

  
//     setTimeout(() => {
//       newWindow.close();
//     }, 2000);
//   }, 2000);
// }, 2000);

// task 2

function changeCSS() {
    const textElem = document.getElementById('text');
    textElem.style.color = 'orange';
    textElem.style.fontSize = '20px';
    textElem.style.fontFamily = 'Comic Sans MS';
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', changeCSS);

  // task 3

  const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');


button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});


button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});


button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});


link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseleave', function() {
  document.body.style.backgroundColor = 'white';
});

// task 4 

const dropdown = document.getElementById('dropdown');
const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', function() {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  dropdown.removeChild(selectedOption);
});

// task 5

const myButton = document.getElementById('my-button');
myButton.addEventListener('click', function() {
  alert('I was pressed!');
});

myButton.addEventListener('mouseover', function() {
  alert('Mouse on me!');
});

myButton.addEventListener('mouseout', function() {
  alert('Mouse is not on me!');
});


// task 6 

const widthElement = document.getElementById('width');
const heightElement = document.getElementById('height');

function updateSize() {
  widthElement.innerText = window.innerWidth;
  heightElement.innerText = window.innerHeight;
}
updateSize();

window.addEventListener('resize', updateSize);

// task 7

const playerSelect = document.querySelector('#player-select');
const game = document.querySelector('#game');
const player = document.querySelector('#player');
const river = document.querySelector('#river');

let isJumping = false;
let isGameOver = false;

function selectPlayer(playerId) {
  const selectedPlayer = document.querySelector(`#${playerId}`);
  selectedPlayer.classList.add('selected');
  game.style.display = 'block';
}

function jump() {
  if (player.classList != 'animate' && !isGameOver) {
    player.classList.add('animate');
    isJumping = true;
    setTimeout(function() {
      player.classList.remove('animate');
      isJumping = false;
    }, 500);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    jump();
  }
});

function checkCollision() {
  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
  const riverLeft = parseInt(window.getComputedStyle(river).getPropertyValue('left'));

  if (riverLeft < 0 && playerTop >= 120) {
    isGameOver = true;
    document.querySelector('#game-over').style.display = 'block';
  }
}

setInterval(function() {
  checkCollision();
  if (!isGameOver) {
    // Write code to move the river left by 1 pixel
  }
}, 10);

river.style.left = parseInt(window.getComputedStyle(river).getPropertyValue('left')) - 1 + 'px';



function selectPlayer(playerId) {
  const selectedPlayer = document.querySelector(`#${playerId}`);
  selectedPlayer.classList.add('selected');
  game.style.display = 'block';
}

function jump() {
  if (player.classList != 'animate' && !isGameOver) {
    player.classList.add('animate');
    isJumping = true;
    setTimeout(function() {
      player.classList.remove('animate');
      isJumping = false;
    }, 500);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    jump();
  }
});

function checkCollision() {
  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
  const riverLeft = parseInt(window.getComputedStyle(river).getPropertyValue('left'));

  if (riverLeft < 0 && playerTop >= 120) {
    isGameOver = true;
    document.querySelector('#game-over').style.display = 'block';
  }
}

setInterval(function() {
  checkCollision();
  if (!isGameOver) {
    const riverLeft = parseInt(window.getComputedStyle(river).getPropertyValue('left'));
    river.style.left = (riverLeft - 2) + 'px';
    }
    }, 10);