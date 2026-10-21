function commentAdapter(comment) {
  return {
    commentId: comment.id,
    relatedPostId: comment.postId,
    authorEmail: comment.email,
    cleanBody: comment.body.trim()
  };
}

export default commentAdapter;
