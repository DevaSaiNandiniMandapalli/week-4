let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    printSummary: function() {
        console.log(`"${this.title}" by ${this.author} is ${this.pages} pages long.`);
    }
};
book.printSummary();
