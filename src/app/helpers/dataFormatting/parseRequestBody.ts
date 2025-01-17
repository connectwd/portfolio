import { NextRequest } from 'next/server';

const parseRequestBody = async (req: NextRequest): Promise<Object> =>
  typeof req.json === 'function' ? await req.json() : req.body;

export { parseRequestBody };