const form = document.querySelector('.hero__form');
const investRangeInput = document.querySelector('.input-range__invest');
const profitRangeInput = document.querySelector('.input-range__profit');
const investSliderValue = document.querySelector('.invest-sum');
const profitSliderValue = document.querySelector('.profit-sum');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const formData = new FormData(form);
	const formDataEntries = formData.entries();

	for (let value of formDataEntries) {
		console.log(value[0] + ': ' + value[1]);
	}

	form.reset();
}

// range input background and calculation change
function setInputBackground() {
	const min = this.min;
	const max = this.max;
	const currentVal = this.value;

	investSliderValue.textContent = currentVal;
	profitSliderValue.textContent = this.value * 7.5;
	// profitRangeInput.value = currentVal;

	return (this.style.backgroundSize =
		((currentVal - min) / (max - min)) * 100 + '% 100%');
}

investRangeInput.addEventListener('input', setInputBackground);
profitRangeInput.addEventListener('input', setInputBackground);

// benefits mobile carousel

let carousel = document.querySelector('.benefits__items');
let items = carousel.querySelectorAll('.benefits__item');
let dotsContainer = document.querySelector('.dots');

// Insert dots into the DOM
items.forEach((_, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('active');
	dot.dataset.index = index;
	dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll('.dot');

// Function to show a specific item
function showItem(index) {
	items.forEach((item, idx) => {
		item.classList.remove('active');
		dots[idx].classList.remove('active');
		if (idx === index) {
			item.classList.add('active');
			dots[idx].classList.add('active');
		}
	});
}

// Event listeners for dots
dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		let index = parseInt(dot.dataset.index);
		showItem(index);
	});
});
