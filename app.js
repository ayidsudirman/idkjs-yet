const list = document.querySelector('#book-list ul');

// delete book
list.addEventListener('click', e => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

// add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // (1) create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // (3) add content
    bookName.textContent = value;
    deleteBtn.textContent = 'Hapus';

    // (4) add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // (2) append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})

