import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const Galaxy = new Schema({
    name: { type: String, required: true },

}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

export default Galaxy