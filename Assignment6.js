const products = [
  {
    name: "Smartphone",
    price: 599.99,
    quantity: 10,
    category: "Electronics",
    sku: "PHN123",
  },
  {
    name: "Jeans",
    price: 49.99,
    quantity: 20,
    category: "Fashion",
    sku: "JNS456",
  },
  {
    name: "Laptop",
    price: 899.99,
    quantity: 5,
    category: "Electronics",
    sku: "LPT789",
  },
  {
    name: "Sneakers",
    price: 79.99,
    quantity: 15,
    category: "Fashion",
    sku: "SNK101",
  },
];

const results = (skuID) => {
  const data = products.filter((product) => product.sku == skuID);
  return data;
};
console.log(results("LPT789"));

// Get items by price below 500
const getproductbyPrice = (price) => {
  const opPrice = products.filter(
    (pricedata) => pricedata.price <= 500 // price && pricedata.price <= 500
  );
  return opPrice;
};
//console.log(getproductbyPrice(899.99));
console.log(getproductbyPrice());

// Get Products name and quantity
products.map((getdata) =>
  console.log("Product name is ", getdata.name, "Quantity ", getdata.quantity)
);

// Get products deatils where quantity greater than 20

const getproductbyQuantity = (quantity) => {
  const opFind = products.find((prodcutsfind) => prodcutsfind.quantity <= 20);
  return opFind;
};
console.log(getproductbyQuantity());

// Let Movies
let movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    releaseYear: 1994,
  },
  { title: "Inception", genre: "Action", rating: 8.8, releaseYear: 2010 },
  { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
  { title: "Pulp Fiction", genre: "Crime", rating: 8.9, releaseYear: 1994 },
];

// Get Movies by genre
const getMoviesbygenre = (genre) => {
  const opMovies = movies.filter((movie) => movie.genre == genre);
  return opMovies;
};
console.log(getMoviesbygenre("Crime"));

// get movies based on rating and releaseyear lessthan 2010

const getdatabyreleaseyear = (releaseyear) => {
  const fetchdata = movies.filter(
    (moviess) => moviess.releaseYear < 2010 && moviess.rating >= 5
  );
  return fetchdata; //&& fetchdata.releaseYear <= 2010)
};
console.log(getdatabyreleaseyear());

// get title by using relase year

const releaseYear = 1994;

const findmovies = movies.find((findmovie) => findmovie.releaseYear);

console.log(findmovies.title);

// Q3 Books and Authors
let libraryBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "9780",
  },
  { title: "1984", author: "George Orwell", ISBN: "4935" },
  {
    title: "The Great Gatsby",
    author: "Scott Fitzgerald",
    ISBN: "4327",
  },
];
// get books by isbn and author names
const bookResults = (isbn, author) => {
  const bookData = libraryBooks.filter(
    (books) => books.ISBN == isbn && books.author == author
  );
  return bookData;
};

console.log(bookResults("4327", "Scott Fitzgerald"));

// find books title by using authorname

const author = "George Orwell";

const getBooksbyauthor = libraryBooks.find(
  (author) => (author.author = author)
);
console.log(getBooksbyauthor.title);

// fetch data from books

libraryBooks.map((getBooks) => console.log(getBooks));
