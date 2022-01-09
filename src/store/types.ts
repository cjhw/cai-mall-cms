import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IrootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IrootState & IRootWithModule
