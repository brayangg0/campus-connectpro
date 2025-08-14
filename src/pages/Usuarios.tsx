import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, Search, UserPlus, Mail } from "lucide-react";

// Mock data for users
const usuarios = [
  { 
    id: 1, 
    nome: "João Silva", 
    email: "joao@exemplo.com", 
    perfil: "Administrador", 
    criadoEm: "10/01/2024" 
  },
  { 
    id: 2, 
    nome: "Maria Santos", 
    email: "maria@exemplo.com", 
    perfil: "Franqueado", 
    criadoEm: "15/01/2024" 
  },
];

export default function Usuarios() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Gerenciar Usuários</h1>
        <p className="text-muted-foreground">Adicione, edite e remova usuários</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário para adicionar usuário */}
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Adicionar Novo Usuário
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Crie um novo perfil de acesso ao sistema na cidade de São Luís/MA.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome-usuario">Nome</Label>
                <Input id="nome-usuario" placeholder="Nome completo" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-usuario">Email</Label>
                <Input 
                  id="email-usuario" 
                  type="email" 
                  placeholder="email@secursosma.br" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senha-usuario">Senha</Label>
                <Input 
                  id="senha-usuario" 
                  type="password" 
                  placeholder="••••••••" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade-usuario">Cidade</Label>
                <Select defaultValue="sao-luis">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sao-luis">Selecione uma cidade</SelectItem>
                    <SelectItem value="sao-luis-ma">São Luís/MA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="perfil-usuario">Perfil de Acesso</Label>
                <Select defaultValue="franqueado">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="franqueado">Franqueado</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="operador">Operador</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-hover">
                <Plus className="mr-2 h-4 w-4" />
                Criar Usuário
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Lista de usuários */}
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Usuários Cadastrados
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Lista de todos os usuários com acesso ao sistema na cidade de São Luís/MA.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar usuários..."
                    className="pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {usuarios.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nenhum usuário cadastrado.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Perfil</TableHead>
                        <TableHead>Criado em</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {usuarios.map((usuario) => (
                        <TableRow key={usuario.id}>
                          <TableCell className="font-medium">{usuario.nome}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {usuario.email}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              variant="outline"
                              className={
                                usuario.perfil === "Administrador" 
                                  ? "border-destructive text-destructive" 
                                  : "border-primary text-primary"
                              }
                            >
                              {usuario.perfil}
                            </Badge>
                          </TableCell>
                          <TableCell>{usuario.criadoEm}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Editar</Button>
                              <Button size="sm" variant="outline">Excluir</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}