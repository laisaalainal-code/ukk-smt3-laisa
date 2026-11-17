import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { House, UserRound } from "lucide-react"

const listMenu = [
  { 
    "name" : "Dashboard",
    "url" : "/admin",
    "icon" : House
  },  
  { 
    "name" : "User Management",
    "url" : "/admin/user-management",
    "icon" : UserRound
  },  
  
]

export function AppSidebar() {
  return (
    <Sidebar className="!bg-blue-600">

      <SidebarHeader className="!bg-blue-600 text-white">
        <SidebarMenu>

          <SidebarMenuItem>
          </SidebarMenuItem>

        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="!bg-blue-600 text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Menu</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
            {listMenu.map((menu) => (
              <SidebarMenuItem key={menu.name}>
                <SidebarMenuButton asChild>
                  <a href={menu.url}>
                    <menu.icon/>
                    <span>{menu.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent> 
      <SidebarFooter className="!bg-blue-600 text-white"/>
    </Sidebar>
  )
}