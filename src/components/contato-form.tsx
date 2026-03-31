"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
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
import { useT } from "@/contexts/language-context";

const contatoSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  assunto: z.string().min(1),
  mensagem: z.string().min(10),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

export function ContatoForm() {
  const t = useT();
  const tc = t.contatoForm;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    },
  });

  function onSubmit(_data: ContatoFormData) {
    toast.success(tc.toast);
    reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-passport-dark">
          {tc.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="ct-nome">{tc.nome}</Label>
            <Input
              id="ct-nome"
              placeholder={tc.nomePlaceholder}
              {...register("nome")}
            />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ct-email">{tc.email}</Label>
            <Input
              id="ct-email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>{tc.assunto}</Label>
            <Select onValueChange={(val) => setValue("assunto", val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={tc.assuntoPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {tc.assuntos.map((a) => (
                  <SelectItem key={a.value} value={a.value}>
                    {a.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.assunto && (
              <p className="text-sm text-destructive">
                {errors.assunto.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ct-mensagem">{tc.mensagem}</Label>
            <Textarea
              id="ct-mensagem"
              placeholder={tc.mensagemPlaceholder}
              rows={5}
              {...register("mensagem")}
            />
            {errors.mensagem && (
              <p className="text-sm text-destructive">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-passport-coral hover:bg-passport-coral/90 text-white"
          >
            <Send className="size-4" />
            {tc.submit}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
