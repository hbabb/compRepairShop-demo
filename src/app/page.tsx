import { MatrixRain } from "@/components/animations/MatrixRain";
import Link from "next/link";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className="">
      <MatrixRain />


      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">


        <div className="flex flex-col font-code gap-6 w-4/5 sm:max-w-96 mx-auto sm:text-2xl rounded-xl backdrop-blur-md bg-black/40 p-6 ring-1 ring-green-500/30 border border-green-500/20 shadow-[0_0_15px_rgba(0,255,0,0.07)] bg-gradient-to-br from-green-500/[0.15] to-black/50">
          <h1 className="text-4xl font-bold text-slate-50">
            Dan&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address className="font-code text-slate-300/90">
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>
          <p className="text-slate-300/90">
            Open Daily: 9am - 5pm
          </p>
          <Link
            href="tel:5555555555"
            className="hover:underline text-slate-200"
          >
            (555) 555-5555
          </Link>
        </div>

        <div className="flex justify-center ">        
          <Button
              asChild
              variant="outline"
              className="rounded-full w-1/3 px-6 py-6 text-lg border-2 mt-6 border-notfound-white text-notfound-white hover:text-red-600 bg-matrix-glow"
          >
              <LoginLink>Employee Sign In</LoginLink>
          </Button>
        </div>
      </main>


    </div>
  );
}
