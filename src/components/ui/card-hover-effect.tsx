"use client"
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        subDescription: string;
        deployLink: string;
        gitLink: string;
        hasDeploy: boolean;
    }[];
    className?: string;
}) => {

    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div className="relative group block p-2 h-full w-full"
                    key={item?.deployLink}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-700 dark:bg-slate-300/[0.5] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <div>
                            <CardDescription>{item.description}</CardDescription>
                            <CardSubDescription>{item.subDescription}</CardSubDescription>
                        </div>
                        <div className="mt-8 flex gap-5">
                            {item.hasDeploy && <Link
                                href={item?.deployLink} target="_blank">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >

                                    <span>Live Demo</span>
                                </HoverBorderGradient>
                            </Link>}
                            <Link
                                href={item?.gitLink} target="_blank">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >

                                    <span>View CodeBase</span>
                                </HoverBorderGradient>
                            </Link>
                        </div>
                    </Card>
                </div>

            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 text-[1.2rem] uppercase font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-tighter leading-relaxed text-justify",
                className
            )}
        >
            {children}
        </p>
    );
};
export const CardSubDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-3 text-zinc-400 tracking-tighter leading-relaxed text-justify",
                className
            )}
        >
            {children}
        </p>
    );
};

