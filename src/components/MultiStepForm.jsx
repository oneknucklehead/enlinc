import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import axios from "axios";

const TOTAL_STEPS = 7; // New Constant!

const StepOne = ({ register, errors }) => (
  <div className="space-y-4">
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
      {...register("postalCode", { required: "Postal code is required" })}
      placeholder="Postal Code"
      className="w-full p-2 border rounded"
    />
    {errors.postalCode && (
      <p className="text-red-500">{errors.postalCode.message}</p>
    )}
  </div>
);

const StepThree = ({ register, errors }) => (
  <div className="space-y-4">
    <input
      {...register("fullName", { required: "Full Name is required" })}
      placeholder="Full Name"
      className="w-full p-2 border rounded"
    />
    {errors.fullName && (
      <p className="text-red-500">{errors.fullName.message}</p>
    )}
  </div>
);

const StepFour = ({ register, errors }) => (
  <div className="space-y-4">
    <input
      {...register("companyName", { required: "Company Name is required" })}
      placeholder="Company Name"
      className="w-full p-2 border rounded"
    />
    {errors.companyName && (
      <p className="text-red-500">{errors.companyName.message}</p>
    )}
  </div>
);

const StepFive = ({ register, errors }) => (
  <div className="space-y-4">
    <input
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format",
        },
      })}
      placeholder="Email Address"
      className="w-full p-2 border rounded"
    />
    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  </div>
);

const StepSix = ({ register, errors }) => (
  <div className="space-y-4">
    <input
      {...register("phone", {
        required: "Phone number is required",
        minLength: { value: 10, message: "Minimum 10 digits" },
      })}
      placeholder="Phone Number"
      className="w-full p-2 border rounded"
    />
    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
  </div>
);

const StepSeven = ({ watch }) => {
  const data = watch();
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-xl mb-4">Confirm Your Details</h3>
      <p>
        <strong>Handset Range:</strong> {data.handsetRange}
      </p>
      <p>
        <strong>Postal Code:</strong> {data.postalCode}
      </p>
      <p>
        <strong>Full Name:</strong> {data.fullName}
      </p>
      <p>
        <strong>Company Name:</strong> {data.companyName}
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
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await trigger(["handsetRange"]);
    else if (step === 2) valid = await trigger(["postalCode"]);
    else if (step === 3) valid = await trigger(["fullName"]);
    else if (step === 4) valid = await trigger(["companyName"]);
    else if (step === 5) valid = await trigger(["email"]);
    else if (step === 6) valid = await trigger(["phone"]);
    else valid = true;

    if (valid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log(data);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/sales@en-linc.com", data)
      .then((response) => {
        console.log(response);
        if (response.data.success === "true") {
          setSuccessMessage("Your message has been sent successfully! ✅");
          setErrorMessage("");
          reset();
          setStep(1);
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          setErrorMessage("Failed to send message. Please try again later.");
          setSuccessMessage("");
          setTimeout(() => {
            setErrorMessage("");
          }, 5000);
        }
      })
      .catch((error) => {
        setErrorMessage("Failed to send message. Please try again later.");
        setSuccessMessage("");
        console.error(error);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });
  };

  // Calculate progress %
  const progressPercentage = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div>
      <div className="max-w-xl mx-auto p-6 space-y-6 bg-white rounded-md">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
          <div
            className=" bg-gradient-to-r from-[#142462] to-[#2A6A9E]  rounded-full h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Step Components */}
          {step === 1 && <StepOne register={register} errors={errors} />}
          {step === 2 && <StepTwo register={register} errors={errors} />}
          {step === 3 && <StepThree register={register} errors={errors} />}
          {step === 4 && <StepFour register={register} errors={errors} />}
          {step === 5 && <StepFive register={register} errors={errors} />}
          {step === 6 && <StepSix register={register} errors={errors} />}
          {step === 7 && <StepSeven watch={watch} />}

          {/* Buttons */}
          <div className="w-full space-y-3">
            {step > 1 && (
              <Button
                outline={true}
                onClick={(e) => {
                  e.preventDefault(); // Important: prevent form submit on back
                  prevStep();
                }}
                classname="px-4 py-2 flex w-full justify-center"
              >
                Back
              </Button>
            )}

            {step < TOTAL_STEPS ? (
              <Button
                onClick={(e) => {
                  e.preventDefault(); // Important: prevent accidental submit
                  nextStep();
                }}
                classname="px-4 py-2 flex w-full justify-center"
              >
                Continue
              </Button>
            ) : (
              <Button
                type="button" // << Important: type="button" not "submit"
                onClick={handleSubmit(onSubmit)} // Submit only manually
                classname="px-4 py-2 flex w-full justify-center"
              >
                Submit
              </Button>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="mt-4 bg-green-100 text-green-800 font-semibold px-4 py-3 rounded transition-all duration-300">
                {successMessage}
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="mt-4 bg-red-100 text-red-800 font-semibold px-4 py-3 rounded transition-all duration-300">
                {errorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
