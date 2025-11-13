import {
  BadgeAlertIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheckIcon,
  UserIcon,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Paths } from '@/paths';
import { cn } from '@/lib/utils';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '../ui/avatar';
import pmImage from 'public/images/pm.jpg';
import EmployeeChart from './EmployeeChart';

export default function EmployeeStats() {
  const employeesNum = 80;
  let textColor;
  let employeesIcon;

  if (employeesNum < 80) {
    textColor = 'text-destructive';
    employeesIcon = <BadgeAlertIcon />;
  } else {
    textColor = 'text-constructive';
    employeesIcon = <BadgeCheckIcon />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <UserIcon />
              <h1>100</h1>
            </div>
            <Button size="xs" asChild>
              <Link href={Paths.Employees()}>View all</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Employees present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <UserCheckIcon />
              <h1>{employeesNum}</h1>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <span className={cn('text-xs flex items-center gap-2', textColor)}>
              {employeesIcon}
              {employeesNum}% of employees are present
            </span>
          </CardFooter>
        </Card>

        <Card className="border-primary flex flex-col">
          <CardHeader>
            <CardTitle>Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={pmImage.src}
                alt="employee of the month"
                className="rounded-full w-10"
              />
              <AvatarFallback>PM</AvatarFallback>
            </Avatar>
            <h3>Peter Moloney!</h3>
          </CardContent>
          <CardFooter className="mt-auto">
            <span className="flex items-center gap-2 text-xs">
              <PartyPopperIcon className="text-primary" />
              Congratulations, Peter!
            </span>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LaptopIcon />
            Employee work location trends
          </CardTitle>
        </CardHeader>
        <CardContent className="px-1">
          <EmployeeChart />
        </CardContent>
      </Card>
    </div>
  );
}
