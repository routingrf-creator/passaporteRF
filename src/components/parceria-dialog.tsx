"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const midiaKitSchema = z.object({
  nome: z.string().min(1, "Informe seu nome"),
  email: z.string().email("Email invalido"),
  empresa: z.string().optional(),
  mensagem: z.string().min(1, "Escreva uma mensagem"),
});

type MidiaKitFormData = z.infer<typeof midiaKitSchema>;

export function ParceriaDialog() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<MidiaKitFormData>({
    resolver: zodResolver(midiaKitSchema),
    defaultValues: {
      nome: "",
      email: "",
      empresa: "",
      mensagem: "",
    },
  });

  function onSubmit(data: MidiaKitFormData) {
    toast.success("Solicitacao enviada com sucesso! Entraremos em contato em breve.");
    reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-passport-coral hover:bg-passport-coral/90 text-white"
        >
          <Mail className="size-4" />
          Solicitar midia kit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Solicitar midia kit</DialogTitle>
          <DialogDescription>
            Preencha seus dados e entraremos em contato.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
            <span className="font-medium">Para:</span> passaporterf@gmail.com
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-nome">Nome</Label>
            <Input id="mk-nome" placeholder="Seu nome" {...register("nome")} />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-email">Email</Label>
            <Input
              id="mk-email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-empresa">Empresa (opcional)</Label>
            <Input
              id="mk-empresa"
              placeholder="Nome da empresa"
              {...register("empresa")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-mensagem">Mensagem</Label>
            <Textarea
              id="mk-mensagem"
              placeholder="Conte sobre a parceria que tem em mente..."
              rows={3}
              {...register("mensagem")}
            />
            {errors.mensagem && (
              <p className="text-sm text-destructive">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-passport-coral hover:bg-passport-coral/90 text-white sm:w-auto"
            >
              <Send className="size-4" />
              Enviar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
