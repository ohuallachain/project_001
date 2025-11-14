'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) => {
      const avatar: string = row.getValue('avatar');
      const firstName: string = row.getValue('firstName');
      const lastName: string = row.getValue('lastName');

      return (
        <Avatar>
          <AvatarImage src={avatar} alt="profile image" />
          <AvatarFallback className="p-2 ">
            {firstName.slice(0, 1)}
            {lastName.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'first name',
  },
  {
    accessorKey: 'lastName',
    header: 'last name',
  },
  {
    accessorKey: 'teamName',
    header: 'team name',
  },
  {
    accessorKey: 'isTeamLeader',
    header: 'team leader',
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue('isTeamLeader');

      if (isTeamLeader) {
        return <Badge variant="default">Team Leader</Badge>;
      } else {
        return <></>;
      }
    },
  },
  {
    accessorKey: 'id',
    header: 'id',
  },
];
