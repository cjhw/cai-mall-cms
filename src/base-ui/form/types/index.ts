type IFromType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  title?: string
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
