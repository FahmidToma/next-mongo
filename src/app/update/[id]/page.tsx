'use client'
import { Post } from "@/app/page";
import { getSinglePost, updateSinglePost } from "@/lib/serverActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";

export default function UpdatePost({ params }: { params: Promise<{ id: string }> }) {

    const { id } = React.use(params);
    const router = useRouter();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    const [title, setTitle] = useState<string>('');
    const [detail, setDetail] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [age, setAge] = useState<string>('');

    //fetching single post
    //useEffect(() => {
    //    const getPost = async () => {
    //        try {
    //            const response = await fetch(`/api/posts/${id}`);
    //            if (!response.ok) {
    //                throw new Error('Failed to fetch posts');
    //            }
    //            const data = await response.json();
    //            setPost(data.post);
    //            setLoading(false);
//
    //            //auto filling form
    //            setTitle(data.post.title);
    //            setDetail(data.post.detail);
    //            setAuthor(data.post.author);
    //            setAge(data.post.age);
//
    //        } catch (err: any) {
    //            setError(err.message);
    //            setLoading(false);
    //        }
    //    };
    //    getPost();
    //}, []);

    //fetching single post using server-action

    const getPost= async(id: string)=>{
        const singlePost=await getSinglePost(id);
        setLoading(false);
        setTitle(singlePost.title);
        setDetail(singlePost.detail);
        setAuthor(singlePost.author);
        setAge(singlePost.age);
    }

    useEffect(()=>{
        getPost(id);
    },[]);



    // Handling updated posts
    const handleSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const updatedPostData = { title, detail, author, age };

       // try {
       //     const response = await fetch(`/api/posts/${id}`, {
       //         method: 'PUT',
       //         headers: {
       //             'Content-Type': 'application/json',
       //         },
       //         body: JSON.stringify(updatedPostData),
       //     });
//
       //     if (!response.ok) {
       //         throw new Error('Failed to update post');
       //     }
//
       //     const data = await response.json();
       //     console.log(data);
       //     router.push('/');
       //     //setPosts((prev) =>
       //     //    prev.map((post) => (post._id === edit ? data.updatedPost : post))
       //     //);
       //     //setEdit(null);
//
       // } catch (err: any) {
       //     setError(err.message);
       // }
        console.log("Going to update post---client");
       await updateSinglePost(id,updatedPostData);
       console.log("Just updated---client");
       router.push('/');
    };

    if (loading) return <p className="text-center text-xl font-semibold mt-5">Loading...wait a moment</p>
    if (error) return <p className="text-center text-xl font-semibold mt-5">{error}</p>

    return <div>

        <form
            className="bg-slate-400 flex flex-col gap-5 items-center p-10 text-black"
            onSubmit={handleSave}
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
                Save
            </button>
        </form>

    </div>
}