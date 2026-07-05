// Small helpers shared across the app.

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date);
}

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

function clamp(n, low, high) {
  // renamed args for clarity while debugging a slider issue
  return Math.min(Math.max(n, low), high);
}

function isBlank(str) {
  return !str || !str.trim();
}
