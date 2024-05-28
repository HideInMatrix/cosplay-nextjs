import CosplayMain from "@/app/ui/cosplay/cosplays-main";

export default function Page({
  searchParams,
  params,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
  params?: {
    id: number;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  return (
    <div className="w-full px-8">
      <CosplayMain></CosplayMain>
    </div>
  );
}