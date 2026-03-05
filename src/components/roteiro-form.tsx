"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, MapPin, Calendar, Users, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const roteiroSchema = z.object({
  destino: z.string().min(1, "Informe o destino"),
  datas: z.string().min(1, "Informe as datas ou duracao"),
  orcamento: z.string().min(1, "Selecione o orcamento"),
  estilo: z.string().min(1, "Selecione o estilo de viagem"),
  pessoas: z.number().min(1, "Minimo de 1 pessoa"),
  preferencias: z.string().optional(),
  email: z.string().email("Email invalido"),
  whatsapp: z.string().min(8, "WhatsApp invalido"),
});

type RoteiroFormData = z.infer<typeof roteiroSchema>;

const orcamentoLabels: Record<string, string> = {
  economico: "Economico",
  moderado: "Moderado",
  confortavel: "Confortavel",
  luxo: "Luxo",
};

const estiloLabels: Record<string, string> = {
  romantico: "Romantico",
  aventura: "Aventura",
  cultural: "Cultural",
  relaxante: "Relaxante",
  gastronomico: "Gastronomico",
  misto: "Misto",
};

export function RoteiroForm() {
  const [submitted, setSubmitted] = useState<RoteiroFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RoteiroFormData>({
    resolver: zodResolver(roteiroSchema),
    defaultValues: {
      destino: "",
      datas: "",
      orcamento: "",
      estilo: "",
      pessoas: undefined as unknown as number,
      preferencias: "",
      email: "",
      whatsapp: "",
    },
  });

  const watchedValues = watch();

  function onSubmit(data: RoteiroFormData) {
    setSubmitted(data);
    toast.success("Pedido enviado com sucesso! Entraremos em contato em breve.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="border-passport-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-passport-dark">
            Preencha seus dados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="destino">
                <MapPin className="size-4 text-passport-coral" />
                Destino
              </Label>
              <Input
                id="destino"
                placeholder="Ex: Paris, Toscana, Japao..."
                {...register("destino")}
              />
              {errors.destino && (
                <p className="text-sm text-destructive">{errors.destino.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="datas">
                <Calendar className="size-4 text-passport-coral" />
                Datas / Duracao
              </Label>
              <Input
                id="datas"
                placeholder="Ex: 15 a 25 de julho ou 10 dias"
                {...register("datas")}
              />
              {errors.datas && (
                <p className="text-sm text-destructive">{errors.datas.message}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Orcamento</Label>
                <Select onValueChange={(val) => setValue("orcamento", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(orcamentoLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.orcamento && (
                  <p className="text-sm text-destructive">{errors.orcamento.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Estilo de viagem</Label>
                <Select onValueChange={(val) => setValue("estilo", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(estiloLabels).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.estilo && (
                  <p className="text-sm text-destructive">{errors.estilo.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pessoas">
                <Users className="size-4 text-passport-coral" />
                Numero de pessoas
              </Label>
              <Input
                id="pessoas"
                type="number"
                min={1}
                placeholder="Ex: 2"
                {...register("pessoas", { valueAsNumber: true })}
              />
              {errors.pessoas && (
                <p className="text-sm text-destructive">{errors.pessoas.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferencias">Preferencias (opcional)</Label>
              <Textarea
                id="preferencias"
                placeholder="Conte o que voce mais gosta de fazer em viagem..."
                rows={3}
                {...register("preferencias")}
              />
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="size-4 text-passport-coral" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">
                  <Phone className="size-4 text-passport-coral" />
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  {...register("whatsapp")}
                />
                {errors.whatsapp && (
                  <p className="text-sm text-destructive">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-passport-coral hover:bg-passport-coral/90 text-white"
            >
              <Send className="size-4" />
              Solicitar roteiro
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card
          className={
            submitted
              ? "border-passport-coral/30 bg-passport-coral/5"
              : "border-dashed border-muted-foreground/30"
          }
        >
          <CardHeader>
            <CardTitle className="text-xl text-passport-dark">
              {submitted ? "Resumo do pedido" : "Pre-visualizacao"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="space-y-4">
                <SummaryRow label="Destino" value={submitted.destino} />
                <SummaryRow label="Datas" value={submitted.datas} />
                <SummaryRow
                  label="Orcamento"
                  value={orcamentoLabels[submitted.orcamento] ?? submitted.orcamento}
                />
                <SummaryRow
                  label="Estilo"
                  value={estiloLabels[submitted.estilo] ?? submitted.estilo}
                />
                <SummaryRow
                  label="Pessoas"
                  value={String(submitted.pessoas)}
                />
                {submitted.preferencias && (
                  <SummaryRow label="Preferencias" value={submitted.preferencias} />
                )}
                <Separator />
                <SummaryRow label="Email" value={submitted.email} />
                <SummaryRow label="WhatsApp" value={submitted.whatsapp} />
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                  Pedido enviado! Entraremos em contato em breve.
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {watchedValues.destino ? (
                  <>
                    <SummaryRow
                      label="Destino"
                      value={watchedValues.destino || "-"}
                    />
                    <SummaryRow
                      label="Datas"
                      value={watchedValues.datas || "-"}
                    />
                    <SummaryRow
                      label="Orcamento"
                      value={
                        orcamentoLabels[watchedValues.orcamento] ||
                        watchedValues.orcamento ||
                        "-"
                      }
                    />
                    <SummaryRow
                      label="Estilo"
                      value={
                        estiloLabels[watchedValues.estilo] ||
                        watchedValues.estilo ||
                        "-"
                      }
                    />
                    <SummaryRow
                      label="Pessoas"
                      value={
                        watchedValues.pessoas
                          ? String(watchedValues.pessoas)
                          : "-"
                      }
                    />
                  </>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    Preencha o formulario para ver a pre-visualizacao do seu
                    pedido aqui.
                  </p>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {!submitted && (
          <Card className="border-passport-yellow/30 bg-passport-yellow/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Badge className="shrink-0 bg-passport-yellow text-passport-dark">
                  Dica
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Quanto mais detalhes voce preencher, mais personalizado sera o
                  seu roteiro. Nao economize nas preferencias!
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-right text-sm font-semibold text-passport-dark">
        {value}
      </span>
    </div>
  );
}
