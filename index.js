let books;

async function renderBooks(filter) {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList.add('books__loading')

  if (!books) {
    books = await getBooks();
  }
  booksWrapper.classList.remove('books__loading')

  // console.log(books)

  if (filter === 'LOW_TO_HIGH') {
    books.sort((a, b) => a.originalPrice - b.originalPrice);
  }
  else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => b.originalPrice - a.originalPrice); 
  }
  else if (filter === 'RATING') {
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml = books
    .map((book) => {
      return `<div class="book">
      <figure class="book__img--wrapper">
        <img class="book__img" src="${book.url}" alt="">
      </figure>
      <div class="book__title">
        ${book.title}
      </div>
      <div class="book__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
      </div>
      <div class="book__price">
        <span class=>${book.originalPrice}</span> 
      </div>
    </div>`;
      })
      .join("");
  
  booksWrapper.innerHTML = booksHtml;
}

function filterBooks(event) {
  renderBooks(event.target.value);
} 

setTimeout(() => {
  renderBooks();
});
// FAKE DATA
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
            {
          id: 1,
          title: "The Fast and the Furious",
                    url: "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2001,
          salePrice: 14.95,
          rating: 4.5,
        },
        {
          id: 2,
          title: "2 Fast 2 Furious",
          url: "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2003,
          salePrice: null,
          rating: 5,
        },
        {
          id: 3,
          title: "The Fast and the Furious: Tokyo Drift",
          url: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
          originalPrice: 2006,
          salePrice: 12,
          rating: 5,
        },
        {
          id: 4,
          title: "Fast & Furious",
          url: "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2009,
          salePrice: 19,
          rating: 4.5,
        },
        {
          id: 5,
          title: "Fast Five",
          url: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg",
          originalPrice: 2011,
          salePrice: 17,
          rating: 4,
        },
        {
          id: 6,
          title: "Fast & Furious 6",
          url: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
          originalPrice: 2013,
          salePrice: 12.5,
          rating: 5,
        },
        {
          id: 7,
          title: "Fast & Furious Presents: Hobbs & Shaw",
          url: "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2019,
          salePrice: 10,
          rating: 4,
        },
        {
          id: 8,
          title: "F9: The Fast Saga",
          url: "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2021,
          salePrice: 17.95,
          rating: 4.5,
        },
        {
          id: 9,
          title: "Fast X",
          url: "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX300.jpg",
          originalPrice: 2023,
          salePrice: null,
          rating: 4,
        },
      ]);
    }, 1000);
  });
} 
