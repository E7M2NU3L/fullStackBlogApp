import { Client, Databases, ID, Storage, Query } from "appwrite";
import config from "../config/AppWriteConfig";

export class ServiceDB{
    client = new Client();
    databases;
    // bucket;

    constructor(){
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id);
        this.databases = new Databases(this.client);
        // this.bucket = new Storage(this.client);
    }

    async createUsersDB({
        email, password, username, slug
    }){
        try{
            const response = await this.databases.createDocument(
            config.appwrite_db_id,
            config.appwrite_collection_users_id,
            slug,
            {
                "email": email,
                "password": password,
                "username": username,
            }
        );
        return response
        }catch(error){
            console.log(error.message);
        }
    }

    async createPosts({
        title, slug, subtitle, thumbnail, description, posted_at, content
    }){
        try{
            const response = await this.databases.createDocument(
            config.appwrite_db_id,
            config.appwrite_collection_posts_id,
            slug,
            { 
                "BlogTitle": title,
                "BlogSubTitle": subtitle,
                "BlogThumbnail": thumbnail,
                "Description": description,
                "blog_posted": posted_at,
                "Blog_Content": content,
            }
        );
        return response
        }catch(error){
            console.log(error.message);
        }
    }

    async createComments({
        Comment, slug
    }){
        try{
            const response = await this.databases.createDocument(
            config.appwrite_db_id,
            config.appwrite_collection_comments_id,
            slug,
            {
                "title": Comment
            },
        );
        return response
        }catch(error){
            console.log(error.message);
        }
    }
    
    async updatePosts({
        title, slug, subtitle, thumbnail, description, posted_at, content
    }){
        try {
            const response = await this.databases.updateDocument(
                config.appwrite_db_id,
                config.appwrite_collection_posts_id,
                slug,
                {
                    "BlogTitle": title,
                    "BlogSubTitle": subtitle,
                    "BlogThumbnail": thumbnail,
                    "Description": description,
                    "blog_posted": posted_at,
                    "Blog_Content": content,
                }
            )
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async updateComment({
        Comment, slug
    }){
        try {
            const response = await this.databases.updateComment(
                config.appwrite_db_id,
                config.appwrite_collection_comments_id,
                slug,
                {
                    "Comment": Comment
                },
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async listPosts(){
        try{
            const response = await this.databases.listDocuments(
            config.appwrite_db_id,
            config.appwrite_collection_posts_id
        );
        return response
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async listComments(){
        try{
            const response = await this.databases.listDocuments(
            config.appwrite_db_id,
            config.appwrite_collection_comments_id
        );
        return response
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async GetPost(slug){
        try {    
            const response = await this.databases.listDocuments(
                config.appwrite_db_id,
                config.appwrite_collection_posts_id,
                slug
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async GetUser(slug){
        try {    
            const response = await this.databases.listDocuments(
                config.appwrite_db_id,
                config.appwrite_collection_users_id,
                slug
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async DeletePosts(slug){
        try {    
            const response = await this.databases.deleteDocument(
                config.appwrite_db_id,
                config.appwrite_collection_posts_id,
                slug
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async DeleteComment(slug){
        try {    
            const response = await this.databases.deleteDocument(
                config.appwrite_db_id,
                config.appwrite_collection_comments_id,
                slug
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

const service = new ServiceDB();
export default service;