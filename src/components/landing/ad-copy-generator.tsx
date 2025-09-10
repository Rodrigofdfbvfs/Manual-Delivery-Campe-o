"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { generateAdCopyAction } from '@/app/actions';
import type { GenerateAdCopyOutput } from '@/ai/flows/generate-ad-copy';
import { useToast } from "@/hooks/use-toast";

const adCopySchema = z.object({
  foodItem: z.string().min(3, 'Descreva o item. Ex: Pizza, Hambúrguer'),
  targetAudience: z.string().min(10, 'Descreva seu público-alvo.'),
  deliveryServiceType: z.string().min(5, 'Descreva o tipo de serviço. Ex: entrega rápida, opções saudáveis'),
  uniqueSellingProposition: z.string().min(10, 'Qual o seu diferencial? Ex: ingredientes frescos, embalagem ecológica'),
});

type AdCopyFormValues = z.infer<typeof adCopySchema>;

export default function AdCopyGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GenerateAdCopyOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<AdCopyFormValues>({
    resolver: zodResolver(adCopySchema),
    defaultValues: {
      foodItem: '',
      targetAudience: '',
      deliveryServiceType: '',
      uniqueSellingProposition: '',
    },
  });

  async function onSubmit(values: AdCopyFormValues) {
    setIsLoading(true);
    setResult(null);
    
    const response = await generateAdCopyAction(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro!",
        description: response.error || "Não foi possível gerar o anúncio. Tente novamente.",
      });
    }
    
    setIsLoading(false);
  }

  return (
    <section id="ai-generator" className="py-12 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-headline">
            Ferramenta de Geração de Anúncios com I.A.
          </h2>
          <p className="mt-4 text-lg font-light leading-8 text-foreground/80 font-headline">
            Use a inteligência artificial treinada com as estratégias do manual para criar seus próprios anúncios de alta conversão.
          </p>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Crie seu anúncio</CardTitle>
            <CardDescription>Preencha os campos abaixo para gerar um anúncio personalizado para o seu delivery.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="foodItem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Produto Principal</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Hambúrguer Artesanal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Público-Alvo</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ex: Jovens universitários que buscam um lanche rápido e saboroso." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deliveryServiceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Serviço</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Delivery noturno, entrega em até 30 minutos" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="uniqueSellingProposition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Diferencial Único</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ex: Usamos apenas carne Angus, nosso pão é de fermentação natural." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Gerar Anúncio
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="text-center mt-8">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 font-light font-headline">Gerando sua cópia campeã...</p>
          </div>
        )}

        {result && (
          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-bold text-center font-headline text-primary">Seu Anúncio está Pronto!</h3>
            <Card>
              <CardHeader>
                <CardTitle>Título (Headline)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-light font-headline">{result.adHeadline}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Descrição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-light font-headline whitespace-pre-wrap">{result.adDescription}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chamada para Ação (CTA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-light font-headline">{result.callToAction}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
