import { useAxios } from "@/composables/useAxios";
import { type List } from "@/types/list";

class ListsService {
    private httpClient = useAxios();

    async createList(data: List) {
        const response = await this.httpClient.post('/lists/', data);
        return response.data;
    }
};

export default new ListsService();