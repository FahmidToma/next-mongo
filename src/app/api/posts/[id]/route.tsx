import { NextRequest } from 'next/server';
import dbConnect from '../../../../lib/db';
import Post from '../../../../model/posts';


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params; // Get the ID from the URL
    try {
        // Connect to the database
        await dbConnect();

        const updatedData = await req.json();
        console.log('Update data:', updatedData);

        // Find the post by ID and update it
        const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {new: true, runValidators: true, });

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
        const deletedPost = await Post.findByIdAndDelete(id);

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


