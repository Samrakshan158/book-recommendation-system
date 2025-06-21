const token = localStorage.getItem('token');

async function getUserRole() {
  const res = await fetch('/api/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) return null;

  const user = await res.json();
  return user.role;
}

async function initAdmin() {
  const role = await getUserRole();

  if (role === 'admin') {
    document.querySelector('#admin-content').style.display = 'block';
    loadUsers();
    loadBooks();
  } else {
    document.querySelector('#unauthorized').style.display = 'block';
  }
}

function loadUsers() {
  fetch('/api/users', {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => res.json())
  .then(users => {
    const tbody = document.querySelector('#users-table tbody');
    tbody.innerHTML = '';
    users.forEach(u => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${u.username}</td>
        <td>${u.role}</td>
        <td>
          ${u.role !== 'admin' ? `<button onclick="promote('${u._id}')">Promote</button>` : ''}
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function loadBooks() {
  fetch('/api/books', {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => res.json())
  .then(books => {
    const tbody = document.querySelector('#books-table tbody');
    tbody.innerHTML = '';
    books.forEach(b => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>
          <button onclick="editBook('${b._id}')">Edit</button>
          <button onclick="deleteBook('${b._id}')">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

function promote(userId) {
  fetch(`/api/users/${userId}/promote`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}` }
  }).then(loadUsers);
}

function editBook(bookId) {
  alert(`Edit Book ${bookId} – functionality pending.`);
}

function deleteBook(bookId) {
  if (!confirm('Delete this book?')) return;
  fetch(`/api/books/${bookId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  }).then(loadBooks);
}

initAdmin();
