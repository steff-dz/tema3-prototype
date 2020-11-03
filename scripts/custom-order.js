document.body.insertBefore(nav, document.body.children[0]);

const main = document.querySelector('main');
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const hammers = document.querySelectorAll('.fa-hammer');
const buttons = document.querySelectorAll('button');

console.log(buttons[0]);

buttons[0].addEventListener('click', function() {
	dropHammer(enterForm);
});

function enterForm() {
	main.style.display = 'none';
	createProgressBar();
	sections[0].style.visibility = 'visible';
	form.style.left = '10vw';
	sections[0].style.transform = 'translateX(-10px)';
	console.log(sections[0]);
}

function dropHammer(cb) {
	console.log('The hammer has dropped');
	hammers[0].classList.add('hammerDown');
	return setTimeout(cb, 800);
}

function createProgressBar() {
	let progressContainer = document.createElement('div');
	progressContainer.innerHTML = 'HOLLAAAA AMIIIGOS';
	progressContainer.id = 'progressContainer';
	document.body.appendChild(progressContainer);
}
