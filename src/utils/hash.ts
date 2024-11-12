import { createHash } from 'crypto';

export const sha256Hash = (id:string) => {
    return createHash('sha256').update(id).digest('hex');
} 
