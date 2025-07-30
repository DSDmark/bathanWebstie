import { PROTECTED_ROUTE } from '@/constants'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    router.replace(PROTECTED_ROUTE.dashboard)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return null
}
