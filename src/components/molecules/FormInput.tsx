import { type FieldValues, type FieldName, type UseFormRegister, type Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  name: FieldName<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  type?: string;
  error?: string;
}

export const FormInput = <T extends FieldValues>({
  name,
  placeholder,
  register,
  type = "text",
  error,
}: FormInputProps<T>) => (
  <div className="w-full">
    <input
      type={type}
      placeholder={placeholder}
      {...register(name as unknown as Path<T>)}
      className="text-black w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-cyan-500 text-[15px]"
    />
    {error && <p className="text-red-500 text-[15px] mt-1">{error}</p>}
  </div>
);
