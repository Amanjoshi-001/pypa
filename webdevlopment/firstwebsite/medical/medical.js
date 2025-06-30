// Adds click animation and navigates to selected page
function navigate(page) {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.disabled = true;  // prevent double click
    btn.style.opacity = '0.6';
  });

  // Add small delay for effect before navigating
  setTimeout(() => {
    window.location.href = page;
  }, 300); // 300ms delay
}

// Attach click event to buttons for animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(0.97)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    });
  });
});
