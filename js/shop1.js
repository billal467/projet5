var PRODUCTS = [
  {"id":"o1",  "cat":"outfit",      "name":"The Gentleman's Edit", "desc":"Wool coat · Oxford shirt · Leather boots",     "price":349, "rating":4, "reviews":128, "badge":"hot",  "img":"../images/feature 1.png"},
  {"id":"o2",  "cat":"outfit",      "name":"The Urban Edge",       "desc":"Denim jacket · White tee · Chelsea boots",     "price":219, "rating":4, "reviews":94,  "badge":"",     "img":"../images/feature 2.jpg"},
  {"id":"o3",  "cat":"outfit",      "name":"Classic Noir",         "desc":"Black blazer · Trousers · Loafers",            "price":289, "rating":4, "reviews":211, "badge":"hot",  "img":"../images/feature 3.png"},
  {"id":"o4",  "cat":"outfit",      "name":"Street Luxe",          "desc":"Hoodie · Cargo pants · Sneakers",              "price":179, "rating":4, "reviews":76,  "badge":"new",  "img":"../images/feature 4.png"},
  {"id":"o5",  "cat":"outfit",      "name":"Autumn Warm",          "desc":"Camel coat · Turtleneck · Boots",              "price":399, "rating":4, "reviews":153, "badge":"",     "img":"../images/feature 5.png"},
  {"id":"o6",  "cat":"outfit",      "name":"Minimal Sport",        "desc":"Track jacket · Joggers · Runners",             "price":159, "rating":4, "reviews":88,  "badge":"new",  "img":"../images/feature 6.png"},

  {"id":"t1",  "cat":"tshirt",      "name":"Noir Essential Tee",   "desc":"100% Supima cotton · Heavyweight 240gsm",      "price":69,  "rating":5, "reviews":204, "badge":"hot",  "img":"../images/Elevate your look! Discover essential shirt styles….jpg"},
  {"id":"t2",  "cat":"tshirt",      "name":"Ivory Classic",        "desc":"Relaxed fit · Ribbed collar · Preshrunk",      "price":59,  "rating":4, "reviews":147, "badge":"",     "img":"../images/343399540357082762.jpg"},
  {"id":"t3",  "cat":"tshirt",      "name":"Slate Graphic Tee",    "desc":"Oversized silhouette · Screen printed",        "price":79,  "rating":4, "reviews":89,  "badge":"new",  "img":"../images/Comfortable Oversized Casual Basic Plain….jpg"},
  {"id":"t4",  "cat":"tshirt",      "name":"The Pocket Tee",       "desc":"Chest pocket · Slub jersey · Pre-washed",      "price":65,  "rating":4, "reviews":63,  "badge":"",     "img":"../images/Color_ Mirage - The S_S Pocket T-Shirt is….jpg"},
  {"id":"t5",  "cat":"tshirt",      "name":"Longline Shadow",      "desc":"Extended hem · Raw edges · Drop shoulder",     "price":89,  "rating":5, "reviews":112, "badge":"",     "img":"../images/Amazon_com_ Green Heather Drop Cut Curved Hem….jpg"},
  {"id":"t6",  "cat":"tshirt",      "name":"Striped Archive",      "desc":"French terry · Breton stripe · Relaxed",       "price":75,  "rating":4, "reviews":55,  "badge":"sale", "img":"../images/BEAMS PLUS' casual pieces are inspired by classic….jpg"},

  {"id":"p1",  "cat":"pants",       "name":"Obsidian Trousers",    "desc":"Wool blend · Tapered leg · Hidden button",     "price":189, "rating":5, "reviews":176, "badge":"hot",  "img":"../images/156359418307579854.jpg"},
  {"id":"p2",  "cat":"pants",       "name":"Raw Denim Selvedge",   "desc":"14oz Japanese denim · Slim straight",          "price":245, "rating":4, "reviews":132, "badge":"",     "img":"../images/Crafted from premium Japanese raw selvedge denim….jpg"},
  {"id":"p3",  "cat":"pants",       "name":"Cargo Utility",        "desc":"6-pocket · Ripstop nylon · Adjustable hem",    "price":159, "rating":4, "reviews":98,  "badge":"new",  "img":"../images/The GANT Regular Light Cotton Cargo Pants in Oat….jpg"},
  {"id":"p4",  "cat":"pants",       "name":"Camel Chino",          "desc":"Stretch cotton · Slim cut · Machine wash",     "price":135, "rating":4, "reviews":210, "badge":"",     "img":"../images/planton.jpg"},
  {"id":"p5",  "cat":"pants",       "name":"Pleated Wide Leg",     "desc":"Italian linen · Double pleat · High rise",     "price":215, "rating":5, "reviews":67,  "badge":"",     "img":"../images/These chocolate-brown pants offer a relaxed take….jpg"},
  {"id":"p6",  "cat":"pants",       "name":"Track Pant Luxe",      "desc":"French terry · Elastic waist · Tonal logo",    "price":119, "rating":4, "reviews":84,  "badge":"sale", "img":"../images/Technical polyamide fabric with cream contrast….jpg"},

  {"id":"a1",  "cat":"accessories", "name":"Obsidian Leather Belt",  "desc":"Full-grain leather · Brushed gold buckle",   "price":95,  "rating":5, "reviews":189, "badge":"hot",  "img":"../images/Full Grain Cowhide Leather_32mm wide_Brass Buckle.jpg"},
  {"id":"a2",  "cat":"accessories", "name":"Cashmere Beanie",        "desc":"100% Mongolian cashmere · Ribbed knit",       "price":75,  "rating":5, "reviews":143, "badge":"",     "img":"../images/beanie.jpg"},
  {"id":"a3",  "cat":"accessories", "name":"Structured Canvas Tote", "desc":"Waxed canvas · Leather handles · Brass",      "price":120, "rating":4, "reviews":77,  "badge":"new",  "img":"../images/Mini Canvas Tote Bags with Zipper for Everyday Use….jpg"},
  {"id":"a4",  "cat":"accessories", "name":"Merino Scarf",           "desc":"Extra-fine merino · Fringed ends · 200cm",    "price":89,  "rating":4, "reviews":54,  "badge":"",     "img":"../images/Waverley Mills Scarf in Merino Wool Fashion meets….jpg"},
  {"id":"a5",  "cat":"accessories", "name":"Gold-Bar Cufflinks",     "desc":"18k gold plated · Engraved signature",        "price":145, "rating":5, "reviews":38,  "badge":"",     "img":"../images/Gold Bar Cufflinks Minimal shape_ Maximum….jpg"},
  {"id":"a6",  "cat":"accessories", "name":"Suede Card Holder",      "desc":"Hand-stitched · 4 card slots · Slim",         "price":65,  "rating":4, "reviews":92,  "badge":"sale", "img":"../images/This elegant handcrafted genuine leather card….jpg"},

  {"id":"ow1", "cat":"outerwear",   "name":"Midnight Overcoat",    "desc":"Virgin wool · Notch lapel · Fully lined",      "price":589, "rating":5, "reviews":94,  "badge":"hot",  "img":"../images/midnight.jpg"},
  {"id":"ow2", "cat":"outerwear",   "name":"Field Jacket",         "desc":"Waxed cotton · 4 patch pockets · Olive",       "price":345, "rating":4, "reviews":117, "badge":"",     "img":"../images/The M65 Field Jacket_ In Praise Of An Outerwear….jpg"},
  {"id":"ow3", "cat":"outerwear",   "name":"Quilted Liner",        "desc":"Ripstop shell · Duck down fill · Packable",    "price":275, "rating":4, "reviews":83,  "badge":"new",  "img":"../images/Specially crafted to button in to your trusted….jpg"},
  {"id":"ow4", "cat":"outerwear",   "name":"Camel Top Coat",       "desc":"Camel hair blend · Single breasted · Belt",    "price":649, "rating":5, "reviews":56,  "badge":"",     "img":"../images/A Tan You Can Keep All Winter Long _ GQ.jpg"},
  {"id":"ow5", "cat":"outerwear",   "name":"Varsity Bomber",       "desc":"Wool body · Leather sleeves · Snap close",     "price":420, "rating":4, "reviews":102, "badge":"",     "img":"../images/27936460190831723.jpg"},
  {"id":"ow6", "cat":"outerwear",   "name":"Rain Shell Pro",       "desc":"3-layer Gore-Tex · Taped seams · Hood",        "price":310, "rating":4, "reviews":71,  "badge":"sale", "img":"../images/Order Montane Mens Phase Pro Shell Jacket today….jpg"}
];

var cart = {};
var currentCat  = 'all';
var currentSort = 'default';
var priceMin    = 0;
var priceMax    = 9999;
var currentView = 'grid';

function stars(n) {
  var s = '';
  for (var i = 1; i <= 5; i++) {
    s += '<svg class="star' + (i > n ? ' no' : '') + '" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  }
  return s;
}

function badgeHTML(b) {
  if (!b) return '';
  var cls = b === 'new' ? 'isNew' : b === 'sale' ? 'isSale' : 'isHot';
  var txt = b === 'hot' ? 'Best Seller' : b.charAt(0).toUpperCase() + b.slice(1);
  return '<div class="badgeWrap ' + cls + '">' + txt + '</div>';
}

function renderCard(p) {
  return '<div class="www"><div class="item" data-cat="' + p.cat + '">'
    + '<div class="imgBox" onclick="openModal(\'' + p.id + '\')" style="cursor:pointer;">'
    + '<img src="' + p.img + '" alt="' + p.name + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
    + '<div class="noImg" style="display:none;position:absolute;inset:0;">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
    + '<span>' + p.cat + '</span>'
    + '</div>'
    + '<div class="seasonTag">AW 2025</div>'
    + badgeHTML(p.badge)
    + '<div class="hoverBtns"><button class="quickBtn" data-id="' + p.id + '" onclick="event.stopPropagation();openModal(\'' + p.id + '\')">Quick View</button></div>'
    + '</div>'
    + '<div class="itemInfo">'
    + '<h2>' + p.name + '</h2>'
    + '<p>' + p.desc + '</p>'
    + '<div class="starRow">' + stars(p.rating) + '<span class="rCount">(' + p.reviews + ')</span></div>'
    + '<div class="itemBottom">'
    + '<span class="itemPrice">$' + p.price + '</span>'
    + '<button class="btn" data-id="' + p.id + '">Add to cart</button>'
    + '</div>'
    + '</div>'
    + '</div></div>';
}

function getFiltered() {
  var list = PRODUCTS.slice();
  if (currentCat !== 'all') {
    list = list.filter(function(p) {
      return p.cat === currentCat;
    });
  }
  list = list.filter(function(p) {
    return p.price >= priceMin && p.price <= priceMax;
  });
  if (currentSort === 'price-asc')  list.sort(function(a, b) { return a.price - b.price; });
  if (currentSort === 'price-desc') list.sort(function(a, b) { return b.price - a.price; });
  if (currentSort === 'name-asc')   list.sort(function(a, b) { return a.name.localeCompare(b.name); });
  if (currentSort === 'rating')     list.sort(function(a, b) { return b.rating - a.rating || b.reviews - a.reviews; });
  return list;
}

function renderGrid() {
  var list = getFiltered();
  var grid = document.getElementById('productsGrid');
  document.getElementById('countDisplay').textContent = list.length;
  if (list.length === 0) {
    grid.innerHTML = '<div class="nothingHere"><p>No items match your filters.</p><button class="goBtn" style="max-width:160px;margin:0 auto;display:block" onclick="resetFilters()">Clear Filters</button></div>';
    return;
  }
  grid.innerHTML = list.map(renderCard).join('');
  bindButtons();
  renderActiveFilters();
}

function bindButtons() {
  document.querySelectorAll('.btn[data-id]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var id = btn.dataset.id;
      var p  = PRODUCTS.find(function(x) { return x.id === id; });
      if (!p) return;
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
          cart[id] = { id: id, name: p.name, price: p.price, qty: 1 };
        }
        refreshBadge();
        renderCart();
      });
    });
  });
}

function renderActiveFilters() {
  var wrap = document.getElementById('activeFilters');
  var tags = [];
  if (currentCat !== 'all') {
    var labels = {outfit:'Outfits', tshirt:'T-Shirts', pants:'Pants', accessories:'Accessories', outerwear:'Outerwear'};
    tags.push('<div class="tagChip">' + labels[currentCat] + ' <button onclick="setCat(\'all\')">✕</button></div>');
  }
  if (priceMin > 0 || priceMax < 9999) {
    tags.push('<div class="tagChip">$' + priceMin + ' – $' + priceMax + ' <button onclick="resetPrice()">✕</button></div>');
  }
  wrap.innerHTML = tags.join('');
}

function setCat(cat) {
  currentCat = cat;
  document.querySelectorAll('.catBtn').forEach(function(b) {
    b.classList.toggle('on', b.dataset.cat === cat);
  });
  renderGrid();
}

function applyFilters() {
  var mn = parseFloat(document.getElementById('priceMin').value) || 0;
  var mx = parseFloat(document.getElementById('priceMax').value) || 9999;
  priceMin = mn;
  priceMax = mx;
  renderGrid();
}

function resetFilters() {
  currentCat = 'all';
  priceMin = 0;
  priceMax = 9999;
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  document.querySelectorAll('.catBtn').forEach(function(b) {
    b.classList.toggle('on', b.dataset.cat === 'all');
  });
  renderGrid();
}

function resetPrice() {
  priceMin = 0;
  priceMax = 9999;
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  renderGrid();
}

function setView(v) {
  currentView = v;
  var grid = document.getElementById('productsGrid');
  var items = grid.querySelectorAll('.item');
  items.forEach(function(item, i) {
    item.style.opacity = '0';
    item.style.transform = v === 'list' ? 'translateX(-20px)' : 'translateY(-10px)';
  });
  setTimeout(function() {
    grid.classList.toggle('listMode', v === 'list');
    items.forEach(function(item, i) {
      setTimeout(function() {
        item.style.opacity = '';
        item.style.transform = '';
      }, i * 30);
    });
  }, items.length * 30 + 50);
  document.getElementById('gridViewBtn').classList.toggle('on', v === 'grid');
  document.getElementById('listViewBtn').classList.toggle('on', v === 'list');
}

document.querySelectorAll('.catBtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    setCat(btn.dataset.cat);
  });
});

document.getElementById('sortSelect').addEventListener('change', function() {
  currentSort = this.value;
  renderGrid();
});

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
  Object.values(cart).forEach(function(i) {
    total += i.qty;
  });
  badge.textContent = total;
  badge.style.display = total > 0 ? 'inline-flex' : 'none';
  badge.style.transform = 'scale(1.6)';
  setTimeout(function() {
    badge.style.transform = 'scale(1)';
  }, 200);
}

function renderCart() {
  var list   = document.getElementById('cartList');
  var footer = document.getElementById('cartFooter');
  var items  = Object.values(cart);
  if (items.length === 0) {
    list.innerHTML = '<div class="emptyMsg"><div class="emIcon">🛒</div><p>Your cart is empty.<br>Add something exceptional.</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  list.innerHTML = items.map(function(item) {
    return '<div class="cartLine" id="cr-' + item.id + '">'
      + '<div class="cartThumb">&#x1F6CD;</div>'
      + '<div class="cartMeta">'
      + '<div class="cartName">' + item.name + '</div>'
      + '<div class="cartSub">$' + item.price.toFixed(2) + ' each</div>'
      + '</div>'
      + '<div class="qtyWrap">'
      + '<button class="qtyBtn minus" data-id="' + item.id + '" data-d="-1">&#x2212;</button>'
      + '<span class="qtyNum">' + item.qty + '</span>'
      + '<button class="qtyBtn plus" data-id="' + item.id + '" data-d="1">&#x2B;</button>'
      + '</div>'
      + '</div>';
  }).join('');
  list.querySelectorAll('.qtyBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      changeQty(this.dataset.id, parseInt(this.dataset.d));
    });
  });
  var grand = items.reduce(function(s, i) {
    return s + i.price * i.qty;
  }, 0);
  document.getElementById('cartTotal').textContent = '$' + grand.toFixed(2);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    var row = document.getElementById('cr-' + id);
    if (row) {
      row.style.transition = 'opacity 0.2s,transform 0.2s';
      row.style.opacity    = '0';
      row.style.transform  = 'translateX(30px)';
      setTimeout(function() {
        delete cart[id];
        refreshBadge();
        renderCart();
      }, 220);
      return;
    }
    delete cart[id];
  }
  refreshBadge();
  renderCart();
}

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

window.addEventListener('scroll', function() {
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 40);
});

// ── Product Modal ──
var pdQty = 1;
var pdProduct = null;

function openModal(id) {
  var p = PRODUCTS.find(function(x) { return x.id === id; });
  if (!p) return;
  pdProduct = p;
  pdQty = 1;
  document.getElementById('pdQtyNum').textContent = 1;
  document.getElementById('pdCat').textContent = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
  document.getElementById('pdName').textContent = p.name;
  document.getElementById('pdDesc').textContent = p.desc;
  document.getElementById('pdPrice').textContent = '$' + p.price.toFixed(2);
  document.getElementById('pdStars').innerHTML = stars(p.rating) + '<span class="rCount" style="margin-left:4px">(' + p.reviews + ' reviews)</span>';
  document.getElementById('pdAddBtn').textContent = 'Add to Cart';
  document.getElementById('pdAddBtn').className = '';
  document.getElementById('pdAddBtn').id = 'pdAddBtn';
  var img = document.getElementById('pdImg');
  var ph  = document.getElementById('pdImgPlaceholder');
  img.src = p.img;
  img.style.display = 'block';
  ph.style.display  = 'none';
  img.onerror = function() {
    img.style.display = 'none';
    ph.style.display  = 'flex';
  };
  document.getElementById('pdOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('pdOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('pdClose').addEventListener('click', closeModal);
document.getElementById('pdOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

document.getElementById('pdMinus').addEventListener('click', function() {
  if (pdQty > 1) { pdQty--; document.getElementById('pdQtyNum').textContent = pdQty; }
});
document.getElementById('pdPlus').addEventListener('click', function() {
  pdQty++; document.getElementById('pdQtyNum').textContent = pdQty;
});

document.getElementById('pdAddBtn').addEventListener('click', function() {
  if (!pdProduct) return;
  var id = pdProduct.id;
  if (cart[id]) {
    cart[id].qty += pdQty;
  } else {
    cart[id] = { id: id, name: pdProduct.name, price: pdProduct.price, qty: pdQty };
  }
  refreshBadge();
  renderCart();
  var btn = document.getElementById('pdAddBtn');
  btn.textContent = '✓ Added to Cart';
  btn.classList.add('added');
  setTimeout(function() {
    btn.textContent = 'Add to Cart';
    btn.classList.remove('added');
  }, 1500);
});

renderGrid();
renderCart();

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
