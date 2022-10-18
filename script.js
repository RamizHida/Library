let addBtn = document.querySelector("#add");
let bookForm = document.querySelector(".book--form");
let submitBtn = document.querySelector("#submit--btn");
let book = document.querySelector(".book");
let container = document.querySelector(".container");

addBtn.addEventListener("click", function () {
  document.body.style.opacity = "0.75";
  bookForm.style.display = "block";
});

const bone = new Book("Sam and the Ham", "Dr. Seuss", 222, "yes");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Forms
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
// const read = document.getElementById("read").value;

function formReset() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
}

function addBookToLibrary() {
  if (title.value.length === 0 || author.value.length === 0) {
    return alert("Book must have Author and Title");
  }

  if (pages.value <= 0) {
    return alert("Invalid Number of Pages");
  }

  if (read.checked) {
    read.value = "Yes 😀";
  } else {
    read.value = "No 😓";
  }

  let newBook = new Book(title.value, author.value, pages.value, read.value);

  myLibrary.push(newBook);

  displaybook();

  bookForm.style.display = "none";

  formReset();
  document.body.style.opacity = "1";

  console.log(myLibrary);
}

submitBtn.addEventListener("click", addBookToLibrary);

function displaybook() {
  // Making book // //
  let bookCard = document.createElement("div"); // <div class = 'book> </div>
  bookCard.className = "book"; //

  // create book details element //
  let bookTitle = document.createElement("h3"); // <h3> </h3>
  let authorName = document.createElement("h3"); // <h3> </h3>
  let pageCount = document.createElement("h3"); // <h3> </h3>
  let readStatus = document.createElement("h3"); // <h3> </h3>

  // Edit and Delete containers and buttons
  let editContainer = document.createElement("div"); // <div> </div>
  let deleteContainer = document.createElement("div"); // <div> </div>
  let editButton = document.createElement("button"); // <button> </button>
  let deleteButton = document.createElement("button"); // <button> </button>

  // Add classes to buttons
  editButton.className = "edit"; // <button class='edit'> </button>
  deleteButton.className = "delete"; // <button class='delete'> </button>

  // Add text content to buttons
  editButton.textContent = "Edit"; // <button class='edit'>Edit</button>
  deleteButton.textContent = "Delete"; // <button class='delete'>Delete</button>

  // Put buttons inside their container
  editContainer.appendChild(editButton); // <div><button class='edit'>Edit</button></div>
  deleteContainer.appendChild(deleteButton); // <div><button class='delete'>Delete</button></div>

  // create bookInput element //
  let titleInput = document.createElement("span"); // <span> </span>
  let authorInput = document.createElement("span"); // <span> </span>
  let pageInput = document.createElement("span"); // <span> </span>
  let readInput = document.createElement("span"); // <span> </span>
  // Add input to bookInput elements //
  let titleInputNode = document.createTextNode(title.value); // text of title
  let authorInputNode = document.createTextNode(author.value); // text of author
  let pageInputNode = document.createTextNode(pages.value); // text of pages
  let readInputNode = document.createTextNode(read.value); // text of read
  // Append text node to bookInput elements //
  titleInput.appendChild(titleInputNode); // <span> text of title </span>
  authorInput.appendChild(authorInputNode); // <span> text of author </span>
  pageInput.appendChild(pageInputNode); // <span> text of pages </span>
  readInput.appendChild(readInputNode); // <span> text of read  </span>
  // Add text to book detail elements
  let titleNode = document.createTextNode("Title: "); // text: Title:
  let authorNode = document.createTextNode("Author: "); // text: Author:
  let pageNode = document.createTextNode("Pages: "); // text: Pages:
  let readNode = document.createTextNode("Read: "); // text: Read:
  // Apend text node to book detial element //
  bookTitle.appendChild(titleNode); // <h3> Title: </h3>
  authorName.appendChild(authorNode); // <h3> Author: </h3>
  pageCount.appendChild(pageNode); // <h3> Pages: </h3>
  readStatus.appendChild(readNode); // <h3> Read: </h3>
  // Append the span elements, which at this point have the correct details, to the book detail elements
  bookTitle.appendChild(titleInput); // <h3> Title: <span> text of title </span></h3>
  authorName.appendChild(authorInput); // <h3> Author: <span> text of author </span> </h3>
  pageCount.appendChild(pageInput); // <h3> Pages: <span> text of pages </span> </h3>
  readStatus.appendChild(readInput); // <h3> Read: <span> text of read  </span> </h3>;

  // Apend the book elements to the book //
  bookCard.appendChild(bookTitle); // ---
  bookCard.appendChild(authorName); // ---
  bookCard.appendChild(pageCount); // ---
  bookCard.appendChild(readStatus); //
  bookCard.appendChild(editContainer);
  bookCard.appendChild(deleteContainer);

  // Apend the book card to book container
  container.appendChild(bookCard);
}
