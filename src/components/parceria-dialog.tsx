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
import { useT } from "@/contexts/language-context";

const midiaKitSchema = z.object({
  nome: z.string().min(1),
  email: z.string().email(),
  empresa: z.string().optional(),
  mensagem: z.string().min(1),
});

type MidiaKitFormData = z.infer<typeof midiaKitSchema>;

export function ParceriaDialog() {
  const t = useT();
  const tp = t.parceriaDialog;

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

  function onSubmit(_data: MidiaKitFormData) {
    toast.success(tp.toast);
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
          {tp.button}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{tp.title}</DialogTitle>
          <DialogDescription>{tp.desc}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
            <span className="font-medium">Para:</span> passaporterf@gmail.com
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-nome">{tp.nome}</Label>
            <Input id="mk-nome" placeholder={tp.nomePlaceholder} {...register("nome")} />
            {errors.nome && (
              <p className="text-sm text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-email">{tp.email}</Label>
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
            <Label htmlFor="mk-empresa">{tp.empresa}</Label>
            <Input
              id="mk-empresa"
              placeholder={tp.empresaPlaceholder}
              {...register("empresa")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mk-mensagem">{tp.mensagem}</Label>
            <Textarea
              id="mk-mensagem"
              placeholder={tp.mensagemPlaceholder}
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
              {tp.submit}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
