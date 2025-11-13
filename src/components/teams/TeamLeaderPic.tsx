import { StaticImageData } from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface TeamLeaderProps {
  leader: {
    firstName: string;
    lastName: string;
    avatar?: StaticImageData;
  };
}

export default function TeamLeaderPic({ leader }: TeamLeaderProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar>
          {leader.avatar && (
            <AvatarImage src={leader.avatar.src} alt="team leader picture" />
          )}

          <AvatarFallback>
            {leader.firstName.slice(0, 1)}
            {leader.lastName.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        {leader.firstName} {leader.lastName}
      </TooltipContent>
    </Tooltip>
  );
}
