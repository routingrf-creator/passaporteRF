import Link from "next/link";
import {
  Plane,
  Instagram,
  Youtube,
  Music2,
  Mail,
  MapPin,
} from "lucide-react";

const siteLinks = [
  { label: "Destinos", href: "/destinos" },
  { label: "Roteiros", href: "/roteiros" },
  { label: "Sobre", href: "/sobre" },
  { label: "Parcerias", href: "/parcerias" },
  { label: "Contato", href: "/contato" },
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/passaporterf", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@passaporterf", icon: Youtube },
  { label: "TikTok", href: "https://tiktok.com/@passaporterf", icon: Music2 },
] as const;

export function Footer() {
  return (
    <footer className="bg-passport-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="PassaporteRF - Pagina inicial"
            >
              <Plane className="size-6 text-passport-coral" />
              <span className="text-xl font-bold tracking-tight">
                PassaporteRF
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Seu guia de viagens para explorar o mundo com roteiros
              personalizados e dicas de quem realmente viaja.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              Links do site
            </h3>
            <ul className="flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              Redes Sociais
            </h3>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                    aria-label={`Siga no ${link.label}`}
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              Contato
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:passaporterf@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="size-4" />
                  passaporterf@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="size-4 shrink-0" />
                Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} PassaporteRF. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
