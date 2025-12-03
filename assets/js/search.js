// Simple blog search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search');
  const posts = document.querySelectorAll('.post-card');
  
  if (searchBox && posts.length > 0) {
    searchBox.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      
      posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
        const tags = post.querySelector('.tags') ? post.querySelector('.tags').textContent.toLowerCase() : '';
        
        if (title.includes(query) || excerpt.includes(query) || tags.includes(query)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  }
});