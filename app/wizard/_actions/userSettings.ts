"use server"


import prisma from "@/lib/prisma";
import { updateCurrencySchema } from "@/schema/userSettings"
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export async function updateUserCurrency(currency:string){
    const parseBody=updateCurrencySchema.safeParse({
        currency,
    });
    if(!parseBody.success){
        throw parseBody.error;
    }

    const user=await currentUser();
    if(!user){
        redirect("/");
    }

    const userSettings=await prisma.userSettings.update({
        where:{
            userId:user.id,
        },
        data:{
            currency,
        }
    });
    return userSettings



}

