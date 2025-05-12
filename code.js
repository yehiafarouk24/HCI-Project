document.addEventListener("DOMContentLoaded", function () {
    const username = document.querySelector('.reviewcontainer .usernamediv input[type="text"]');
    const stars = document.querySelectorAll('input[name="rating"]');
    const textarea = document.querySelector('.reviewtxtarea');
    const submitBtn = document.querySelector('.customreviewbtn');
    function updateButtonState() {
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
function getSelectedRating() {
  const selected = document.querySelector('input[name="rating"]:checked');
  return selected ? selected.value : null; // msh fahem // 
}
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
function displayreviews()
{
    const reviews = JSON.parse(localStorage.getItem("userReviews")) || [];
    if (reviews.length > 0) 
    {
        document.getElementById('noreviewtxt').setAttribute('hidden', 'hidden');
        for(let i = 1; i <= reviews.length;i++)
        {
            document.getElementById('card' + i).removeAttribute('hidden');
        }
    } 
    else
    {
        document.getElementById('noreviewtxt').removeAttribute('hidden');
        for(let j = 1 ; j <= reviews.length;j++)
        {
            document.getElementById('card' + j).setAttribute('hidden', 'hidden');
        }
    }
    const cardheader = document.querySelectorAll('.card-header');
    const cardtitle = document.querySelectorAll('.card-title');
    const cardtext = document.querySelectorAll('.card-text');
    const cardfooter = document.querySelectorAll('.card-footer');
    for(let i = 0 ;  i < cardheader.length; i++)
    {
        cardheader[i].textContent = reviews[i].name;
        cardtitle[i].textContent = "⭐".repeat(6 - reviews[i].stars);
        cardtext[i].textContent = reviews[i].comment;
        cardfooter[i].textContent = reviews[i].date;
    }
}