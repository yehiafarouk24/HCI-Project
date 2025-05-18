// Simple search functionality for the library
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search script loaded');
    
    // Get search elements
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-bar input[type="image"]');
    
    if (!searchInput || !searchButton) {
        console.error('Search elements not found');
        return;
    }
    
    console.log('Search elements found');
    
    // Function to handle search
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) return;
        
        console.log('Searching for:', searchTerm);
        
        // Redirect to Books.html with search parameter
        window.location.href = `Books.html?search=${encodeURIComponent(searchTerm)}`;
    }
    
    // Add click event listener to search button
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });
    
    // Add keypress event listener to search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Handle search results display if on Books.html page
    if (window.location.href.includes('Books.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery && searchInput) {
            // Set search input value to query
            searchInput.value = searchQuery;
            
            // Get books container
            const booksContainer = document.getElementById('booksContainer');
            if (!booksContainer) return;
            
            // Get all books from the window.books array
            const allBooks = window.books || [];
            if (!allBooks.length) return;
            
            // Filter books by search query
            const filteredBooks = allBooks.filter(book => 
                (book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())) || 
                (book.author && book.author.toLowerCase().includes(searchQuery.toLowerCase())) || 
                (book.category && book.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (book.description && book.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            
            // Clear books container
            booksContainer.innerHTML = '';
            
            // Display search results header
            const header = document.createElement('div');
            header.innerHTML = `
                <h3 style="color: white; margin-bottom: 10px;">Search results for: "${searchQuery}"</h3>
                <p style="color: white; margin-bottom: 20px;">${filteredBooks.length} book${filteredBooks.length !== 1 ? 's' : ''} found</p>
                <a href="Books.html" class="btn mb-4" style="background-color: #7b61ff; color: white;">Clear Search</a>
            `;
            booksContainer.appendChild(header);
            
            // If no results found
            if (filteredBooks.length === 0) {
                const noResults = document.createElement('div');
                noResults.innerHTML = `
                    <div style="color: white; text-align: center; padding: 30px;">
                        <p>No books found matching your search.</p>
                    </div>
                `;
                booksContainer.appendChild(noResults);
                return;
            }
            
            // Create and append book cards for each filtered book
            filteredBooks.forEach(book => {
                const card = document.createElement('div');
                card.className = 'custom-card';
                card.innerHTML = `
                    <div class="card-content">
                        <img src="${book.image}" alt="${book.title}" class="card-image">
                        <div class="card-text">
                            <h4 class="card-title">${book.title}</h4>
                            <p class="card-description">${book.description}</p>
                        </div>
                    </div>
                `;
                
                // Add click event to open book details
                card.addEventListener('click', function() {
                    localStorage.setItem('selectedBook', JSON.stringify(book));
                    window.location.href = 'book-detail.html';
                });
                
                booksContainer.appendChild(card);
            });
            
            // Update category buttons to clear search when clicked
            const categoryButtons = document.querySelectorAll('.custom-btn');
            categoryButtons.forEach(button => {
                const originalClick = button.onclick;
                button.onclick = function() {
                    window.location.href = 'Books.html';
                };
            });
        }
    }
}); 