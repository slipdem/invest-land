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

investRangeInput.addEventListener('input', () => {
	const min = investRangeInput.min;
	const max = investRangeInput.max;
	const currentVal = investRangeInput.value;

	investSliderValue.textContent = currentVal;
	profitSliderValue.textContent = currentVal * 7.5;

	investRangeInput.style.backgroundSize =
		((currentVal - min) / (max - min)) * 100 + '% 100%';
});

profitRangeInput.addEventListener('input', () => {
	const min = profitRangeInput.min;
	const max = profitRangeInput.max;
	const currentVal = profitRangeInput.value;

	profitSliderValue.textContent = currentVal;
	investSliderValue.textContent = Math.ceil(currentVal / 7.5);

	profitRangeInput.style.backgroundSize =
		((currentVal - min) / (max - min)) * 100 + '% 100%';
});

// benefits mobile carousel

let carousel = document.querySelector('.benefits__items');
let items = carousel.querySelectorAll('.benefits__item');
let dotsContainer = document.querySelector('.dots');

// insert dots into the DOM
items.forEach((_, index) => {
	let dot = document.createElement('span');
	dot.classList.add('dot');
	if (index === 0) dot.classList.add('active');
	dot.dataset.index = index;
	dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll('.dot');

// function to show a specific item
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

// event listeners for dots
dots.forEach((dot) => {
	dot.addEventListener('click', () => {
		let index = parseInt(dot.dataset.index);
		showItem(index);
	});
});
