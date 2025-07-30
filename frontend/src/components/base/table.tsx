import { ALERT_MESSAGES } from '@/constants'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box, TableSortLabel, Tooltip } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useMemo, useState } from 'react'

import { SkeletonLoader } from '@/components/elements'
import PaginationLayout from './pagination'

interface Row {
  [key: string]: any
}

interface Props {
  rows: Row[]
  columns: string[]
  isLoading?: boolean
  totalCount?: number | undefined
  handlePage?: any
  page?: number | undefined
  perPage?: number
  rowColor?: string
  sortField?: string
  handlePagePerItm?: (perPageItm: number) => void
  isApiInitialized?: boolean
  width?: string | undefined
  toolTipName?: string
  toolTipMessage?: string
  isSelectAllCheckBox?: boolean
  dataNotFound?: string
}

export const BasicTable: React.FC<Props> = ({
  rows,
  columns,
  isLoading = false,
  totalCount,
  handlePage,
  page,
  perPage,
  handlePagePerItm,
  sortField = '',
  width,
  isApiInitialized,
  toolTipName,
  toolTipMessage,
  dataNotFound,
}) => {
  // const { globalLoader } = useAppSelector(({ ui }) => ui)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = useState<string>('')

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedRows = useMemo(() => {
    if (sortField) {
      const stabilizedThis = rows.map((el, index) => [el, index] as [any, number])
      stabilizedThis.sort((a, b) => {
        const orderByProperty = a[0][orderBy]
        const compare = (orderByProperty < b[0][orderBy] ? -1 : 1) * (order === 'desc' ? -1 : 1)
        return compare
      })
      return stabilizedThis.map(el => el[0])
    } else {
      return rows
    }
  }, [sortField, rows, orderBy, order])

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple table' id='tableData'>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell
                    key={index}
                    sx={{
                      position: {
                        xs: 'static',
                        md: index === 0 ? 'sticky' : 'static',
                        lg: index === 0 ? 'sticky' : 'static',
                      },
                      left: 0,
                      backgroundColor: 'transparent',
                      zIndex: index === 0 ? 1 : 'auto',
                      boxShadow: index === 0 ? '2px 0px 5px rgba(0,0,0,0.1)' : 'none',
                      width: width,
                    }}
                  >
                    {(column === sortField || sortField === 'All') && sortField !== '' ? (
                      <TableSortLabel
                        active={orderBy === column}
                        direction={orderBy === column ? order : 'asc'}
                        onClick={() => handleRequestSort(column)}
                      >
                        {column}
                      </TableSortLabel>
                    ) : toolTipName && toolTipName === column ? (
                      <Box>
                        {column}
                        <Tooltip title={toolTipMessage}>
                          <InfoOutlinedIcon style={{ cursor: 'pointer', fontSize: 15, color: 'gray' }} />
                        </Tooltip>
                      </Box>
                    ) : (
                      column
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          {sortedRows?.length && !isLoading ? (
            <TableBody>
              {sortedRows.map((row, rowIndex) => {
                return (
                  <TableRow key={rowIndex}>
                    {Object.values(row).map((cell: any, cellIndex) => (
                      <TableCell
                        key={cellIndex}
                        sx={{
                          position: {
                            xs: 'static',
                            md: cellIndex === 0 ? 'sticky' : 'static',
                            lg: cellIndex === 0 ? 'sticky' : 'static',
                          },
                          left: 0,
                          backgroundColor: row?.project?.props?.['aria-checked'] ? '#ffe0e0' : '#fff',
                          zIndex: cellIndex === 0 ? 1 : 'auto',
                          boxShadow: cellIndex === 0 ? '2px 0px 5px rgba(0,0,0,0.1)' : 'none',
                        }}
                      >
                        <>{cell}</>
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}
            </TableBody>
          ) : !isLoading && rows.length === 0 && !isApiInitialized ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  sx={{
                    textAlign: 'center',
                    padding: '16px',
                    fontSize: '16px',
                  }}
                >
                  {dataNotFound ? dataNotFound : ALERT_MESSAGES.dataNoFount}
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <SkeletonLoader numberOfRows={10} />
                </TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <Box className='pagination' sx={{ mb: '1rem' }}>
        {page !== undefined ? (
          <PaginationLayout
            onItemsPerPageChange={handlePagePerItm}
            page={page}
            onChange={handlePage}
            totalCount={totalCount}
            perPage={perPage}
          />
        ) : null}
      </Box>
    </>
  )
}
