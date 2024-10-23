import {Injectable, NotFoundException} from '@nestjs/common';
import {BlogsRepository} from "../infrastructure/blogs.repository";
import {BlogCreateModel} from "../api/models/input/create-blog.input.model";

@Injectable()
export class BlogsService {
    constructor(
        private readonly blogsRepository: BlogsRepository
    ) {
    }

    async createBlog(blog: BlogCreateModel) {
        // const newBlog = new this.blogModel(blog)
        const newBlogId = await this.blogsRepository.create(blog)
        return newBlogId
        // return saveData._id.toString()
    }

    async updateBlog(id: string, dto: BlogCreateModel) {
        const blog = await this.blogsRepository.findBlogById(id)
        const updateBlog = await this.blogsRepository.updateBlogById(blog.id, dto)
        return updateBlog
    }

    async deleteBlog(id: string) {
        const findedBlog = await this.blogsRepository.findBlogById(id)
        const deleteBlog = await this.blogsRepository.deleteBlog(id)
        return deleteBlog
    }

}

// метод execute pattern
// async createBlog(blog: BlogCreateModel): Promise<string> {
    //
    // const newBlog = this.blogModel.creatBlog(blog)
    // newBlog.updateBlog()
    // const saveData = await this.blogsRepository.saveBlog(newBlog)
    // return saveData._id.toString()
// }
