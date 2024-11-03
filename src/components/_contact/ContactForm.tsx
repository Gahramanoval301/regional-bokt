"use client";
import React from "react";
import {
  Field,
  Form,
  Formik,
  // FormikProps,
  FieldProps,
  ErrorMessage,
} from "formik";
import MainButton from "../_common/MainButton";
import * as Yup from "yup";

// interface FormValues {
//   email: string;
//   phoneNumber: string;
//   description: string;
// }

const CustomInputComponent: React.FC<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  const { touched, errors } = form;

  return (
    <textarea
      {...field}
      {...props}
      className={`custom-textarea custom-input col-span-2 ${
        touched[field.name] && errors[field.name] ? "error" : ""
      }`}
    />
  );
};

const ContactForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be digits")
      .min(10, "Phone number must be at least 10 digits"), // Adjust based on your requirements
    description: Yup.string()
      .required("Description is required")
      .min(20, "Description must be at least 20 characters"), // Adjust based on your requirements
  });
  return (
    <div className="w-full md:w-10/12 mx-auto">
      <h6 className="text-xl mb-5">Online Kredit Müraciəti</h6>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            actions.resetForm();
            // actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {/* props: FormikProps<FormValues></FormValues> */}
        {() => (
          <Form>
            <div className="grid gap-4 grid-cols-2">
              <div >
                <Field
                  className="custom-input"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div>
                <Field
                  className="custom-input "
                  name="phoneNumber"
                  placeholder="Əlaqə Nömrəsi"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="col-span-2">
                <Field
                  component={CustomInputComponent}
                  className="custom-input"
                  name="description"
                  placeholder="Məktubunuzu bura yazın..."
                  as={CustomInputComponent}
                />

                <ErrorMessage
                  name="description"
                  component="div"
                  className="error-message"
                />
              </div>

              <MainButton
                type="submit"
                title="Göndər"
                styles="bg-accent-violet text-primary col-span-2"
                cssStyles={{ backgroundColor: "#705DC6 !important" }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
