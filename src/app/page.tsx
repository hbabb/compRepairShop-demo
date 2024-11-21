import { MatrixRain } from '@/components/animations/MatrixRain';
import Link from 'next/link';

import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <div className="">
      <MatrixRain />

      <main className="mx-auto flex h-dvh max-w-5xl flex-col justify-center text-center">
        <div className="mx-auto flex w-4/5 flex-col gap-6 rounded-xl border border-green-500/20 bg-black/40 bg-gradient-to-br from-green-500/[0.15] to-black/50 p-6 font-code shadow-[0_0_15px_rgba(0,255,0,0.07)] ring-1 ring-green-500/30 backdrop-blur-md sm:max-w-96 sm:text-2xl">
          <h1 className="text-4xl font-bold text-slate-50">
            Dan&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address className="font-code text-slate-300/90">
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>
          <p className="text-slate-300/90">Open Daily: 9am - 5pm</p>
          <Link href="tel:5555555555" className="text-slate-200 hover:underline">
            (555) 555-5555
          </Link>
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            variant="outline"
            className="mt-6 w-1/3 rounded-full border-2 border-notfound-white bg-matrix-glow px-6 py-6 text-lg text-notfound-white hover:text-red-600"
          >
            <LoginLink>Employee Sign In</LoginLink>
          </Button>
        </div>
      </main>
    </div>
  );
}
