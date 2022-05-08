import { useFormik } from "formik";

const useForm = (model, objectValidation, handleSubmit) => {
  const formik = useFormik({
    initialValues: model,
    validationSchema: objectValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return [formik];
};

export default useForm;
