export interface Posts {
    results: Post[]
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export interface Albums {
    results: Album[],
}

export interface Album {
    title: string,
    body?: string,
    id: number,
}

