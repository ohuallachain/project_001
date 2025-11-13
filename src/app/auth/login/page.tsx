'use client';

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Paths } from '@/paths';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// zod schema
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(7),
});

export default function Login() {
  // define form with RHF & link to zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log('login validation passed', data);
    // call the server action here???
  }

  return (
    <div className="flex flex-col justify-center  items-center gap-4">
      <Card className="flex flex-col gap-6 max-w-[400px]">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@doe.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the email address you signed up to SupportMe
                        with
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••••"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-row justify-between items-center gap-2 ">
          <CardDescription>Dont have an account?</CardDescription>
          <Button variant="ghost" asChild>
            <Link href={Paths.Signup()}>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
