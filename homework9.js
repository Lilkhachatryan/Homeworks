class Author {
	constructor(name, email, gender) {
		this._name = name;
		this._email = email;
		this._gender = gender;
	}

	get name() {
		return this._name;
	}

	set name(v) {
		this._name = v;
	}

	get email() {
		return this._email;
	}

	set email(v) {
		this._email = v;
	}

	get gender() {
		return this._gender;
	}

	set gender(v) {
		this._gender = v;
	}
}

Author.prototype.toString = function (value) { 
	return 'name - ' + this.name + ", email - " + this.email + ', gender - ' + this.gender 
}

let author1 = new Author(333333, 'author1@gmail.com', 'male');
author1.toString();
// "name - 333333, email - author1@gmail.com, gender - male"


class Book {
	constructor(title, quantity, price, author) {
		this._title = title;
		this._quantity = quantity;
		this._price = price;
		this._author = author;
	}

	get title() {
		return this._title;
	}

	set title(v) {
		this._title = v;
	}

	get quantity() {
		return this._quantity;
	}

	set quantity(v) {
		this._quantity = v;
	}

	get price() {
		return this._price;
	}

	set price(v) {
		this._price = v;
	}

	get author() {
		return this._author;
	}

	set author(v) {
		this._author = v;
	}

	profit() {
		return this.price * this.quantity;
	}
}

let book1 = new Book("My", 4, 5000, new Book('me', 'me@gmail.com', 'female'));

book1.profit() // 20000

// toString

