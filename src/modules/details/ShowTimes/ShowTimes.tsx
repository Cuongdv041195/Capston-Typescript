import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getDetailCourseAPI } from '../../../apis/course'
import { Container, Typography } from '@mui/material'

const Showtimes: React.FC = ({ courseID }: any) => {
  const { data } = useQuery({
    queryKey: ['course-details', courseID],
    queryFn: () => getDetailCourseAPI(courseID),
  })
  return (
    <div style={{ marginBottom: '30px' }}>
      <Container>
        <Typography
          style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '30px' }}
        >
          Giới Thiệu Khóa Học:
        </Typography>
        <Typography>{data?.moTa}</Typography>
      </Container>
    </div>
  )
}

export default Showtimes
