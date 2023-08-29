"use client";
import { LayoutGrid, List } from "lucide-react";
import { useDebounce } from "react-use";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "@/components/Search";
import { DashboardNav } from "@/components/DashboardNav";
import Head from "next/head";
import { BucketCard } from "@/components/BucketCard";
import CreateBucketDialog from "@/components/dialogs/CreateBucket.dialog";
import useUserBuckets from "@/hooks/useUserBuckets";
import React, { useState } from "react";
import withAuthHOC from "@/HOCs/withAuthHOC";
import { BucketCardSkeleton } from "@/components/BucketCardSkeleton";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { BucketPage404 } from "@/components/errors/Error";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

function Dashboard() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const buckets = useUserBuckets({
    page,
    pageSize,
  });

  const [openCreateBucket, setOpenCreateBucket] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery);
    },
    500,
    [searchQuery],
  );

  return (
    <DashboardLayout>
      <Head>
        <title>Veldora</title>
        <meta name="description" content="Generated by Veldora" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        <Tabs defaultValue="grid-view" className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row">
            <Search
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <div className="flex gap-2">
              <TabsList>
                <TabsTrigger value="grid-view">
                  <LayoutGrid size={18} />
                </TabsTrigger>
                <TabsTrigger value="list-view">
                  <List size={18} />
                </TabsTrigger>
                {/* <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger> */}
              </TabsList>
              <CreateBucketDialog
                open={openCreateBucket}
                setOpen={setOpenCreateBucket}
              />
            </div>
          </div>

          {buckets.isError ? (
            <div>
              <BucketPage404 type="GET_BUCKETS_FAILURE" />
            </div>
          ) : (
            <>
              {!buckets.isLoading &&
                buckets.data?.pages[0]?.data?.length === 0 && (
                  <div className="flex min-h-[40vh] flex-col items-center justify-center py-12">
                    <div className="w-16 text-gray-300 md:w-24">
                      <Logo variant="plain" />
                    </div>

                    <h2 className="mt-4 text-xl md:text-3xl">
                      Oops! No bucket created yet!
                    </h2>
                    <p className="mx-auto my-4 max-w-[600px] text-center text-gray-500">
                      {" "}
                      Fear not! Let&apos;s create an army of buckets now!
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setOpenCreateBucket(true)}
                    >
                      Create form bucket 🚀
                    </Button>
                  </div>
                )}
              <TabsContent value="grid-view" className="space-y-4">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {React.Children.toArray(
                    buckets.isLoading &&
                      [0, 0, 0, 0, 0, 0].map(() => <BucketCardSkeleton />),
                  )}

                  {React.Children.toArray(
                    !buckets.isLoading &&
                      buckets.data?.pages?.map((group) =>
                        group?.data
                          ?.filter((bucket) => {
                            return (
                              bucket.name
                                .toLowerCase()
                                .includes(debouncedSearchQuery.toLowerCase()) ||
                              bucket.description
                                .toLowerCase()
                                .includes(debouncedSearchQuery.toLowerCase())
                            );
                          })
                          .map((bucket) => <BucketCard bucket={bucket} />),
                      ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="list-view" className="space-y-4">
                <div className="flex flex-col gap-4">
                  {React.Children.toArray(
                    !buckets.isLoading &&
                      buckets.data?.pages?.map((group) =>
                        group?.data
                          ?.filter((bucket) =>
                            bucket.name
                              .toLowerCase()
                              .includes(debouncedSearchQuery.toLowerCase()),
                          )
                          .map((bucket) => <BucketCard bucket={bucket} />),
                      ),
                  )}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
