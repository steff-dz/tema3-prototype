document.body.insertBefore(nav, document.body.children[0]);

const main = document.querySelector('main');
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const hammers = document.querySelectorAll('.fa-hammer');
const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', function() {
	dropHammer(enterForm);
});

function enterForm() {
	main.style.display = 'none';
	createProgressBar();
	progressContainer.children[0].style.backgroundColor = 'lightgreen';
	sections[0].style.visibility = 'visible';
	form.style.left = '10vw';
	sections[0].style.transform = 'translateX(-10px)';
}

function dropHammer(cb) {
	hammers[0].classList.add('hammerDown');
	return setTimeout(cb, 800);
}

function createProgressBar() {
	let progressContainer = document.createElement('div');
	progressContainer.id = 'progressContainer';
	document.body.appendChild(progressContainer);
	progressContainer.innerHTML = `
	<div class="progressBox">1</div>
	<div class="progressBox">2</div>
	<div class="progressBox">3</div>
	`;
}
