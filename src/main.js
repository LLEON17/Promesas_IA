import CommentService from './features/comments/comments.service.js';
import PostService from './features/posts/posts.service.js';
import UserService from './features/users/users.service.js';
import * as Renderer from './shared/ui/render.js';

export async function bootstrap(userId) {
  try {
    const usuario = await UserService.getUserById(userId);
    const posts = await PostService.getPostsByUser(userId);

    const postsConComentarios = await Promise.all(
      posts.map(async (post) => {
        const comentariosResueltos = await CommentService.getCommentsByPost(
          post.postId
        );

        return {
          ...post,
          comentarios: [...comentariosResueltos]
        };
      })
    );

    const objetoMaestro = {
      usuario: usuario.fullName,
      posts: [...postsConComentarios]
    };

    Renderer.renderData('Perfil Completo', objetoMaestro);
  } catch (error) {
    Renderer.renderError(error.message);
  }
}

bootstrap(1);
