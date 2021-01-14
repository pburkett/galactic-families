import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId
const Schema = mongoose.Schema

const PlanetSpecies = new Schema({
    planetsId: { type: ObjectId, ref: "Planet", required: true },
    speciesId: { type: ObjectId, ref: "Species", required: true }

}, {
    timestamps: true,
    toJSON: { virtuals: true }
})
export default PlanetSpecies