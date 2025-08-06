"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconHome,
  IconBriefcase,
  IconUser,
  IconTool,
  IconMail,
  IconBrandLinktree,
  IconSun,
  IconMoon,
  IconBrandWhatsapp, // Ícone importado
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projetos",
      href: "/projetos",
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Linkbios",
      href: "/linkbios",
      icon: (
        <IconBrandLinktree className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Sobre",
      href: "/sobre",
      icon: (
        <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Serviços",
      href: "/servicos",
      icon: (
        <IconTool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contato",
      href: "/contato",
      icon: (
        <IconMail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <main
      className={`flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 w-full h-screen overflow-hidden`}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex-shrink-0 px-2">
              <span className="text-xs font-semibold text-gray-500 uppercase">
                {open ? "Menu" : "M"}
              </span>
            </div>
            <nav className="mt-4 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-start gap-2 group/sidebar py-2 px-1",
                    pathname === link.href && "bg-neutral-200 dark:bg-neutral-700 rounded-lg"
                  )}
                >
                  {link.icon}
                  <motion.span
                    animate={{
                      display: open ? "inline-block" : "none",
                      opacity: open ? 1 : 0,
                    }}
                    className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="px-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-start gap-2 group/sidebar py-2 w-full cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <IconSun className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              ) : (
                <IconMoon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              )}
              <motion.span
                animate={{
                  display: open ? "inline-block" : "none",
                  opacity: open ? 1 : 0,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
              >
                Tema
              </motion.span>
            </button>
            {/* Ícone do WhatsApp adicionado aqui */}
            <a
              // IMPORTANTE: Substitua SEUNUMERO pelo seu número com código do país (ex: 5511999999999)
              href="https://wa.me/5535999665912"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start gap-2 group/sidebar py-2 w-full cursor-pointer"
              aria-label="Contato via WhatsApp"
            >
              <IconBrandWhatsapp className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              <motion.span
                animate={{
                  display: open ? "inline-block" : "none",
                  opacity: open ? 1 : 0,
                }}
                className="text-neutral-700 dark:text-neutral-200 text-sm"
              >
                WhatsApp
              </motion.span>
            </a>
            <SidebarLink
              link={{
                label: "Guilherme Assis",
                href: "#",
                icon: (
                  <div className="relative h-8 w-8 flex-shrink-0">
                    <Image
                      src="/img/1728762062177.jpg"
                      className="rounded-full object-cover"
                      fill
                      alt="Avatar"
                    />
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {children}
    </main>
  );
}
