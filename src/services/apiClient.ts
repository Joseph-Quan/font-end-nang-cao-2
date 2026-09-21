// apiClient.ts — lớp HTTP client dùng chung cho toàn ứng dụng
// Đóng gói fetch() để tái sử dụng dễ dàng và xử lý lỗi nhất quán

import { API_BASE_URL } from '../constants';

// Kiểu lỗi tùy chỉnh
export class ApiError extends Error {
    status: number;
    constructor(
        status: number,
        message: string
    ) {
        super(message);
        this.status = status;
        this.name = 'ApiError';
    }
}

// Hàm nội bộ — gửi request và xử lý lỗi HTTP
async function request<T>(path: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${path}`;
    const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        ...options,
    });

    if (!res.ok) {
        throw new ApiError(res.status, `HTTP ${res.status}: ${res.statusText}`);
    }

    return res.json() as Promise<T>;
}

// API client — xuất các method HTTP phổ biến
const apiClient = {
    get: <T>(path: string) => request<T>(path),
    post: <T>(path: string, body: unknown) =>
        request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
    put: <T>(path: string, body: unknown) =>
        request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
    delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};

export default apiClient;
