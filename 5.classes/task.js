class PrintEditionItem { //Первая задача
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state *= 1.5;
        if (this._state > 100) {
            this._state = 100;
        }
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            return;
        } else if (value > 100) {
            this._state = 100;
            return;
        }
        this._state = value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library { // Вторая задача
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let res = this.books.find((item) => {
            return item[type] === value;
        });
        if (res === undefined) {
            return null;
        }
        return res;
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex((item) => {
            return item.name === bookName;
        });

        if (bookIndex < 0) {
            return null;
        }
        let book = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return book;
    }
}

