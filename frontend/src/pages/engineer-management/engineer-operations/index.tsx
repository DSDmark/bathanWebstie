import { useGetAllUserListByRoleQuery } from '@/api/user'
import { BasicTable } from '@/components'
import { PROTECTED_ROUTE, ROLES } from '@/constants'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

interface Engineer {
  id: string
  name: string
  email: string
  department: string
  contact: string
  avatar?: string
}

// Dummy Data
const engineers: Engineer[] = [
  {
    id: '1',
    name: 'Riya Sharma',
    email: 'riya.sharma@example.com',
    department: 'Frontend',
    contact: '9876543210',
  },
  {
    id: '2',
    name: 'Aman Verma',
    email: 'aman.verma@example.com',
    department: 'Backend',
    contact: '9123456789',
  },
]

export default function EngineerManagementSection() {
  const { data, isLoading, isFetching, isUninitialized } = useGetAllUserListByRoleQuery({
    role: ROLES.engineer,
  })

  return (
    <Box p={4}>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb={3}>
        <Typography variant='h5' fontWeight={600}>
          Engineer Management
        </Typography>
        <Button
          LinkComponent={Link}
          href={PROTECTED_ROUTE.engineerAddEdit}
          variant='contained'
          startIcon={<AddIcon />}
          size='small'
        >
          Create Engineer Profile
        </Button>
      </Box>
      <BasicTable
        isApiInitialized={isUninitialized}
        columns={['Name', 'Email', 'Department', 'Actions']}
        rows={data?.data || []}
        isLoading={isFetching || isLoading}
        // totalCount={state.pagination?.total}
        // page={state.filters?.page}
        // perPage={pagePerItm}
        // handlePagePerItm={(perPageItm: number) => {
        //   dispatch(setPagePerItm(perPageItm))
        //   handlePageUtil(1, setState)
        // }}
        // handlePage={(_: null, page: number) => handlePageUtil(page, setState)}
      />
    </Box>
  )
}
