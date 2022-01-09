type IFromType = 'input' | 'password' | 'select' | 'datapicker'

export interface IFormItem {
  field: string
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}
