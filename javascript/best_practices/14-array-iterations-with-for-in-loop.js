// 14. Array Iterations With βfor-inβ Loops

'π© A bad way π©';

Array.prototype.hello = 'hey!';
var array = ['1', '2', '3'];

for (var i in array) {
	console.log(array[i]);
} // 1,2,3,hey!

array.length; //3

('β A good way β');

array.forEach(el => console.log(el));
