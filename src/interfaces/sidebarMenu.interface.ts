import {ReactNode} from "react";

export interface SidebarMenuInterface {
  id: number
  icon?: ReactNode
  label: string
  url: string
}