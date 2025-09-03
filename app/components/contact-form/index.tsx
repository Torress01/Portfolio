"use client";

import React from "react";
import { SectionTitle } from "../section-title";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };
  return (
    <section className="py-16 px-6 md:px-32 flex items-center justify-ce ter bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg text-gray-50 placeholder:text-gray-400 p-4 focus:outline-none focus:ring-1 ring-amber-500"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-800 rounded-lg text-gray-50 placeholder:text-gray-400 p-4 focus:outline-none focus:ring-1 ring-amber-500"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg text-gray-50 placeholder:text-gray-400 p-4 focus:outline-none focus:ring-1 ring-amber-500"
            maxLength={500}
            {...register("message")}
          />

          <Button className="w-max mx-auto mt-6">
            Enviar Mensagem
            <HiArrowNarrowRight />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
