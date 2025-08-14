import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, TrendingUp, DollarSign, Receipt, FileText, Users } from "lucide-react";

// Mock data for financial summary
const resumoFinanceiro = {
  receitaTotal: "R$ 15.600,00",
  gastosTotal: "R$ 3.200,00",
  saldoFinal: "R$ 12.400,00"
};

const detalhesReceita = [
  {
    aluno: "Ana Silva Santos",
    curso: "Técnico em Informática", 
    dataPagamento: "15/01/2024",
    formaPagamento: "PIX",
    valor: "R$ 1.200,00"
  },
  {
    aluno: "Carlos Eduardo Lima", 
    curso: "Técnico em Enfermagem",
    dataPagamento: "20/01/2024", 
    formaPagamento: "Cartão de Crédito",
    valor: "R$ 1.500,00"
  },
  {
    aluno: "Maria José Costa",
    curso: "Técnico em Administração",
    dataPagamento: "25/01/2024",
    formaPagamento: "Boleto",
    valor: "R$ 1.300,00"
  }
];

export default function ResumoCaixa() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Resumo de Caixa</h1>
        <p className="text-muted-foreground">Gerencie suas finanças</p>
      </div>

      {/* Cards de resumo financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold text-success">{resumoFinanceiro.receitaTotal}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <Receipt className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gastos Totais</p>
                <p className="text-2xl font-bold text-destructive">{resumoFinanceiro.gastosTotal}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Saldo Final</p>
                <p className="text-2xl font-bold text-primary">{resumoFinanceiro.saldoFinal}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Abas de relatórios */}
      <Tabs defaultValue="receita" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="receita" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Receita
          </TabsTrigger>
          <TabsTrigger value="gastos" className="flex items-center gap-2">
            <Receipt className="h-4 w-4" />
            Gastos
          </TabsTrigger>
          <TabsTrigger value="repasse" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            % Repasse
          </TabsTrigger>
        </TabsList>

        <TabsContent value="receita" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Detalhes da Receita
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">PDF</Button>
                  <Button variant="outline" size="sm">Excel</Button>
                </div>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Lista de todos os pagamentos de matrículas confirmadas.
              </p>
            </CardHeader>
            <CardContent>
              {detalhesReceita.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nenhuma receita registrada.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Aluno</TableHead>
                        <TableHead>Curso</TableHead>
                        <TableHead>Data Pagamento</TableHead>
                        <TableHead>Forma de Pagamento</TableHead>
                        <TableHead>Valor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {detalhesReceita.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.aluno}</TableCell>
                          <TableCell>{item.curso}</TableCell>
                          <TableCell>{item.dataPagamento}</TableCell>
                          <TableCell>{item.formaPagamento}</TableCell>
                          <TableCell className="font-semibold text-success">{item.valor}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gastos">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Detalhes dos Gastos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Receipt className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Nenhum gasto registrado no período.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="repasse">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Percentual de Repasse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Receita Total</p>
                    <p className="text-xl font-bold">{resumoFinanceiro.receitaTotal}</p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Repasse (20%)</p>
                    <p className="text-xl font-bold text-primary">R$ 3.120,00</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <PieChart className="h-16 w-16 text-primary" />
                    </div>
                    <p className="font-semibold">20% de Repasse</p>
                    <p className="text-sm text-muted-foreground">Sobre receita total</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}