document.body.insertBefore(nav, document.body.children[0]);

const main = document.querySelector('main');
const form = document.querySelector('form');
const sections = document.querySelectorAll('section');
const hammers = document.querySelectorAll('.fa-hammer');
const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', function() {
	dropHammer(enterForm);
});

buttons[1].addEventListener('click', function(event) {
	event.preventDefault();
	dropHammer(nextPage);
});

function enterForm() {
	main.style.display = 'none';
	createProgressBar();

	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
		// hammer.classList.add('hammerUp');
		// hammer.classList.remove('hammerDown');
	}

	progressContainer.children[0].style.backgroundColor = 'lightgreen';
	form.style.right = '0';
	sections[0].style.visibility = 'visible';
	sections[0].style.position = 'absolute';
	sections[0].style.top = '5rem';
	sections[0].style.right = '-5rem';
	sections[0].style.animationName = 'slideFormPage';
	//sections[0].style.transform = 'translateX(-6.5rem)';

	console.log(buttons[1]);
}

function dropHammer(cb) {
	for (hammer of hammers) {
		//hammer.classList.add('hammerDown');
		hammer.style.animationName = 'hammerDown';
	}
	//hammers[0].classList.add('hammerDown');
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

function nextPage(event) {
	sections[0].style.visibility = 'hidden';
	progressContainer.children[1].style.backgroundColor = 'lightgreen';
	for (hammer of hammers) {
		hammer.style.animationName = 'hammerUp';
	}
	sections[1].style.visibility = 'visible';
	sections[1].style.position = 'absolute';
	sections[1].style.top = '5rem';
	sections[1].style.right = '-5rem';

	sections[1].style.animationName = 'slideFormPage';
	// sections[1].style.transform = 'translateX(-6.5rem)';
	// sections[1].style.transition = '1s';
}
