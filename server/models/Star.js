import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const Star = new Schema({
    name: { type: String, required: true },
    parentId: { type: ObjectId, ref: "Galaxy", required: true }

}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
export default Star