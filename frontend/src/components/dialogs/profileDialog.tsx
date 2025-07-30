import { useAppSelector } from '@/hooks'
import { Avatar, Box, Chip, Dialog, DialogContent, DialogTitle, Divider, Paper, Stack, Typography } from '@mui/material'

interface ProjectDialogProps {
  open: boolean
  onClose: () => void
}

export default function ProfileDialog({ open, onClose }: ProjectDialogProps) {
  const { details } = useAppSelector(({ user }) => user)
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'
      aria-labelledby='profile-dialog-title'
      sx={{ '& .MuiPaper-root': { borderRadius: '16px' } }}
    >
      <DialogTitle id='profile-dialog-title' sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>
        User Profile
      </DialogTitle>

      <DialogContent dividers>
        <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
          {/* Avatar and Name */}
          <Stack direction='column' alignItems='center' spacing={1}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 28 }}>
              {details.name?.charAt(0).toUpperCase() || 'U'}
            </Avatar>
            <Typography variant='h6' fontWeight='600'>
              {details.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {details.email}
            </Typography>
          </Stack>

          <Divider flexItem sx={{ my: 2 }} />

          {/* Info Cards */}
          <Box component={Paper} variant='outlined' p={2} borderRadius={2} width='100%'>
            <InfoItem label='Contact' value={details.contact || '-'} />
            <InfoItem label='Department' value={details?.department?.name || '-'} />
            <InfoItem label='Role' value={details?.role || '-'} capitalize />
            <InfoItem label='Description' value={details?.description || '-'} multiline />
          </Box>

          {/* Skills */}
          <Box width='100%'>
            <Typography variant='subtitle2' gutterBottom fontWeight='bold'>
              Skills
            </Typography>
            <Box display='flex' flexWrap='wrap' gap={1}>
              {details?.skills?.map((skill: any) => (
                <Chip key={skill.id} label={skill.name} color='primary' />
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

function InfoItem({
  label,
  value,
  multiline = false,
  capitalize = false,
}: {
  label: string
  value: string
  multiline?: boolean
  capitalize?: boolean
}) {
  return (
    <Box mb={1.5}>
      <Typography variant='subtitle2' fontWeight='bold' gutterBottom>
        {label}
      </Typography>
      <Typography
        variant='body2'
        whiteSpace={multiline ? 'pre-wrap' : 'nowrap'}
        textTransform={capitalize ? 'capitalize' : 'none'}
      >
        {value}
      </Typography>
    </Box>
  )
}
