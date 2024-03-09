import {Client, Storage} from 'appwrite';
import config from '../config/AppWriteConfig';

export class BucketService{
    // client and account credentials
    client = new Client();
    bucket;

    // constructor
    constructor(){
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id);
        this.bucket = new Storage(this.client);
    }

    // functionalities
    async UploadPostThumbnail(file){
        try {
            const response = await this.bucket.createFile(
                config.appwrite_bucket_blog_images_id,
                ID.unique(),
                file
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async DeletePostThumbnail(fileID){
        try {
            return await this.bucket.deleteFile(
                config.appwrite_bucket_blog_images_id,
                fileID
            )
        } catch (error) {
            console.log(error.message);
            return false;            
        }
    }

    async UploadCommentThumbnail(file){
        try {
            const response = await this.bucket.createFile(
                config.appwrite_bucket_blog_images_id,
                ID.unique(),
                file
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async GetFilePreviewPost(fileID){
        try {
            return this.bucket.getFilePreview(
                config.appwrite_bucket_user_images_id,
                fileID,
            )
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async UploadUserPhoto(file){
        try {
            const response = await this.bucket.createFile(
                config.appwrite_bucket_user_images_id,
                ID.unique(),
                file
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async DeleteUserPhoto(fileID){
        try {
            return await this.bucket.deleteFile(
                config.appwrite_bucket_user_images_id,
                fileID
            )
        } catch (error) {
            console.log(error.message);
            return false;            
        }
    }

    async GetFilePreviewUser(fileID){
        try {
            return this.bucket.getFilePreview(
                config.appwrite_bucket_user_images_id,
                fileID,
            )
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }

    async UploadPostImage(file){
        try {
            const response = await this.bucket.createFile(
                config.appwrite_bucket_blog_images_id,
                ID.unique(),
                file
            )
            return response;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

const BucketServices = new BucketService();
export default BucketServices;