import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Search, DollarSign } from "lucide-react";

export default function Pagamentos() {
  const [cpfBusca, setCpfBusca] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Pagamentos</h1>
        <p className="text-muted-foreground">Confirme a matrícula do aluno</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Buscar Matrícula</CardTitle>
            <p className="text-muted-foreground">
              Insira o CPF do aluno para ver os detalhes da matrícula.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="cpf-aluno">CPF do Aluno</Label>
              <div className="relative">
                <Input
                  id="cpf-aluno"
                  placeholder="000.000.000-00"
                  value={cpfBusca}
                  onChange={(e) => setCpfBusca(e.target.value)}
                  className="pr-12"
                />
              </div>
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-hover"
              size="lg"
            >
              <Search className="mr-2 h-5 w-5" />
              Confirmar
            </Button>

            {/* Resultado da busca (mockado) */}
            {cpfBusca && cpfBusca.length > 10 && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">Matrícula Encontrada</h3>
                    <p className="text-muted-foreground">Ana Silva Santos</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Curso:</p>
                      <p className="font-medium">Técnico em Informática</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Valor:</p>
                      <p className="font-medium text-primary">R$ 1.200,00</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status:</p>
                      <p className="font-medium text-success">Matrícula Ativa</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pagamento:</p>
                      <p className="font-medium text-warning">Pendente</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-success hover:bg-success/90 text-success-foreground"
                    size="lg"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    Confirmar Pagamento
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}