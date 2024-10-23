import { Injectable } from '@nestjs/common';
import { PostCreateModel } from '../api/models/input/create-post.input.model';


@Injectable()
export class PostsRepository {

    constructor(
    ) {
    }

    async savePost(post: any) {
        // const savePost = await post.save();
        // return savePost
    }

    async findPostById(id: string) {
        // const findedPost = await this.postModel.findById(id)
        // return findedPost
    }

    async updatePost(id: string, dto: PostCreateModel) {
        // const updatePost = await this.postModel.updateOne({_id: id}, {$set: {...dto}})
        // return updatePost
    }

   // async getByIdOrThrow(): HydratedDocument<Post> {
//
// }

}
