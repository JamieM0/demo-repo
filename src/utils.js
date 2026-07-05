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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function isBlank(str) {
  return !str || !str.trim();
}
