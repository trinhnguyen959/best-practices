'use strict';

const initApp = () => {
	const button = document.querySelector('button');
	button.addEventListener('click', throttled(clickOrder, 3000));
};

const clickOrder = () => console.log('Call order API!', new Date().getTime());
document.addEventListener('DOMContentLoaded', initApp);

const throttled = (fn, delay) => {
	delay = delay || 0;
	let last = 0;
	return () => {
		const now = new Date().getTime();
		if (now - last < delay) {
			return;
		}
		last = now;
		fn();
	};
};
