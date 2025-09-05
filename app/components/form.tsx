"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  phone: string;
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSuccess(true);
      reset();
      // schovat popup po 3 vteřinách
      setTimeout(() => setSuccess(false), 3000);
    }
    reset();
  };

  return (
    <div className="my-12">
      {success && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
          >
            ✅ Zpráva byla úspěšně odeslána!
          </motion.div>
        </AnimatePresence>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-lg"
      >
        <input
          {...register("name", { required: true })}
          placeholder="Jméno"
          className="border p-2 rounded"
        />
        <input
          {...register("email", { required: true })}
          placeholder="E-mail"
          className="border p-2 rounded"
        />
        <input
          {...register("phone", { required: true })}
          placeholder="Telefon"
          className="border p-2 rounded"
        />
        <textarea
          {...register("message", { required: true })}
          placeholder="Zpráva"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-red-700 text-white p-2 rounded">
          Odeslat SMS
        </button>
      </form>
    </div>
  );
}
