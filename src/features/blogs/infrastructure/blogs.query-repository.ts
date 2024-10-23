import {Injectable, NotFoundException} from "@nestjs/common";
import {BlogViewModel} from "../api/models/output/blog.view.model";
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


@Injectable()
export class BlogsQueryRepository {
    constructor(
      @InjectDataSource() private readonly dataSource: DataSource
    ) {
    }

    async getAllBlogsWithQuery(query: any) {
        // const generateQuery = await this.generateQuery(query)
        // const items = await this.blogModel
        //     .find(generateQuery.filterName)
        //     .sort({[generateQuery.sortBy]: generateQuery.sortDirection})
        //     .limit(generateQuery.pageSize)
        //     .skip((generateQuery.page - 1) * generateQuery.pageSize)
        // const itemsOutput = items.map(item => this.blogOutputMap(item as HydratedDocument<BlogViewModel>))
        // const resultBlogs = new PaginationBaseModel<BlogViewModel>(generateQuery, itemsOutput)
        // return resultBlogs
    }

    private async generateQuery(query: any) {
        // const queryName: string = query.searchNameTerm ? query.searchNameTerm : ''
        // const filterName = {name: {$regex: queryName, $options: "i"}}
        // const totalCount = await this.blogModel.countDocuments(filterName)
        // const pageSize = query.pageSize ? +query.pageSize : 10
        // const pagesCount = Math.ceil(totalCount / pageSize)
        // return {
        //     totalCount,
        //     pageSize,
        //     pagesCount,
        //     page: query.pageNumber ? Number(query.pageNumber) : 1,
        //     sortBy: query.sortBy ? query.sortBy : 'createdAt',
        //     sortDirection: query.sortDirection ? query.sortDirection : 'desc',
        //     queryName,
        //     filterName
        // }
    }

    async blogOutput(id: string) {
        const blog = await this.dataSource.query(
          `
            SELECT * FROM blogs 
            WHERE id=${id}
          `
        )
        if (!blog.length) {
            throw new NotFoundException(`Blog with id ${id} not found`)
        }
        return this.blogOutputMap(blog[0])
    }

    blogOutputMap(blog: BlogViewModel): BlogViewModel {
        console.log(blog);
        const {id, name, description, websiteUrl, isMembership, createdAt} = blog
        return {
            id: id.toString(),
            name,
            description,
            websiteUrl,
            createdAt,
            isMembership
        }
    }

}
