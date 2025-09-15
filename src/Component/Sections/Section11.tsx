import img1 from "../../assets/nataliya-melnychuk-0z51VwNLfcs-unsplash.jpg";
import { Formik, Form, Field, ErrorMessage, FormikErrors } from "formik";

type FormValues = {
  name: string;
  email: string;
};

const Section11 = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white w-[90%] md:w-[60%] p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl text-gray-600 font-bold text-center mb-6 text-gray-800">
            Just focus on your fertility journey, We got the rest covered!
          </h2>

          <Formik<FormValues>
            initialValues={{ name: "", email: "" }}
            validate={(values) => {
              const errors: FormikErrors<FormValues> = {};
              if (!values.name) {
                errors.name = "Name is required";
              }
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Name:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Contact Illustration"
            className="rounded-lg shadow-md object-cover h-[400px] w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section11;
