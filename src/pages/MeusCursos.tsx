import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, CheckCircle, Play } from "lucide-react";

const cursos = [
  { 
    id: 1, 
    titulo: "Técnico em Informática", 
    progresso: 75, 
    status: "Em Andamento",
    duracao: "18 meses",
    proximaAula: "Banco de Dados - Módulo 3"
  },
  { 
    id: 2, 
    titulo: "Técnico em Enfermagem", 
    progresso: 100, 
    status: "Concluído",
    duracao: "24 meses",
    proximaAula: "Curso Finalizado"
  }
];

export default function MeusCursos() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Meus Cursos</h1>
        <p className="text-muted-foreground">Acompanhe seu progresso</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.map((curso) => (
          <Card key={curso.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{curso.titulo}</CardTitle>
              </div>
              <Badge 
                variant={curso.status === "Concluído" ? "default" : "secondary"}
                className={curso.status === "Concluído" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"}
              >
                {curso.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {curso.duracao}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso</span>
                  <span>{curso.progresso}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${curso.progresso}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground">Próxima aula:</p>
                <p className="text-sm font-medium">{curso.proximaAula}</p>
              </div>

              <Button 
                className="w-full" 
                variant={curso.status === "Concluído" ? "outline" : "default"}
              >
                {curso.status === "Concluído" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Ver Certificado
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Continuar Curso
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}