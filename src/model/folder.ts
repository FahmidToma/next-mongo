import mongoose, {Document, Schema, Model} from 'mongoose';

//interface
interface IFolder extends Document  {
    name: string;
    parent?: string | null;
}


//schema
const FolderSchema: Schema<IFolder>= new Schema({
    name: {type: String, required: true},
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null}
});

//model
const Folder: Model<IFolder>= mongoose.models.Folder || mongoose.model<IFolder>('Folder', FolderSchema);

export default Folder;