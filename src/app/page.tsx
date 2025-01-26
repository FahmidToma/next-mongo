'use client';

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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  // const [edit, setEdit] = useState<string | null>(null);

  const [title, setTitle] = useState<string>('');
  const [detail, setDetail] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [status, setStatus] = useState<string | undefined>();

  // Fetching all posts

  //useEffect(() => {
  //  const getPosts = async () => {
  //    try {
  //      const response = await fetch('/api/posts');
  //      if (!response.ok) {
  //        throw new Error('Failed to fetch posts');
  //      }
  //      const data = await response.json();
  //      setPosts(data.posts);
  //      setLoading(false);
  //    } catch (err: any) {
  //      setError(err.message);
  //      setLoading(false);
  //    }
  //  };
  //
  //  getPosts();
  //}, []);

  //fetching posts using server-action
  
    const fetchData= async()=> {
      console.log("going to fetch data---client");
      const posts = await getPosts(); // Server Action
      setPosts(posts);
      setLoading(false);
      console.log("fetched the data", posts);
    }

    useEffect(()=>{
      fetchData();
    },[]);


  // Updating a post
  //const handleUpdate = (post: Post) => {
  //  setEdit(post._id);
  //  setTitle(post.title);
  //  setDetail(post.detail);
  //  setAuthor(post.author);
  //  setAge(post.age);
  //};

  // Handling updated posts
  //const handleSave = async (e: FormEvent<HTMLFormElement>) => {
  //  e.preventDefault();
  //  const updatedPostData = { title, detail, author, age };
  //
  //  try {
  //    const response = await fetch(`/api/posts/${edit}`, {
  //      method: 'PUT',
  //      headers: {
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify(updatedPostData),
  //    });
  //
  //    if (!response.ok) {
  //      throw new Error('Failed to update post');
  //    }
  //
  //    const data = await response.json();
  //    setPosts((prev) =>
  //      prev.map((post) => (post._id === edit ? data.updatedPost : post))
  //    );
  //    setEdit(null);
  //
  //  } catch (err: any) {
  //    setError(err.message);
  //  }
  //};

  // Deleting a post
  //const handleDelete = async (id: string) => {
  //  try {
  //    const response = await fetch(`/api/posts/${id}`, {
  //      method: 'DELETE',
  //    });
  //
  //    if (!response.ok) {
  //      throw new Error('Failed to delete post');
  //    }
  //
  //    setPosts((prev) => prev.filter((post) => post._id !== id));
  //  } catch (err: any) {
  //    setError(err.message);
  //  }
  //};

  //deleting a post using server-action
  const handleDelete = async (id: string) => {
    await deletePost(id);
    await fetchData();
  }

  // Handling new post creation
  //const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //  e.preventDefault();
  //  const postData = { title, detail, author, age };
  //
  //  try {
  //    const response = await fetch('/api/posts', {
  //      method: 'POST',
  //      headers: {
  //        'Content-Type': 'application/json',
  //      },
  //      body: JSON.stringify(postData),
  //    });
  //
  //    if (response.ok) {
  //      const newPost = await response.json();
  //      setPosts((prevPost) => [...prevPost, newPost]);
  //      setTitle('');
  //      setDetail('');
  //      setAuthor('');
  //      setAge('');
  //      setStatus('Post created successfully');
  //    } else {
  //      const errorData = await response.json();
  //      setStatus(`Error: ${errorData.error}`);
  //    }
  //  } catch (error: any) {
  //    setStatus(error.message);
  //  }
  //};

  //creating new post using server-action
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = { title, detail, author, age };
    console.log(title, detail, author, age);
    await createPosts(postData);
    setTitle('');
    setDetail('');
    setAuthor('');
    setAge('');
    await fetchData();

  }


  //UI-------------------------
  return (
    <div className="bg-gray-500 max-w-5xl mx-auto my-10 p-4 text-center text-white space-y-3">
      <h1 className="text-3xl font-medium">All Posts</h1>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>

      <div className="space-y-4 mt-5">
        {posts.map((post) => (
          <div key={post._id} className="border-2 border-cyan-500 p-2">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>Detail Info: {post.detail}</p>
            <p>Author: {post.author}</p>
            <p>Age: {post.age}</p>
            <div className="space-x-3 my-5">
              <Link
                href={`/update/${post._id}`}
                className="bg-cyan-600 p-3"
              >
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

      { }

      <form
        className="bg-slate-400 flex flex-col gap-5 items-center p-10 text-black"
        onSubmit={handleSubmit}
      >
        <div className="space-x-7">
          <input
            type="text"
            name="title"
            placeholder="Title here"
            className="w-72 p-2 h-10"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            value={title}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="w-72 p-2 h-10"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDetail(e.target.value)
            }
            value={detail}
          />
        </div>
        <div className="space-x-7">
          <input
            type="text"
            name="author"
            placeholder="Author name"
            className="w-72 p-2 h-10"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
            value={author}
          />
          <input
            type="text"
            name="age"
            placeholder="Author age"
            className="w-72 p-2 h-10"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAge(e.target.value)
            }
            value={age}
          />
        </div>
        <button
          className="bg-cyan-600 text-white py-2 px-3 mt-3"
          type="submit"
        >
          Add Post
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
