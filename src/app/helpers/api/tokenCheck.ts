/**
 * Compares whether the submited token matches environmental authentication token
 * @param { string } token
 * @returns { boolean } True or False
 */
export function isCorrectToken(headers: Headers) {
    const headerList = new Headers(headers);
    const authHeader = headerList.get('authorisation');
  
    if (!authHeader || authHeader !== authToken) {
      return false;
    }
  
    return true;
  }
  
  export const authToken: string = `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`;