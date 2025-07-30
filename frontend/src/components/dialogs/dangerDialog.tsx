import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone'
import { Box, Button, Dialog, Stack } from '@mui/material'
import { ALERT_MESSAGES } from '../../constants'
import { handleCloseUtil } from '../../utils'

interface IProps {
  open: boolean
  title?: string
  description?: string
  setInitialState: any
  buttonTitle?: string
  handleClick: () => void
  isLoading?: boolean
}

const DangerDialog = ({
  open,
  setInitialState,
  title = 'Warning',
  description = 'Are you sure you want to delete this entry',
  buttonTitle = 'Delete',
  isLoading = false,
  handleClick,
}: IProps) => {
  return (
    <Dialog
      fullWidth={false}
      sx={{ '& .MuiPaper-root': { maxWidth: '400px', borderRadius: '12px' } }}
      onClose={() => handleCloseUtil(setInitialState)}
      open={open}
      aria-labelledby='draggable-dialog-title'
    >
      <Box sx={{ p: 2 }}>
        <Stack direction={'column'} spacing={2} alignItems={'self-start'}>
          <ExitToAppTwoToneIcon fontSize='large' sx={{ color: theme => theme.palette.primary.main }} />
          <h5>{title}</h5>
          <Stack direction={'column'} spacing={1} alignItems={'self-start'}>
            <p>{description}</p>
          </Stack>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={2} sx={{ mt: 2 }}>
          <Button variant='outlined' fullWidth onClick={() => handleCloseUtil(setInitialState)}>
            Cancel
          </Button>
          <Button
            variant='contained'
            fullWidth
            disableElevation
            disabled={isLoading}
            onClick={handleClick}
            sx={{
              background: theme => theme.palette.error.main,
              color: '#fff',
              textTransform: 'capitalize',
              borderRadius: '8px',
              fontSize: '14px',
            }}
          >
            {isLoading ? ALERT_MESSAGES.submittingLoading : buttonTitle}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  )
}
export default DangerDialog
