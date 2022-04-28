// Array literal (= []) is faster than Array constructor (new Array())
// http://jsperf.com/new-array-vs-literal/15
const array = [];

// Object literal (={}) is faster than Object constructor (new Object())
// http://jsperf.com/new-array-vs-literal/26
const obj = {};

// property === undefined is faster than hasOwnProperty(property)
// http://jsperf.com/hasownproperty-vs-in-vs-undefined/17
if (obj.property === undefined) {
}

// createElement('img') is faster than new Image()
// http://jsperf.com/new-image-vs-createelement-img/8
const img = createElement('img');

// fastest way to set *any* attribute on an element object is element[attribute] = value
// to set a data attribute, use setAttribute (see below).
// For getting data attributes you can use camelCase (e.g. elem['dataName']) - *but!
// only if the data-attribute was not created dynamically (i.e. it was already inside the html element),
// otherwise use getAttribute('data-x');
// http://jsperf.com/attribute-vs-setattribute/3
const elem = document.getElementById('bla');
elem['attribute'] = value;


// className = is faster than classList.add
// http://jsperf.com/classname-vs-classlist-showdown/5
let element;
className = 'classa classb classc';

// textContent = is faster than appendChild(createTextNode)
// http://jsperf.com/textcontent-vs-createtextelement/49
element.textContent = 'text';

// setAttribute('data-x') is faster than dataset.x =
// http://jsperf.com/dataset-vs-setattribute-simple
element.setAttribute('data-x', 'x value');

// something.constructor === Array is fastest method to check if instance variable is an array
// http://jsperf.com/check-if-it-s-an-array
if (a.constructor === Array) {
}

// Using substring and indexOf is *always* much faster than using RegEx
// http://jsperf.com/regex-vs-substring-one-way-data-binding


// If you need to dereference more than once - store in a var:
// http://jsperf.com/assign-first-vs-direct-reference
const n = o.one.two.three.four.name;
if (n !== undefined) const w = n;

// this || that, faster than if (!this) that:
// http://jsperf.com/false-vs-or
const yes = false;
const v = yes || 2;

// typeof faster than isNaN():
// http://jsperf.com/isnan-vs-typeof/9
typeof (n) === 'number';

// A short, fast way to do String.startsWith() check,
// taken from: http://stackoverflow.com/a/4579228/522169
haystack.lastIndexOf(needle, 0) === 0;