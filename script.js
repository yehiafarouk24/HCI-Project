// Search functionality
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

// Sample book data (in a real application, this would come from a backend)
const books = [
    { title: 'The Great Gatsby', category: 'Fiction', author: 'F. Scott Fitzgerald' },
    { title: 'A Brief History of Time', category: 'Science', author: 'Stephen Hawking' },
    { title: 'The Art of War', category: 'History', author: 'Sun Tzu' },
    { title: 'The Story of Art', category: 'Arts', author: 'E.H. Gombrich' }
];

// Search functionality
function searchBooks(query) {
    const results = books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.category.toLowerCase().includes(query.toLowerCase())
    );
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }

    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'search-results';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p class="no-results">No books found</p>';
    } else {
        const resultsList = results.map(book => `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
            </div>
        `).join('');
        resultsDiv.innerHTML = resultsList;
    }

    document.querySelector('.hero').appendChild(resultsDiv);
}

// Event listeners
searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
        searchBooks(query);
    }
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchBar.value.trim();
        if (query) {
            searchBooks(query);
        }
    }
});

// Category card animations and interaction
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent;
        const categoryBooks = books.filter(book => book.category === category);
        displaySearchResults(categoryBooks);
        
        // Smooth scroll to results
        document.querySelector('.search-results').scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
const navbar = document.querySelector('.navbar');
const menuButton = document.querySelector('a[href="#"]');

menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.toggle('mobile-menu-open');
}); 