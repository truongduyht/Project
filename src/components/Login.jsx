function Login() {
    return ( 
        <div className="bg-danger bg-opacity-25 py-4">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-4 mr-4">
                        <div className=" border border-dark border-3 rounded">
                            <form className="text-center" action="">
                                <h3 className="py-4">Đăng Ký Tài Khoản</h3>
                                <div className="mx-4">
                                    <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="" />
                                    <label htmlFor="floatingInput">Email</label>
                                    </div>
                                </div>
                                <div className="mx-4">
                                    <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingInput" placeholder="" />
                                    <label htmlFor="floatingInput">Mật Khẩu</label>
                                    </div>
                                </div>
                                <button  type="button" className="btn btn-secondary mb-2 fw-medium">Đăng Nhập</button>
                                <p>Quên mật khẩu?</p>
                                <p>Bạn chưa có tài khoản? 
                                    <a className="textColor text-decoration-none" href="./Register"> Đăng ký ngay</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 ms-4">
                        <img className="border rounded shadow bg-body-tertiary" src="https://1.bp.blogspot.com/-PMbcnVYXr9o/YSTggzxmkVI/AAAAAAAAEn8/RWdotjAHK1YTzGbMjihPzP8vFAc0gwnOwCLcBGAsYHQ/s719/dhct-trung-tam-hoc-lieu-ctu-can-tho.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;
