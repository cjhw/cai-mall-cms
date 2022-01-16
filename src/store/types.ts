import { ILoginState } from './login/types'
import { IDashboardState } from './main/analysis/type'
import { ISystemState } from './main/system/types'

export interface IrootState {
  name: string
  age: number
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

export type IStoreType = IrootState & IRootWithModule
