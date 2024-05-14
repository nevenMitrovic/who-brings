import { useAxios } from "@/composables/useAxios";
import { type List } from "@/types/list";

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
        } catch(error) {
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
};

export default new ListsService();