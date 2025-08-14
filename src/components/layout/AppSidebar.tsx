import { NavLink, useLocation } from "react-router-dom";
import { User, FileText, GraduationCap, CreditCard, Users, MapPin, PieChart } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Meu Perfil", url: "/perfil", icon: User },
  { title: "Pré-Matrículas", url: "/pre-matriculas", icon: FileText },
  { title: "Matrículas", url: "/matriculas", icon: GraduationCap },
  { title: "Pagamentos", url: "/pagamentos", icon: CreditCard },
  { title: "Usuários", url: "/usuarios", icon: Users },
  { title: "Cidades", url: "/cidades", icon: MapPin },
  { title: "Resumo de Caixa", url: "/resumo-caixa", icon: PieChart },
];

const accountItems = [
  { title: "Meus Cursos", url: "/cursos", icon: GraduationCap },
  { title: "Meus Certificados", url: "/certificados", icon: FileText },
  { title: "Suporte", url: "/suporte", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-primary" 
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="gap-0">
        {/* Menu Principal */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-primary font-semibold">
            {!collapsed && "Minha Conta"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Divisor */}
        <div className="px-3">
          <div className="h-px bg-sidebar-border my-2" />
        </div>

        {/* Menu de Administração */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-primary font-semibold">
            {!collapsed && "Franqueado"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses}>
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}