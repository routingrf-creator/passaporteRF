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

const contatoSchema = z.object({
  nome: z.string().min(1, "Informe seu nome"),
  email: z.string().email("Email invalido"),
  assunto: z.string().min(1, "Selecione o assunto"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContatoFormData = z.infer<typeof contatoSchema>;

const assuntos = [
  { value: "roteiro", label: "Duvida sobre roteiro" },
  { value: "parceria", label: "Parceria" },
  { value: "sugestao", label: "Sugestao" },
  { value: "outro", label: "Outro" },
];

export function ContatoForm() {
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

  function onSubmit(data: ContatoFormData) {
    toast.success("Mensagem enviada com sucesso! Responderemos em ate 48h.");
    reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-passport-dark">
          Envie sua mensagem
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="ct-nome">Nome</Label>
            <Input
              id="ct-nome"
              placeholder="Seu nome"
              {...register("nome")}
            />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="ct-email">Email</Label>
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
            <Label>Assunto</Label>
            <Select onValueChange={(val) => setValue("assunto", val)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                {assuntos.map((a) => (
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
            <Label htmlFor="ct-mensagem">Mensagem</Label>
            <Textarea
              id="ct-mensagem"
              placeholder="Como podemos ajudar?"
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
            Enviar mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
