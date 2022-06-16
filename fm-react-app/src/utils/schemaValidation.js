import * as Yup from 'yup';

export const SIGN_UP_SCHEMA = Yup.object({
  fname:Yup.string().matches(/^[A-Z][a-z]{1,16}$/,'Must be latin letter').required(),
  sname:Yup.string().matches(/^[A-Z][a-z]{1,26}$/,'Must be latin letter').required(),
  email:Yup.string().email('Enter correct email').required(),
  password:Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Enter correct password').required(),
  age:Yup.number().min(14).max(128),
})