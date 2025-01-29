import dbConnect from "@/lib/db";
import Posts from "@/model/posts";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const posts = await Posts.find();
    return new Response(JSON.stringify({ posts }), { status: 200 });
  } catch (error) {
    const errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      console.error("Database connection error:", error.message);
    } else {
      console.error("Unknown error connecting database");
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await dbConnect();
    const newPost = await Posts.create(body);
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response(JSON.stringify({ error: "Failed to create post" }), {
      status: 500,
    });
  }
}
