class Book {
    constructor(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = dueReturnDate;
        this.availability = availability;
    }
    getTiTle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getISBN() {
        return this.ISBN;
    }
    updateCheckoutStatus(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookID;
        this.availability = newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = newReturnDate;
    }
    extendCheckoutPeriod(bookID, newReturnDate) {
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    }
    isPastDue(bookID) {
        const currentDate = new Date();
        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
}

class BookFlyweight {
    constructor({title, author, genre, pageCount, publisherID, ISBN}) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisherID = publisherID;
        this.ISBN = ISBN;
    }
}

const existingBooks = {};

class BookFactory {
    createBook({title, author, genre, pageCount, publisherID, ISBN}) {
        const existingBook = existingBooks[ISBN];
        if(!!existingBook) {
            return existingBook;
        } else {
            const book = new BookFlyweight({ title, author, genre, pageCount, publisherID, ISBN});
            existingBook[ISBN] = book;
            return book;
        }
    }
}

const bookRecordDatabase = {};

class BookRecordManger {
    addBookRecord({id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability}) {
        const bookFactory = new BookFactory();
        const book = bookFactory.createBook({title, author, genre, pageCount, publisherID, ISBN});
        bookRecordDatabase[id] = {
            checkoutDate,
            checkoutMember,
            dueReturnDate,
            availability,
            book
        }
    }
    updateCheckoutStatus({ bookID, newStatus , checkoutDate, checkoutMember, newReturnDate}) {
        const record = bookRecordDatabase[bookID];
        record.availability = newStatus;
        record.checkoutDate = checkoutDate;
        record.checkoutMember = checkoutMember;
        record.dueReturnDate = newReturnDate;
    }
    extendCheckoutPeriod(bookID, newReturnDate) {
        bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    }
    isPastDue(bookID) {
        const currentDate = new Date();
        return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }
}
