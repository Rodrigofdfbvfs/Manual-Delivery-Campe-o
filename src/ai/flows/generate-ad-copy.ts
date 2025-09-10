'use server';

/**
 * @fileOverview Generates ad copy for delivery services using AI based on the manual's strategies.
 *
 * - generateAdCopy - A function that generates ad copy for delivery services.
 * - GenerateAdCopyInput - The input type for the generateAdCopy function.
 * - GenerateAdCopyOutput - The return type for the generateAdCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyInputSchema = z.object({
  foodItem: z.string().describe('The specific food item being advertised (e.g., pizza, sushi, burgers).'),
  targetAudience: z.string().describe('Description of the target audience for the ad (e.g., students, families, young professionals).'),
  deliveryServiceType: z.string().describe('The type of delivery service (e.g., fast delivery, late-night delivery, healthy options).'),
  uniqueSellingProposition: z.string().describe('The unique selling proposition of the delivery service (e.g., freshest ingredients, eco-friendly packaging, exclusive deals).'),
});
export type GenerateAdCopyInput = z.infer<typeof GenerateAdCopyInputSchema>;

const GenerateAdCopyOutputSchema = z.object({
  adHeadline: z.string().describe('A compelling headline for the ad.'),
  adDescription: z.string().describe('A detailed and persuasive description for the ad.'),
  callToAction: z.string().describe('A clear call to action for the ad (e.g., Order Now, Try Today, Get a Discount).'),
});
export type GenerateAdCopyOutput = z.infer<typeof GenerateAdCopyOutputSchema>;

export async function generateAdCopy(input: GenerateAdCopyInput): Promise<GenerateAdCopyOutput> {
  return generateAdCopyFlow(input);
}

const generateAdCopyPrompt = ai.definePrompt({
  name: 'generateAdCopyPrompt',
  input: {schema: GenerateAdCopyInputSchema},
  output: {schema: GenerateAdCopyOutputSchema},
  prompt: `You are an expert advertising copywriter specializing in creating high-converting ad copy for delivery services.
  Based on the principles outlined in the "Manual do Delivery Campeão", your task is to generate a compelling ad for the following delivery service:

  Food Item: {{{foodItem}}}
  Target Audience: {{{targetAudience}}}
  Delivery Service Type: {{{deliveryServiceType}}}
  Unique Selling Proposition: {{{uniqueSellingProposition}}}

  Create an ad that includes:
  - A captivating headline that grabs the attention of the target audience.
  - A persuasive description that highlights the benefits of the delivery service and the food item.
  - A clear call to action that encourages the audience to order.

  Ensure the ad copy is tailored to the specified target audience and emphasizes the unique selling proposition of the delivery service.

  Output the headline, description, and call to action in the following JSON format:
  {
    "adHeadline": "Your Headline Here",
    "adDescription": "Your Description Here",
    "callToAction": "Your Call to Action Here"
  }`,
});

const generateAdCopyFlow = ai.defineFlow(
  {
    name: 'generateAdCopyFlow',
    inputSchema: GenerateAdCopyInputSchema,
    outputSchema: GenerateAdCopyOutputSchema,
  },
  async input => {
    const {output} = await generateAdCopyPrompt(input);
    return output!;
  }
);
