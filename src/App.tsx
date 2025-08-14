import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import PreMatriculas from "./pages/PreMatriculas";
import Matriculas from "./pages/Matriculas";
import Pagamentos from "./pages/Pagamentos";
import Usuarios from "./pages/Usuarios";
import Cidades from "./pages/Cidades";
import ResumoCaixa from "./pages/ResumoCaixa";
import MeusCursos from "./pages/MeusCursos";
import MeusCertificados from "./pages/MeusCertificados";
import Suporte from "./pages/Suporte";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/perfil" element={<DashboardLayout><Perfil /></DashboardLayout>} />
          <Route path="/pre-matriculas" element={<DashboardLayout><PreMatriculas /></DashboardLayout>} />
          <Route path="/matriculas" element={<DashboardLayout><Matriculas /></DashboardLayout>} />
          <Route path="/pagamentos" element={<DashboardLayout><Pagamentos /></DashboardLayout>} />
          <Route path="/usuarios" element={<DashboardLayout><Usuarios /></DashboardLayout>} />
          <Route path="/cidades" element={<DashboardLayout><Cidades /></DashboardLayout>} />
          <Route path="/resumo-caixa" element={<DashboardLayout><ResumoCaixa /></DashboardLayout>} />
          <Route path="/cursos" element={<DashboardLayout><MeusCursos /></DashboardLayout>} />
          <Route path="/certificados" element={<DashboardLayout><MeusCertificados /></DashboardLayout>} />
          <Route path="/suporte" element={<DashboardLayout><Suporte /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
