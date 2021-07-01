import axios, { AxiosResponse } from 'axios';
import { Album, Post } from '../types/types';

const instance = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
};

export const Posts = {
	getPosts: (): Promise<Post[]> => requests.get('posts')
};

export const Albums = {
    getAlbums: (): Promise<Album[]> => requests.get('albums')
};
