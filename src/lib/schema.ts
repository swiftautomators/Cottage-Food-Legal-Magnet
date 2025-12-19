import * as z from "zod"

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    state: z.string().min(1, {
        message: "Please select your state.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    privacy: z.boolean().refine((val) => val === true, {
        message: "You must agree to the privacy policy.",
    }),
})

export type FormValues = z.infer<typeof formSchema>