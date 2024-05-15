export interface List {
    name: string
    date?: string,
    location?: string,
    description?: string,
    items?: Item[]
};

interface Item {
    name: string,
    description?: string,
    amount?: number,
    unit?: string
};
