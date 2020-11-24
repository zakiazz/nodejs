module.exports = (server) => {
    const commentController = require('../controllers/commentController');
    const jwtMiddleware = require('../middleware/jwtMiddleware');

    server.route('/posts/:post_id/comments') // req.params.post_id
        .get(commentController.list_all_comments)
        .post(jwtMiddleware.verify_token, commentController.create_a_comment);

    server.route('/comments/:comment_id') // req.params.comment_id
        .get(commentController.get_a_comment)
        .put(commentController.update_a_comment)
        .delete(commentController.delete_a_comment);
}