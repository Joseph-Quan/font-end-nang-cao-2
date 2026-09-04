// Tất cả hằng số tập trung ở đây — không rải rác trong component

// Địa chỉ API — lấy từ biến môi trường (đã học Lab 2)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000';

// Cấu hình phân trang
export const POSTS_PER_PAGE = 10;

// Thời gian cache (milliseconds)
export const CACHE_TTL = 5 * 60 * 1000; // 5 phút

// Độ dài tối đa
export const MAX_TITLE_LENGTH = 120;
export const MAX_EXCERPT_LENGTH = 200;

// Nhãn hiển thị
export const APP_NAME = import.meta.env.VITE_APP_TITLE ?? 'phu-xuan-react';
