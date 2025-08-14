import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Send, Phone, Mail, MessageSquare } from "lucide-react";

const faq = [
  {
    pergunta: "Como fazer minha primeira matrícula?",
    resposta: "Para fazer sua primeira matrícula, acesse o menu 'Pré-Matrículas', preencha os dados do aluno e depois confirme a matrícula na seção 'Matrículas'."
  },
  {
    pergunta: "Como confirmar um pagamento?",
    resposta: "Vá até o menu 'Pagamentos', insira o CPF do aluno e confirme o pagamento após verificar os dados da matrícula."
  },
  {
    pergunta: "Como adicionar uma nova cidade?",
    resposta: "No menu 'Cidades', você pode adicionar novas cidades de atuação preenchendo o nome da cidade no formato 'Cidade/Estado'."
  }
];

export default function Suporte() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Suporte</h1>
        <p className="text-muted-foreground">Estamos aqui para ajudar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulário de contato */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Entre em Contato
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Envie sua dúvida ou sugestão que responderemos em breve.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome-suporte">Nome</Label>
                <Input id="nome-suporte" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-suporte">Email</Label>
                <Input id="email-suporte" type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o assunto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="duvida">Dúvida</SelectItem>
                  <SelectItem value="problema">Problema técnico</SelectItem>
                  <SelectItem value="sugestao">Sugestão</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea 
                id="mensagem"
                placeholder="Descreva sua dúvida ou problema..."
                rows={4}
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary-hover">
              <Send className="mr-2 h-4 w-4" />
              Enviar Mensagem
            </Button>
          </CardContent>
        </Card>

        {/* Informações de contato e FAQ */}
        <div className="space-y-6">
          {/* Contatos diretos */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Contatos Diretos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">suporte@mvb.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Perguntas Frequentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.pergunta}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.resposta}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}