import { useGetAllUserListByRoleQuery } from '@/api/user'
import { BasicTable } from '@/components'
import { PROTECTED_ROUTE, ROLES } from '@/constants'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Link as MuiLink, Typography } from '@mui/material'
import Link from 'next/link'
import urlcat from 'urlcat'

const transformRow = (itm: any) => {
  return {
    name: itm.name,
    email: <Typography sx={{ textTransform: 'lowercase' }}>{itm.email}</Typography>,
    department: itm.department.name,
    seniorityLevel: itm.seniority.name,
    actions: (
      <MuiLink component={Link} href={urlcat(PROTECTED_ROUTE.engineerAddEdit, { id: itm.id })}>
        Edit
      </MuiLink>
    ),
  }
}

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
        columns={['Name', 'Email', 'Department', 'Seniority Level', 'Actions']}
        rows={data?.data.map((itm: any) => transformRow(itm)) || []}
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
