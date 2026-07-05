// App bootstrap + rendering.

const state = {
  tasks: [],
};

function addTask(title) {
  state.tasks.push({
    id: generateId(),
    title,
    done: false,
    createdAt: new Date(),
  });
  render();
}

function toggleTask(id) {
  const task = state.tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  render();
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = state.tasks
    .map((t) => `<div class="task">${t.title} — ${formatDate(t.createdAt)}</div>`)
    .join('');
}

render();
