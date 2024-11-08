import React from "react";
import {
  Field,
  Form,
  Formik,
  ErrorMessage,
} from "formik";
import MainButton from "../_common/MainButton";
import {
  initialValues,
  inputDatas1,
  validationScheme,
} from "@/data/forms/form1";

const Form1 = () => {
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.resetForm();
          // actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <div className="grid gap-4 grid-cols-2">
          {inputDatas1.map(({ name, type, className, label, placeholder }) => {
            return (
              <>
                <div className={`text-black ${className}`} key={name}>
                  <p className="font-semibold text-lg my-1">{label}*</p>
                  <Field
                    className="custom-input-2"
                    name={name}
                    placeholder={placeholder}
                    type={type}
                  />
                  <ErrorMessage
                    name={name}
                    component="div"
                    className="error-message"
                  />
                </div>
              </>
            );
          })}
          <div className="col-span-2">
            <label className="text-sm pt-1">
              <Field className="mr-1" name="checkTrue" type="checkbox" />
              Azərbaycan Kredit Bürosu və ASAN Finansdan şəxsi məlumatımın
                          İstifadəsinə Razıyam 
            </label>
            <ErrorMessage
              name={"checkTrue"}
              component="div"
              className="error-message"
            />
          </div>
          <MainButton type="submit" title="GÖNDƏR" styles=" col-span-2 bg-secondary-dark text-primary mt-4" />
        </div>
      </Form>
    </Formik>
  );
};

export default Form1;
