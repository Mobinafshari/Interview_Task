import z from "zod";

const LoginSchema = z.object({
  mobile: z.string().regex(/^09\d{9}$/, "phone must be valid"),
});

export default LoginSchema;
export type LoginPayloadType = z.infer<typeof LoginSchema>;
