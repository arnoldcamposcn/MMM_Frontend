// src/components/organisms/ContactForm.tsx
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../molecules/FormInput";
import { Button } from "../atoms/Button";
import { formContactSchema, type formContact } from "../../schema/mmm/types";
import { postFormContact } from "../../services/articles/article.service";

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  });

  const onSubmit: SubmitHandler<formContact> = async (data) => {
    try {
      await postFormContact(data);
      reset(); // limpiar después de enviar
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl">
      <h2 className="text-2xl lg:text-3xl font-bold text-grayCustom uppercase">
        Contacta a nuestros especialistas
      </h2>
      <p className="mt-4 text-gray-600">
        Cuéntanos sobre tu proyecto o consulta y uno de nuestros especialistas
        te contactará en breve.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
        <FormInput<formContact>
          name="name"
          placeholder="Ingresar nombres completos"
          register={register}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <FormInput<formContact>
          name="empresa_organizacion"
          placeholder="Empresa / Organización"
          register={register}
        />
        {errors.empresa_organizacion && (
          <p className="text-red-500 text-sm">
            {errors.empresa_organizacion.message}
          </p>
        )}

        <FormInput<formContact>
          name="email"
          placeholder="Correo corporativo"
          register={register}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <FormInput<formContact> name="position" placeholder="Rol" register={register} />
        {errors.position && (
          <p className="text-red-500 text-sm">{errors.position.message}</p>
        )}

        <FormInput<formContact>
          name="website"
          placeholder="Página web"
          register={register}
        />
        {errors.website && (
          <p className="text-red-500 text-sm">{errors.website.message}</p>
        )}

        <FormInput<formContact>
          name="message"
          placeholder="Cuéntanos sobre tu proyecto"
          register={register}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}

        {isSubmitSuccessful && (
        <p className="text-green-500 text-sm">¡Mensaje enviado!</p>
      )}

        <Button
          type="submit"
          variant="gradient"
          className="uppercase text-black"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Enviando..."
            : isSubmitSuccessful
            ? "¡Enviado!"
            : "Enviar Mensaje"}
        </Button>
      </form>
    </div>
  );
};
