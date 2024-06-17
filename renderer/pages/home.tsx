import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (With Shadcn/UI)</title>
            </Head>

            <div className="relative flex min-h-screen flex-col bg-background">
                <div className="w-full h-screen flex flex-col items-center justify-center px-4">
                    <SiteHeader />

                    <div className="flex-1 flex flex-col justify-center items-center w-full space-y-8">
                        <div>
                            <Image
                                className="ml-auto mr-auto"
                                src="/images/logo.png"
                                alt="Logo image"
                                width={256}
                                height={256}
                            />
                        </div>

                        <div className="text-center text-2xl font-bold flex flex-wrap justify-center gap-6">
                            <a
                                href="https://www.electronjs.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#9feaf9]"
                            >
                                ⚡ Electron ⚡
                            </a>

                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Next.JS
                            </a>

                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#38BDF8]"
                            >
                                Tailwind CSS
                            </a>

                            <a
                                href="https://ui.shadcn.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Shadcn/UI
                            </a>

                            <a
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#3178c6]"
                            >
                                Typescript
                            </a>
                        </div>

                        <div className="w-full flex-wrap flex justify-center">
                            <Link href="/about" className={buttonVariants()}>
                                Go To About Page
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
