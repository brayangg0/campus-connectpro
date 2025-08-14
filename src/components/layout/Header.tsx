import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, ChevronDown, Menu, Settings, LogOut } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 bg-gradient-header shadow-header border-b border-sidebar-border sticky top-0 z-50">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Logo e Trigger do Sidebar */}
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-header-foreground hover:bg-white/10" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MVB</span>
            </div>
            <div className="text-header-foreground">
              <h1 className="font-semibold text-lg">Plataforma EAD de Estudo</h1>
              <p className="text-sm opacity-90">Portal do Aluno</p>
            </div>
          </div>
        </div>

        {/* Controles do usuário */}
        <div className="flex items-center gap-3">
          {/* Notificações */}
          <Button variant="ghost" size="sm" className="text-header-foreground hover:bg-white/10">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Perfil do usuário */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-auto p-2 text-header-foreground hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Brayan" />
                    <AvatarFallback className="bg-primary text-primary-foreground">BR</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-sm font-medium">Olá, Brayan</p>
                    <p className="text-xs opacity-75">Seja bem-vinda</p>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Seleção de local */}
          <div className="text-header-foreground text-sm px-3 py-1 bg-white/10 rounded">
            São Luís/MA
          </div>
        </div>
      </div>
    </header>
  );
}