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

        const title = document.querySelector('#post-title');
        const content = document.querySelector('#post-content');
    
        const response = await fetch(`/api/post/${id}`, {
          method: 'PUT',
          body: JSON.stringify({title, content}),
          headers: {
            'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete project');
        }
      }
  }
  
  
  document
    .querySelector('.post-delete')
    .addEventListener('click', delButtonHandler);

  document
    .querySelector('.post-update')
    .addEventListener('click', updateButtonHandler);