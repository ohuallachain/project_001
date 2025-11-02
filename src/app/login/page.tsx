import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PersonStandingIcon } from 'lucide-react';

export default function Login() {
  return (
    <div className="flex flex-col justify-center  items-center gap-4">
      <PersonStandingIcon className="text-pink-100" size={60} />
      <Card className="flex flex-col gap-6 max-w-[600px]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-2">
            <div>
              <label>Email</label>
              <Input
                type="text"
                name="email"
                placeholder="xxx@example.com"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <Input
                type="text"
                name="password"
                placeholder="xxxxxx"
                required
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <Button variant={'outline'} className="w-full">
              Login with Google
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-row justify-between items-center gap-2 ">
          <CardDescription>Dont have an account?</CardDescription>
          <Button variant="ghost">Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
