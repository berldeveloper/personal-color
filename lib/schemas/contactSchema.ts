import { addRequestMeta } from "next/dist/server/request-meta";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  nohp: z
    .string()
    .min(10, "Nomor HP minimal 10 digit")
    .regex(/^[0-9]+$/, "Hanya boleh angka"),
  address: z.string().min(5, "Alamat minimal 5 karakter"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
