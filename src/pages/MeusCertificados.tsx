import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Eye, Calendar } from "lucide-react";

const certificados = [
  { 
    id: 1, 
    curso: "Técnico em Enfermagem", 
    dataEmissao: "15/12/2023",
    validade: "15/12/2026",
    status: "Válido",
    codigo: "CERT-2023-001"
  },
  { 
    id: 2, 
    curso: "Primeiros Socorros", 
    dataEmissao: "10/11/2023",
    validade: "10/11/2025",
    status: "Válido",
    codigo: "CERT-2023-002"
  }
];

export default function MeusCertificados() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Meus Certificados</h1>
        <p className="text-muted-foreground">Seus certificados conquistados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificados.map((cert) => (
          <Card key={cert.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{cert.curso}</CardTitle>
                </div>
                <Badge variant="default" className="bg-success text-success-foreground">
                  {cert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Data de Emissão:</p>
                  <p className="font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {cert.dataEmissao}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Válido até:</p>
                  <p className="font-medium flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {cert.validade}
                  </p>
                </div>
              </div>
              
              <div>
                <p className="text-muted-foreground text-sm">Código:</p>
                <p className="font-mono text-sm bg-muted p-2 rounded">{cert.codigo}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" />
                  Visualizar
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary-hover">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}