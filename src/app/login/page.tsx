import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components'

export default function LoginPage() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-6 p-4 text-4xl">
      <h1>Repair Shop</h1>
      <Button
        asChild
        variant="outline"
        className="rounded-full border-2 border-notfound-white bg-transparent px-8 py-6 text-lg text-notfound-white hover:text-red-600"
      >
        <LoginLink>Sign In</LoginLink>
      </Button>
    </main>
  )
}
