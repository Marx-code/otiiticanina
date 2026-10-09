import { createFileRoute } from "@tanstack/react-router";
import { SalesPage } from "@/components/sales-page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Truque Caseiro do Iogurte — Cuidados e Otite Canina" },
    { name: "description", content: "Conheça o material informativo sobre iogurte e três ingredientes caseiros, cuidados com o ouvido do cão e opções de acesso Básico e Completo." },
    { property: "og:title", content: "Truque Caseiro do Iogurte — Otite Canina" },
    { property: "og:description", content: "Passo a passo digital, cuidados importantes e três materiais complementares para tutores. Compare os planos Básico e Completo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SalesPage,
});
