"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Send, Check, Loader2 } from "lucide-react";
import Btn from "../brand-button";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";
import { submitForm } from "@/lib/submit-form";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Please enter a short message (min 10 characters)."),
  botcheck: z.string().optional(),
});
type Values = z.infer<typeof schema>;

export default function ContactForm() {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", botcheck: "" },
  });
  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const mailtoFallback = () => {
    const v = form.getValues();
    return `mailto:${SITE.email}?subject=${encodeURIComponent("Website enquiry — " + v.name)}&body=${encodeURIComponent(v.message + "\n\nFrom: " + v.email)}`;
  };

  const onSubmit = async (data: Values) => {
    if (data.botcheck) return;
    try {
      await submitForm({
        formType: "contact",
        name: data.name,
        email: data.email,
        message: data.message,
        botcheck: data.botcheck,
      });
      toast.success("Message sent — we'll be in touch.");
    } catch {
      toast.error("Couldn't send your message.", {
        description: "Please email us directly instead.",
        action: { label: "Email", onClick: () => { window.location.href = mailtoFallback(); } },
      });
      throw new Error("submit failed");
    }
  };

  if (isSubmitSuccessful) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-line bg-bgsoft p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-green-100 text-green-600"><Check className="size-7" /></span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Message sent — we&apos;ll be in touch</h3>
        <p className="mt-2 text-sm text-slate">Your message was routed to {SITE.email}.</p>
        <Btn variant="soft" className="mt-4" onClick={() => form.reset()}>Send another</Btn>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)]">
        <input type="checkbox" {...form.register("botcheck")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@company.com" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea rows={4} placeholder="How can we help?" {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <Btn type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
          {isSubmitting ? "Sending…" : "Send Message"}
        </Btn>
      </form>
    </Form>
  );
}
