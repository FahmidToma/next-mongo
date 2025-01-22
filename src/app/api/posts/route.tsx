import dbConnect from "@/lib/db";
import Posts from "@/model/posts";
import { NextRequest } from "next/server";

export async function GET() {
    try {
      console.log('Testing database connection...');
      await dbConnect();
      console.log('Database connected successfully.');
  
      const posts = await Posts.find();
      console.log('Fetched posts:', posts);
  
      return new Response(JSON.stringify({ posts }), { status: 200 });
    } catch (error) {
      let errorMessage = 'An unknown error occurred';
  
      if (error instanceof Error) {
        console.error('Database connection error:', error.message);
        errorMessage = error.message; // Safely extract the error message
      } else {
        console.error('Unknown error connecting database');
      }
  
      return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    }
  }
  

  export async function POST(req: NextRequest) {
    try {
      const body = await req.json();
      await dbConnect();
      const newPost = await Posts.create(body);
      return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error) {
      console.error('Error creating post:', error);
      return new Response(JSON.stringify({ error: 'Failed to create post' }), { status: 500 });
    }
  }