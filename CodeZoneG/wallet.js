const methodSelect = document.getElementById("method");
const cardDetails = document.getElementById("cardDetails");
const vodafoneDetails = document.getElementById("vodafoneDetails");
const paypalDetails = document.getElementById("paypalDetails");
const resultBox = document.getElementById("result");

// إظهار الخانات حسب طريقة الدفع
methodSelect.addEventListener("change", () => {
  cardDetails.classList.add("hidden");
  vodafoneDetails.classList.add("hidden");
  paypalDetails.classList.add("hidden");

  if (methodSelect.value === "card") cardDetails.classList.remove("hidden");
  if (methodSelect.value === "vodafone") vodafoneDetails.classList.remove("hidden");
  if (methodSelect.value === "paypal") paypalDetails.classList.remove("hidden");
});

document.getElementById("walletForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value.trim();
  const method = methodSelect.value;
  let valid = true;
  let message = "";

  // تحقق من المبلغ
  if (!amount || isNaN(amount) || amount <= 0) {
    valid = false;
    message = "⚠️ Please enter a valid amount.";
  }

  // تحقق من تفاصيل البطاقة
  if (method === "card") {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    const cardRegex = /^\d{16}$/; // لازم 16 رقم
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // صيغة MM/YY
    const cvvRegex = /^\d{3}$/; // 3 أرقام

    if (!cardRegex.test(cardNumber)) {
      valid = false;
      message = "⚠️ Card number must be 16 digits.";
    } else if (!expiryRegex.test(expiry)) {
      valid = false;
      message = "⚠️ Expiry must be in MM/YY format.";
    } else if (!cvvRegex.test(cvv)) {
      valid = false;
      message = "⚠️ CVV must be 3 digits.";
    }
  }

  // تحقق من رقم فودافون كاش
  if (method === "vodafone") {
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^01[0-9]{9}$/; // يبدأ بـ 01 وطوله 11 رقم
    if (!phoneRegex.test(phone)) {
      valid = false;
      message = "⚠️ Vodafone Cash number must be 11 digits starting with 01.";
    }
  }

  // تحقق من إيميل PayPal
  if (method === "paypal") {
    const paypalEmail = document.getElementById("paypalEmail").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(paypalEmail)) {
      valid = false;
      message = "⚠️ Please enter a valid PayPal email.";
    }
  }

  if (valid) {
    resultBox.style.display = "block";
    resultBox.innerHTML = `
      ✅ Your wallet has been topped up with <strong>${amount} EGP</strong> 
      using <strong>${method}</strong>.
    `;
  } else {
    resultBox.style.display = "block";
    resultBox.innerHTML = message;
  }
});