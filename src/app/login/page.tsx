import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    return (
        <main className="h-dvh flex flex-col items-center justify-center gap-6 text-4xl p-4">
            <h1>
                Repair Shop
            </h1>
            <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-notfound-white text-notfound-white hover:text-red-600 bg-transparent"
            >
                <LoginLink>Sign In</LoginLink>
            </Button>
        </main>
    )
}