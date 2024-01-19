import { useAuth } from '../../../contexts/UserContext/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { LoadingButton } from '@mui/lab'
import { signinAPI } from '../../../apis/userAPI'
import { Grid, TextField } from '@mui/material'
import { PATH } from '../../../routes/path'

const SignIn = () => {
  const { currentUser, handleSignin: handleSigninContext } = useAuth()
  const navigate = useNavigate()
  const { handleSubmit, register } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  })
  const { mutate: handleSignin, isPending } = useMutation({
    mutationFn: (values: any) => signinAPI(values), //{ taiKhoan : "" , matKhau:""}
    onSuccess: (values) => {
      //values là thông tin user
      handleSigninContext(values)
      if (values.maLoaiNguoiDung === 'HV') navigate(PATH.HOME)
      if (values.maLoaiNguoiDung === 'GV') navigate(PATH.ADMIN)
    },
    onError: () => {},
  })
  const onSubmit = (formValues: any) => {
    handleSignin(formValues) // { taiKhoan : "" , matKhau:""}
  }

  if (currentUser) {
    return <Navigate to={PATH.HOME} />
  }
  return (
    <div style={{ background: '#fff' }}>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        padding={'50px 0'}
      >
        <Grid item md={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Tài khoản"
              fullWidth
              {...register('taiKhoan')}
              style={{ marginBottom: '15px' }}
            />
            <TextField
              label="Mật khẩu"
              type="password"
              fullWidth
              {...register('matKhau')}
              style={{ marginBottom: '15px' }}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isPending}
            >
              Đăng nhập
            </LoadingButton>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignIn
