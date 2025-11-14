import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default async function LoadingEmployeesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-[60px_1fr_1fr_1fr_1fr] gap-4">
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />

        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />
        <Skeleton className="size-10 w-full" />
      </CardContent>
    </Card>
  );
}
