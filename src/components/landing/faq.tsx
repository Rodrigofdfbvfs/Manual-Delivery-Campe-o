import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Como funciona o curso manual do delivery campeão?",
    answer: "O curso é composto por aulas gravadas que você pode assistir no seu ritmo. Ele aborda desde os conceitos básicos até estratégias avançadas de anúncios para delivery, incluindo templates práticos e métodos validados."
  },
  {
    question: "Como terei acesso ao curso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a plataforma com as aulas gravadas."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
  },
  {
    question: "Vou ter suporte durante o curso?",
    answer: "Sim! Você terá 30 dias de suporte direto para tirar suas dúvidas sobre o conteúdo e implementação das estratégias."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-24 bg-gradient-to-br from-zinc-900 to-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl uppercase font-bold tracking-tight text-primary sm:text-5xl font-headline">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg font-light leading-8 text-foreground/80 font-headline">
            Ainda tem dúvidas? Encontre suas respostas aqui.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="font-bold font-headline text-lg text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="font-light font-headline text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
