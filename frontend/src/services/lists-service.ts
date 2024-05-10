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

};

export default new ListsService();