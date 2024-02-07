let parseCount = function (number) { // Первая задача
    let result = Number.parseFloat(number);
    if (isNaN(result)) {
        const error = new Error('Невалидное значение');
        throw error;
    }
    return result;
}

let validateCount = function (number) {
    try {
        return parseCount(number);
    }
    catch (error) {
        return error;
    }
}

class Triangle { // Вторая задача
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((this.a + this.b) < this.c || (this.c + this.b) < this.a || (this.c + this.a) < this.b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

let getTriangle = function (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}

