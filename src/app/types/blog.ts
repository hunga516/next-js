export interface Blog {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    category: string;
    img: string;
}

export interface BlogList {
    blogs: Blog[];
}
