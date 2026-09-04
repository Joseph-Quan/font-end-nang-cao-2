// Named export #1: một component nhỏ hiển thị nhãn trạng thái
export function NhanTrangThai({ dangMoCua }) {
    // Lưu ý: tham số nhận vào object { dangMoCua } — cách viết này sẽ được
    // giải thích đầy đủ về "props" ở Bài 3 (Buổi 5–6). Ở đây chỉ cần dùng theo mẫu.
    return (
        <span style={{ color: dangMoCua ? "green" : "crimson", fontWeight: "bold" }}>
            {dangMoCua ? "● Đang mở cửa" : "● Đã đóng cửa"}
        </span>
    );
}

// Named export #2: một hàm JavaScript thuần, không phải component
export function demTongSoDiaDiem(danhSach) {
    return danhSach.length;
}
