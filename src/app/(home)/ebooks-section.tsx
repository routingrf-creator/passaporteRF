"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Star, ArrowRight, Send, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/contexts/language-context";

const ebookColors = [
  {
    color: "from-passport-coral/20 to-passport-yellow/10",
    iconBg: "bg-passport-coral/10",
    iconColor: "text-passport-coral",
  },
  {
    color: "from-passport-blue/20 to-passport-dark/10",
    iconBg: "bg-passport-blue/10",
    iconColor: "text-passport-blue",
  },
  {
    color: "from-passport-yellow/20 to-passport-cream/30",
    iconBg: "bg-passport-yellow/10",
    iconColor: "text-passport-yellow",
  },
];

const ebookIds = ["europa-casais", "japao-guia", "viaje-barato"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function EbookDialog({
  ebook,
  id,
  t,
}: {
  ebook: { title: string; description: string; pages: string; badge: string };
  id: string;
  t: ReturnType<typeof useT>;
}) {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const te = t.ebooks;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email") as string;
    const newsletter = data.get("newsletter") === "on";

    const subject = encodeURIComponent(`E-book: ${ebook.title}`);
    const body = encodeURIComponent(
      `Oi Rafa & Fe!\n\nGostaria de receber o e-book "${ebook.title}".\n\nMeu email: ${email}\n${newsletter ? "Quero receber novidades e promocoes do PassaporteRF!" : ""}`
    );

    window.location.href = `mailto:passaporterf@gmail.com?subject=${subject}&body=${body}`;

    setSending(false);
    toast.success(te.toast);
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="mt-2 w-full border-passport-blue/20 text-passport-blue transition-all duration-300 hover:bg-passport-blue hover:text-white hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="size-4" />
          {te.baixar}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="size-5 text-passport-blue" />
            {ebook.title}
          </DialogTitle>
          <DialogDescription>{te.dialogDesc}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`ebook-email-${id}`} className="flex items-center gap-1.5">
              <Mail className="size-3.5 text-passport-coral" />
              {te.emailLabel}
            </Label>
            <Input
              id={`ebook-email-${id}`}
              name="email"
              type="email"
              placeholder="voce@email.com"
              required
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer rounded-lg border border-passport-blue/10 bg-passport-blue/5 p-3 transition-colors hover:bg-passport-blue/10">
            <input
              type="checkbox"
              name="newsletter"
              defaultChecked
              className="mt-0.5 size-4 rounded border-passport-blue/30 accent-passport-blue"
            />
            <span className="text-sm leading-snug text-passport-ink/80">
              {te.newsletter}
            </span>
          </label>

          <DialogFooter>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-passport-coral text-white transition-all duration-300 hover:bg-passport-coral/90 hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
            >
              <Send className="size-4" />
              {te.quero}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function EbooksSection() {
  const t = useT();
  const te = t.ebooks;

  return (
    <section className="bg-passport-cream/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={te.title}
          subtitle={te.subtitle}
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {te.items.map((ebook, index) => {
            const style = ebookColors[index];
            return (
              <motion.div key={index} variants={cardVariants}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:border-white/60 hover:bg-white/65 hover:shadow-[0_16px_48px_rgba(30,111,175,0.12)]">
                  <div
                    className={`relative flex h-48 items-center justify-center bg-linear-to-br ${style.color}`}
                  >
                    <motion.div
                      className="flex size-20 items-center justify-center rounded-2xl border border-white/50 bg-white/70 shadow-lg backdrop-blur-md"
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <BookOpen className={`size-10 ${style.iconColor}`} />
                    </motion.div>
                    <Badge className="absolute right-4 top-4 border border-white/40 bg-white/70 text-passport-dark backdrop-blur-sm">
                      {ebook.badge}
                    </Badge>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-bold text-passport-dark">
                      {ebook.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {ebook.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <BookOpen className="size-3.5" />
                        {ebook.pages}
                      </span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-3 fill-passport-yellow text-passport-yellow"
                          />
                        ))}
                      </div>
                    </div>
                    <EbookDialog ebook={ebook} id={ebookIds[index]} t={t} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
