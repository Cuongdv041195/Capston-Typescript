import { InfoUser, SignIn } from '../types/user.type'
import fetcher from './fetcher'

// export const signupAPI = async (payload) => {
//   try {
//     // payload: { taiKhoan: "", matKhau:""...}
//     const response = await fetcher.post('/QuanLyNguoiDung/DangKy', payload)
//     return response.data.content
//   } catch (error) {
//     throw 'Lỗi rồi 🤧'
//   }
// }

export const signinAPI = async (payload: SignIn) => {
  try {
    // payload: { taiKhoan: "", matKhau:""}
    const response = await fetcher.post('/QuanLyNguoiDung/DangNhap', payload)
    return response.data
  } catch (error) {
    throw 'Lỗi rồi 🤧'
  }
}

export const getInfoUser = async (payload: InfoUser | undefined | null) => {
  try {
    const response = await fetcher.post(
      '/QuanLyNguoiDung/ThongTinNguoiDung',
      payload
    )

    return response.data
  } catch (error) {
    throw 'Lỗi'
  }
}
