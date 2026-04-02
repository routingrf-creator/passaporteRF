"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Calendar, Users, Mail, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";
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
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/contexts/language-context";

export function ConsultoriaSection() {
  const [sending, setSending] = useState(false);
  const t = useT();
  const tc = t.consultoria;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const destino = data.get("destino") as string;
    const datas = data.get("datas") as string;
    const pessoas = data.get("pessoas") as string;
    const estilo = data.get("estilo") as string;
    const mensagem = data.get("mensagem") as string;
    const email = data.get("email") as string;
    const whatsapp = data.get("whatsapp") as string;

    try {
      await sendEmail({
        subject: `Nova consultoria de roteiro - ${destino}`,
        from_email: email,
        body: [
          `Destino: ${destino}`,
          `Datas/Duracao: ${datas}`,
          `Pessoas: ${pessoas}`,
          `Estilo: ${estilo}`,
          ``,
          `Observacoes:`,
          mensagem || "(nenhuma)",
          ``,
          `Contato:`,
          `Email: ${email}`,
          `WhatsApp: ${whatsapp}`,
        ].join("\n"),
      });
      toast.success(tc.toast);
      form.reset();
    } catch {
      toast.error("Erro ao enviar consultoria. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="py-20 sm:py-24" id="consultoria">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={tc.title}
          subtitle={tc.subtitle}
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl">
            <div className="bg-linear-to-r from-passport-blue to-passport-dark px-6 py-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{tc.formTitle}</h3>
                  <p className="text-sm text-white/70">{tc.formEmail}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="cs-destino" className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-passport-coral" />
                    {tc.destino}
                  </Label>
                  <Input
                    id="cs-destino"
                    name="destino"
                    placeholder={tc.destinoPlaceholder}
                    required
                    className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <Label htmlFor="cs-datas" className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-passport-coral" />
                    {tc.datas}
                  </Label>
                  <Input
                    id="cs-datas"
                    name="datas"
                    placeholder={tc.datasPlaceholder}
                    required
                    className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                  />
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="cs-pessoas" className="flex items-center gap-1.5">
                    <Users className="size-3.5 text-passport-coral" />
                    {tc.pessoas}
                  </Label>
                  <Input
                    id="cs-pessoas"
                    name="pessoas"
                    type="number"
                    min={1}
                    placeholder="2"
                    required
                    className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <Label className="flex items-center gap-1.5">{tc.estilo}</Label>
                  <Select name="estilo" required>
                    <SelectTrigger className="w-full border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80">
                      <SelectValue placeholder={tc.selecione} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="romantico">{tc.estilos.romantico}</SelectItem>
                      <SelectItem value="aventura">{tc.estilos.aventura}</SelectItem>
                      <SelectItem value="cultural">{tc.estilos.cultural}</SelectItem>
                      <SelectItem value="relaxante">{tc.estilos.relaxante}</SelectItem>
                      <SelectItem value="gastronomico">{tc.estilos.gastronomico}</SelectItem>
                      <SelectItem value="misto">{tc.estilos.misto}</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="cs-mensagem">{tc.observacoes}</Label>
                <Textarea
                  id="cs-mensagem"
                  name="mensagem"
                  placeholder={tc.observacoesPlaceholder}
                  rows={3}
                  className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                />
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <Label htmlFor="cs-email" className="flex items-center gap-1.5">
                    <Mail className="size-3.5 text-passport-coral" />
                    {tc.email}
                  </Label>
                  <Input
                    id="cs-email"
                    name="email"
                    type="email"
                    placeholder="voce@email.com"
                    required
                    className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="cs-whatsapp" className="flex items-center gap-1.5">
                    <Phone className="size-3.5 text-passport-coral" />
                    {tc.whatsapp}
                  </Label>
                  <Input
                    id="cs-whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    required
                    className="border-white/50 bg-white/60 backdrop-blur-sm transition-all duration-300 focus:bg-white/80"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending}
                  className="w-full bg-passport-coral text-white shadow-md transition-all duration-300 hover:bg-passport-coral/90 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="size-4" />
                  {tc.submit}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
