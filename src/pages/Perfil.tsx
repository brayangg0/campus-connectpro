import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, Calendar, MapPin, Save } from "lucide-react";

export default function Perfil() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
        <p className="text-muted-foreground">Edite seus dados</p>
      </div>

      <Tabs defaultValue="dados-gerais" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dados-gerais">Dados Gerais</TabsTrigger>
          <TabsTrigger value="alterar-senha">Alterar Senha</TabsTrigger>
        </TabsList>

        <TabsContent value="dados-gerais" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Dados do Perfil */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome:</Label>
                      <Input id="nome" defaultValue="Brayan Lucena" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email:</Label>
                      <Input id="email" type="email" defaultValue="lucena.brayan@outlook.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF:</Label>
                      <Input id="cpf" placeholder="Informe seu CPF" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nascimento">Data de Nascimento:</Label>
                      <Input id="nascimento" type="date" />
                    </div>
                  </div>

                  {/* Contato */}
                  <div className="pt-4 border-t border-border">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Contato
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone fixo:</Label>
                        <Input id="telefone" placeholder="Informe o Telefone" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="celular">Celular:</Label>
                        <Input id="celular" placeholder="Informe o Celular" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button className="bg-primary hover:bg-primary-hover">
                      <Save className="mr-2 h-4 w-4" />
                      Salvar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Avatar */}
            <div className="lg:col-span-1">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="/placeholder-user.jpg" alt="Brayan" />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">BR</AvatarFallback>
                  </Avatar>
                  <div className="text-center text-sm text-muted-foreground">
                    160 x 160
                  </div>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Selecionar Imagem
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="alterar-senha">
          <Card className="shadow-card max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Alterar Senha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual:</Label>
                <Input id="senha-atual" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha:</Label>
                <Input id="nova-senha" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha:</Label>
                <Input id="confirmar-senha" type="password" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary-hover">
                <Save className="mr-2 h-4 w-4" />
                Alterar Senha
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}