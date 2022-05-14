document.addEventListener("DOMContentLoaded", e => {
  const list = document.querySelector("#book-list ul");

  // delete book
  list.addEventListener("click", e => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      list.removeChild(li);
    }
  });

  // add books
  const addForm = document.forms["add-book"];

  addForm.addEventListener("submit", e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // (1) create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // (3) add content
    bookName.textContent = value;
    deleteBtn.textContent = "Hapus";

    // (4) add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // (2) append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide books
  const hideBox = document.querySelector("#hide");

  hideBox.addEventListener("change", e => {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter books
  const searchBar = document.forms["search-books"].querySelector("input");
  searchBar.addEventListener("keyup", e => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");

    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");

  tabs.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
      // tagName property returns the tag name in UPPERCASE
      const targetPanel = document.querySelector(e.target.dataset.click);
      panels.forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
