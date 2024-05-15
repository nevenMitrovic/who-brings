export interface List {
    name: string
    date?: string,
    location?: string,
    description?: string,
    items?: Item[]
};

export interface Item {
    name: string,
    description?: string,
    amount?: number,
    unit?: string
    bring?: number
};
