// Countdown to 26/02/2026 (UK date format: DD/MM/YYYY)

// If you want the release to happen at midnight UK time:
const releaseDate = new Date("2026-02-26T00:00:00"); // local time on the viewer's device

const countdownEl = document.getElementById("countdown");

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diffMs = releaseDate - now;

  if (diffMs <= 0) {
    countdownEl.textContent = "OUT NOW 🎉";
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  countdownEl.textContent =
    `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
