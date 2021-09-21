// Làm bài tập tại đây
Array.prototype.reduce2 = function (callback, result) {
	let i = 0;
	if (arguments.length < 2) {
		i = 1;
		result = this[0];
	}
	for (; i < this.length; i++) {
		result = callback(result, this[i], i, this);
	}
	return result;
};

var a = [1, 2, 3, 4, 5, 6];
a.length = 100;
var result = a.reduce2((a, b) => {
	return a + b;
});

Array.prototype.forEach2 = function (callback, index) {
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			callback(this[key], key, this);
		}
	}
};

// a.forEach2((e, i, a) => {
//     console.log(e, i, a);
// });

Array.prototype.map2 = function (callback) {
	var output = [];
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			var result = callback(this[key], key, this);
			output.push(result);
		}
	}
	return output;
};

Array.prototype.filter2 = function (callback) {
	var output = [];
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			var result = callback(this[key], key, this);
			if (result) {
				output.push(this[key]);
			}
		}
	}
	return output;
};

Array.prototype.some2 = function (callback) {
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			if (callback(this[key], key, this)) {
				return true;
			}
		}
		return false;
	}
};

Array.prototype.every2 = function (callback) {
	for (const key in this) {
		if (Object.hasOwnProperty.call(this, key)) {
			if (!callback(this[key], key, this)) {
				return false;
			}
		}
		return true;
	}
};