// Example JavaScript functionality
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    alert(`${button.textContent} clicked!`);
  });
});
