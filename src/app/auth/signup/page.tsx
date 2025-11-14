'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Paths } from '@/paths';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(7, 'Password must contain at least 8 characters')
      .refine((password) => {
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
      }, 'must contain at least one uppercase & one special character'),
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password != data.passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirm'],
        message: 'Passwords do not match',
      });
    }
  });

const baseSchema = z
  .object({
    email: z.string().email(),
    accountType: z.enum(['personal', 'company']),
    companyName: z.string().optional(),
    numEmployees: z
      .preprocess((val) => {
        // If the value is an empty string (""), treat it as undefined.
        // Otherwise, pass the value through (which could be a string or number).
        return val === '' ? undefined : val;
      }, z.coerce.number()) // Now, coerce only if it's not undefined
      .optional(), // Keep it optional for the final type safety
    acceptTerms: z.boolean(),
    dateOfBirth: z.date().refine((date) => {
      const today = new Date();
      const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      return date <= eighteenYearsAgo;
    }, 'you must be at least 18 years old'),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === 'company' && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['companyName'],
        message: 'Company name is required',
      });
    }

    if (
      data.accountType === 'company' &&
      (!data.numEmployees || data.numEmployees < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['numEmployees'],
        message: 'Number of employees is required',
      });
    }
  });

// joining together the 2 zod schemas
const formSchema = baseSchema.and(passwordSchema);

export default function signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      accountType: 'personal',
      passwordConfirm: '',
      acceptTerms: false,
      dateOfBirth: new Date('2000-01-01'),
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log('Sign up submitted', data);
    // call a server action here with the data object
  }

  // get values from RHF
  const accountType = form.watch('accountType');

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Card className="flex flex-col gap-8 min-w-[400px] max-w-[600px]">
        <CardHeader>
          <CardTitle>
            <h3>Sign up</h3>
          </CardTitle>
          <CardDescription>Create a new SupportMe account</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormDescription>Type in your email</FormDescription>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@doe.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Account Type</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="select an account type" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Account Types</SelectLabel>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="company">Company</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="normal-case font-normal flex justify-between"
                            >
                              {field.value
                                ? field.value.toLocaleDateString()
                                : 'Pick a date'}
                              <CalendarIcon />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className=" p-0 w-auto">
                          <Calendar
                            mode="single"
                            defaultMonth={field.value}
                            selected={field.value}
                            onSelect={field.onChange}
                            fixedWeeks
                            weekStartsOn={1}
                            captionLayout="dropdown"
                            disabled={[
                              {
                                after: new Date(),
                              },
                              {
                                before: new Date('1900 - 01 - 01'),
                              },
                            ]}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  );
                }}
              />

              {accountType === 'company' && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="type name of company"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="numEmployees"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Number of Employees</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              placeholder="eg. 42"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </>
              )}

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

              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Confirm password</FormLabel>
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

              <FormField
                name="acceptTerms"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <div className="flex items-center gap-4">
                        <FormControl>
                          <Checkbox
                            id="acceptTerms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I accept the terms & conditions</FormLabel>
                      </div>
                      <FormDescription>
                        By signing up you agree to our{' '}
                        <Link
                          href={'terms'}
                          className="text-primary hover:underline"
                        >
                          terms & conditions
                        </Link>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Button>Sign up</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <small>Already have an account?</small>
          <Button variant="ghost" asChild>
            <Link href={Paths.Login()}>Log in</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
