document.addEventListener("DOMContentLoaded", function () {

  const btnBca = document.querySelector(".bca button");
  const btnMandiri = document.querySelector(".mandiri button");
  const btnBni = document.querySelector(".bni button");
  const btnGopay = document.querySelector(".gopay button");
  const btnDana = document.querySelector(".dana button");


  btnBca.addEventListener("click", function () {
    btnBca.classList.add("active");
    btnMandiri.classList.remove("active");
    btnBni.classList.remove("active");
    btnGopay.classList.remove("active");
    btnDana.classList.remove("active");
  });
  btnMandiri.addEventListener("click", function () {
    btnMandiri.classList.add("active");
    btnDana.classList.remove("active");
    btnBca.classList.remove("active");
    btnBni.classList.remove("active");
    btnGopay.classList.remove("active");
  });
  btnBni.addEventListener("click", function () {
    btnBni.classList.add("active");
    btnMandiri.classList.remove("active");
    btnBca.classList.remove("active");
    btnDana.classList.remove("active");
    btnGopay.classList.remove("active");
  });
  btnGopay.addEventListener("click", function () {
    btnGopay.classList.add("active");
    btnMandiri.classList.remove("active");
    btnBca.classList.remove("active");
    btnBni.classList.remove("active");
    btnDana.classList.remove("active");
  });
  btnDana.addEventListener("click", function () {
    btnDana.classList.add("active");
    btnMandiri.classList.remove("active");
    btnBca.classList.remove("active");
    btnBni.classList.remove("active");
    btnGopay.classList.remove("active");
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const btnDomestik = document.querySelector(".domestik button");
  const btnInternasional = document.querySelector(".internasional button");

  btnDomestik.addEventListener("click", function () {
    btnDomestik.classList.add("active");
    btnInternasional.classList.remove("active");
  });
  btnInternasional.addEventListener("click", function () {
    btnInternasional.classList.add("active");
    btnDomestik.classList.remove("active");
  });


})

// Movetext
const moveText = document.querySelector(".move_text h1");
document.addEventListener("scroll", function(){
  var scroll = window.pageYOffset
  var innerHeight = window.innerHeight
  var currentScroll = scroll/innerHeight * 50
  moveText.style.transform = "translateX("+currentScroll * 0.5 +"%)"
})


// slider
const sliderContent = document.querySelector(".slider_content");
const scrollRight = document.querySelector(".bLeft");
const scrollLeft = document.querySelector(".bRight");

scrollLeft.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".slider_content .card").offsetWidth;
  sliderContent.scrollBy({
    left: cardWidth + 24,
    behavior: 'smooth'    
  });
});

scrollRight.addEventListener("click", function(e){
  var cardWidth = document.querySelector(".slider_content .card").offsetWidth;
  sliderContent.scrollBy({
    left: -(cardWidth + 24),  
    behavior: 'smooth'        
  });
});


// pop up message
// Ambil elemen-elemen yang dibutuhkan
const buyNowButton = document.querySelector('.payment_button button');
const popMessage = document.querySelector('.pop_message1');
const continueButton = document.querySelector('.pop_up1 button');
const inputs = document.querySelectorAll('.detail_payment input');

// Fungsi untuk memeriksa apakah semua input sudah diisi
function validateInputs() {
  for (let input of inputs) {
    if (input.value.trim() === '') {
      return false;
    }
  }
  return true;
}

// Event listener untuk tombol "Beli Sekarang"
buyNowButton.addEventListener('click', (event) => {
  event.preventDefault(); // Mencegah aksi default tombol

  if (validateInputs()) {
    popMessage.style.display = 'flex'; // Tampilkan pop_message1
  } else {
    alert('Harap untuk melengkapi data pembeli');
  }
});

// Event listener untuk tombol "Continue"
continueButton.addEventListener('click', () => {
  popMessage.style.display = 'none'; // Sembunyikan pop_message1

  // Reset semua input jika diperlukan (opsional)
  inputs.forEach(input => input.value = '');
});

const submitReviewButton = document.querySelector('.review_button button');
const popMessageReview = document.querySelector('.pop_message2');
const closeReviewButton = document.querySelector('.pop_up2 button');
const reviewInputs = document.querySelectorAll('.identitas_review input, .komentar');

// Fungsi untuk memeriksa apakah semua input review sudah diisi
function validateReviewInputs() {
  for (let input of reviewInputs) {
    if (input.value.trim() === '') {
      return false;
    }
  }
  return true;
}

// Event listener untuk tombol "Beli Sekarang"
submitReviewButton.addEventListener('click', (event) => {
  event.preventDefault(); // Mencegah aksi default tombol

  if (validateReviewInputs()) {
    popMessageReview.style.display = 'flex'; // Tampilkan pop_message1
  } else {
    alert('Harap untuk melengkapi form terlebih dahului!');
  }
});



// Event listener untuk tombol "Continue"
closeReviewButton.addEventListener('click', () => {
  popMessageReview.style.display = 'none'; // Sembunyikan pop_message1

  // Reset semua input jika diperlukan (opsional)
  reviewInputs.forEach(input => input.value = '');
});



// sticky navbar start

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const stickyThreshold = 500;

  function makeNavbarSticky() {
      if (window.pageYOffset >= stickyThreshold) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  }

  window.onscroll = function () {
      makeNavbarSticky();
  };
});
// sticky navbar end


// Hamburger Start

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navHamburger = document.querySelector(".nav_hamburger");

  hamburger.addEventListener("click", function(event) {
      event.stopPropagation();

      if (navHamburger.style.right === "0px") {
          navHamburger.style.right = "-100%";
      } else {
          navHamburger.style.right = "0";
      }

      hamburger.classList.toggle("active");
  });

  document.addEventListener("click", function(event) {
      if (!navHamburger.contains(event.target) && !hamburger.contains(event.target)) {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      } else if (navHamburger.contains(event.target) && event.target.tagName !== 'A' && event.target.tagName !== 'BUTTON') {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      }
  });

  window.addEventListener("resize", function() {
      if (window.innerWidth > 768) {
          navHamburger.style.right = "-100%";
          hamburger.classList.remove("active");
      }
  });
});

// Hamburger End
