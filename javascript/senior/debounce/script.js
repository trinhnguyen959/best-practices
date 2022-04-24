'use strict';

const initApp = () => {
	const button = document.querySelector('button');
	button.addEventListener(
		'click',
		debounce(clickOrder, 2000)
		// disable button
		// clickOrder();
		// button.disabled = true;
		// setTimeout(() => (button.disabled = false), 2000);
	);
};

const clickOrder = () => console.log('Call order API!');
document.addEventListener('DOMContentLoaded', initApp);

// debounce
// denounce(fn, delay);

const debounce = (fn, delay) => {
	delay = delay || 0;
	let timerId;
	console.log('timeId immediate load:::', timerId);

	return () => {
		console.log(`timeId previous at:::${timerId}`);
		if (timerId) {
			clearTimeout(timerId);
			timerId = null;
		}
		timerId = setTimeout(() => {
			fn();
		}, delay);
	};
};
