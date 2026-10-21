function postAdapter(post) {
  return {
    postId: post.id,
    authorId: post.userId,
    title: post.title.toUpperCase(),
    content: post.body
  };
}

export default postAdapter;
