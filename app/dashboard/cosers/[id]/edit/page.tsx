import { fetchCoserInfoById } from "@/app/lib/fetchData/fetchCoser";
import { EditCoserForm } from "@/app/ui/dashboard/coser/edit-form";

export default async function Page({
  params,
}: {
  searchParams?: {
    page?: string;
    query?: string;
  };
  params?: {
    id: string;
  };
}) {
  const coserId = Number(params?.id) || 0;
  const coserInfo = await fetchCoserInfoById({ coserId: coserId });
  return (
    <>
      <EditCoserForm coserInfo={coserInfo} />
    </>
  );
}
