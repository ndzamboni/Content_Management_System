document.querySelector('#logout').addEventListener('click', async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  });
  
  document.querySelector('#new-post').addEventListener('click', () => {
    document.querySelector('#post-form').style.display = 'block';
  });
  
  document.querySelector('#submit-post').addEventListener('click', async () => {
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  });
  
  document.querySelector('#submit-comment').addEventListener('click', async () => {
    const comment_text = document.querySelector('#comment-text').value.trim();
    const post_id = window.location.pathname.split('/').pop();
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  });
  
  // Toggle between login and signup
  document.querySelectorAll('.toggle-form').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('#login-container').classList.toggle('d-none');
      document.querySelector('#signup-container').classList.toggle('d-none');
    });
  });
  
  // Light/Dark mode toggle
  const modeToggle = document.querySelector('#mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      modeToggle.textContent = 'Light Mode';
      localStorage.setItem('mode', 'dark');
    } else {
      modeToggle.textContent = 'Dark Mode';
      localStorage.setItem('mode', 'light');
    }
  });
  
  // Load mode preference
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('mode') === 'dark') {
      document.body.classList.add('dark-mode');
      modeToggle.textContent = 'Light Mode';
    } else {
      modeToggle.textContent = 'Dark Mode';
    }
  });
  