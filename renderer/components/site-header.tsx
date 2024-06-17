import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 flex">
                    <Link
                        href="/home"
                        className="mr-6 flex items-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            className="h-6 w-6"
                        >
                            <rect width="256" height="256" fill="none" />
                            <line
                                x1="208"
                                y1="128"
                                x2="128"
                                y2="208"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            />
                            <line
                                x1="192"
                                y1="40"
                                x2="40"
                                y2="192"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            />
                        </svg>

                        <span className="font-bold inline-block">
                            shadcn/ui
                        </span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none"></div>

                    <nav className="flex items-center">
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
