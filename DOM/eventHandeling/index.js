const form = document.querySelector('#todo')
const input = document.querySelector('#todoInput')
const to_list = document.querySelector('#todoList')

// hendleling submit & preventDefault

todo.addEventListener('submit', (event) =>{
    event.preventDefalut() // Mencegah halaman reload saat form di-submit
})

// Buat elemen <li> baru
const taskNew = todoInput.value;

const li = document.createElement('li')
li.innerHTML = `${taskNew} <buuton class="dellTask>happus</button>`
to_list.appendChild(li)

todoInput.value = '' //reset input

// 2. Event Delegation (Listener dipasang di <ul> induk, bukan di setiap tombol hapus)
to_list.addEventListener('click', (event) => {
   // Cek apakah elemen yang diklik memiliki class 'dellTask 
    if (event.target.classList.contains('dellTask')) {
        const li = event.target.parentElement
        // Hapus elemen <li>
        li.remove()
    }
})