"use client";

import { createPosts, deletePost, getPosts } from "@/lib/serverActions";
import Link from "next/link";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";

export interface Post {
  _id: string;
  title: string;
  detail: string;
  author: string;
  age: string;
}
export interface Form {
  title: string;
  detail: string;
  author: string;
  age: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [formInfo, setFormInfo] = useState<Form>({title:'',detail:'',author:'',age:''});
  

  //fetching posts using server-action

  const fetchData = async () => {
    try {
      const postData = await getPosts(); // Server Action
      setPosts(postData);
    } catch (err) {
      setError("Failed to fetch posts");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //deleting a post using server-action
  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      await fetchData();
    } catch {
      setError("Failed to delete post");
    }
  };


  //handling onChange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormInfo((prev)=>({
      ...prev,
      [name]: value,
    }));
    console.log(formInfo);
  }

  //creating new post using server-action
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    await createPosts(formInfo);
    setFormInfo({title:'',detail:'',author:'',age:''});
    await fetchData();
    } catch {
      setError("Failed to create post");
    }
    
  };

 
  return (
    <div className="bg-gray-500 max-w-5xl mx-auto my-10 p-4 text-center text-white space-y-3">
      <h1 className="text-3xl font-medium">All Posts</h1>

     {loading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) :

     ( <div className="space-y-4 mt-5">
        {posts.map((post) => (
          <div key={post._id} className="border-2 border-cyan-500 p-2">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>Detail Info: {post.detail}</p>
            <p>Author: {post.author}</p>
            <p>Age: {post.age}</p>
            <div className="space-x-3 my-5">
              <Link href={`/update/${post._id}`} className="bg-cyan-600 p-3">
                Update
              </Link>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-cyan-600 p-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
     )}

      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 flex flex-col gap-5 items-center p-10 text-black" 
      >
        <div className="space-x-7">
          <input
            type="text"
            name="title"
            placeholder="Title here"
            className="w-72 p-2 h-10"
            value={formInfo.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="detail"
            placeholder="Description"
            className="w-72 p-2 h-10"
            value={formInfo.detail}
            onChange={handleChange}
          />
        </div>
        <div className="space-x-7">
          <input
            type="text"
            name="author"
            placeholder="Author name"
            className="w-72 p-2 h-10"
            value={formInfo.author}
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Author age"
            className="w-72 p-2 h-10"
            value={formInfo.age}
            onChange={handleChange}
          />
        </div>
        <button className="bg-cyan-600 text-white py-2 px-3 mt-3" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};
