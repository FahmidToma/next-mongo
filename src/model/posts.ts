import mongoose ,{Document, Model, Schema} from 'mongoose';

//interface for user document
interface IPost extends Document {

    title: string,
    detail: string,
    author: string,
    age: string,
}

//schema for user model
const PostSchema: Schema<IPost> = new Schema({
    title: {type: String, required: true},
    detail: {type: String, required: true},
    author: {type: String, required: true},
    age: {type: String, required: true}
})

const Posts: Model<IPost> = mongoose.models.Posts || mongoose.model<IPost>('Posts',PostSchema );
export default Posts;