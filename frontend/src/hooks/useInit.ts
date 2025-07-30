import { STORAGE_VALUES } from '@/constants'
import { resetUser } from '@/states'
import { getUserDetails } from '@/states/actions/user'
import { CookiesUtil } from '@/utils'
import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './useRtk'

export function useInit() {
  const dispatch = useAppDispatch()
  const { details } = useAppSelector(({ user }) => user)
  const isLogIn = CookiesUtil.get(STORAGE_VALUES.mainAuthToken).value

  const checkUserData = useCallback(() => {
    if (isLogIn && !details?.id) {
      dispatch(getUserDetails(''))
    } else if (details?.id) {
      // eslint-disable-next-line no-console
      console.log('initializing...')
    } else {
      dispatch(resetUser())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details?.id])

  useEffect(() => {
    checkUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [details?.id])
}
