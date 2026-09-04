// postService.ts — các hàm gọi API liên quan đến bài viết
// Mỗi service chỉ biết endpoint của mình, không quan tâm đến UI

import type { Post } from '../types';
import apiClient from './apiClient';

// Lấy tất cả bài viết
export async function fetchPosts(): Promise<Post[]> {
    return apiClient.get<Post[]>('/posts');
}

// Lấy một bài viết theo ID
export async function fetchPostById(id: number): Promise<Post> {
    return apiClient.get<Post>(`/posts/${id}`);
}

// Tạo bài viết mới
export async function createPost(data: Omit<Post, 'id'>): Promise<Post> {
    return apiClient.post<Post>('/posts', data);
}

// Cập nhật bài viết
export async function updatePost(id: number, data: Partial<Post>): Promise<Post> {
    return apiClient.put<Post>(`/posts/${id}`, data);
}

// Xoá bài viết
export async function deletePost(id: number): Promise<void> {
    return apiClient.delete<void>(`/posts/${id}`);
}
