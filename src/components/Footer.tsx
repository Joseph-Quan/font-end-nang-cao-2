// Footer.tsx — chân trang

function Footer() {
    // new Date().getFullYear() trả về năm hiện tại — tự động cập nhật mỗi năm
    const namHienTai = new Date().getFullYear()

    return (
        <footer>
            <p>
                © {namHienTai} phu-xuan-react &nbsp;·&nbsp;
                Trường Đại học Phú Xuân &nbsp;·&nbsp; INT.7.18
            </p>
            <p>
                Được xây dựng bằng{' '}
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    React
                </a>
                {' '}+{' '}
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    Vite
                </a>
            </p>
        </footer>
    )
}

export default Footer
