import httpClient from '../../core/httpClient.js';
import commentAdapter from './comments.adapter.js';

const CommentService = {
  async getCommentsByPost(postId) {
    const comments = await httpClient.request(
      `/comments?postId=${encodeURIComponent(postId)}`
    );
    return comments.map(commentAdapter);
  }
};

export default CommentService;
