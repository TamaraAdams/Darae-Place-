// Add any interactive features here later, like scroll animations or toggles
console.log("Daraé website loaded.");
function addToCart(name, price) 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push( name: name, price: price );
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`{name} added to cart!`);
}function addToCart(name, price) 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push( name, price );
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`{name} added to cart!`);
}

function addToCart(name, price) 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push( name, price );
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`{name} added to cart!`);
}
  function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("active");
  }
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('zoom-modal');
  const zoomImg = document.getElementById('zoomed-image');

  const images = document.querySelectorAll('.card img');
  images.forEach(img => {
    img.addEventListener('click', () => {
      if (zoomImg && modal) {
        zoomImg.src = img.src;
        modal.style.display = 'flex';
      }
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}); 
 function toggleMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("show");
    }
    function toggleZoom(img) {
    const modal = document.getElementById('zoom-modal');
    const zoomImg = document.getElementById('zoomed-image');
    zoomImg.src = img.src;
    modal.style.display = 'flex';
  }

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
  }

  function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for subscribing 😊💓");
                       }
