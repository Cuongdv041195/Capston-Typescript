export interface NguoiTAO {
  taiKhoan: string
  hoTen: string
  maLoaiNguoiDung: string
  tenLoaiNguoiDung: string
}

export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string
  tenDanhMucKhoaHoc: string
  tenDanhMuc: string
  maDanhMuc: string
}

export interface KhoaHoc {
  maKhoaHoc: string
  biDanh: string
  tenKhoaHoc: string
  moTa: string
  luotXem: number
  hinhAnh: string
  maNhom: string
  ngayTao: string
  soLuongHocVien: number
  nguoiTao: NguoiTAO
  danhMucKhoaHoc: DanhMucKhoaHoc
}
