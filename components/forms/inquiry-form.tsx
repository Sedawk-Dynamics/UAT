"use client";

import { useEffect } from "react";
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
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CATALOG, getProduct } from "@/lib/products";
import { INDUSTRIES, SITE } from "@/lib/site";
import { submitForm } from "@/lib/submit-form";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(7, "Enter a valid phone number.").regex(/^[\d+\-\s()]+$/, "Enter a valid phone number."),
  product: z.string().optional(),
  industry: z.string().optional(),
  capacity: z.string().optional(),
  message: z.string().min(10, "Please describe your requirement (min 10 characters)."),
  botcheck: z.string().optional(),
});
type Values = z.infer<typeof schema>;

export default function InquiryForm({
  prefillProduct,
  prefillIndustry,
}: {
  prefillProduct?: string;
  prefillIndustry?: string;
}) {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", company: "", email: "", phone: "",
      product: prefillProduct ?? "", industry: prefillIndustry ?? "",
      capacity: "", message: "", botcheck: "",
    },
  });
  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (prefillProduct) form.setValue("product", prefillProduct);
    if (prefillIndustry) form.setValue("industry", prefillIndustry);
  }, [prefillProduct, prefillIndustry, form]);

  const mailtoFallback = () => {
    const v = form.getValues();
    const prod = v.product ? getProduct(v.product)?.name ?? v.product : "General enquiry";
    const body = encodeURIComponent(
      `Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nPhone: ${v.phone}\nProduct/Category: ${prod}\nIndustry: ${v.industry}\nRequired capacity/airflow: ${v.capacity}\n\nMessage:\n${v.message}`
    );
    return `mailto:${SITE.email}?subject=${encodeURIComponent("New website enquiry — UAT (" + prod + ")")}&body=${body}`;
  };

  const onSubmit = async (data: Values) => {
    if (data.botcheck) return;
    const prod = data.product ? getProduct(data.product)?.name ?? data.product : "General enquiry";
    try {
      await submitForm({
        formType: "inquiry",
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        product: prod,
        industry: data.industry || "—",
        capacity: data.capacity || "—",
        message: data.message,
        botcheck: data.botcheck,
      });
      toast.success("Inquiry sent — we'll be in touch.");
    } catch {
      toast.error("Couldn't send your inquiry.", {
        description: "Please email us directly instead.",
        action: { label: "Email", onClick: () => { window.location.href = mailtoFallback(); } },
      });
      throw new Error("submit failed"); // keep isSubmitSuccessful false
    }
  };

  if (isSubmitSuccessful) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-line bg-bgsoft p-8 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-green-100 text-green-600"><Check className="size-8" /></span>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">Thank you — we&apos;ll be in touch</h2>
        <p className="mx-auto mt-2 max-w-md text-slate">
          Your inquiry has been sent to <a href={`mailto:${SITE.email}`} className="font-semibold text-blue">{SITE.email}</a>.
          Our engineers typically respond within one working day.
        </p>
        <Btn variant="soft" className="mt-6" onClick={() => form.reset()}>Send another inquiry</Btn>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04),0_10px_30px_rgba(11,18,32,0.06)] sm:p-8">
        {/* honeypot */}
        <input type="checkbox" {...form.register("botcheck")} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Name *</FormLabel><FormControl><Input placeholder="Your full name" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="company" render={({ field }) => (
            <FormItem><FormLabel>Company *</FormLabel><FormControl><Input placeholder="Company name" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email *</FormLabel><FormControl><Input type="email" placeholder="you@company.com" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem><FormLabel>Phone *</FormLabel><FormControl><Input placeholder="+91 …" {...field} /></FormControl><FormMessage /></FormItem>
          )} />

          <FormField control={form.control} name="product" render={({ field }) => (
            <FormItem>
              <FormLabel>Product / Category</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl><SelectTrigger className="w-full"><SelectValue placeholder="Select a product…" /></SelectTrigger></FormControl>
                <SelectContent>
                  {CATALOG.map((c) => (
                    <SelectGroup key={c.slug}>
                      <SelectLabel>{c.name}</SelectLabel>
                      {c.products.map((p) => <SelectItem key={p.slug} value={p.slug}>{p.name}</SelectItem>)}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="industry" render={({ field }) => (
            <FormItem>
              <FormLabel>Application / Industry</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl><SelectTrigger className="w-full"><SelectValue placeholder="Select an industry…" /></SelectTrigger></FormControl>
                <SelectContent>
                  {INDUSTRIES.map((i) => <SelectItem key={i.name} value={i.name}>{i.name}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          <div className="sm:col-span-2">
            <FormField control={form.control} name="capacity" render={({ field }) => (
              <FormItem><FormLabel>Required capacity / airflow (optional)</FormLabel><FormControl><Input placeholder="e.g. 20,000 m³/hr, 250°C" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>

          <div className="sm:col-span-2">
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem><FormLabel>Message *</FormLabel><FormControl><Textarea rows={4} placeholder="Describe your application, dust/gas type, temperature, emission targets…" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Btn type="submit" disabled={isSubmitting} magnetic>
            {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            {isSubmitting ? "Sending…" : "Submit Inquiry"}
          </Btn>
          <p className="text-xs text-slate">Submissions are routed to <span className="font-semibold text-ink">{SITE.email}</span>.</p>
        </div>
      </form>
    </Form>
  );
}
