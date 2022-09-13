const bookList = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2019.png",
    name: "Eloquent JavaScript",
    overview: "Lorem, ipsum dolor sit amet",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2020.png",
    name: "O'REILLY Learning React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2021.png",
    name: "The Road To React",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2022.png",
    name: "C Programming Language",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2023.png",
    name: "Effective Typescript",
    overview:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti commodi reiciendis vitae non, eos illum fugit tempore dolor deleniti architecto porro accusantium. Vel aliquid, minus obcaecati voluptatum vero suscipit consectetur!",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/ProgrammingHero1/book-shop/main/books/image%2025.png",
    name: "JavaScript Everywhere",
    overview: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const wishlistItems = [];
const cart = [];

const getWishlistItems = () => {
  return bookList.filter((book) => wishlistItems.includes(book.id.toString()));
};

const getCartItems = () => {
  return bookList.filter((book) => cart.includes(book.id.toString()));
};

const switchTab = (id) => {
  if (id === "container") {
    document.getElementById("container").style.display = "grid";
    document.getElementById("wishlist").style.display = "none";
    document.getElementById("cart").style.display = "none";
    showBooks(bookList);
  } else if (id === "wishlist") {
    document.getElementById("wishlist").style.display = "grid";
    document.getElementById("container").textContent = ""
    document.getElementById("cart").textContent = "none"

    displayWishlist();

    // hiding wish button 
    const isWishListHaveItems = document.querySelectorAll("#wishlist .card").length;
    if (isWishListHaveItems) {
      const wishlist = document.querySelectorAll(".wish-btn");

      wishlist.forEach(item => {
        item.style.display = "none";
      });
    }

  } else {
    document.getElementById("cart").style.display = "grid";
    document.getElementById("container").style.display = "none";
    document.getElementById("wishlist").style.display = "none";

    displayCart();

    // hiding wish button 
    const isCartListHaveItems = document.querySelectorAll("#cart .card").length;
    if (isCartListHaveItems) {
      const cart = document.querySelectorAll(".cart-btn");

      cart.forEach(item => {
        item.style.display = "none";
      });
    }
  }
};

const showBooks = (books) => {
  const bookContainer = document.getElementById("container");

  books.forEach((book) => {
    const div = createCard(book);
    bookContainer.appendChild(div);
  });
};

const createCard = (book) => {
  const div = document.createElement("div");
  div.classList.add("card");
  //console.log(book);
  let overview = book.overview;

  div.innerHTML = `
  <div class="image-container">
    <img
      src="${book.image}"
      alt=""
    />
    <div class="button-container">
      <button onclick="addToWishlist('${book.id}')" class="button wish-btn" ><i class="fa-solid fa-heart"></i></button>
      <button onclick="addToCart('${book.id}')" class="button cart-btn">Add To Cart</button>
    </div>
  </div>
  <div class="info-container">
    <h1>${book.name}</h1>
    <p>
      ${overview}
    </p>
  </div>

`;

  return div;
};

showBooks(bookList);

const addToCart = (id) => {
  cart.push(id);
};

const addToWishlist = (id) => {
  if (wishlistItems.indexOf(id) === -1) {
    wishlistItems.push(id);
  }
};

const displayCart = () => {
  const cart = getCartItems();
  //console.log(cart);
  const cartContainer = document.getElementById("cart");
  cartContainer.textContent = "";
  cart.forEach((book) => {
    const div = createCard(book);
    cartContainer.appendChild(div);
  });
};

const displayWishlist = () => {
  const wishlist = getWishlistItems();
  //console.log(wishlist);
  const wishListContainer = document.getElementById("wishlist");
  wishListContainer.textContent = ""

  wishlist.forEach((book) => {
    //console.log(book);
    const div = createCard(book);
    wishListContainer.appendChild(div);
  });
};
