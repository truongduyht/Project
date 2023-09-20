function NavBar () {
    return ( 

        <div className="bg-danger bg-opacity-75 navbar ">
            <div className="container">
                <div className="w-100 d-flex justify-content-between align-items-center px-4 mx-4">
                    <div className="col-auto">
                        <i className="fa-solid fa-book-open-reader fs-4"></i>
                        <a className="text-decoration-none fw-medium ps-4 text-dark" href="">Trang Chủ</a>
                        <a className="text-decoration-none fw-medium ps-4 text-dark" href="">Thư Viện</a>
                        <a className="text-decoration-none fw-medium ps-4 text-dark" href="">Giới Thiệu</a>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-outline-dark fw-medium me-2"><a className="text-decoration-none text-dark" href="./Login">Đăng Nhập</a></button>
                        <button type="button" className="btn btn-outline-dark fw-medium ms-4"><a className="text-decoration-none text-dark" href="./Register">Đăng Ký</a></button>
                    </div>
                </div>
    
            </div>
        </div>

     );
}

export default NavBar;
