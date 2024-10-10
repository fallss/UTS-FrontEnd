function searchSmartphones() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.getElementsByClassName('card');
  
  for (let i = 0; i < cards.length; i++) {
      let h1 = cards[i].getElementsByClassName('speci')[0];
    
      if (h1 && h1.innerHTML.toLowerCase().indexOf(input) > -1) {
          cards[i].style.display = ''; 
      } else {
          cards[i].style.display = 'none'; 
      }
  }
}

document.querySelector('.search-bar button').addEventListener('click', searchSmartphones);

document.getElementById('searchInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      searchSmartphones();
  }
});

let nav_list = document.getElementById("nav-list");
let openMenu = document.querySelector(".menuopen");
let cross = document.querySelector(".cross");
openMenu.addEventListener("click", () => {
  nav_list.style.opacity = "100%";
  openMenu.style.display = "none";
});
cross.addEventListener("click", () => {
  nav_list.style.opacity = "0%";
  setTimeout(() => {
    openMenu.style.display = "block";
  }, 400);
});


document.querySelectorAll('.check-reviews-btn').forEach(button => {
  button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection.style.display === 'none' || targetSection.style.display === '') {
          targetSection.style.display = 'block'; 
          this.textContent = 'Hide Reviews'; 
      } else {
          targetSection.style.display = 'none'; 
          this.textContent = 'Check Reviews'; 
      }
  });
});


document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const reviewText = document.querySelector('textarea[name="review"]').value;
  const ratingValue = document.querySelector('select[name="rating"]').value;

  if (reviewText.trim() && ratingValue) {

      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review-card');

      reviewCard.innerHTML = `
          <p><strong>Anonymous</strong></p>
          <p>${reviewText} ${getStarRating(ratingValue)}</p>
      `;

      document.querySelector('.reviews').appendChild(reviewCard);

      document.querySelector('textarea[name="review"]').value = '';
      document.querySelector('select[name="rating"]').value = '';
  } else {
      alert("Please enter a review and select a rating!");
  }
});

function getStarRating(rating) {
  const starFull = '★';
  const starEmpty = '☆';
  return starFull.repeat(rating) + starEmpty.repeat(5 - rating);
}