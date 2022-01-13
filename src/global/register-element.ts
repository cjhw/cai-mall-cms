import { App } from 'vue'
import {
  ArrowDown,
  Avatar,
  Cellphone,
  ChatLineRound,
  CircleClose,
  CirclePlusFilled,
  Delete,
  Edit,
  Goods,
  Monitor,
  PriceTag,
  Refresh,
  RemoveFilled,
  Setting,
  UserFilled
} from '@element-plus/icons'

const components = [
  Cellphone,
  UserFilled,
  CirclePlusFilled,
  RemoveFilled,
  Monitor,
  CircleClose,
  PriceTag,
  Avatar,
  Setting,
  Goods,
  ChatLineRound,
  ArrowDown,
  Delete,
  Edit,
  Refresh
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
