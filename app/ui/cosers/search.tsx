"use client";
import { Input } from "@nextui-org/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="relative px-px left-[50%] translate-x-[-50%] lg:w-1/2 xl:w-2/5">
      <Input
        type="text"
        placeholder={placeholder}
        onValueChange={(value) => handleSearch(value)}
        defaultValue={searchParams.get("query")?.toString()}
        endContent={
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />
        }></Input>
    </div>
  );
}