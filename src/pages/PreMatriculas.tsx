import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Plus, Search, FileText, MapPin, Phone } from "lucide-react";

// Mock data for pre-registrations
const preMatriculas = [
  { id: "206682", nome: "Fabrício Andrei de Souza Santiago", status: "Pré-matrícula", local: "São Luís/MA", cpf: "095.642.962-53", whatsapp: "(91) 9859-6..." },
  { id: "206678", nome: "Luan Coutinho Gemaque", status: "Pré-matrícula", local: "São Luís/MA", cpf: "016.941.802-20", whatsapp: "(91) 9525-4..." },
  { id: "206677", nome: "Matheus Cavalcante de Souza", status: "Pré-matrícula", local: "São Luís/MA", cpf: "702.249.062-19", whatsapp: "(91) 9858-6..." },
  { id: "206671", nome: "Rivanildo Santos Borges", status: "Pré-matrícula", local: "São Luís/MA", cpf: "711.604.542-21", whatsapp: "(91) 9848-5..." },
  { id: "206659", nome: "Ruan da Silva Marques", status: "Pré-matrícula", local: "São Luís/MA", cpf: "040.525.852-67", whatsapp: "(91) 9844-5..." },
];

export default function PreMatriculas() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPreMatriculas = preMatriculas.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cpf.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Pré-Matrículas</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário para criar pré-matrícula */}
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Criar Pré-Matrícula
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome:</Label>
                <Input id="nome" placeholder="Nome completo" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF:</Label>
                <Input id="cpf" placeholder="000.000.000-00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">Whatsapp:</Label>
                <Input id="whatsapp" placeholder="(00) 00000-0000" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="confirmacao" />
                <Label htmlFor="confirmacao" className="text-sm">
                  Enviar confirmação de pré matrícula via whatsapp?
                </Label>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-hover">
                <Plus className="mr-2 h-4 w-4" />
                Salvar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lista de pré-matrículas */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Pré-Matrículas Cadastradas
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">CSV</Button>
                  <Button variant="outline" size="sm">Excel</Button>
                  <Button variant="outline" size="sm">PDF</Button>
                </div>
              </CardTitle>
              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pesquisar por nome ou CPF..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select defaultValue="25">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25">25 registros</SelectItem>
                    <SelectItem value="50">50 registros</SelectItem>
                    <SelectItem value="100">100 registros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>#ID</TableHead>
                      <TableHead>Nome</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Local</TableHead>
                      <TableHead>CPF</TableHead>
                      <TableHead>WhatsApp</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPreMatriculas.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.nome}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.local}
                          </div>
                        </TableCell>
                        <TableCell>{item.cpf}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {item.whatsapp}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-primary hover:bg-primary-hover">
                            Matricular
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}