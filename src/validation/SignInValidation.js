import * as yup from "yup";

export default yup.object().shape({
    signInEmail: yup
    .string()
    .email('invalid email')
    .required('valid email address required'),
    signInPassword: yup
    .string()
    .required('password required')
    .min(5, "password must be 5 chars long"),
   })