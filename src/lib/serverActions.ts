'use server'

import Posts from "@/model/posts";
import dbConnect from "./db"

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

export async function createPosts(data: { title: string, detail: string, author: string, age: string }) {
    await dbConnect();
    const newPost = await Posts.create(data);
    console.log("Just created new post",newPost);
    const createPost = JSON.parse(JSON.stringify(newPost));
    console.log(createPost);
    return createPost;

}

export async function getSinglePost(id: string) {
    await dbConnect();
    const singlePost = await Posts.findById(id);
    return JSON.parse(JSON.stringify(singlePost));
}
export async function updateSinglePost(id: string, data: { title: string, detail: string, author: string, age: string }) {
    await dbConnect();
    console.log("going to update post---server");
    const updatedPost = await Posts.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    console.log("Post updated successfully----server", updatedPost);
    return updatedPost ? JSON.parse(JSON.stringify(updatedPost)) : null;
}

export async function deletePost(id: string) {
    await dbConnect();
    const deletePost = await Posts.findByIdAndDelete(id);
    return JSON.parse(JSON.stringify(deletePost));
}