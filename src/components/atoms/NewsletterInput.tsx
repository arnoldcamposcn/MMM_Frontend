import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type newsletter } from "../../schema/mmm/types";
import { postNewsletter } from "../../services/articles/article.service";

interface NewsletterInputProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

const NewsletterInput: React.FC<NewsletterInputProps> = ({
  placeholder = "Introduce tu email ...........",
  buttonText = "Suscribirse",
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<newsletter>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: newsletter) => {
    try {
      await postNewsletter(data);
      reset(); // limpiar input si todo ok
    } catch (err) {
      console.error("Error al suscribirse:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-3 ${className}`}>
      <div className="flex flex-row gap-0">
        <input
          type="email"
          placeholder={placeholder}
          {...register("email")}
          className="paragraph-magazine w-full px-0 py-2.5 bg-transparent border-b"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full paragraph-magazine px-0 py-1 border border-white rounded-full text-white"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 
                  1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </span>
          ) : (
            buttonText
          )}
        </button>
      </div>

      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      {isSubmitSuccessful && (
        <p className="text-green-500 text-sm">¡Suscripción completada!</p>
      )}
    </form>
  );
};

export default NewsletterInput;
