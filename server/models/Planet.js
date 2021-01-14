import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const Planet = new Schema({
    name: { type: String, required: true },
    starsId: { type: ObjectId, ref: "Star", required: true }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
export default Planet