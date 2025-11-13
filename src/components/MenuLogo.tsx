import { PersonStandingIcon } from 'lucide-react';

export default function MenuLogo() {
  return (
    <div className="flex items-center">
      <PersonStandingIcon size={40} className="text-primary" />
      <h2>SupportMe</h2>
    </div>
  );
}
