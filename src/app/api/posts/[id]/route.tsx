import { NextRequest } from "next/server";
import dbConnect from "../../../../lib/db";
import Posts from "../../../../model/posts";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await dbConnect();
    const post = await Posts.findById(id);
    return new Response(JSON.stringify({ post }), { status: 200 });
  } catch (error) {
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message; // Safely extract the error message
    } else {
      console.error("Unknown error connecting database");
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params; // Get the ID from the URL
  try {
    await dbConnect();
    const updatedData = await req.json();
    const updatedPost = await Posts.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return new Response(JSON.stringify({ error: "Failed to update post" }), {
      status: 500,
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params; // Get the ID from the URL
  try {
    await dbConnect();
    const deletedPost = await Posts.findByIdAndDelete(id);

    if (!deletedPost) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Post deleted successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return new Response(JSON.stringify({ error: "Failed to delete post" }), {
      status: 500,
    });
  }
}
