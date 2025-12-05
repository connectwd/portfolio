import { NextRequest } from 'next/server';

const parseRequestBody = async (req: NextRequest): Promise<Record<string, unknown>> => {
  try {
    return await req.json();
  } catch {
    return {};
  }
};

export { parseRequestBody };