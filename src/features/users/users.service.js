import httpClient from '../../core/httpClient.js';
import userAdapter from './users.adapter.js';

const UserService = {
  async getUserById(userId) {
    const user = await httpClient.request(`/users/${encodeURIComponent(userId)}`);
    return userAdapter(user);
  }
};

export default UserService;
