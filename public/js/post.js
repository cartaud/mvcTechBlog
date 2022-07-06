const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-content').value.trim();
    
    if (title && body) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, body}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        }
    } 
}

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);

