"use client";
import { usePathname } from "next/navigation";
import Logo, { LogoMobile } from "./Logo"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitcherBtn } from "./ThemeSwitcherBt";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";



const Navbar = () => {
  return (

   <>
   <DesktopNavbar/>
   <MobileNavbar/>
   

   </>
  )
}
const items=[
    {lable:"DashBoard",link:"/"},
    {lable:"Transactions",link:"/Transactions"},
    {lable:"Manage",link:"/manage"},
];
function MobileNavbar(){
    const [isOpen,SetISopen]=useState();
    return(
        <div className=" block border-separate bg-background md:hidden">
            <nav className="container flex items-center justify-between px-8">
                <Sheet open={isOpen} onOpenChange={()=>SetISopen}>
                    <SheetTrigger asChild>
                       <Button variant={'ghost'} size={'icon'}>
                        <Menu/>

                       </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[450px]"
                    side={"left"}>
                      <Logo/>
                        <div className="flex flex-col gap-1 pt-4">
                            {items.map((item)=>(
                                <NavbarItem key={item.lable}
                                link={item.link}
                                lable={item.lable}
                                />

                            ))}

                        </div>

                    </SheetContent>

                </Sheet>
                  <div className="flex h-[80px] min-h-[60px]
                items-center  gap-x-4">
                     <LogoMobile/>
                </div>
                   
                    <div className=" flex items-center gap-x-3">
                        <ThemeSwitcherBtn/>
                        <UserButton afterSignOutUrl="/sign-in"/>
                    </div>

                

            </nav>


        </div>
    )
}




function DesktopNavbar(){
    return(
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <Logo/>
                    </div>
                    <div className="flex h-full">
                        {items.map((items)=>(
                            <NavbarItem
                            key={items.lable}
                            link={items.link}
                            lable={items.lable}/>

                        ))}

                    </div>

                
                <div className=" flex items-center gap-4">
                    <ThemeSwitcherBtn/>
                    <UserButton afterSignOutUrl="/sign-in"/>

                </div>

            </nav>

        </div>
    )
}

function NavbarItem ({ lable,link,clickCallback}:
    {lable:string;
    link:string,
    clickCallback?:()=> void,
    })  {
    const Pathname=usePathname();
    const isActive=Pathname === link;
    return(
        <div className="relative flex items-center">
            <Link 
            href={link} 
            className={cn(
                buttonVariants({ variant:"ghost"}),
                "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
            )}
            onClick={()=>{
                if(clickCallback) clickCallback()
            }}>
                {lable}
                </Link>
                {isActive && (
                    <div className="absolute -bottom-[2px] left-1/2 hidden
                    h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block">

                    </div>
                )}

        </div>
    )
}
export default Navbar