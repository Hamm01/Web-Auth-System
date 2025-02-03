"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import z from "zod"
import { Form } from "@/components/ui/form"

const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(6),
})

type SignUpForm = z.infer<typeof signUpSchema>

export function SignUpTab() {
    const form = useForm<SignUpForm>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })
    function handleSignUp(data: SignUpForm) {
        console.log(data)
    }

    return <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleSignUp)}>

        </form>

    </Form>
}