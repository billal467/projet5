document.getElementById('heroBg').style.backgroundImage = "url('../images/Gemini_Generated_Image_5g6qw05g6qw05g6q.png)";

window.addEventListener('scroll', function () {
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 40);
});

let reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  reveals.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('visible');
  });
}
window.addEventListener('scroll', checkReveal);
setTimeout(checkReveal, 200);

let cart = {};

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').style.display = 'block';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').style.display = 'none';
}

document.getElementById('cartIconWrap').addEventListener('click', openCart);
document.getElementById('closeBtn').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function refreshBadge() {
  let badge = document.getElementById('cartBadge');
  let total = 0;
  Object.values(cart).forEach(function(i){ total += i.qty; });
  badge.textContent = total;
  badge.style.display = total > 0 ? 'inline-flex' : 'none';
  badge.style.transform = 'scale(1.6)';
  setTimeout(function(){ badge.style.transform = 'scale(1)'; }, 200);
}

function renderCart() {
  let list   = document.getElementById('cartList');
  let footer = document.getElementById('cartFooter');
  let items  = Object.values(cart);

  if (items.length === 0) {
    list.innerHTML = '<div class="cart-empty-msg"><div class="em-icon">🛒</div><p>Your cart is empty.<br>Add something great!</p></div>';
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  list.innerHTML = items.map(function(item) {
    return '<div class="cart-row" id="cr-' + item.id + '">'
      + '<div class="cart-row-icon">&#x1F6CD;</div>'
      + '<div class="cart-row-info">'
      +   '<div class="cart-row-name">' + item.name + '</div>'
      +   '<div class="cart-row-price">$' + item.price.toFixed(2) + ' each</div>'
      + '</div>'
      + '<div class="qty-wrap">'
      +   '<button class="qty-btn minus" data-id="' + item.id + '" data-d="-1">&#x2212;</button>'
      +   '<span class="qty-num">' + item.qty + '</span>'
      +   '<button class="qty-btn plus"  data-id="' + item.id + '" data-d="1">&#x2B;</button>'
      + '</div>'
      + '</div>';
  }).join('');

  list.querySelectorAll('.qty-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      changeQty(this.dataset.id, parseInt(this.dataset.d));
    });
  });

  let grand = items.reduce(function(s,i){ return s + i.price * i.qty; }, 0);
  document.getElementById('cartTotal').textContent = '$' + grand.toFixed(2);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    let row = document.getElementById('cr-' + id);
    if (row) {
      row.style.transition = 'opacity 0.2s,transform 0.2s';
      row.style.opacity = '0';
      row.style.transform = 'translateX(30px)';
      setTimeout(function(){ delete cart[id]; refreshBadge(); renderCart(); }, 220);
      return;
    }
    delete cart[id];
  }
  refreshBadge();
  renderCart();
}

let track = document.getElementById('sliderTrack');
let leftBtn = document.getElementById('slideLeft');
let rightBtn = document.getElementById('slideRight');
let dotsContainer = document.getElementById('sliderDots');

if (track && dotsContainer) {
  let slides = track.querySelectorAll('.card-wrap');
  let totalSlides = slides.length;
  let current = 0;
  let perView = 3;

  function getPerView() {
    if (window.innerWidth <= 640) perView = 1;
    else if (window.innerWidth <= 1024) perView = 2;
    else perView = 3;
    return perView;
  }

  function getMaxIndex() {
    return Math.max(0, totalSlides - getPerView());
  }

  function updateDots() {
    dotsContainer.innerHTML = '';
    let max = getMaxIndex();
    for (let i = 0; i <= max; i++) {
      let d = document.createElement('div');
      d.className = 'slider-dot' + (i === current ? ' active' : '');
      d.onclick = (function(idx) { return function() { current = idx; update(); }; })(i);
      dotsContainer.appendChild(d);
    }
  }

  function update() {
    let max = getMaxIndex();
    if (current < 0) current = max;
    if (current > max) current = 0;

    let shift = 0;
    if (perView === 3) shift = current * 33.3333;
    else if (perView === 2) shift = current * 50;
    else shift = current * 100;

    track.style.transform = 'translateX(-' + shift + '%)';

    let dots = dotsContainer.querySelectorAll('.slider-dot');
    for (let j = 0; j < dots.length; j++) {
      dots[j].classList.toggle('active', j === current);
    }
  }

  function next() { current++; update(); }
  function prev() { current--; update(); }

  leftBtn.onclick = prev;
  rightBtn.onclick = next;

  setInterval(next, 4000);

  updateDots();
  update();

  window.onresize = function() {
    getPerView();
    updateDots();
    update();
  };
}

window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));

function flyToCart(fromEl, onDone) {
  var r1   = fromEl.getBoundingClientRect();
  var icon = document.getElementById('cartIconWrap');
  var r2   = icon.getBoundingClientRect();
  var dot  = document.createElement('div');
  dot.className  = 'flyDot';
  dot.style.left = (r1.left + r1.width / 2 - 5) + 'px';
  dot.style.top  = (r1.top + r1.height / 2 - 5) + 'px';
  document.body.appendChild(dot);
  var sx  = parseFloat(dot.style.left);
  var sy  = parseFloat(dot.style.top);
  var dx  = r2.left + r2.width / 2 - 5;
  var dy  = r2.top + r2.height / 2 - 5;
  var t0  = null;
  var dur = 520;
  function frame(ts) {
    if (!t0) t0 = ts;
    var t = Math.min((ts - t0) / dur, 1);
    var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    dot.style.left      = (sx + (dx - sx) * e) + 'px';
    dot.style.top       = (sy + (dy - sy) * e - Math.sin(Math.PI * t) * 100) + 'px';
    dot.style.opacity   = t > 0.75 ? (1 - (t - 0.75) / 0.25).toString() : '1';
    dot.style.transform = 'scale(' + (1 - 0.6 * e) + ')';
    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      dot.remove();
      if (onDone) onDone();
    }
  }
  requestAnimationFrame(frame);
}

document.querySelectorAll('.quick-add-btn, .card-overlay .btn').forEach(function(btn) {
  if (btn.classList.contains('quick-add-btn') || btn.closest('.card-overlay')) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var id = btn.dataset.id;
      if (!id) return;
      var origText = btn.textContent;
      btn.textContent = '✓ Added';
      btn.style.background  = 'rgba(45,138,80,0.25)';
      btn.style.borderColor = '#2d8a50';
      btn.style.color       = '#4ecdc4';
      setTimeout(function() {
        btn.textContent = origText;
        btn.style.background  = '';
        btn.style.borderColor = '';
        btn.style.color       = '';
      }, 1200);
      flyToCart(btn, function() {
        if (cart[id]) {
          cart[id].qty++;
        } else {
          cart[id] = { id: id, name: btn.dataset.name || 'Product', price: parseFloat(btn.dataset.price) || 0, qty: 1 };
        }
        refreshBadge();
        renderCart();
      });
    });
  }
});

document.querySelectorAll('.section-header, .bestsellers-header, .testimonials-header, .brandstory-content, .brandstory-visual, .pzx-head').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

document.querySelectorAll('.card-wrap, .bestseller-item, .testimonial-card, .fe-box, .perk-box').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.1 + 's';
  el.classList.add('reveal');
  io.observe(el);
});

document.querySelectorAll('.value-item').forEach((el, i) => {
  el.style.transitionDelay = i * 0.12 + 's';
  el.classList.add('reveal');
  io.observe(el);
});

document.querySelectorAll('.bestseller-item').forEach((el, i) => {
  el.style.transitionDelay = i * 0.09 + 's';
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroBg = document.getElementById('heroBg');
  const heroContent = document.querySelector('.hero-content');
  const heroStats = document.querySelector('.hero-stats');

  if (heroBg && scrolled < window.innerHeight) {
    heroBg.style.transform = `scale(1.08) translateY(${scrolled * 0.3}px)`;
  }
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.opacity = 1 - (scrolled / 600);
    heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
  if (heroStats && scrolled < window.innerHeight) {
    heroStats.style.opacity = 1 - (scrolled / 500);
  }
}, { passive: true });

const smoothObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('smooth-visible');
      smoothObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.pzx-section, .bestsellers-section, .brandstory-section, .testimonials-section, .newsletter-section').forEach(section => {
  section.classList.add('smooth-reveal');
  smoothObserver.observe(section);
});

document.querySelectorAll('.pzx-big, .pzx-sm, .pzx-wd').forEach(card => {
  card.classList.add('float-card');
});
document.querySelectorAll('.pzx-section button, .featured-products button, .seasonal-offers button').forEach(function(btn){
  btn.onclick = function(){
    window.location.href = 'shop (5).html';
  };
});

var hamburger = document.getElementById('hamburger');
if (hamburger) {
  var navRight = document.querySelector('.nav-right');
  var savedRight = navRight ? navRight.innerHTML : '';
  var navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', function() {
    if (navLinks.classList.contains('nav-open')) {
      navLinks.classList.remove('nav-open');
      hamburger.classList.remove('open');
      if (navRight) { navRight.style.display = ''; navRight.style.visibility = ''; }
    } else {
      if (navRight) { navRight.style.display = 'none'; navRight.style.visibility = 'hidden'; }
      var mobileRight = document.createElement('div');
      mobileRight.className = 'mobile-nav-right';
      mobileRight.innerHTML = savedRight;
      navLinks.appendChild(mobileRight);
      navLinks.classList.add('nav-open');
      hamburger.classList.add('open');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('nav-open');
      hamburger.classList.remove('open');
      if (navRight) { navRight.style.display = ''; navRight.style.visibility = ''; }
    });
  });
}
