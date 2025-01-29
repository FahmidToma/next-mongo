'use server'
import Posts from "@/model/posts";
import dbConnect from "./db"
import Folder from "@/model/folder";


//for getting  posts
export async function getPosts() {

    try {
        await dbConnect();
        const posts = await Posts.find();
        const plainPosts = JSON.parse(JSON.stringify(posts));
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
        return plainFolders;
    } catch(error) {
        console.log(error);
        throw new Error("Failed to fetch folders");
    }
    
}

// for creating posts
export async function createPosts(data: { title: string, detail: string, author: string, age: string }) {

    await dbConnect();
    const newPost = await Posts.create(data);
    const createPost = JSON.parse(JSON.stringify(newPost));
    console.log(createPost);
    return createPost;

}

//for creating folders
export async function createFolder(name: string, parentId: string | null) {

    try {
        await dbConnect();
        const   folder = await Folder.create({name, parent: parentId || null});
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
    const updatedPost = await Posts.findByIdAndUpdate(id, data, { new: true, runValidators: true });
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
    const deleteAFolder= await Folder.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deleteAFolder));
}