import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import MainButton from "../_common/MainButton";
import {
  initialValues,
  inputDatas2,
  validationScheme,
} from "@/data/forms/form2";
import toast from "react-hot-toast";
import { sendAqroCredit } from "../../../api/credits";

const Form2 = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={async (values, actions) => {
        try {
          const res = await sendAqroCredit(values);
          // console.log(res, values);
          if (res.status == 201) {
            toast.success("Credit request is sent successfully!");
            actions.resetForm();
          } else {
            toast.error("Something went wrong! Please try again.");
          }
        } catch {
          toast.success(
            "Something went wrong! Please try again, otherwise contact with us!"
          );
          // console.log(err);
        }
      }}
    >
      <Form>
        <div className="grid gap-4 grid-cols-2">
          {inputDatas2.map(({ name, type, className, label, placeholder }) => {
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
              <Field className="mr-1" name="checked" type="checkbox" />
              Məlumatlarımın doğruluğunu təsdiq edir,kredit öhdəliklərim barədə
              məlumatları AKB kredit reyestrindən,şəxsi və iş yerim üzrə
              məlumatları isə “ASAN Finans” sistemi vasitəsilə əldə edilməsinə
              icazə verirəm.
            </label>
            <ErrorMessage
              name={"checked"}
              component="div"
              className="error-message"
            />
          </div>
          <MainButton
            type="submit"
            title="Sifariş Et"
            styles=" col-span-2 bg-secondary-dark text-primary mt-4"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default Form2;
