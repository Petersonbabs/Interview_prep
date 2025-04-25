"use client"
import Image from 'next/image'
import {useState} from 'react'
import { Button } from './ui/button'
import { Form } from './ui/form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import FormField from './commons/FormField'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatedLoader } from './commons/Loader'

const authFormSchema = (type:FormType)=>{
  return z.object({
    name: type === "sign-up" ? z.string().nonempty("Name is required").min(3, "Name must be at least 3 characters") : z.string().optional(),
    email: z.string().nonempty("Email is required").email("Provide a valid email"),
    password: z.string().nonempty("Password is required").min(8, "Password must be at least 8 characters")
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })
  const router = useRouter()
  const {formState:{errors}} = form
  const [submittingForm, setSubmittingForm] = useState(false)

  const onSubmit = (values: z.infer<typeof formSchema>) => {
   setSubmittingForm(true)
   try {
     if(type === "sign-in"){
       toast.success("Welcome back!" + values)
       router.push("/")
      } else {
        toast.success("Welcome on board! Please signin")
        router.push("/signin")
      }
    } catch (error) {
      toast.error("There was an error")
      console.log(error);
    } finally{
      setSubmittingForm(false)
    }
  }
  const isSignIn = type === "sign-in"
  return (
    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 border card py-10 px-6'>
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepBuddy</h2>
        </div>
        <h3 className='text-[14px] text-center md:text-2xl'>Practice job interviews with AI</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6 form mt-4'>
            {
              !isSignIn && (
                <FormField name='name' label='Name' placeholder='Elon musk' control={form.control} errorMessage={errors?.name?.message as string}/>
              )
            }
            <FormField name='email' label='Email' placeholder='elon@gmail.com' type='email' control={form.control} errorMessage={errors?.email?.message as string}/>
            <FormField name='password' label='Password' placeholder='********' type='password' control={form.control} errorMessage={errors?.password?.message as string}/>
            <Button className='btn' disabled={submittingForm}>{!submittingForm ? <span>{isSignIn ? "Sign in" : "Create an Account"}</span>: "Authenticating" } {submittingForm && <AnimatedLoader />}</Button>
          </form>
        </Form>
          <p className='text-center'>
            {
              isSignIn ? "No account yet?" : "Have an account?"
            }
            <Link className="font-bold text-user-primary ml-1" href={isSignIn ? "/signup" : "signin"}> {isSignIn ? "Sign up" : "Sign in"} </Link>
          </p>
      </div>
    </div>
  )
}

export default AuthForm