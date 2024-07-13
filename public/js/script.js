document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.querySelector('#logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
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
  }

  const newPostButton = document.querySelector('#new-post');
  if (newPostButton) {
    newPostButton.addEventListener('click', () => {
      document.querySelector('#post-form').style.display = 'block';
    });
  }

  const submitPostButton = document.querySelector('#submit-post');
  if (submitPostButton) {
    submitPostButton.addEventListener('click', async () => {
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
  }

  const submitCommentButton = document.querySelector('#submit-comment');
  if (submitCommentButton) {
    submitCommentButton.addEventListener('click', async () => {
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
  }

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
  if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggle.textContent = 'Light Mode';
  } else {
    modeToggle.textContent = 'Dark Mode';
  }

  // Handle login form submission
  const loginForm = document.querySelector('#login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.querySelector('#login-username').value.trim();
      const password = document.querySelector('#login-password').value.trim();

      if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to log in.');
        }
      }
    });
  }

  // Handle signup form submission
  const signupForm = document.querySelector('#signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.querySelector('#signup-username').value.trim();
      const password = document.querySelector('#signup-password').value.trim();

      if (username && password) {
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to sign up.');
        }
      }
    });
  }
});
