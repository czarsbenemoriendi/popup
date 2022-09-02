'use strict';
const htmlStructure = {
	btn1: document.querySelector('.btn1'),
	btn2: document.querySelector('.btn2'),
	wrapper: document.querySelector('.wrapper'),
	popup1: document.querySelector('.popup1'),
	shadow: document.querySelector('.shadow'),
	closeBtn: document.getElementsByClassName('close-popup'),
};
const secondPopup = {
	createPopup: function () {
		const div = document.createElement('div');
		const h2 = document.createElement('h2');
		const p = document.createElement('p');
		const btn = document.createElement('button');
		h2.textContent = `I'm a modal window`;
		btn.textContent = 'X';
		p.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
		voluptatum. Quam porro sapiente, necessitatibus eos, repudiandae sunt
		maxime ipsum libero possimus vitae, ratione doloribus tenetur labore
		dolorum quia cum. Aspernatur?`;
		h2.classList.add('title');
		p.classList.add('text');
		div.classList.add('popup2');
		btn.classList.add('close-popup');
		wrapper.appendChild(div);
		div.append(h2, p, btn);
	},
};
const arr = [];
const { btn1, btn2, wrapper, popup1, shadow, closeBtn, closePop } =
	htmlStructure;

arr.push(closeBtn);

let popup2,
	popup2Item,
	popArr = [];
const showPopup2 = () => {
	secondPopup.createPopup();
	popup2 = document.getElementsByClassName('popup2');
	shadow.classList.toggle('hidden');
	for (let i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', closePopup);
	}
};
const showPopup1 = () => {
	popup1.classList.toggle('hidden');
	shadow.classList.toggle('hidden');
};

function closePopup() {
	popup1.classList.add('hidden');
	shadow.classList.add('hidden');
	for (let i = 0; i < popup2.length; i++) {
		popup2[i].classList.add('hidden');
	}
}
btn1.addEventListener('click', showPopup1);
btn2.addEventListener('click', showPopup2);
shadow.addEventListener('click', closePopup);

for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener('click', closePopup);
}
