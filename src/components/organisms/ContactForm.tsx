// src/components/organisms/ContactForm.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../molecules/FormInput";
import { FormSelect } from "../molecules/FormSelect";
import { Button } from "../atoms/Button";
import { formContactSchema, type formContact } from "../../schema/mmm/types";
import { postFormContact } from "../../services/articles/article.service";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  
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
    <div className="bg-white px-4 md:px-12 py-8 md:py-12 rounded-3xl">
      <h2 className="text-xl lg:text-[26px] font-bold text-grayCustom uppercase">
        {t("contact.form.title")}
      </h2>
      <p className="mt-4 text-[15px] text-gray-600">
        {t("contact.form.description")}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 md:mt-8 space-y-4">
        <FormInput<formContact>
          name="name"
          placeholder={t("contact.form.fields.name")}
          register={register}
        />
        {errors.name && (
          <p className="text-red-500 text-[15px]">{errors.name.message}</p>
        )}

        <FormSelect<formContact>
          name="empresa_organizacion"
          placeholder={t("contact.form.fields.company")}
          register={register}
          options={[
            { value: "Empresa", label: t("contact.form.fields.companyOptions.business") },
            { value: "Organización", label: t("contact.form.fields.companyOptions.organization") },
          ]}
        />
        {errors.empresa_organizacion && (
          <p className="text-red-500 text-[15px]">
            {errors.empresa_organizacion.message}
          </p>
        )}

        <FormInput<formContact>
          name="email"
          placeholder={t("contact.form.fields.email")}
          register={register}
        />
        {errors.email && (
          <p className="text-red-500 text-[15px]">{errors.email.message}</p>
        )}

        <FormInput<formContact> name="position" placeholder={t("contact.form.fields.position")} register={register} />
        {errors.position && (
          <p className="text-red-500 text-[15px]">{errors.position.message}</p>
        )}

        <FormInput<formContact>
          name="website"
          placeholder={t("contact.form.fields.website")}
          register={register}
        />
        {errors.website && (
          <p className="text-red-500 text-[15px]">{errors.website.message}</p>
        )}

        <FormInput<formContact>
          name="message"
          placeholder={t("contact.form.fields.message")}
          register={register}
        />
        {errors.message && (
          <p className="text-red-500 text-[15px]">{errors.message.message}</p>
        )}

        {isSubmitSuccessful && (
        <p className="text-green-500 text-[15px]">{t("contact.form.success")}</p>
      )}

        <Button
          type="submit"
          variant="gradient"
          className="uppercase text-black text-[15px]"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? t("contact.form.buttons.sending")
            : isSubmitSuccessful
            ? t("contact.form.buttons.sent")
            : t("contact.form.buttons.send")}
        </Button>
      </form>
    </div>
  );
};
