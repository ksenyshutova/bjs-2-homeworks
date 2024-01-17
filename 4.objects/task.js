function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks') === false) {
		console.log('Добавление невозможно.')
	}
	this.marks = marks;
}

Student.prototype.getAverage = function() {
	let average = 0;
	if (this.marks.length === 0 || this.hasOwnProperty('marks') === false) {
		return average;
	}
	this.marks.reduce((acc, item, index) => {
		acc += item;
		if (index === this.marks.length - 1) {
			average = acc / this.marks.length;
		}
		return acc;
	}, 0);
	return average;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.exclude = reason;
}