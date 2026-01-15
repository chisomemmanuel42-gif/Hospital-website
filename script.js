
  document.addEventListener("DOMContentLoaded", function () {
    // === FORM VALIDATION WITH BOOTSTRAP ALERTS ===
    const form = document.querySelector("form");

    if (form) {
      form.addEventListener("submit", function (e) {
        const name = form.querySelector("input[name='name']");
        const email = form.querySelector("input[name='email']");
        const phone = form.querySelector("input[placeholder='Phone']");
        const department = form.querySelector("select[aria-label='Default select example']");
        const doctor = document.querySelectorAll("select[aria-label='Default select example']")[1];
        const date = form.querySelector("input[placeholder='Date']");
        const messageBox = document.querySelector("textarea");

        let errors = [];

        if (!name.value.trim()) errors.push("🧑 Name is required.");
        if (!email.value.match(/^[^@]+@[^@]+\.[^@]+$/)) errors.push("📧 Valid email is required.");
        if (!phone.value.match(/^[0-9]{7,}$/)) errors.push("📞 Phone number must be at least 7 digits.");
        if (!department || department.selectedIndex === 0) errors.push("🏥 Please select a department.");
        if (!doctor || doctor.selectedIndex === 0) errors.push("👨‍⚕️ Please select a doctor.");
        if (!date.value.trim()) errors.push("📅 Date is required.");
        if (!messageBox.value.trim()) errors.push("📝 A short message helps us serve you better.");

        // Remove old alerts
        const oldAlert = document.querySelector(".custom-alert");
        if (oldAlert) oldAlert.remove();

        if (errors.length > 0) {
          e.preventDefault();
          const alertDiv = document.createElement("div");
          alertDiv.className = "alert alert-danger custom-alert";
          alertDiv.style.marginTop = "15px";
          alertDiv.innerHTML = "<strong>Please fix the following issues:</strong><ul style='margin-top:10px'>" +
            errors.map(err => `<li>${err}</li>`).join("") + "</ul>";
          form.parentNode.insertBefore(alertDiv, form.nextSibling);
        }
      });
    }

    // === IMAGE FADE-IN & SCALE-UP ANIMATION ===
    const animatedImages = document.querySelectorAll("img");

    animatedImages.forEach((img, index) => {
      img.style.opacity = 0;
      img.style.transform = "scale(0.95)";
      img.style.transition = "opacity 1s ease, transform 1s ease";
      
      const delay = 500 + index * 200;
      setTimeout(() => {
        img.style.opacity = 1;
        img.style.transform = "scale(1)";
      }, delay);
    });
  });


   document.addEventListener("DOMContentLoaded", function () {
    const imageSections = document.querySelectorAll("img");

    imageSections.forEach((img) => {
      img.classList.add("floating-image");
    });
  });


   /*== Opening Hours ==*/
  const times = [
    { day: "Mon–Fri", time: "8:00am – 20:00pm" },
    { day: "Saturday", time: "9:00am – 18:30pm" },
    { day: "Sunday", time: "9:00am – 15:00pm" }
  ];
  let index = 0;
  const ticker = document.getElementById("hourTicker");

  function showTime() {
    ticker.textContent = `${times[index].day}: ${times[index].time}`;
    index = (index + 1) % times.length;
  }

  showTime();
  setInterval(showTime, 3000); // rotates every 3 seconds


   /*===================== typed js ===================*/ 
  const typed = new Typed('.multiple-text', {
    strings: ['Sign up for newsletter.', 'Sign up for HospitalUpdates.', 'Sign up for MoreUpdates.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });

  
   /*===================== typed js ===================*/ 
  const type = new Typed('.one-text', {
    strings: ['@+234-906-380-2804.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });



/*=============== Experience & Stats ========================*/ 
 
  function countUp(el, target, duration = 1500, suffix = '+') {
    let start = 0;
    const increment = target / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = target + suffix;
        clearInterval(counter);
      } else {
        el.textContent = Math.floor(start) + suffix;
      }
    }, 50);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const statBlocks = document.querySelectorAll('.section-title');
    const targets = [32, 3468, 557, 4379]; // Put your actual numbers here

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          countUp(entry.target, targets[i]);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    statBlocks.forEach(stat => observer.observe(stat));
  });


/*======================== PRE-LOADERS ========================*/ 

  window.addEventListener("load", function () {
    const loader = document.getElementById("medivantaLoader");
    if (loader) {
     loader.style.opacity = "0";
loader.style.transition = "opacity 11s ease"; // Smooth fade effect
setTimeout(() => {
  loader.style.display = "none";
}, 3000); // 2-second delay to match fade duration

    }
  });
  