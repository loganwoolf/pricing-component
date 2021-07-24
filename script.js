const selector = document.getElementById('plan-selector');
const monthlyPrice = document.querySelectorAll('.price-month');
const annualPrice = document.querySelectorAll('.price-annual');

function switchPayment() {
   if (selector.checked) {
      monthlyPrice.forEach(div => div.classList.remove('hidden'));
      annualPrice.forEach(div => div.classList.add('hidden'));
   }
   else {
      annualPrice.forEach(div => div.classList.remove('hidden'));
      monthlyPrice.forEach(div => div.classList.add('hidden'));
   }
}

selector.addEventListener('change', switchPayment);