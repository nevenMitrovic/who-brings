import { useAxios } from "@/composables/useAxios";
import { type List, type Item } from "@/types/list";

class ListsService {
    private httpClient = useAxios();

    async createList(data: List) {
        try {
            const response = await this.httpClient.post('/lists/', data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getLists() {
        try {
            const response = await this.httpClient.get('/lists/');
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getList(listId: string) {
        try {
            const response = await this.httpClient.get('/lists/' + listId);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateList(listId: string, data: List) {
        try {
            const response = await this.httpClient.patch(`/lists/${listId}/`, data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createItem(listId: string, data: Item) {
        try {
            const response = await this.httpClient.put('/lists/' + listId + '/create/', data);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async updateItem(listId: string, itemId: string, data: Item) {
        const response = await this.httpClient.patch('/lists/' + listId + '/' + itemId, data);
        return response.data;
    }
};

export default new ListsService();