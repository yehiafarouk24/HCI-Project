// to load all the needed elements from html when the document opens  and to change the submit button state // 

document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector('.reviewcontainer .usernamediv input[type="text"]');
    const stars = document.querySelectorAll('input[name="rating"]');
    const textarea = document.querySelector('.reviewtxtarea');
    const submitBtn = document.querySelector('.customreviewbutton');
    function updateButtonState()
    {
        const starSelected = Array.from(stars).some(star => star.checked);
        const textFilled = textarea.value.trim().length > 0;
        const usernamefilled = username.value.trim().length > 0;
        submitBtn.disabled = !(starSelected && textFilled && usernamefilled);
    }

    stars.forEach(star => {
        star.addEventListener('change', updateButtonState);
    });

  textarea.addEventListener('input', updateButtonState);
  username.addEventListener('input', updateButtonState);
  displayreviews();
});
   
    // returns the numbers of stars the user selected //

function getSelectedRating() {
    const selected = document.querySelector('input[name="rating"]:checked');
    if (selected)
        {
            return selected.value;
        } 
    else
        {
            return null;
        }
}

    // comment // 

function handlereviewsubmitfunc()
{
    const rating = getSelectedRating();
    const review = document.querySelector('.reviewtxtarea').value.trim();
    const username = document.querySelector('.usernamediv input[type ="text"]').value.trim();
    let reviews = JSON.parse(localStorage.getItem("userReviews")) || []; // msh fahem //
    const newReview = {
    name: username,
    stars: rating,
    comment: review,
    date: new Date().toLocaleDateString(), 
    };

    reviews.push(newReview);

    localStorage.setItem("userReviews", JSON.stringify(reviews)); // msh fahem // 
    alert("Thanks! Your review has been added.");

    document.querySelector('.reviewtxtarea').value = "";
    document.querySelector('.reviewcontainer .usernamediv input[type="text"]').value = "";
    document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
    document.querySelector('.customreviewbutton').disabled = true;
    displayreviews();
}

function displayreviews() {
    const reviews = JSON.parse(localStorage.getItem("userReviews")) || [];
    const cardsContainer = document.querySelector('.revcards-container');
    const noReviewText = document.getElementById('noreviewtxt');
    cardsContainer.innerHTML = '';

    if (reviews.length > 0) {
        noReviewText.setAttribute('hidden', 'hidden');

        reviews.forEach(review => {
            // Create the card elements
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-3', 'mb-4');
            cardDiv.style.width = '310px';
            cardDiv.style.overflow = 'hidden';

            const cardInnerDiv = document.createElement('div');
            cardInnerDiv.classList.add('card', 'text-center');
            cardInnerDiv.style.backgroundColor = '#F3F3E0';

            const cardHeader = document.createElement('div');
            cardHeader.classList.add('card-header');
            cardHeader.textContent = review.name;
            
            const img = document.createElement('img');
            img.setAttribute('src', 'Assets/user-solid (1).svg');
            img.style.marginLeft = '10px';
            img.setAttribute('width', '15px');
            img.setAttribute('height', '15px');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.style.maxHeight = '85px';
            cardBody.style.overflow = 'auto';
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = "⭐".repeat(6 - parseInt(review.stars)); // Assuming review.stars is a string

            const cardText = document.createElement('p');
            cardText.classList.add('card-text');
            cardText.style.color = 'black';
            cardText.textContent = review.comment;
            cardText.style.marginBottom = 'auto';

            const cardFooter = document.createElement('div');
            cardFooter.classList.add('card-footer', 'text-muted');
            cardFooter.textContent = review.date;


            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardHeader.appendChild(img);
            cardInnerDiv.appendChild(cardHeader);
            cardInnerDiv.appendChild(cardBody);
            cardInnerDiv.appendChild(cardFooter);
            cardDiv.appendChild(cardInnerDiv);
            cardsContainer.appendChild(cardDiv);
        });
    } 
    else
    {
        noReviewText.removeAttribute('hidden');
    }
}

// Load book data from localStorage
const book = JSON.parse(localStorage.getItem('selectedBook'));
if (book) {
    document.getElementById('detailTitle').textContent = book.title;
    document.getElementById('detailAuthor').textContent = book.author || 'Unknown Author';
    document.getElementById('detailYear').textContent = book.year || 'Year';
    document.getElementById('detailCategory').textContent = (book.category || '').toUpperCase();
    document.getElementById('detailDescription').textContent = book.longDescription || book.description;
    document.getElementById('detailCover').src = book.image;
    document.getElementById('detailCover').alt = book.title;
    document.getElementById('detailDownload').href = book.download;
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-bar input[type="image"]');
    
    if (searchInput && searchButton) {
        // Handle search button click
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleSearch();
        });
        
        // Handle Enter key in search box
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
        
        function handleSearch() {
            const query = searchInput.value.trim();
            if (query) {
                // Get books data
                const books = window.books || [];
                
                // Filter books based on search query
                const searchResults = books.filter(book => 
                    book.title.toLowerCase().includes(query.toLowerCase()) || 
                    book.author.toLowerCase().includes(query.toLowerCase()) || 
                    (book.category && book.category.toLowerCase().includes(query.toLowerCase())) ||
                    (book.description && book.description.toLowerCase().includes(query.toLowerCase()))
                );
                
                // Save results to localStorage for the Books page to use
                localStorage.setItem('searchResults', JSON.stringify(searchResults));
                localStorage.setItem('searchTerm', query);
                
                // Redirect to Books.html with search parameter
                window.location.href = `Books.html?search=${encodeURIComponent(query)}`;
            }
        }
    }
    
    // Check if we're on the Books page and there's a search query
    if (window.location.href.includes('Books.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            // If we have search results in localStorage
            const savedResults = JSON.parse(localStorage.getItem('searchResults') || '[]');
            
            // Display search results if booksContainer exists
            const booksContainer = document.getElementById('booksContainer');
            if (booksContainer) {
                // Clear container
                booksContainer.innerHTML = '';
                
                // Create search results header
                const searchHeader = document.createElement('div');
                searchHeader.className = 'search-results-header';
                searchHeader.innerHTML = `
                    <h3 style="color: white;">Search results for: "${searchQuery}"</h3>
                    <p style="color: white;">${savedResults.length} book${savedResults.length !== 1 ? 's' : ''} found</p>
                `;
                searchHeader.style.marginBottom = '20px';
                booksContainer.appendChild(searchHeader);
                
                // If no results found
                if (savedResults.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.innerHTML = '<p>No books found matching your search.</p>';
                    noResults.style.color = 'white';
                    noResults.style.textAlign = 'center';
                    noResults.style.padding = '30px';
                    booksContainer.appendChild(noResults);
                    return;
                }
                
                // Create book cards for search results
                savedResults.forEach(book => {
                    const card = document.createElement('div');
                    card.className = 'custom-card';
                    card.dataset.category = book.category || 'uncategorized';
                    
                    card.innerHTML = `
                        <div class="card-content">
                            <img src="${book.image}" alt="${book.title}" class="card-image">
                            <div class="card-text">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-description">${book.description}</p>
                            </div>
                        </div>
                    `;
                    
                    card.addEventListener('click', function() {
                        localStorage.setItem('selectedBook', JSON.stringify(book));
                        window.location.href = 'book-detail.html';
                    });
                    
                    booksContainer.appendChild(card);
                });
            }
        }
    }
});


