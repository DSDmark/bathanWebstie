import { Dispatch as ReactDispatch, SetStateAction as ReactSetStateAction } from "react"

export type Dispatch<A> = (action: A) => void
export type SetStateAction<T> = ReactDispatch<ReactSetStateAction<T>>
export type UpdateStateFunction<T> = (data: any, prev?: any, setState?: SetStateAction<any>) => T
