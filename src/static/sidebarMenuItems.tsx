import {SidebarMenuInterface} from "../interfaces/sidebarMenu.interface";
import {CustomersIcon, HelpIcon, KeyIcon, ProductIcon, PromoteIcon, WalletIcon} from "../components/Icons";

export const sidebarMenuItems: SidebarMenuInterface[] = [
  {
    id: 1,
    icon: <KeyIcon/>,
    url: '/dashboard',
    label: 'Dashboard'
  },
  {
    id: 2,
    icon: <ProductIcon/>,
    url: '/product',
    label: 'Product'
  },
  {
    id: 3,
    icon: <CustomersIcon/>,
    url: '/customers',
    label: 'Customers'
  },
  {
    id: 4,
    icon: <WalletIcon/>,
    url: '/income',
    label: 'Income'
  },
  {
    id: 5,
    icon: <PromoteIcon/>,
    url: '/promote',
    label: 'Promote'
  },
  {
    id: 6,
    icon: <HelpIcon/>,
    url: '/help',
    label: 'Help'
  },
]