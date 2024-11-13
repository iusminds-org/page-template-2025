import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
}

const FormField = ({ 
  label, 
  name, 
  register, 
  error, 
  required = true,
  type = "text" 
}: { 
  label: string;
  name: keyof IFormInputs;
  register: any;
  error?: string;
  required?: boolean;
  type?: string;
}) => (
  <div className="flex flex-col gap-1 w-full">
    <div className="flex flex-row items-center gap-1">
      <label className="font-dm-sans font-semibold text-base leading-[21px]">
        {label}
      </label>
      {required && (
        <span className="text-red-500 text-[11px] leading-[14px]">*</span>
      )}
    </div>
    <input
      type={type}
      className={`w-full p-3 border ${error ? 'border-red-500' : 'border-gray-200'} 
        rounded-[4px] font-dm-sans text-base leading-[150%] focus:outline-none focus:ring-2 focus:ring-purple-500`}
      {...register(name, { required: required })}
    />
    {error && (
      <span className="text-red-500 text-sm">{error}</span>
    )}
  </div>
);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      console.log(data);
      reset();
      // You might want to show a success message
    } catch (error) {
      // Handle error
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start p-12 gap-6 w-full lg:w-[636px] bg-white shadow-lg rounded-xl"
    >
      <h2 className="text-left font-dm-sans font-extrabold text-[26px] leading-[41px] tracking-[0.02em] w-full">
        Request a Demo
      </h2>

      {/* Name Fields Row */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <FormField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName?.message}
        />
        <FormField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName?.message}
        />
      </div>

      {/* Email Field */}
      <FormField
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />

      {/* Company Field */}
      <FormField
        label="Company"
        name="company"
        register={register}
        error={errors.company?.message}
      />

      {/* Job Title Field */}
      <FormField
        label="Job Title"
        name="jobTitle"
        register={register}
        error={errors.jobTitle?.message}
      />

      {/* Message Field */}
      <div className="flex flex-col gap-1 w-full">
        <label className="font-dm-sans font-semibold text-base leading-[21px]">
          Message
        </label>
        <textarea
          className="w-full p-3 border border-gray-200 rounded-[4px] min-h-[100px]
            font-dm-sans text-base leading-[150%] focus:outline-none focus:ring-2 focus:ring-purple-500"
          {...register("message")}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center py-3 px-6 bg-[#533594] 
          border border-[#372B89] rounded-[4px] text-white font-dm-sans text-lg leading-[160%]
          hover:bg-[#472d80] transition-colors duration-200 disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm; 