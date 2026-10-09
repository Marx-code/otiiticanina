import { useState, type ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, ImagePlus, ShieldCheck, Mail, Smartphone, ClipboardCheck, BookOpen, Heart, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { salesConfig } from "@/lib/sales-config";
import heroImage from "@/assets/hero.jpg";
import otiteImage from "@/assets/Oquepodeestaracontecendo.Jpg";
import productImage from "@/assets/Iogurte+3ingredientescaseiros.jpg";
import completeImage from "@/assets/Tenhaotruquecompleto.jpg";
import basicPlanImage from "@/assets/planobascio.png";
import bonus1Image from "@/assets/bonus1.png";
import bonus2Image from "@/assets/bonus2.png";
import bonus3Image from "@/assets/bonus3.png";

const product = "Truque Caseiro do Iogurte + 3 ingredientes caseiros para Otite Canina";
const bonusImages = [bonus1Image, bonus2Image, bonus3Image];
const bonuses = [
  { name: "Checklist Visual: Sinais no Ouvido do Cão", text: "Material de consulta rápida para ajudar o tutor a registrar sinais percebidos no ouvido e no comportamento do cão." },
  { name: "Diário de Acompanhamento do Ouvido", text: "Material preenchível para registrar datas, sinais percebidos, mudanças e observações durante o acompanhamento." },
  { name: "Guia de Cuidados com as Orelhas", text: "Material visual complementar sobre observação, higiene, banho, umidade e erros que merecem atenção na rotina." },
];
const topics = [
  ["O que observar", "Informações importantes antes de começar."],
  ["Ingredientes", "O que faz parte do Truque Caseiro."],
  ["Preparação", "Como preparar conforme o conteúdo oficial."],
  ["Passo a passo", "A sequência apresentada no material."],
  ["Cuidados", "Pontos importantes que merecem atenção."],
  ["Acompanhamento", "O que observar durante o processo."],
];
const faqs = [
  ["O que exatamente eu vou receber?", "Você recebe um material digital com os ingredientes, a preparação, o passo a passo, os cuidados importantes e orientações de acompanhamento. O Plano Completo também inclui os três materiais complementares apresentados nesta página."],
  ["Qual é a diferença entre Básico e Completo?", "Os dois planos incluem o material principal. Por R$ 10 a mais, o Completo inclui o Checklist Visual, o Diário de Acompanhamento e o Guia de Cuidados com as Orelhas."],
  ["Como vou receber?", "Após a confirmação do pagamento pela Cakto, as instruções de acesso são enviadas ao e-mail utilizado na compra."],
  ["Consigo acessar pelo celular?", "Sim. O material digital pode ser consultado pelo celular, tablet ou computador."],
  ["Quais ingredientes são utilizados?", "O material apresenta iogurte e três ingredientes caseiros. A relação completa e as orientações estão no conteúdo oficial. Antes de alterar a alimentação ou utilizar qualquer substância, consulte um médico-veterinário."],
  ["O passo a passo está incluído?", "Sim. O passo a passo principal está incluído tanto no Plano Básico quanto no Plano Completo."],
];

function ImageSpace({ label, className = "", compact = false, imageSrc }: { label: string; className?: string; compact?: boolean; imageSrc?: string }) {
  return <div role="img" aria-label={`Espaço reservado: ${label}`} className={`image-space overflow-hidden rounded-lg border border-dashed border-border bg-card/80 ${compact ? "aspect-[4/3]" : "aspect-[6/5]"} ${className}`}>
    {imageSrc ? (
      <img src={imageSrc} alt={label} className="h-full w-full object-cover" />
    ) : (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-5 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary"><ImagePlus size={23} strokeWidth={1.5} /></span>
        <span className="max-w-64 text-xs font-medium text-muted-foreground">{label}</span>
      </div>
    )}
  </div>;
}
function Heading({ tag, children, description }: { tag?: string; children: ReactNode; description?: string }) {
  return <div className="mx-auto mb-8 max-w-xl text-center">
    {tag && <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold uppercase text-primary">{tag}</span>}
    <h2 className="text-2xl font-extrabold leading-tight sm:text-[28px]">{children}</h2>
    {description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>}
  </div>;
}
function CheckItem({ children }: { children: ReactNode }) {
  return <li className="flex items-start gap-2 text-xs leading-relaxed"><Check className="mt-0.5 size-3.5 shrink-0 text-success" />{children}</li>;
}
function PlansCTA({ children = "QUERO AGORA" }: { children?: ReactNode }) {
  return <Button variant="sales" size="lg" className="h-auto min-h-12 max-w-full whitespace-normal px-6 py-3 text-xs" onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}>{children}<ArrowRight /></Button>;
}

export function SalesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkoutNotice, setCheckoutNotice] = useState<string | null>(null);
  function checkout(plan: "basic" | "complete") {
    const url = plan === "basic" ? salesConfig.basicCheckout : salesConfig.completeCheckout;
    if (url) { window.location.assign(url); return; }
    setCheckoutNotice(plan === "basic" ? "Básico" : "Completo");
  }
  return <main>
    <div className="bg-primary px-3 py-2 text-center text-[10px] font-semibold text-primary-foreground">Oferta especial • Disponível apenas hoje: 07/10/2026</div>
    <section className="sales-grid px-5 pb-10 pt-12 sm:pt-14">
      <div className="mx-auto max-w-[620px] text-center">
        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold uppercase text-primary">Bem-estar animal • Otite canina</span>
        <h1 className="mx-auto mt-4 max-w-[580px] text-[32px] font-extrabold leading-[1.2] sm:text-[40px]">Truque Caseiro do <span className="text-primary">Iogurte + 3 ingredientes caseiros</span> para Otite Canina</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">Para quem convive com um cachorro que sacode a cabeça, coça a orelha ou demonstra incômodo — e quer entender uma abordagem simples, com calma e responsabilidade.</p>
        <ImageSpace label="Tutora observando com cuidado a orelha de seu cachorro" className="mx-auto my-7 w-full max-w-[340px]" imageSrc={heroImage} />
        <div className="mx-auto mb-6 grid max-w-lg grid-cols-1 gap-2 text-left sm:grid-cols-2">{["Ingredientes organizados", "Preparação explicada", "Passo a passo", "Cuidados importantes", "Material para consultar pelo celular", "Orientações de acompanhamento"].map(text => <div key={text} className="rounded-md border border-border bg-card px-3 py-3"><ul><CheckItem>{text}</CheckItem></ul></div>)}</div>
        <PlansCTA />
      </div>
    </section>

    <section className="px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <Heading tag="Entenda os sinais" description="Alguns comportamentos chamam atenção porque aparecem de repente — ou insistem em voltar. Você já percebeu algum deles por aí?">Por que meu cachorro <span className="text-primary">faz isso?</span></Heading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Sacudir a cabeça", "Você nota esse movimento várias vezes ao longo do dia."], ["Coçar a orelha", "A pata vai com frequência até a região da orelha."], ["Demonstrar desconforto", "Ele parece inquieto ou evita o toque perto do ouvido."], ["Alterações percebidas", "Vermelhidão, odor ou secreção chamam sua atenção."]].map(([name, text], i) => <article key={name} className="rounded-lg border border-border bg-card p-4"><span className="text-xs font-extrabold text-sales">0{i + 1}</span><h3 className="my-2 text-sm font-bold text-primary">{name}</h3><p className="text-xs leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
        <div className="mt-8 text-center"><PlansCTA>QUERO ENTENDER O PASSO A PASSO</PlansCTA></div>
      </div>
    </section>

    <section className="bg-soft-blue px-5 py-14">
      <div className="mx-auto max-w-xl text-center">
        <Heading tag="Otite canina">O que pode <span className="text-primary">estar acontecendo?</span></Heading>
        <p className="text-sm leading-relaxed text-muted-foreground">O ouvido do cão é uma região sensível. Quando existe irritação ou inflamação, o incômodo pode aparecer em forma de coceira, movimentos repetidos da cabeça ou mudanças visíveis na orelha.</p>
        <ImageSpace compact label="Ouvido com otite — imagem ilustrativa" className="mx-auto my-6 max-w-[350px]" imageSrc={otiteImage} />
        <p className="text-sm leading-relaxed text-muted-foreground">Para o tutor, nem sempre é fácil entender o motivo. É por isso que olhar o conjunto dos sinais importa mais do que tirar uma conclusão apressada.</p>
        <p className="mt-4 text-xs font-semibold leading-relaxed text-primary">Dor, odor, secreção ou vermelhidão precisam de avaliação veterinária. Não coloque iogurte, mel ou outras substâncias no ouvido do cão.</p>
      </div>
    </section>

    <section className="bg-soft-lilac px-5 py-14">
      <div className="mx-auto max-w-2xl">
        <Heading tag="Quando o problema volta" description="Às vezes, o desconforto parece diminuir e depois volta a chamar atenção. Isso pode acontecer porque diferentes fatores da rotina e do próprio ouvido continuam presentes."><span className="text-primary">Por que isso pode</span> acontecer de novo?</Heading>
        <div className="flex flex-wrap items-center justify-center gap-2">{["Sinais", "Incômodo", "Cuidados", "Melhora percebida", "Sinais voltam"].map((text, i) => <div className="flex items-center gap-2" key={text}><span className="rounded-md border border-border bg-card px-3 py-3 text-xs font-semibold text-primary">{text}</span>{i < 4 && <ArrowRight size={14} className="text-muted-foreground" />}</div>)}</div>
        <p className="mx-auto mt-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">Identificar a causa é essencial. Diferentes condições podem produzir sinais parecidos, e uma melhora percebida não significa que a causa foi resolvida.</p>
      </div>
    </section>

    <section className="px-5 py-14">
      <div className="mx-auto max-w-xl text-center">
        <Heading tag="O truque caseiro"><span className="text-primary">Iogurte</span> + <span className="text-sales">3 ingredientes caseiros</span></Heading>
        <ImageSpace compact label="Iogurte, mel e ingredientes caseiros apresentados lado a lado" className="mx-auto max-w-[380px]" imageSrc={productImage} />
        <h3 className="mt-6 text-lg font-extrabold text-primary">Por que iogurte e esses ingredientes caseiros?</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">O material apresenta essa combinação e seus cuidados. Ingredientes estudados em laboratório não comprovam que uma mistura caseira trate otite canina — consulte um médico-veterinário.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Conhecer os ingredientes é só uma parte. Também importa entender os limites da abordagem e os cuidados do material.</p>
      </div>
    </section>

    <section className="bg-soft-blue px-5 py-14">
      <div className="mx-auto max-w-2xl">
        <Heading tag="Passo a passo" description="Material digital prático que organiza em um só lugar o conteúdo, a preparação e os cuidados.">Tenha o <span className="text-primary">truque completo em mãos</span></Heading>
        <ImageSpace label="Apresentação do material Truque Caseiro do Iogurte + 3 ingredientes caseiros e seus bônus" className="mx-auto mb-8 max-w-[360px]" imageSrc={completeImage} />
        <Heading tag="Sem informação solta"><span className="text-sales">Tudo organizado.</span><br /><span className="text-primary">Um material para consultar.</span></Heading>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{topics.map(([name, text], i) => <article key={name} className="flex gap-3 rounded-lg border border-border bg-card p-4"><span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">{i % 3 === 0 ? <BookOpen size={17} /> : i % 3 === 1 ? <ClipboardCheck size={17} /> : <Heart size={17} />}</span><div><span className="text-[10px] font-extrabold text-sales">0{i + 1}</span><h3 className="text-xs font-extrabold">{name}</h3><p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div>
        <div className="mt-8 text-center"><PlansCTA>QUERO CONHECER AS OPÇÕES</PlansCTA></div>
      </div>
    </section>

    <section className="px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <Heading tag="Exclusivos do completo" description="Além do passo a passo principal, o Plano Completo inclui materiais para ajudar você a observar e organizar melhor os cuidados.">Você também recebe <span className="text-sales">3 materiais</span><br />para <span className="text-primary">complementar os cuidados.</span></Heading>
        <div className="grid gap-4 sm:grid-cols-3">{bonuses.map((bonus, i) => <article key={bonus.name} className="rounded-lg border border-border bg-card p-4"><ImageSpace compact label={bonus.name} imageSrc={bonusImages[i]} /><span className="mt-4 block text-[10px] font-extrabold uppercase text-sales">Bônus 0{i + 1}</span><h3 className="mt-1 text-sm font-extrabold">{bonus.name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{bonus.text}</p><p className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-success"><Check size={13} />Incluso no Plano Completo</p></article>)}</div>
        <div className="mt-8 text-center"><PlansCTA>QUERO O COMPLETO POR R$ 27,90</PlansCTA></div>
      </div>
    </section>

    <section id="planos" className="bg-soft-lilac px-5 py-14">
      <div className="mx-auto max-w-2xl">
        <Heading tag="Escolha sua opção" description="O passo a passo principal está disponível nas duas opções. No Completo, você também recebe materiais extras para acompanhar e organizar os cuidados."><span className="text-primary">Escolha como você quer acessar.</span></Heading>
        <div className="grid items-start gap-5 sm:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-base font-extrabold text-primary">Plano Básico</h3><p className="mt-1 text-xs text-muted-foreground">O passo a passo principal, em um só lugar.</p>
            <ImageSpace compact label="Capa do material — Plano Básico" className="my-5" imageSrc={basicPlanImage} />
            <p className="text-[38px] font-extrabold leading-none">R$ 17<span className="text-lg">,90</span></p><p className="mt-2 text-[10px] text-muted-foreground">Pagamento único • Material digital</p>
            <ul className="mt-5 space-y-2">{[product, "Ingredientes e preparação", "Passo a passo", "Cuidados importantes", "Orientações de acompanhamento", "Acesso enviado por e-mail"].map(text => <CheckItem key={text}>{text}</CheckItem>)}</ul>
            <p className="mt-5 text-[11px] font-bold">Não inclui os três materiais extras:</p><ul className="mt-2 space-y-2">{bonuses.map(b => <li key={b.name} className="flex gap-2 text-[10px] leading-relaxed text-muted-foreground"><X className="size-3 shrink-0" />{b.name}</li>)}</ul>
            <Button variant="salesOutline" className="mt-6 h-auto min-h-11 w-full whitespace-normal py-3 text-[11px]" onClick={() => checkout("basic")}>QUERO O PLANO BÁSICO<ArrowRight /></Button>
          </article>
          <article className="rounded-lg border-2 border-sales bg-card p-6 shadow-lg">
            <span className="inline-block rounded-full bg-sales px-3 py-1 text-[9px] font-extrabold text-sales-foreground">PASSO A PASSO + 3 BÔNUS</span>
            <h3 className="mt-3 text-base font-extrabold text-primary">Plano Completo</h3><p className="mt-1 text-xs text-muted-foreground">Para consultar, registrar e acompanhar.</p>
            <ImageSpace compact label="Material principal e três bônus — Plano Completo" className="my-5" imageSrc={completeImage} />
            <p className="text-[38px] font-extrabold leading-none text-primary">R$ 27<span className="text-lg">,90</span></p><p className="mt-2 text-[10px] text-muted-foreground">Pagamento único • Material digital</p>
            <p className="my-4 rounded-md bg-sales-soft px-3 py-3 text-xs font-semibold leading-relaxed text-sales">Por apenas R$ 10 a mais que o Básico, receba também os três materiais complementares.</p>
            <ul className="space-y-2"><CheckItem>Tudo do Plano Básico</CheckItem><CheckItem>Acesso enviado por e-mail</CheckItem></ul>
            <p className="mb-3 mt-5 text-xs font-extrabold">E mais 3 bônus inclusos:</p><ul className="space-y-3">{bonuses.map(b => <CheckItem key={b.name}>{b.name}</CheckItem>)}</ul>
            <Button variant="sales" className="mt-6 h-auto min-h-11 w-full whitespace-normal py-3 text-[11px]" onClick={() => checkout("complete")}>QUERO O PLANO COMPLETO<ArrowRight /></Button>
          </article>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-muted-foreground"><ShieldCheck size={15} className="shrink-0 text-success" />Pagamento processado com segurança pela Cakto.</p>
      </div>
    </section>

    <section className="px-5 py-14">
      <div className="mx-auto max-w-3xl">
        <Heading tag="Acesso simples"><span className="text-primary">Da compra ao seu e-mail</span></Heading>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">{[["Escolha seu plano", "Básico ou Completo."], ["Finalize na Cakto", "Pagamento processado pela plataforma."], ["Receba por e-mail", "As instruções vão para o e-mail utilizado na compra."], ["Acesse o material", "Abra pelo celular, tablet ou computador."]].map(([name, text], i) => <div key={name} className="text-center"><span className="text-xs font-extrabold text-sales">0{i + 1}</span><h3 className="mt-2 text-sm font-bold text-primary">{name}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
      </div>
    </section>

    <section className="bg-soft-lilac px-5 py-14">
      <div className="mx-auto max-w-lg">
        <Heading tag="Dúvidas frequentes" description="Tire suas dúvidas sobre o material antes de escolher seu plano."><span className="text-primary">Saiba mais antes de escolher.</span></Heading>
        <div className="space-y-2">{faqs.map(([question, answer], i) => <div key={question} className="overflow-hidden rounded-lg border border-border bg-card"><Button variant="ghost" className="flex h-auto min-h-14 w-full justify-between gap-3 whitespace-normal rounded-none px-4 py-4 text-left text-xs font-bold text-primary" aria-expanded={openFaq === i} aria-controls={`faq-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}<span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary">{openFaq === i ? <ChevronDown size={13} /> : <Plus size={13} />}</span></Button>{openFaq === i && <p id={`faq-${i}`} className="px-4 pb-5 text-xs leading-relaxed text-muted-foreground">{answer}</p>}</div>)}</div>
        <div className="mt-7 text-center"><PlansCTA>COMPARAR OS PLANOS</PlansCTA></div>
      </div>
    </section>
    <footer className="bg-primary px-5 py-7 text-center text-primary-foreground"><p className="mx-auto max-w-lg text-xs font-bold">{product}</p>{salesConfig.supportEmail && <a className="mt-3 inline-flex items-center gap-2 text-xs" href={`mailto:${salesConfig.supportEmail}`}><Mail size={14} />{salesConfig.supportEmail}</a>}<p className="mt-4 text-[10px] opacity-80">© 2026. Todos os direitos reservados.</p></footer>
    {checkoutNotice && <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 px-5" onClick={() => setCheckoutNotice(null)}><div role="dialog" aria-modal="true" aria-labelledby="checkout-title" className="relative w-full max-w-sm rounded-lg border border-border bg-card p-7 text-center shadow-lg" onClick={e => e.stopPropagation()}><Button variant="ghost" size="icon" className="absolute right-2 top-2" aria-label="Fechar aviso" onClick={() => setCheckoutNotice(null)} autoFocus><X /></Button><Smartphone className="mx-auto mb-4 size-9 text-primary" /><h2 id="checkout-title" className="text-lg font-extrabold text-primary">Plano {checkoutNotice}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">O link de pagamento ainda não está disponível. A compra poderá ser finalizada quando o checkout for adicionado.</p><Button variant="sales" className="mt-5" onClick={() => setCheckoutNotice(null)}>VOLTAR AOS PLANOS</Button></div></div>}
  </main>;
}