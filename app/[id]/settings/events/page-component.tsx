"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
import { usePathname, useRouter } from "next/navigation";
import useBucket from "@/hooks/useBucket";
import useSubmissions from "@/hooks/useSubmissions";
import BucketAnalytics from "@/components/BucketAnalytics";
import { Copy, Trash } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "@/layouts/Dashboard.layout";
import SettingsLayout from "@/layouts/Settings.layout";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { BucketPage404 } from "@/components/errors/Error";
import { HowToSetup } from "@/components/HowToSetup";
import { apiUrl } from "@/constants";
import { BucketConfig } from "@/components/BucketConfig";
import { Loading } from "@/components/Loading";
import { PaginationState, Updater } from "@tanstack/react-table";
import { ISubmissionData } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { deleteSubmissions } from "@/services/BucketService";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import { BucketStructure } from "@/components/BucketStructure";

export default function BucketActionsSettingsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";

  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });

  return (
    <>
      <Head>
        <title>{bucket.data?.name ?? ""} - Veldora</title>

        <meta name="description" content="Form data managment made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 space-y-4 p-0 md:p-8">
        <div className="flex w-full justify-between">
          <div>
            {/* <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/> */}
          </div>
        </div>
        <div className="flex items-center justify-center">Coming Soon...</div>
      </div>
    </>
  );
}
