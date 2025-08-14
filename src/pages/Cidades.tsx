import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Plus, Trash2 } from "lucide-react";

// Mock data for cities
const cidades = [
  { id: 1, nome: "São Luís/MA" },
  { id: 2, nome: "Imperatriz/MA" },
  { id: 3, nome: "Caxias/MA" },
];

export default function Cidades() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Cidades</h1>
        <p className="text-muted-foreground">Gerencie as cidades de atuação</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário para adicionar cidade */}
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Adicionar Nova Cidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome-cidade">Nome da Cidade</Label>
                <Input 
                  id="nome-cidade" 
                  placeholder="Ex. Belém/PA" 
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary-hover">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Cidade
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lista de cidades */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Cidades Cadastradas
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cidades.length === 0 ? (
                <div className="text-center py-12">
                  <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Carregando cidades...</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cidades.map((cidade) => (
                      <TableRow key={cidade.id}>
                        <TableCell className="font-medium">{cidade.nome}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}