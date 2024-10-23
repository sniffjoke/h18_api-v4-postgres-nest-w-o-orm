import { Injectable, NotFoundException } from '@nestjs/common';
import {PostsRepository} from "../infrastructure/posts.repository";
import { PostCreateModel, PostCreateModelWithParams } from '../api/models/input/create-post.input.model';
import {BlogsService} from "../../blogs/application/blogs.service";
import { TokensService } from '../../tokens/application/tokens.service';
import { LikeStatus, PostViewModel } from '../api/models/output/post.view.model';
import { UsersService } from '../../users/application/users.service';

@Injectable()
export class PostsService {
    constructor(
        private readonly postsRepository: PostsRepository,
        private readonly blogsService: BlogsService,
        private readonly tokensService: TokensService,
        private readonly usersService: UsersService,
    ) {
    }

    async createPost(post: PostCreateModel) {
        // const findedBlog = await this.blogsService.findBlogById(post.blogId)
        // const newPost = new this.postModel({...post, blogName: findedBlog?.name})
        // const saveData = await this.postsRepository.savePost(newPost)
        // return saveData._id.toString()
    }

    async createPostWithParams(post: PostCreateModelWithParams, blogId: string) {
        // const findedBlog = await this.blogsService.findBlogById(blogId)
        // const newPost = new this.postModel({...post, blogName: findedBlog.name, blogId: findedBlog?.id})
        // const saveData = await this.postsRepository.savePost(newPost)
        // return saveData._id.toString()
    }

    async updatePost(id: string, dto: PostCreateModel) {
        // const post = await this.postModel.findOne({_id: id})
        // if (!post) {
        //     throw new NotFoundException(`Post with id ${id} not found`)
        // }
        // const updatePost = await this.postsRepository.updatePost(post.id, dto)
        // return updatePost
    }

    async deletePost(id: string) {
        // const findedPost = await this.postModel.findById(id)
        // if (!findedPost) {
        //     throw new NotFoundException(`Post with id ${id} not found`)
        // }
        // const deletePost = await this.postModel.deleteOne({_id: id})
        // return deletePost
    }

    async updatePostByIdWithLikeStatus(bearerHeader: string, postId: string) {
        // const token = this.tokensService.getToken(bearerHeader);
        // const decodedToken: any = this.tokensService.decodeToken(token);
        // const user: HydratedDocument<User> | null = await this.usersService.findUserById(decodedToken?._id);
        // const findedPost = await this.postsRepository.findPostById(postId);
        // if (!findedPost) {
        //     throw new NotFoundException(`Post with id ${postId} not found`)
        // }
        // return {
        //     findedPost,
        //     user
        // }
    }

    async generatePostsWithLikesDetails(items: PostCreateModel[], bearerToken: string) {
        // const newItems = await Promise.all(
        //   items.map(async (item) => {
        //         return this.generateOnePostWithLikesDetails(item, bearerToken)
        //     }
        //   )
        // )
        // return newItems
    }

    async generateOnePostWithLikesDetails(post: any , bearerHeader: string) {
        // const isUserExists = await this.usersRepository.findUserByToken(bearerHeader)
        // const likeStatus = await this.likeModel.findOne({userId: isUserExists?._id, postId: post.id})
        // const likeDetails = await this.likeModel.find({
        //     postId: post.id,
        //     status: LikeStatus.Like
        // })
        //   .limit(3)
        //   .sort({createdAt: -1})
        // const likeDetailsMap = await Promise.all(
        //   likeDetails.map(async (like: any) => {
        //       const user = await this.userModel.findById(like.userId)
        //       return {
        //           addedAt: like.createdAt.toISOString(),
        //           userId: like.userId,
        //           login: user!.login
        //       }
        //   })
        // )
        // const myStatus = isUserExists && likeStatus ? likeStatus?.status : LikeStatus.None
        // const postDataWithInfo = this.statusAndNewLikesPayload(post, myStatus, likeDetailsMap)
        // return postDataWithInfo
    }

    statusAndNewLikesPayload(post: PostViewModel, status?: string, newestLikes?: any) {
        const newStatus = status ? status : LikeStatus.None
        const newLikes = newestLikes ? newestLikes : []
        return {
            ...post,
            extendedLikesInfo: {
                ...post.extendedLikesInfo,
                myStatus: newStatus,
                newestLikes: newLikes
            }
        }
    }

}
