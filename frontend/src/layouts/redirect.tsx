import { Loader } from '@/components'
import { PROTECTED_ROUTE } from '@/constants'
import { useAppSelector } from '@/hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const RedirectLayout = () => {
  const router = useRouter()
  const { details } = useAppSelector(({ user }) => user)
  useEffect(() => {
    if (details?.id) {
      router.replace(PROTECTED_ROUTE.dashboard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, details?.id])

  return <Loader loading />
}

export default RedirectLayout
