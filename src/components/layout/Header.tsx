import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import { NavButton } from "@/components/layout/NavButton";
import { ModeToggle } from "@/components/layout/ModeToggle";

export function Header() {
    return (
        <header className="animate-slide h-12 p-2 border-b sticky top-0 z-20">

            <div className="flex h-8 items-center justify-between w-full">

                <div className="flex items-center gap-2">

                    <NavButton
                        icon={HomeIcon}
                        label="Home"
                        href="/home"
                    />

                    <Link
                        href="/home"
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Home"
                    >
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">

                    <NavButton
                        icon={File}
                        label="Tickets"
                        href="/tickets"
                    />

                    <NavButton
                        icon={UsersRound}
                        label="Customers"
                        href="/customers"
                    />

                    <ModeToggle />

                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        className="rounded-full"
                        aria-label="LogOut"
                        title="LogOut"
                        asChild
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    )
}