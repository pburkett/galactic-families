import BaseController from "../utils/BaseController";
import { baseService } from "../services/BaseService"

export class BasedController extends BaseController {
    constructor() {
        super("api");
        this.router
            .get("/:collection0", this.getAll)
            .get("/:collection0/:id", this.getById)
            .get("/:collection0/:id/:collection1", this.getRelativeCollection)
            .post("/:collection0", this.create)
            .delete("/:collection0/:id", this.delete);
    }
    async getAll(req, res, next) {
        try {
            let temp = req.params.collection0
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.getAll(collection, req.query, ''))
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let temp = req.params.collection0
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            let query = {}
            query._id = req.params.id
            res.send(await baseService.getAll(collection, query))
        } catch (e) {
            next(e)
        }
    }
    async getRelativeCollection(req, res, next) {
        try {
            let temp = req.params.collection1
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            let query = {}
            query[`${req.params.collection0}Id`] = req.params.id
                // let toPop = req.params.id + 'Id'
            res.send(await baseService.getAll(collection, query, temp + 'Id'))
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            let temp = req.params.collection0
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.create(collection, req.body));
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let temp = req.params.collection0
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.delete(collection, req.params.id));
        } catch (e) {
            next(e)
        }
    }
}