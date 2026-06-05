/*var cart = {};


function openCart() {
	document.getElementById('cartDrawer').classList.add('open');
	document.getElementById('cartOverlay').style.display = 'block';
}

function closeCart() {
	document.getElementById('cartDrawer').classList.remove('open');
	document.getElementById('cartOverlay').style.display = 'none';
}

document.getElementById('cartIconWrap').onclick = openCart;
document.getElementById('closeBtn').onclick = closeCart;
document.getElementById('cartOverlay').onclick = closeCart;


function refreshBadge() {
	var badge = document.getElementById('cartBadge');
	var total = 0;

	for (var key in cart) {
		total = total + cart[key].qty;
	}

	if (total > 0) {
		badge.style.display = 'inline-flex';
		badge.textContent = total;
	} else {
		badge.style.display = 'none';
	}

	badge.style.transform = 'scale(1.6)';
	setTimeout(function() {
		badge.style.transform = 'scale(1)';
	}, 200);
}


function renderCart() {
	var list = document.getElementById('cartList');
	var footer = document.getElementById('cartFooter');

	var items = []
	for (var key in cart) {
		items.push(cart[key]);
	}

	if (items.length == 0) {
		list.innerHTML = '<div class="cart-empty-msg"><div class="em-icon">🛒</div><p>Your cart is empty.<br>Add something great!</p></div>';
		footer.style.display = 'none';
		return;
	}

	footer.style.display = 'block';

	var html = '';
	for (var i = 0; i < items.length; i++) {
		var item = items[i]
		html += '<div class="cart-row" id="cr-' + item.id + '">';
		html += '<div class="cart-row-icon">&#x1F6CD;</div>';
		html += '<div class="cart-row-info">';
		html += '<div class="cart-row-name">' + item.name + '</div>';
		html += '<div class="cart-row-price">$' + item.price.toFixed(2) + ' each</div>';
		html += '</div>';
		html += '<div class="qty-wrap">';
		html += '<button class="qty-btn minus" data-id="' + item.id + '" data-d="-1">&#x2212;</button>';
		html += '<span class="qty-num">' + item.qty + '</span>';
		html += '<button class="qty-btn plus" data-id="' + item.id + '" data-d="1">&#x2B;</button>';
		html += '</div>';
		html += '</div>';
	}

	list.innerHTML = html;

	var btns = list.querySelectorAll('.qty-btn');
	for (var b = 0; b < btns.length; b++) {
		btns[b].onclick = function() {
			changeQty(this.dataset.id, parseInt(this.dataset.d));
		}
	}

	var grand = 0;
	for (var j = 0; j < items.length; j++) {
		grand = grand + items[j].price * items[j].qty;
	}
	document.getElementById('cartTotal').textContent = '$' + grand.toFixed(2);
}


function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;

	if (cart[id].qty <= 0) {
		var row = document.getElementById('cr-' + id);
		if (row) {
			row.style.transition = 'opacity 0.2s, transform 0.2s';
			row.style.opacity = '0';
row.style.transform = 'translateX(30px)';
			setTimeout(function() {
				delete cart[id];
				refreshBadge();
				renderCart();
			}, 220);
			return;
		}
		delete cart[id];
	};

	refreshBadge();
	renderCart();
}


function flyToCart(fromEl, onDone) {
	var r1 = fromEl.getBoundingClientRect();
	var icon = document.getElementById('cartIconWrap');
	var r2 = icon.getBoundingClientRect();

	var dot = document.createElement('div');
dot.className = 'flyDot';
	dot.style.left = (r1.left + r1.width / 2 - 6) + 'px';
	dot.style.top = (r1.top + r1.height / 2 - 6) + 'px';
	document.body.appendChild(dot);

	var startX = parseFloat(dot.style.left);
	var startY = parseFloat(dot.style.top);
	var endX = r2.left + r2.width / 2 - 6;
	var endY = r2.top + r2.height / 2 - 6;

	var startTime = null;
	var duration = 520;

	function animateDot(timestamp) {
		if (!startTime) startTime = timestamp;

		var t = (timestamp - startTime);
		if (t > 1) t = 1;

	
		var e;
		if (t < 0.5) {
			e = 4 * t * t * t
		} else {
			e = 1 - Math.pow(-2 * t + 2, 3) / 2
		}

		dot.style.left = (startX + (endX - startX) * e) + 'px'
		dot.style.top = (startY + (endY - startY) * e - Math.sin(Math.PI * t) * 100) + 'px'
		dot.style.transform = 'scale(' + (1 - 0.6 * e) + ')'

		if (t > 0.75) {
			dot.style.opacity = String(1 - (t - 0.75) / 0.25)
		} else {
			dot.style.opacity = '1'
		}

		if (t < 1) {
			requestAnimationFrame(animateDot)
		} else {
			dot.remove()
			if (onDone) onDone()
		}
	}

	requestAnimationFrame(animateDot)
}


var addBtns = document.querySelectorAll('button.btn')

for (var x = 0; x < addBtns.length; x++) {
	addBtns[x].onclick = function() {
		var btn = this
		var card = btn.closest('.card')
		if (!card) return

		var nameEl = card.querySelector('h2')
		var priceEl = card.querySelector('.price')
		if (!nameEl || !priceEl) return

		var name = nameEl.textContent.trim()
		var price = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''))
		var id = name.replace(/\s+/g, '_').toLowerCase()

		btn.textContent = '✓ Added'
		btn.style.background = '#2d8a50'

		setTimeout(function() {
			btn.textContent = 'Add to cart'
			btn.style.background = ''
		}, 1100)

		flyToCart(btn, function() {
			if (cart[id]) {
				cart[id].qty = cart[id].qty + 1
			} else {
				cart[id] = { id: id, name: name, price: price, qty: 1 }
			}
			refreshBadge()
			renderCart()
		})
	}
}


renderCart()


var heroBg = document.getElementById('heroBg')
if (heroBg) {
	heroBg.style.backgroundImage = "url('Gemini_Generated_Image_5g6qw05g6qw05g6q.png')";
}



window.onscroll = function() {
	var header = document.querySelector('header')
	if (!header) return

	if (window.scrollY > 40) {
		header.style.background = 'rgba(13,13,13,0.96)';
		header.style.backdropFilter = 'blur(18px)';
		header.style.borderBottom = '1px solid #333';
	} else {
		header.style.background = '';
		header.style.backdropFilter = '';
		header.style.borderBottom = '';
	}
}



var reveals = document.querySelectorAll('.reveal');

function checkReveal() {
	for (var r = 0; r < reveals.length; r++) {
		var top = reveals[r].getBoundingClientRect().top
		if (top < window.innerHeight * 0.88) {
			reveals[r].classList.add('visible')
		}
	}
}

window.addEventListener('scroll', checkReveal)

setTimeout(checkReveal, 200);
*/

var heroBg = document.getElementById('heroBg');
if (heroBg) {
  heroBg.style.backgroundImage = "url('Gemini_Generated_Image_5g6qw05g6qw05g6q.png')";
}

window.addEventListener('scroll', function() {
  var siteHeader = document.getElementById('siteHeader');
  if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 40);
});

var reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  reveals.forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('visible');
  });
}
if (reveals.length) {
  window.addEventListener('scroll', checkReveal);
  setTimeout(checkReveal, 200);
}

var cart = {};

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
  var badge = document.getElementById('cartBadge');
  var total = 0;
  Object.values(cart).forEach(function(i){ total += i.qty; });
  badge.textContent = total;
  badge.style.display = total > 0 ? 'inline-flex' : 'none';
  badge.style.transform = 'scale(1.6)';
  setTimeout(function(){ badge.style.transform = 'scale(1)'; }, 200);
}

function renderCart() {
  var list   = document.getElementById('cartList');
  var footer = document.getElementById('cartFooter');
  var items  = Object.values(cart);
  if (items.length === 0) {
    list.innerHTML = '<div class="cart-empty-msg"><div class="em-icon">🛒</div><p>Your cart is empty.<br>Add something exceptional.</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  list.innerHTML = items.map(function(item) {
    return '<div class="cart-row" id="cr-' + item.id + '">'
      + '<div class="cart-row-icon">&#x1F6CD;</div>'
      + '<div class="cart-row-info"><div class="cart-row-name">' + item.name + '</div><div class="cart-row-price">$' + item.price.toFixed(2) + ' each</div></div>'
      + '<div class="qty-wrap"><button class="qty-btn minus" data-id="' + item.id + '" data-d="-1">&#x2212;</button><span class="qty-num">' + item.qty + '</span><button class="qty-btn plus" data-id="' + item.id + '" data-d="1">&#x2B;</button></div>'
      + '</div>';
  }).join('');
  list.querySelectorAll('.qty-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { changeQty(this.dataset.id, parseInt(this.dataset.d)); });
  });
  document.getElementById('cartTotal').textContent = '$' + items.reduce(function(s,i){ return s + i.price * i.qty; }, 0).toFixed(2);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    var row = document.getElementById('cr-' + id);
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

function flyToCart(fromEl, onDone) {
  var r1 = fromEl.getBoundingClientRect();
  var icon = document.getElementById('cartIconWrap');
  var r2 = icon.getBoundingClientRect();
  var dot = document.createElement('div');
  dot.className = 'fly-dot';
  dot.style.left = (r1.left + r1.width/2 - 5) + 'px';
  dot.style.top  = (r1.top  + r1.height/2 - 5) + 'px';
  document.body.appendChild(dot);
  var sx = parseFloat(dot.style.left), sy = parseFloat(dot.style.top);
  var dx = r2.left + r2.width/2 - 5, dy = r2.top + r2.height/2 - 5;
  var t0 = null, dur = 520;
  function frame(ts) {
    if (!t0) t0 = ts;
    var t = Math.min((ts - t0) / dur, 1);
    var e = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2;
    dot.style.left    = (sx + (dx-sx)*e) + 'px';
    dot.style.top     = (sy + (dy-sy)*e - Math.sin(Math.PI*t)*100) + 'px';
    dot.style.opacity = t > 0.75 ? (1-(t-0.75)/0.25).toString() : '1';
    dot.style.transform = 'scale(' + (1-0.6*e) + ')';
    if (t < 1) { requestAnimationFrame(frame); }
    else { dot.remove(); if (onDone) onDone(); }
  }
  requestAnimationFrame(frame);
}

document.querySelectorAll('button.btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var card = btn.closest('.card');
    if (!card) return;
    var nameEl  = card.querySelector('h2');
    var priceEl = card.querySelector('.price');
    if (!nameEl || !priceEl) return;
    var name  = nameEl.textContent.trim();
    var price = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
    var id    = name.replace(/\s+/g,'_').toLowerCase();
    var origText = btn.textContent;
    btn.textContent = '✓ Added';
    btn.style.background = 'rgba(45,138,80,0.3)';
    btn.style.borderColor = '#2d8a50';
    btn.style.color = '#4ecdc4';
    setTimeout(function(){ btn.textContent = origText; btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }, 1200);
    flyToCart(btn, function() {
      if (cart[id]) { cart[id].qty++; }
      else { cart[id] = { id:id, name:name, price:price, qty:1 }; }
      refreshBadge();
      renderCart();
    });
  });
});

var hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('nav-open');
    hamburger.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('.nav-links').classList.remove('nav-open');
      hamburger.classList.remove('open');
    });
  });
}