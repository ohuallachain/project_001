import { ListIcon, PieChartIcon, StarIcon, Users2Icon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Paths } from '@/paths';
import pmImage from 'public/images/pm.jpg';
import rlImage from 'public/images/rl.jpg';
import tfImage from 'public/images/tf.jpg';
import TeamLeaderPic from './TeamLeaderPic';
import TeamPieChart from './TeamPieChart';
import TeamLineGraph from './TeamLineGraph';

const TeamLeaders = [
  {
    firstName: 'Peter',
    lastName: 'Moloney',
    avatar: pmImage,
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
  },
  {
    firstName: 'Michael',
    lastName: 'Chen',
  },
  {
    firstName: 'Reed',
    lastName: 'Lewis',
    avatar: rlImage,
  },
  {
    firstName: 'Jessica',
    lastName: 'Ramirez',
  },
  {
    firstName: 'David',
    lastName: 'Williams',
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
  },
  {
    firstName: 'Tina',
    lastName: 'Fanning',
    avatar: tfImage,
  },
  {
    firstName: 'Ahmed',
    lastName: 'Khan',
  },
];

export default function TeamStats() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="pb-0">
          <CardHeader>
            <CardTitle>Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users2Icon />
              <h1>8</h1>
            </span>
            <Button size={'xs'} asChild>
              <Link href={Paths.Teams()}>View All</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="pb-0">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Total Leaders</CardTitle>
            <CardDescription>
              <StarIcon className="text-yellow-600" />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            {TeamLeaders.map((leader, ind) => {
              return <TeamLeaderPic key={ind} leader={leader} />;
            })}
          </CardContent>
        </Card>

        <Card className="pb-0">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Team Distribution</CardTitle>
            <CardDescription>
              <PieChartIcon />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TeamPieChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListIcon />
            Support tickets resolved
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TeamLineGraph />
        </CardContent>
      </Card>
    </div>
  );
}
