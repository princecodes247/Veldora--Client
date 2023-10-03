"use client";
import Image from "next/image";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/SettingsSidebarNav";
import Head from "next/head";
import { PageHeader } from "@/components/PageHeader";
import { sidebarNavItems } from "@/constants/nav";

interface SettingsLayoutProps {
  children: React.ReactNode;
  id: string;
}

export default function SettingsLayout({ children, id }: SettingsLayoutProps) {
  return (
    <>
      <Head>
        <title>Settings - Veldora</title>
        <meta name="description" content="Form data management made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="block space-y-6 p-8 pb-16">
          {/* <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div> */}
          <PageHeader
            title="Bucket Settings"
            description="Manage your bucket settings."
          />
          <Separator className="my-6" />
          <div className="flex flex-col gap-8 space-y-8 md:flex-row lg:space-x-12 lg:space-y-0 xl:flex-row">
            <aside className="">
              <SidebarNav items={sidebarNavItems(id)} />
            </aside>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
