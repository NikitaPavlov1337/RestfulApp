/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import PostService from '../service/PostService.js';

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body);
			res.status(200).json(post);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getAll(req, res) {
		try {
			const posts = await PostService.create();
			return res.json(posts);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getOne(req, res) {
		try {
			const post = await PostService.getOne(req.params.id);
			return res.status(200).json(post);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async update(req, res) {
		try {
			const updatedPost = await PostService.update(req.body);
			return res.status(200).json(updatedPost);
		} catch (e) {
			res.status(500).json(e.message);
		}
	}

	async delete(req, res) {
		try {
			const post = await PostService.delete(req.params.id);
			return res.status(200).json(post);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

export default new PostController();
