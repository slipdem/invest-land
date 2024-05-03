console.log('good');

const investRangeInput = document.querySelector('.input-range__invest');
const profitRangeInput = document.querySelector('.input-range__profit');

investRangeInput.addEventListener('input', () => {
	const min = investRangeInput.min;
	const max = investRangeInput.max;
	const currentVal = investRangeInput.value;

	investRangeInput.style.backgroundSize =
		((currentVal - min) / (max - min)) * 100 + '% 100%';
});

profitRangeInput.addEventListener('input', () => {
	const min = profitRangeInput.min;
	const max = profitRangeInput.max;
	const currentVal = profitRangeInput.value;

	profitRangeInput.style.backgroundSize =
		((currentVal - min) / (max - min)) * 100 + '% 100%';
});
