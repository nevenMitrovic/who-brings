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
    quantity?: {
        unit: string,
        amount: number,
        collect: number
    },
    bring?: {
        name?: string
        bring?: number
    }
};
