
import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link";

import { redirect } from "next/navigation";


const page =  async () => {
    const user=await currentUser();
    if(!user){
        redirect("/sign-in");
    }
  return (
    <div className="container flex max-w-xl flex-col items-center justify-center gap-4">
        <div>
        <h1 className="text-center text-3xl">
            welcome,<span className="ml-2 font-bold">{user?.firstName} 👋</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
            let &apos;s get started by setting up your currency
            
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
            you can change these settings at any time
        </h3>
        </div>
        <Separator/>
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Currency</CardTitle>
                <CardDescription>Set your default currency for transactions</CardDescription>
            </CardHeader>
            <CardContent>
                <CurrencyComboBox/>
            </CardContent>
        </Card>
        <Separator/>
        <Button className="w-[70%] bg-green-500" asChild>
            <Link href={"/"}> I&apos:m done! take me to this dashboard</Link>
         
        </Button>
        <div className="mt-8">
            <Logo/>
        </div>

    </div>
  )
}

export default page