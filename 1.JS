class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Книга: ${this.title}`);
    console.log(`Автор: ${this.author}`);
    console.log(`Количество страниц: ${this.pages}`);
  }
}

// Создание объекта book
const book = new Book("Программирование на JavaScript", "Имя Автора", 300);

// Вывод информации о книге
book.displayInfo();
