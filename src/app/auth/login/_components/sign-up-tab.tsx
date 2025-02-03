import z from "zod"

const signUpSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(6),
})

export function SignUpTab() {
    return null
}