import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    field: { type: String, required: true },
    field2: { type: Number, required: true }
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;
