import { type FieldValues, type FieldName, type UseFormRegister, type Path } from "react-hook-form";

interface FormSelectProps<T extends FieldValues> {
  name: FieldName<T>;
  placeholder: string;
  register: UseFormRegister<T>;
  options: Array<{ value: string; label: string }>;
  error?: string;
}

export const FormSelect = <T extends FieldValues>({
  name,
  placeholder,
  register,
  options,
  error,
}: FormSelectProps<T>) => (
  <div className="w-full">
    <select
      {...register(name as unknown as Path<T>)}
      className="text-black w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-cyan-500 text-[15px] cursor-pointer appearance-none bg-white"
      defaultValue=""
    >
      <option value="" disabled className="text-gray-400">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-black">
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-[15px] mt-1">{error}</p>}
  </div>
);

