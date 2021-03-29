import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("username is required"),
    username: yup
    .string()
    .required("username is required"),
    email: yup
    .string()
    .email('invalid email')
    .required('valid email address required'),
    password: yup
    .string()
    .required('password required')
    .min(5, "password must be 5 chars long"),
    role: yup
    .string()
    .oneOf(['instructor', 'student'], 'user Type is Required'),
    terms: yup
    .boolean().
    oneOf([true], 'Must check Terms of Service'),
   })