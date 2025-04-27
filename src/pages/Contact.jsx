// import React from "react";
// import Container from "../components/Container";

// const Contact = () => {
//   return (
//     <div>
//       <div className="px-4 mt-[92px] py-12">
//         <Container>
//           <div>
//             <h3 className="text-4xl">Get in touch</h3>
//             <p>
//               Enlinc is happy to address any inquiries you may have. <br />
//               Please fill out the form below, and we will contact you on
//               priority.
//             </p>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Container from "../components/Container";
import FAQSection from "../sections/FAQSection";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/zohebahmed1542@gmail.com", data)
      .then((response) => {
        console.log(response);
        // setLoader(false);
        if (response.data.success === "true") {
          setSuccessMessage("Your message has been sent successfully! ✅");
          setErrorMessage("");
          reset();
          setTimeout(() => {
            setSuccessMessage("");
          }, 5000);
        } else {
          setErrorMessage("Failed to send message. Please try again later.");
          setSuccessMessage("");
          // console.error(error);

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

  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px] py-12">
        <Container>
          <div className="flex text-center justify-center items-center flex-col">
            <h3 className="text-4xl">Get in touch</h3>

            <p className="py-4">
              Enlinc is happy to address any inquiries you may have. <br />
              Please fill out the form below, and we will contact you on
              priority.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Type of Enquiry */}
              <div>
                <label className="block mb-1 font-semibold">
                  Type of Enquiry
                </label>
                <select
                  {...register("typeOfEnquiry", { required: true })}
                  className="w-full border rounded px-3 py-2 bg-white"
                >
                  <option value="">Select Type of Enquiry</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Product Support">Product Support</option>
                  <option value="Partnership Opportunity">
                    Partnership Opportunity
                  </option>
                  <option value="Feedback">Feedback</option>
                </select>
                {errors.typeOfEnquiry && (
                  <p className="text-red-500 text-sm">
                    Please select an option
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block mb-1 font-semibold">Company Name</label>
                <input
                  {...register("companyName")}
                  type="text"
                  placeholder="Company Name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded px-3 py-2"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="e.g. johndoe@company.com"
                  className="w-full border rounded px-3 py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label className="block mb-1 font-semibold">
                  Contact Number
                </label>
                <input
                  {...register("contactNumber")}
                  type="text"
                  placeholder="e.g. 0412 345 678"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Postcode */}
              <div>
                <label className="block mb-1 font-semibold">Postcode</label>
                <input
                  {...register("postcode")}
                  type="text"
                  placeholder="e.g. 2134"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-semibold">Message</label>
                <textarea
                  {...register("message")}
                  placeholder="Your message"
                  className="w-full border rounded px-3 py-2 h-28 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md flex w-full py-2 justify-center bg-gradient-to-r from-[#142462] to-[#2A6A9E] text-white text-center "
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>

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
        </Container>
      </div>
      {/* ADDRESS SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] h-fit py-12 px-4">
        <Container>
          <div
            className="flex justify-center
           flex-wrap gap-8"
          >
            <div className="flex p-4 text-white items-center gap-4">
              <span className="bg-white rounded-full py-3 px-4">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 56 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                    fill="#142462"
                  />
                </svg>
              </span>
              <div className="flex flex-col justify-center">
                <h3>New South Wales</h3>
                <p>Level 6/379 Kent St, Sydney NSW 2000</p>
              </div>
            </div>
            <div className="flex text-white items-center gap-4">
              <span className="bg-white rounded-full py-3 px-4">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 56 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                    fill="#142462"
                  />
                </svg>
              </span>
              <div className="flex flex-col justify-center">
                <h3>New South Wales</h3>
                <p>Level 6/379 Kent St, Sydney NSW 2000</p>
              </div>
            </div>
            <div className="flex text-white items-center gap-4">
              <span className="bg-white rounded-full py-3 px-4">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 56 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                    fill="#142462"
                  />
                </svg>
              </span>
              <div className="flex flex-col justify-center">
                <h3>New South Wales</h3>
                <p>Level 6/379 Kent St, Sydney NSW 2000</p>
              </div>
            </div>
            <div className="flex text-white items-center gap-4">
              <span className="bg-white rounded-full py-3 px-4">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 56 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                    fill="#142462"
                  />
                </svg>
              </span>
              <div className="flex flex-col justify-center">
                <h3>New South Wales</h3>
                <p>Level 6/379 Kent St, Sydney NSW 2000</p>
              </div>
            </div>
            <div className="flex text-white items-center gap-4">
              <span className="bg-white rounded-full py-3 px-4">
                <svg
                  width="24"
                  height="30"
                  viewBox="0 0 56 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z"
                    fill="#142462"
                  />
                </svg>
              </span>
              <div className="flex flex-col justify-center">
                <h3>New South Wales</h3>
                <p>Level 6/379 Kent St, Sydney NSW 2000</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <FAQSection />
    </div>
  );
};

export default Contact;
