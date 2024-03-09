// exporting the appwrite credentials
const config = {
    appwrite_url: String(process.env.APPWRITE_PROJECT_URL),
    appwrite_project_id: String(process.env.APPWRITE_PROJECT_ID),
    appwrite_db_id: String(process.env.APPWRITE_DB_ID),
    appwrite_collection_users_id: String(process.env.APPWRITE_COLLECTION_USERS_ID),
    appwrite_collection_posts_id: String(process.env.APPWRITE_COLLECTION_POSTS_ID),
    appwrite_collection_comments_id: String(process.env.APPWRITE_COLLECTION_COMMENTS_ID),
    appwrite_bucket_blog_images_id: String(process.env.APPWRITE_BUCKET_BLOG_IMAGES_ID),
    appwrite_bucket_user_images_id: String(process.env.APPWRITE_BUCKET_USER_IMAGES_ID),
    appwrite_bucket_blog_videos_id: String(process.env.APPWRITE_BUCKET_BLOG_VIDEOS_ID),
}

export default config;