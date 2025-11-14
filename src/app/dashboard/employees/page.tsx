import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { setTimeout } from 'timers/promises';
import { employees } from '@/data/employees';
import { DataTable } from '@/components/ui/DataTable';
import { columns } from './columns';
import { type Employee } from './columns';

export default async function EmployeesPage() {
  await setTimeout(2000);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable data={employees} columns={columns} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
