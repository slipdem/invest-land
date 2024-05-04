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
