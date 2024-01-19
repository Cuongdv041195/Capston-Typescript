export interface Booking {
  maKhoaHoc: string
  taiKhoan: string
}
export interface InfoUser {
  chiTietKhoaHocGhiDanh: []
  taiKhoan: string
  matKhau: string
  hoTen: string
  soDT: string
  maLoaiNguoiDung: string
  maNhom: string
  email: string
}
export interface SignIn {
  taiKhoan: string
  matKhau: string
}

export interface CurrentUser {
  taiKhoan: string
  hoTen: string
  email: string
  soDT: string
  maNhom: string
  maLoaiNguoiDung: string
  accessToken: string
}
