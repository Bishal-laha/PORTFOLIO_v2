"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/Index";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn(" lg:fixed top-0 lg:top-10 inset-x-0 w-full lg:max-w-2xl mx-auto lg:z-50", className)}>
            <Menu setActive={setActive}>
                <HoveredLink href="/"><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></HoveredLink>
                <HoveredLink href="/#about"><MenuItem setActive={setActive} active={active} item="About"></MenuItem></HoveredLink>
                <HoveredLink href="/#project"><MenuItem setActive={setActive} active={active} item="Projects"></MenuItem></HoveredLink>
                <HoveredLink href="/#skill"><MenuItem setActive={setActive} active={active} item="Skills"></MenuItem></HoveredLink>
                <HoveredLink href="/#contact"><MenuItem setActive={setActive} active={active} item="Contact Me"></MenuItem></HoveredLink>
            </Menu>
        </div>
    )
}

export default Navbar
