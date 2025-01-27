'use server'
import Posts from "@/model/posts";
import dbConnect from "./db"
import Folder from "@/model/folder";


//for getting  posts
export async function getPosts() {

    try {
        await dbConnect();
        console.log("going to fetch data---server");
        const posts = await Posts.find();
        const plainPosts = JSON.parse(JSON.stringify(posts));
        console.log('fetched successfully',posts);
        console.log(plainPosts);
        return plainPosts;

    } catch(error) {
        console.error("error fetching post",error)
        throw new Error("There is error");
    }

    
}

//for getting folders
export async function getFolders() {

    try {
        await dbConnect();
        const folders= await Folder.find();
        const plainFolders = JSON.parse(JSON.stringify(folders));
        console.log("Successfully got folders----server",plainFolders);
        return plainFolders;
    } catch(error) {
        throw new Error("Failed to fetch folders");
    }
    
}

// for creating posts
export async function createPosts(data: { title: string, detail: string, author: string, age: string }) {

    await dbConnect();
    const newPost = await Posts.create(data);
    console.log("Just created new post",newPost);
    const createPost = JSON.parse(JSON.stringify(newPost));
    console.log(createPost);
    return createPost;

}

//for creating folders
export async function createFolder(name: string, parentId: string | null) {

    try {
        await dbConnect();
        console.log("Trying to create folder");

        const rootFolder = await Folder.findOne({parent: null});
        console.log(rootFolder);

        
         const   folder = await Folder.create({name, parent: parentId || null});
        
        
        console.log("Just created Folder", folder);
        const createdFolder= JSON.parse(JSON.stringify(folder));
        return createdFolder;

    } catch (error) {
        console.error("Error found",error);
        throw new Error("Failed to create folder");
    }
    
}

// for getting a single post
export async function getSinglePost(id: string) {

    await dbConnect();
    const singlePost = await Posts.findById(id);
    return JSON.parse(JSON.stringify(singlePost));
}

//for updating a single post
export async function updateSinglePost(id: string, data: { title: string, detail: string, author: string, age: string }) {
    await dbConnect();
    console.log("going to update post---server");
    const updatedPost = await Posts.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    console.log("Post updated successfully----server", updatedPost);
    return updatedPost ? JSON.parse(JSON.stringify(updatedPost)) : null;
}

// for deleting a post
export async function deletePost(id: string) {
    await dbConnect();
    const deletePost = await Posts.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deletePost));
}

//for deleting a folder

export async function deleteFolder(id: string){
    await dbConnect();
    const deleteaFolder= await Folder.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deleteaFolder));
}