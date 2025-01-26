import { NextRequest } from 'next/server';
import dbConnect from '../../../../lib/db';
import Posts from '../../../../model/posts';


export async function GET(req:Request, {params}:{params: {id: string }}) {

    const {id} = await params;

    try {
      console.log('Testing database connection...');
      await dbConnect();
      console.log('Database connected successfully.');
  
      const post = await Posts.findById(id);
      console.log('Fetched posts:', post);
  
      return new Response(JSON.stringify({ post }), { status: 200 });
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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } =  params; // Get the ID from the URL
    try {
        // Connect to the database
        await dbConnect();

        const updatedData = await req.json();
        console.log('Update data:', updatedData);

        // Find the post by ID and update it
        const updatedPost = await Posts.findByIdAndUpdate(id, updatedData, {new: true, runValidators: true, });

        if (!updatedPost) {
            return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedPost), { status: 200 });
    } catch (error) {
        console.error('Error updating post:', error);
        return new Response(JSON.stringify({ error: 'Failed to update post' }), { status: 500 });
    }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Get the ID from the URL
    try {
        // Connect to the database
        await dbConnect();

        // Find and delete the post by ID
        const deletedPost = await Posts.findByIdAndDelete(id);

        if (!deletedPost) {
            return new Response(
                JSON.stringify({ error: 'Post not found' }),
                { status: 404 }
            );
        }

        return new Response(JSON.stringify({ message: 'Post deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting post:', error);
        return new Response(JSON.stringify({ error: 'Failed to delete post' }), { status: 500 });
    }
}


