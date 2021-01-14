import { dbContext } from "../db/DbContext";

class BaseService {
    async getAll(collection, query = {}) {
        return await dbContext[collection].find(query);
    }

    async create(collection, body) {
        return await dbContext[collection].create(body);
    }
    async delete(collection, id) {
        return await dbContext[collection].findOneAndDelete({ _id: id })
    }
}

export const baseService = new BaseService()