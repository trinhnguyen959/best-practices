// console.log(a.every2(e => {
//     return e > 0;
// }));

// console.log(document.getElementById('nacv'));

var courseApi = 'http://localhost:3000/courses';

function start() {
	getCourse(renderCourse);
	handleCreateForms();
}

// start();

// get course
function getCourse(callback) {
	fetch(courseApi)
		.then(courses => {
			return courses.json();
		})
		.then(callback);
}

// add courses
function addCourse(data, callback) {
	var apiHeaderData = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	};

	fetch(courseApi, apiHeaderData)
		.then(response => {
			return response.json();
		})
		.then(callback);
}

// del courses
function deleteCourse(id) {
	var apiHeaderData = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	};

	fetch(courseApi + '/' + id, apiHeaderData)
		.then(response => {
			return response.json();
		})
		.then(() => {
			var course = document.querySelector('.course-item-' + id);
			if (course) {
				course.remove();
			}
		});
}

// update courses
function updateCourse(id) {
	var course = document.querySelector('.course-item-' + id);
	var title = course.querySelector('h4').textContent;
	var description = course.querySelector('p').textContent;
	var data = {
		title: title,
		description: description,
	};

	var apiHeaderData = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	};

	fetch(courseApi + '/' + id, apiHeaderData).then(response => response.json());
}

// get
function renderCourse(courses) {
	var listCourses = document.querySelector('#list-course');
	var listItem = courses.map(course => {
		return `
            <li class="course-item-${course.id}">
                <h4 contenteditable="true">${course.title}</h4>
                <p contenteditable="true">${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Xoá</button>
                <button onclick="updateCourse(${course.id})">Sửa</button>
            </li>
        `;
	});
	listCourses.innerHTML = listItem.join('');
}

// add
function handleCreateForms() {
	var createBtn = document.querySelector('#create-btn');
	createBtn.onclick = () => {
		var title = document.querySelector('input[name="title"]').value;
		var description = document.querySelector('input[name="description"]').value;
		var data = {
			title: title,
			description: description,
		};
		addCourse(data, () => {
			getCourse(renderCourse);
		});
	};
}

function sumOfTheses(first, second) {
	let sum = first + second;
	console.log(arguments);
	return `${sum}`;
}

console.log(sumOfTheses(1, 2));
