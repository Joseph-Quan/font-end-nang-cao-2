// ============================================================
// ES MODULES — chuẩn hiện đại, dùng xuyên suốt phu-xuan-react
// Từ khoá: import để nhập, export để xuất
// ============================================================

// NAMED EXPORT: xuất có tên — có thể xuất nhiều trong 1 file
export function formatDate(date: Date | string | number) {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
}

export function truncate(str: string, maxLength: number = 50) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

export function toSlug(title: string) {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// DEFAULT EXPORT: xuất mặc định — chỉ 1 mỗi file, thường dùng cho class/object tổng hợp
const StringUtils = { formatDate, truncate, toSlug };
export default StringUtils;
