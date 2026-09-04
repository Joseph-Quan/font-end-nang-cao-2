// Kiểu dữ liệu dùng chung toàn ứng dụng phu-xuan-react

// Bài viết
export interface Post {
    id: number;
    title: string;
    excerpt: string;        // tóm tắt ngắn
    content: string;        // nội dung đầy đủ
    authorId: number;
    publishedAt: string;    // ISO 8601 string
    tags: string[];
}

// Người dùng
export interface User {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;     // dấu ? = có thể không có
}

// Trạng thái tải dữ liệu — dùng cho mọi API call
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Phản hồi API tổng quát (generic)
export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
