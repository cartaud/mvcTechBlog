const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const updateButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id'); 
        const title = document.querySelector('#post-title').value.trim();
        const body = document.querySelector('#post-content').value.trim();
        const created_at = event.target.getAttribute('data-created');
    
        const response = await fetch(`/api/post/${id}`, {
          method: 'PUT',
          body: JSON.stringify({title, body, created_at}),
          headers: {
            'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update post');
        }
      }
  }
  
  
  document
    .querySelector('#post-delete')
    .addEventListener('click', delButtonHandler);

  document
    .querySelector('#post-update')
    .addEventListener('click', updateButtonHandler);