import { Currencies } from '@/lib/currency'
import { error } from 'console';
import {z} from 'zod'


export const updateCurrencySchema=z.object({
    currency:z.custom((Value)=>{
        const found=Currencies.some((c)=>c.Value===Value);
        if(!found){
            throw new Error(`invalid Currency:${Value}`);
        }
        return Value
    })
})