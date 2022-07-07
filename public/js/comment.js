const postCommentHandler = async (event) => {

    const body = document.querySelector('#comment-textbox').value.trim();
    const post_id = event.target.getAttribute('data-postId');
    
    if (body) {
        const response = await fetch(`/api/post/comment`, {
            method: 'POST',
            body: JSON.stringify({body, post_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/comment/view/${post_id}`)
        }
    } 
}

document
  .querySelector('#comment-btn')
  .addEventListener('click', postCommentHandler);