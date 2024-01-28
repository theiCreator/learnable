const moviesLists = [
  { title: "Inception", rating: 16, genre: "Sci-fi", available: true },
  { title: "Mission Impossible", rating: 13, genre: "Action", available: true },
  { title: "Ready Player One", rating: 16, genre: "sci", available: true },
  { title: "Pirates", rating: 18, genre: "Adventure", available: false },
  { title: "Vikings", rating: 13, genre: "Adventure", available: false },
  { title: "360", rating: 18, genre: "Romance", available: true },
  { title: "Game Of Thrones", rating: 13, genre: "Action", available: true },
];

class MoviesRentalsStore {
  constructor() {
    this.movies = [...moviesLists];
  }

  static message = "Welcome to our movie rental store";

  ourMoviesLists() {
    return this.movies;
  }

  rentMovie(title) {
    const movie = this.movies.find((m) => m.title === title);

    if (movie && movie.available) {
      console.log(`You have rented ${movie.title}`);
      movie.available = false; // Mark the movie as not available after renting
    } else if (movie && !movie.available) {
      console.log(
        `${movie.title} is not available for rent at this time. Please try again later.`
      );
    } else {
      console.log(
        `${title} not available in our store. Kindly find some other movie.`
      );
    }

    return this;
  }
}

class Person {
  constructor() {
    this.rentedMovies = [];
  }

  rentMovie(store, title) {
    const result = store.rentMovie(title);
    if (result) {
      this.rentedMovies.push(title);
    }
    return this;
  }
}

const shop = new MoviesRentalsStore();
console.log(shop.ourMoviesLists());

const saint = new Person();
const austine = new Person();

saint.rentMovie(shop, "Inception").rentMovie(shop, "Game Of Thrones");
austine.rentMovie(shop, "Vikings").rentMovie(shop, "360");
saint.rentMovie(shop, "Pitrates");

console.log("Saint's rented movies:", saint.rentedMovies);
console.log("Austine's rented movies:", austine.rentedMovies);