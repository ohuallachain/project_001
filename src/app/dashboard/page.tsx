import EmployeeStats from '@/components/employees/EmployeeStats';
import TeamStats from '@/components/teams/TeamStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  return (
    <div>
      <Tabs defaultValue="employee">
        <TabsList className="mb-4">
          <TabsTrigger value="employee">Employee stats</TabsTrigger>
          <TabsTrigger value="team">Team stats</TabsTrigger>
        </TabsList>
        <TabsContent value="employee">
          <EmployeeStats />
        </TabsContent>
        <TabsContent value="team">
          <TeamStats />
        </TabsContent>
      </Tabs>
    </div>
  );
}
