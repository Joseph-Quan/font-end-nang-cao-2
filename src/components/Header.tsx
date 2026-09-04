//Header.tsx - thanh tiêu đề của phu-xuan-react
//Đây là thành phần React đầu tiên bạn tự viết trong học phần này

//Bước 1: Định nghĩa thành phần - một hàm trả về mô tả giao diện (JSX)
function Header() {
    return (
        <header>
            <h1>📚 phu-xuan-react</h1>
            <p>Ứng dụng quản lý bài viết - Web FrontEnd nâng cao</p>
            <p>Trường Đại học Phú Xuân · Khoa Công Nghệ thông tin</p>
        </header>
    )
}
//Bước 2: Xuất thành phần để sử dụng ở các nơi khác trong ứng dụng (App.tsx)
export default Header