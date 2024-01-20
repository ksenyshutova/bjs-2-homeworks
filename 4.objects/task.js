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
		this.marks = marks;
	}
	if (this.hasOwnProperty('excluded') === true) {
		delete this.marks;
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
		return 0;
	} 
	let resultAverage = this.marks.reduce((acc, item, index) => {
		let sum = acc + item;
		if (index === this.marks.length - 1) {
			return sum / this.marks.length;
		} 
		return sum;
	}, 0);
	return resultAverage;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}


