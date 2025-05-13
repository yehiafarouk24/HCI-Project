    // to load all the needed elements from html when the document opens  and to change the submit button state // 

document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector('.reviewcontainer .usernamediv input[type="text"]');
    const stars = document.querySelectorAll('input[name="rating"]');
    const textarea = document.querySelector('.reviewtxtarea');
    const submitBtn = document.querySelector('.customreviewbtn');
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
    document.querySelector('.customreviewbtn').disabled = true;
    displayreviews();
}

    // comment //

function displayreviews() {
    const reviews = JSON.parse(localStorage.getItem("userReviews")) || [];
    const cardsContainer = document.querySelector('.cards-container');
    const noReviewText = document.getElementById('noreviewtxt');
    const prevButton = document.getElementById("prevreview");
    const nextButton = document.getElementById("nextreview");

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
            img.setAttribute('src', 'user-solid (1).svg');
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
            // Assemble the card structure
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardHeader.appendChild(img);
            cardInnerDiv.appendChild(cardHeader);
            cardInnerDiv.appendChild(cardBody);
            cardInnerDiv.appendChild(cardFooter);
            cardDiv.appendChild(cardInnerDiv);
            cardsContainer.appendChild(cardDiv);
        });
        if (reviews.length > 0) 
        {
            prevButton.removeAttribute('hidden');
            nextButton.removeAttribute('hidden');
        } 
        else 
        {
            prevButton.setAttribute('hidden', 'hidden');
            nextButton.setAttribute('hidden', 'hidden');
        }

    } 
    else
    {
        noReviewText.removeAttribute('hidden');
        prevButton.setAttribute('hidden', 'hidden');
        nextButton.setAttribute('hidden', 'hidden');
    }
}
