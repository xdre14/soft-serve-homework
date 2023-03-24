// task 1

const list = document.getElementById("list");
const items = list.getElementsByTagName("li");
const output = `${items[0].textContent}, ${items[4].textContent}, ${items[1].textContent}, ${items[3].textContent}, ${items[2].textContent}`;

alert(output);

// task 2
const header = document.querySelector('h1');
const div = document.querySelector('#myDiv');
const itsList = document.querySelector('#myList');
const span = document.querySelector('span');


header.style.fontSize = '60px';
header.style.textAlign = 'center';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
list.style.display = 'flex';
list.style.flexDirection = 'row';
list.style.justifyContent = 'space-around';
span.style.display = 'none';


// task 3


const body = document.createElement('body');
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');

main.setAttribute('class', 'mainClass check item');
div.setAttribute('id', 'myDiv');


p.textContent = 'First paragraph';


div.appendChild(p);
main.appendChild(div);
body.appendChild(main);


document.documentElement.appendChild(body);


// task 4
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.onclick = function() {
 
  const fio = document.querySelector('[name="fio"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const birthday = document.querySelector('[name="birthday"]').value;
  const email = document.querySelector('[name="email"]').value;

  const result = `ПІБ: ${fio}<br>Номер телефону: ${phone}<br>Дата народження: ${birthday}<br>Електронна пошта: ${email}`;

  outBlock.innerHTML = result;
}

// task 5

const colors = document.querySelectorAll('.color');
const gradients = document.querySelectorAll('.gradient');
const shoeImg = document.querySelector('.shoe.show');
const shoeName = document.querySelector('.shoeName h1');
const price = document.querySelector('#outprice');
const description = document.querySelector('.description .text');


colors.forEach(color => {
  color.addEventListener('click', () => {
   
    colors.forEach(c => c.classList.remove('active'));

   
    color.classList.add('active');

    
    gradients.forEach(g => {
      g.classList.remove('first');
      g.classList.add('second');
      if (g.getAttribute('color') === color.getAttribute('color')) {
        g.classList.remove('second');
        g.classList.add('first');
      }
    });

    shoeImg.src = `https://i.postimg.cc/${color.getAttribute('color')}.png`;

  
    shoeName.innerText = `Nike Zoom KD 12 (${color.getAttribute('color')})`;
    description.innerText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. (${color.getAttribute('color')})`;

    
    price.innerText = color.getAttribute('data-price');
  });
});