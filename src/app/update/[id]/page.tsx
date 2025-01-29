"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { getSinglePost, updateSinglePost } from "@/lib/serverActions";
import { Form } from "@/app/page";

export default function UpdatePost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [formInfos, setFormInfos] = useState<Form>({
    title: "",
    detail: "",
    author: "",
    age: "",
  });

  //fetching single post using server-action
  useEffect(() => {
    const getPost = async () => {
      try {
        const singlePost = await getSinglePost(id);
        if (singlePost) {
          setLoading(false);
          setFormInfos(singlePost);
        } else {
          setError("Your post was not found");
        }
      } catch {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  //handle onChange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInfos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handling updated posts
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateSinglePost(id, formInfos);
      router.push("/");
    } catch {
      setError("Couldn't update post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold my-8 text-center">Update Post</h1>

      {loading ? (
        <p className="text-center text-xl font-semibold mt-5">
          Loading...wait a moment
        </p>
      ) : error ? (
        <p className="text-center text-xl font-semibold mt-5">{error}</p>
      ) : (
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
              value={formInfos.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="detail"
              placeholder="Description"
              className="w-72 p-2 h-10"
              value={formInfos.detail}
              onChange={handleChange}
            />
          </div>
          <div className="space-x-7">
            <input
              type="text"
              name="author"
              placeholder="Author name"
              className="w-72 p-2 h-10"
              value={formInfos.author}
              onChange={handleChange}
            />
            <input
              type="text"
              name="age"
              placeholder="Author age"
              className="w-72 p-2 h-10"
              value={formInfos.age}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-600 text-white py-2 px-3 mt-3"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}
