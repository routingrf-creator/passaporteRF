"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, MapPin, Calendar, Users, Mail, Phone } from "lucide-react";
import { sendEmail } from "@/lib/emailjs";
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
import { useT } from "@/contexts/language-context";

const roteiroSchema = z.object({
  destino: z.string().min(1),
  datas: z.string().min(1),
  orcamento: z.string().min(1),
  estilo: z.string().min(1),
  pessoas: z.number().min(1),
  preferencias: z.string().optional(),
  email: z.string().email(),
  whatsapp: z.string().min(8),
});

type RoteiroFormData = z.infer<typeof roteiroSchema>;

export function RoteiroForm() {
  const [submitted, setSubmitted] = useState<RoteiroFormData | null>(null);
  const t = useT();
  const tf = t.roteiroForm;

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

  async function onSubmit(data: RoteiroFormData) {
    try {
      const orcamentoLabel =
        tf.orcamentoLabels[data.orcamento as keyof typeof tf.orcamentoLabels] ??
        data.orcamento;
      const estiloLabel =
        tf.estiloLabels[data.estilo as keyof typeof tf.estiloLabels] ??
        data.estilo;

      await sendEmail({
        subject: `Novo pedido de roteiro - ${data.destino}`,
        from_email: data.email,
        body: [
          `Destino: ${data.destino}`,
          `Datas/Duracao: ${data.datas}`,
          `Orcamento: ${orcamentoLabel}`,
          `Estilo: ${estiloLabel}`,
          `Pessoas: ${data.pessoas}`,
          ``,
          `Preferencias:`,
          data.preferencias || "(nenhuma)",
          ``,
          `Contato:`,
          `Email: ${data.email}`,
          `WhatsApp: ${data.whatsapp}`,
        ].join("\n"),
      });
      setSubmitted(data);
      toast.success(tf.toast);
    } catch {
      toast.error("Erro ao enviar pedido. Tente novamente.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <Card className="border-passport-blue/20">
        <CardHeader>
          <CardTitle className="text-xl text-passport-dark">
            {tf.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="destino">
                <MapPin className="size-4 text-passport-coral" />
                {tf.destino}
              </Label>
              <Input
                id="destino"
                placeholder={tf.destinoPlaceholder}
                {...register("destino")}
              />
              {errors.destino && (
                <p className="text-sm text-destructive">{errors.destino.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="datas">
                <Calendar className="size-4 text-passport-coral" />
                {tf.datas}
              </Label>
              <Input
                id="datas"
                placeholder={tf.datasPlaceholder}
                {...register("datas")}
              />
              {errors.datas && (
                <p className="text-sm text-destructive">{errors.datas.message}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>{tf.orcamento}</Label>
                <Select onValueChange={(val) => setValue("orcamento", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={tf.selecione} />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(tf.orcamentoLabels).map(([value, label]) => (
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
                <Label>{tf.estilo}</Label>
                <Select onValueChange={(val) => setValue("estilo", val)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={tf.selecione} />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(tf.estiloLabels).map(([value, label]) => (
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
                {tf.pessoas}
              </Label>
              <Input
                id="pessoas"
                type="number"
                min={1}
                placeholder={tf.pessoasPlaceholder}
                {...register("pessoas", { valueAsNumber: true })}
              />
              {errors.pessoas && (
                <p className="text-sm text-destructive">{errors.pessoas.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferencias">{tf.preferencias}</Label>
              <Textarea
                id="preferencias"
                placeholder={tf.preferenciasPlaceholder}
                rows={3}
                {...register("preferencias")}
              />
            </div>

            <Separator />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">
                  <Mail className="size-4 text-passport-coral" />
                  {tf.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={tf.emailPlaceholder}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">
                  <Phone className="size-4 text-passport-coral" />
                  {tf.whatsapp}
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder={tf.whatsappPlaceholder}
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
              {tf.submit}
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
              {submitted ? tf.summaryTitle : tf.previewTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="space-y-4">
                <SummaryRow label={tf.destino} value={submitted.destino} />
                <SummaryRow label={tf.datas} value={submitted.datas} />
                <SummaryRow
                  label={tf.orcamento}
                  value={tf.orcamentoLabels[submitted.orcamento as keyof typeof tf.orcamentoLabels] ?? submitted.orcamento}
                />
                <SummaryRow
                  label={tf.estilo}
                  value={tf.estiloLabels[submitted.estilo as keyof typeof tf.estiloLabels] ?? submitted.estilo}
                />
                <SummaryRow
                  label={tf.pessoas}
                  value={String(submitted.pessoas)}
                />
                {submitted.preferencias && (
                  <SummaryRow label={tf.preferencias} value={submitted.preferencias} />
                )}
                <Separator />
                <SummaryRow label={tf.email} value={submitted.email} />
                <SummaryRow label={tf.whatsapp} value={submitted.whatsapp} />
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                  {tf.pedidoEnviado}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {watchedValues.destino ? (
                  <>
                    <SummaryRow
                      label={tf.destino}
                      value={watchedValues.destino || "-"}
                    />
                    <SummaryRow
                      label={tf.datas}
                      value={watchedValues.datas || "-"}
                    />
                    <SummaryRow
                      label={tf.orcamento}
                      value={
                        tf.orcamentoLabels[watchedValues.orcamento as keyof typeof tf.orcamentoLabels] ||
                        watchedValues.orcamento ||
                        "-"
                      }
                    />
                    <SummaryRow
                      label={tf.estilo}
                      value={
                        tf.estiloLabels[watchedValues.estilo as keyof typeof tf.estiloLabels] ||
                        watchedValues.estilo ||
                        "-"
                      }
                    />
                    <SummaryRow
                      label={tf.pessoas}
                      value={
                        watchedValues.pessoas
                          ? String(watchedValues.pessoas)
                          : "-"
                      }
                    />
                  </>
                ) : (
                  <p className="text-center text-sm text-muted-foreground">
                    {tf.previewEmpty}
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
                  {tf.dica}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {tf.dicaText}
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
