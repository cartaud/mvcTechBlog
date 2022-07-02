const postFormHandler = async () => {
    const title = document.querySelector('#post-title');
    const content = document.querySelector('#post-content');

    if (title && content) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, content}),
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

