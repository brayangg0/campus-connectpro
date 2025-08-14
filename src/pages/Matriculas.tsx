import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Search, Users, CheckCircle, Clock } from "lucide-react";

// Mock data for enrollments
const matriculas = [
  { 
    id: "MAT001", 
    nome: "Ana Silva Santos", 
    curso: "Técnico em Informática", 
    status: "Ativa", 
    dataMatricula: "15/01/2024", 
    valor: "R$ 1.200,00",
    pagamento: "Em dia" 
  },
  { 
    id: "MAT002", 
    nome: "Carlos Eduardo Lima", 
    curso: "Técnico em Enfermagem", 
    status: "Ativa", 
    dataMatricula: "20/01/2024", 
    valor: "R$ 1.500,00",
    pagamento: "Pendente" 
  },
  { 
    id: "MAT003", 
    nome: "Maria José Costa", 
    curso: "Técnico em Administração", 
    status: "Ativa", 
    dataMatricula: "25/01/2024", 
    valor: "R$ 1.300,00",
    pagamento: "Em dia" 
  },
];

export default function Matriculas() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Matrículas</h1>
        <div className="flex items-center gap-2">
          <Button className="bg-primary hover:bg-primary-hover">
            <GraduationCap className="mr-2 h-4 w-4" />
            Nova Matrícula
          </Button>
        </div>
      </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Matrículas Ativas</p>
                <p className="text-2xl font-bold text-success">127</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold text-warning">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Alunos</p>
                <p className="text-2xl font-bold text-primary">135</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Canceladas</p>
                <p className="text-2xl font-bold text-destructive">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabela de matrículas */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Matrículas Cadastradas
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Exportar</Button>
            </div>
          </CardTitle>
          <div className="flex items-center gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome, curso ou ID da matrícula..."
                className="pl-9"
              />
            </div>
            <Select defaultValue="todas">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as matrículas</SelectItem>
                <SelectItem value="ativas">Apenas ativas</SelectItem>
                <SelectItem value="pendentes">Apenas pendentes</SelectItem>
                <SelectItem value="canceladas">Canceladas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Matrícula</TableHead>
                  <TableHead>Nome do Aluno</TableHead>
                  <TableHead>Curso</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data Matrícula</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Pagamento</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matriculas.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.nome}</TableCell>
                    <TableCell>{item.curso}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={item.status === "Ativa" ? "default" : "secondary"}
                        className={item.status === "Ativa" ? "bg-success text-success-foreground" : ""}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.dataMatricula}</TableCell>
                    <TableCell className="font-semibold">{item.valor}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={item.pagamento === "Em dia" ? "default" : "destructive"}
                        className={item.pagamento === "Em dia" ? "bg-success text-success-foreground" : ""}
                      >
                        {item.pagamento}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">Ver Detalhes</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}