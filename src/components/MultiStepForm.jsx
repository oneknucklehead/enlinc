import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

const StepOne = ({ register, errors }) => (
  <div className="space-y-4">
    {/* Name Fields */}
    {/* <input
      {...register("firstName", { required: "First name is required" })}
      placeholder="First Name"
      className="w-full p-2 border rounded"
    />
    {errors.firstName && (
      <p className="text-red-500">{errors.firstName.message}</p>
    )}

    <input
      {...register("lastName", { required: "Last name is required" })}
      placeholder="Last Name"
      className="w-full p-2 border rounded"
    />
    {errors.lastName && (
      <p className="text-red-500">{errors.lastName.message}</p>
    )} */}

    {/* Handset Quantity Question */}
    <div>
      <label className="block font-semibold mb-2">
        Q. How Many Handsets Do You Need?
      </label>
      <div className="pl-4 flex gap-4 flex-wrap">
        {["1-5", "5-10", "10-15", "20-25"].map((range, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input
              type="radio"
              value={range}
              {...register("handsetRange", {
                required: "Please select a range",
              })}
              className="form-radio text-blue-600"
            />
            {range}
          </label>
        ))}
      </div>
      {errors.handsetRange && (
        <p className="text-red-500 mt-1">{errors.handsetRange.message}</p>
      )}
    </div>
  </div>
);

const StepTwo = ({ register, errors }) => (
  <div className="space-y-4">
    <input
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format",
        },
      })}
      placeholder="Email"
      className="w-full p-2 border rounded"
    />
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

    <input
      {...register("phone", {
        required: "Phone number is required",
        minLength: { value: 10, message: "Min 10 digits" },
      })}
      placeholder="Phone"
      className="w-full p-2 border rounded"
    />
    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
  </div>
);

const StepThree = ({ watch }) => {
  const data = watch();
  return (
    <div className="space-y-2">
      <h3 className="font-bold">Confirm Details</h3>
      <p>
        <strong>First Name:</strong> {data.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {data.lastName}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
    </div>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const nextStep = async () => {
    let valid = false;

    if (step === 1)
      valid = await trigger([
        // "firstName", "lastName",

        "handsetRange",
      ]);
    else if (step === 2) valid = await trigger(["email", "phone"]);
    else valid = true;

    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* <div className="text-center font-semibold">Step {step} of 3</div> */}

        {step === 1 && <StepOne register={register} errors={errors} />}
        {step === 2 && <StepTwo register={register} errors={errors} />}
        {step === 3 && <StepThree watch={watch} />}

        <div className="w-full space-y-3">
          {step > 1 && (
            <Button
              //   type="button"
              outline={true}
              onClick={prevStep}
              classname={"px-4 py-2 flex w-full justify-center"}
            >
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button
              //   type="button"
              onClick={nextStep}
              classname={"px-4 py-2 flex w-full justify-center"}
            >
              Continue
            </Button>
          ) : (
            <Button
              //   type="submit"
              //   onClick={onSubmit}
              classname={"px-4 py-2 flex w-full justify-center"}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
