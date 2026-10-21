import httpClient from '../../core/httpClient.js';
import postAdapter from './posts.adapter.js';

const PostService = {
  async getPostsByUser(userId) {
    const posts = await httpClient.request(
      `/posts?userId=${encodeURIComponent(userId)}`
    );
    return posts.map(postAdapter);
  }
};

export default PostService;
