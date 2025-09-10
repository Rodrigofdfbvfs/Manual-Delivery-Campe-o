import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Para quem é o Manual do Delivery Campeão?",
    answer: "É para donos de delivery que estão começando e querem iniciar com demanda, para quem já tem um delivery e deseja alavancar as vendas, e também para pessoas que desejam trabalhar com tráfego pago para deliveries."
  },
  {
    question: "Como terei acesso ao curso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a plataforma com as aulas gravadas."
  },
  {
    question: "Qual a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro."
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer: "Todas as aulas são gravadas para que você possa assistir no seu próprio ritmo, quando e onde quiser. Você terá acesso vitalício a todo o conteúdo e futuras atualizações."
  }
]

export default function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
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
