// userService.ts — các hàm gọi API liên quan đến người dùng

import type { User } from '../types';
import apiClient from './apiClient';

// Lấy tất cả người dùng
export async function fetchUsers(): Promise<User[]> {
    return apiClient.get<User[]>('/users');
}

// Lấy người dùng theo ID
export async function fetchUserById(id: number): Promise<User> {
    return apiClient.get<User>(`/users/${id}`);
}
