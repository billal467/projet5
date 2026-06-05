var current = 'login';

function switchTo(name) {
  var old = document.getElementById('panel-' + current);
  var next = document.getElementById('panel-' + name);
  if (!next) return;
  old.style.animation = 'fadeSlideOut 0.25s cubic-bezier(0.4,0,1,1) both';
  setTimeout(function() {
    old.classList.remove('active');
    old.style.animation = '';
    next.classList.add('active');
    next.style.animation = 'fadeSlideIn 0.35s cubic-bezier(0.23,1,0.32,1) both';
    current = name;
    clearErrors();
  }, 220);
  var bg = document.getElementById('bgImg');
  if (name === 'register') {
    bg.style.filter = 'blur(5px) brightness(0.35)';
  } else if (name === 'forgot' || name === 'verify' || name === 'newpass') {
    bg.style.filter = 'blur(6px) brightness(0.3)';
  } else {
    bg.style.filter = 'blur(3px) brightness(0.45)';
  }
}

function toggleEye(inputId, btn) {
  var inp = document.getElementById(inputId);
  inp.type = inp.type === 'password' ? 'text' : 'password';
  btn.style.opacity = inp.type === 'text' ? '0.4' : '1';
}

function setError(id, msg) {
  var inp = document.getElementById(id);
  inp.classList.add('error');
  var errEl = inp.parentElement.querySelector('.err-msg');
  if (errEl && msg) errEl.textContent = msg;
  inp.addEventListener('input', function() {
    inp.classList.remove('error');
  }, { once: true });
  return false;
}

function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

function clearErrors() {
  document.querySelectorAll('input.error').forEach(function(i) {
    i.classList.remove('error');
  });
}

function submitLogin() {
  var email = document.getElementById('login-email').value.trim();
  var pass = document.getElementById('login-pass').value;
  var ok = true;
  if (!isValidEmail(email)) { setError('login-email', 'Please enter a valid email.'); ok = false; }
  if (!pass) { setError('login-pass', 'Password is required.'); ok = false; }
  if (ok) {
    var btn = document.querySelector('#panel-login .submit-btn');
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Signing in…';
    setTimeout(function() {
      btn.classList.remove('loading');
      btn.querySelector('span').textContent = 'Login to Cafe Noire';
      alert('Login successful! (Connect to your backend)');
    }, 1400);
  }
}

function submitRegister() {
  var fname = document.getElementById('reg-fname').value.trim();
  var lname = document.getElementById('reg-lname').value.trim();
  var email = document.getElementById('reg-email').value.trim();
  var pass = document.getElementById('reg-pass').value;
  var pass2 = document.getElementById('reg-pass2').value;
  var cardholder = document.getElementById('reg-cardholder').value.trim();
  var cardnum = document.getElementById('reg-cardnum').value.trim();
  var expiry = document.getElementById('reg-expiry').value;
  var cvv = document.getElementById('reg-cvv').value.trim();
  var ok = true;
  if (!fname) { setError('reg-fname', 'Required.'); ok = false; }
  if (!lname) { setError('reg-lname', 'Required.'); ok = false; }
  if (!isValidEmail(email)) { setError('reg-email', 'Enter a valid email.'); ok = false; }
  if (pass.length < 8) { setError('reg-pass', 'Min. 8 characters.'); ok = false; }
  if (pass !== pass2) { setError('reg-pass2', 'Passwords do not match.'); ok = false; }
  if (!cardholder) { setError('reg-cardholder', 'Required.'); ok = false; }
  if (cardnum.length < 12) { setError('reg-cardnum', 'Enter a valid card number.'); ok = false; }
  if (!expiry) { setError('reg-expiry', 'Required.'); ok = false; }
  if (!cvv) { setError('reg-cvv', 'Required.'); ok = false; }
  if (ok) {
    var btn = document.querySelector('#panel-register .submit-btn');
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Creating account…';
    setTimeout(function() {
      btn.classList.remove('loading');
      btn.querySelector('span').textContent = 'Create Account';
      switchTo('login');
    }, 1400);
  }
}

function submitForgot() {
  var email = document.getElementById('forgot-email').value.trim();
  if (!isValidEmail(email)) { setError('forgot-email', 'Enter a valid email.'); return; }
  var btn = document.querySelector('#panel-forgot .submit-btn');
  btn.classList.add('loading');
  btn.querySelector('span').textContent = 'Sending…';
  setTimeout(function() {
    btn.classList.remove('loading');
    btn.querySelector('span').textContent = 'Send Verification Code';
    document.getElementById('verify-email-display').textContent = email;
    switchTo('verify');
    setTimeout(function() {
      var digits = document.querySelectorAll('.code-digit');
      if (digits[0]) digits[0].focus();
    }, 500);
  }, 1000);
}

document.querySelectorAll('.code-digit').forEach(function(input, i, all) {
  input.addEventListener('input', function() {
    if (this.value && i < all.length - 1) all[i + 1].focus();
    if (this.value) this.classList.add('filled');
    else this.classList.remove('filled');
  });
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && !this.value && i > 0) {
      all[i - 1].focus();
      all[i - 1].value = '';
      all[i - 1].classList.remove('filled');
    }
  });
  input.addEventListener('paste', function(e) {
    var data = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
    e.preventDefault();
    data.split('').forEach(function(ch, j) {
      if (all[j]) { all[j].value = ch; all[j].classList.add('filled'); }
    });
    if (all[Math.min(data.length, all.length - 1)]) all[Math.min(data.length, all.length - 1)].focus();
  });
});

function submitVerify() {
  var digits = document.querySelectorAll('.code-digit');
  var code = '';
  digits.forEach(function(d) { code += d.value; });
  if (code.length < 6) {
    digits.forEach(function(d) {
      if (!d.value) {
        d.style.borderColor = '#e05555';
        d.style.boxShadow = '0 0 0 3px rgba(224,85,85,0.25)';
      }
    });
    setTimeout(function() {
      digits.forEach(function(d) { d.style.borderColor = ''; d.style.boxShadow = ''; });
    }, 1200);
    return;
  }
  var btn = document.querySelector('#panel-verify .submit-btn');
  btn.classList.add('loading');
  btn.querySelector('span').textContent = 'Verifying…';
  setTimeout(function() {
    btn.classList.remove('loading');
    btn.querySelector('span').textContent = 'Verify & Continue';
    digits.forEach(function(d) { d.value = ''; d.classList.remove('filled'); });
    switchTo('newpass');
  }, 1000);
}

function resendCode() {
  var btn = document.querySelector('#panel-verify .switch-line button');
  btn.textContent = 'Sent!';
  btn.style.color = '#c8a96e';
  setTimeout(function() { btn.textContent = 'Resend code'; btn.style.color = ''; }, 3000);
}

function submitNewPass() {
  var pass = document.getElementById('new-pass').value;
  var pass2 = document.getElementById('new-pass2').value;
  var ok = true;
  if (pass.length < 8) { setError('new-pass', 'Min. 8 characters.'); ok = false; }
  if (pass !== pass2) { setError('new-pass2', 'Passwords do not match.'); ok = false; }
  if (ok) {
    var btn = document.querySelector('#panel-newpass .submit-btn');
    btn.classList.add('loading');
    btn.querySelector('span').textContent = 'Updating…';
    setTimeout(function() {
      btn.classList.remove('loading');
      btn.querySelector('span').textContent = 'Update Password';
      document.getElementById('new-pass').value = '';
      document.getElementById('new-pass2').value = '';
      switchTo('success');
    }, 1000);
  }
}