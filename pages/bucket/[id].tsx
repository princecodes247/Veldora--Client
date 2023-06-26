import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardNav } from "@/components/DashboardNav";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
import { useRouter } from "next/router";
import useBucket from "@/hooks/useBucket";
import useSubmissions from "@/hooks/useSubmissions";
import BucketAnalytics from "@/components/BucketAnalytics";

export default function Bucket() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const bucket = useBucket(id ?? "");
  const submissions = useSubmissions({
    id: id ?? "",
    page: 1,
    pageSize: 10,
  });
  return (
    <>
      <div className="flex flex-col">
        <Head>
          <title>Bucket Name - Veldora</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DashboardNav />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {bucket.data?.name ?? ""}
            </h2>
            <p>{bucket.data?.description ?? ""}</p>
          </div>
          <Tabs defaultValue="submissions" className="space-y-4">
            <TabsList>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="submissions">Submissions</TabsTrigger>
              <TabsTrigger value="config">Config</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="space-y-4">
              <BucketAnalytics bucket={bucket.data} />
            </TabsContent>
            <TabsContent value="submissions" className="space-y-4">
              <DataTable
                data={
                  submissions?.data?.map((submission) => {
                    console.log({ submission });
                    return {
                      ...submission,
                      ...submission.data,
                    };
                  }) ?? []
                }
                columns={submissionColumns(
                  Array.from(
                    new Set(
                      submissions?.data?.flatMap((submission) =>
                        Object.keys(submission.data),
                      ),
                    ),
                  ),
                )}
              />
            </TabsContent>
            <TabsContent value="config" className="space-y-4"></TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
