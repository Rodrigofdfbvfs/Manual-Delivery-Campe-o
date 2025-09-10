'use server';

import { generateAdCopy, type GenerateAdCopyInput } from '@/ai/flows/generate-ad-copy';

export async function generateAdCopyAction(input: GenerateAdCopyInput) {
  try {
    const result = await generateAdCopy(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error generating ad copy:', error);
    // It's better to return a generic error message to the client.
    // The specific error is logged on the server.
    return { success: false, error: 'An error occurred while generating the ad copy. Please try again later.' };
  }
}
