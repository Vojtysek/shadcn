import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="m-24 rounded-sm grid grid-cols-4 gap-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div key={id} className="col-span-4 md:col-span-2">
          <Skeleton className="h-6 w-1/2 mb-2 bg-gray-700"></Skeleton>
          <Skeleton className="h-4 w-1/4 mb-4 bg-gray-700"></Skeleton>
          <Skeleton className="rounded-md w-full h-80 mb-2 bg-gray-800"></Skeleton>
          <Skeleton className="h-6 w-full bg-gray-700"></Skeleton>
        </div>
      ))}
    </main>
  );
}
