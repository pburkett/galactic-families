import BaseController from "../utils/BaseController";
import { baseService } from "../services/BaseService"

export class BasedController extends BaseController {
    constructor() {
        super("api");
        this.router
            .get("/:collection", this.getAll)
            .get("/:collection/:id/:collection", this.getDirectChildren)
            .post("/:collection", this.create)
            .delete("/:collection/:id", this.delete);
    }
    async getAll(req, res, next) {
        try {
            let temp = req.params.collection
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.getAll(collection, req.query))
        } catch (error) {
            next(error);
        }
    }
    async getDirectChildren(req, res, next) {
        try {
            let temp = req.params.collection
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.getAll(collection, { parentId: req.params.id }))
        } catch (e) {
            next(e)
        }
    }
    async create(req, res, next) {
        try {
            let temp = req.params.collection
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.create(collection, req.body));
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let temp = req.params.collection
            let collection = temp.charAt(0).toUpperCase() + temp.slice(1)
            res.send(await baseService.delete(collection, req.params.id));
        } catch (e) {
            next(e)
        }
    }
}