/* ===== Edit these links once your tools are set up (see README) ===== */
const LUME = {
  enquiryForm: "https://docs.google.com/forms/d/e/1FAIpQLSfTn3yns8cKWUkNDZqkPrPj3pid2JXWL_lGh6eDvNz4hyxerw/viewform",
  calendarEmbed: "https://calendar.google.com/calendar/embed?src=lumeb470%40gmail.com&ctz=Pacific%2FAuckland&mode=MONTH&showTitle=0&showPrint=0&showCalendars=0&showTabs=1",
  instagram: "https://www.instagram.com/lume.beautynz/",
  email: "lumeb470@gmail.com",
  introBannerUntil: "2026-12-01" // banner hides automatically from this date
};

document.querySelectorAll("[data-enquire]").forEach(a => {
  a.href = LUME.enquiryForm;
  if (LUME.enquiryForm.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
});
document.querySelectorAll("[data-instagram]").forEach(a => a.href = LUME.instagram);
document.querySelectorAll("[data-email]").forEach(a => { a.href = "mailto:" + LUME.email; a.textContent = LUME.email; });

const banner = document.querySelector(".banner");
if (banner && new Date() >= new Date(LUME.introBannerUntil)) banner.remove();

const cal = document.getElementById("calendar");
if (cal && LUME.calendarEmbed) {
  cal.outerHTML = `<iframe class="calendar-frame" src="${LUME.calendarEmbed}" title="Lumé availability calendar" loading="lazy"></iframe>`;
}

const toggle = document.querySelector(".nav-toggle"), links = document.querySelector(".nav-links");
if (toggle) toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a => { if (a.getAttribute("href") === path) a.setAttribute("aria-current", "page"); });
const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
