'use server';

import {
  generateAdCopy,
  type GenerateAdCopyInput,
  type GenerateAdCopyOutput,
} from '@/ai/flows/generate-ad-copy';

interface ActionResult {
  success: boolean;
  data?: GenerateAdCopyOutput | null;
  error?: string;
}

export async function generateAdCopyAction(
  input: GenerateAdCopyInput
): Promise<ActionResult> {
  try {
    const output = await generateAdCopy(input);
    return { success: true, data: output };
  } catch (e: any) {
    console.error(e);
    return { success: false, error: e.message || 'An unexpected error occurred.' };
  }
}
