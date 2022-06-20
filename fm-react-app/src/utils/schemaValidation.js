import * as Yup from 'yup';

export const NAME_SCHEMS = Yup.string().matches(/^[A-Z][a-z]{1,16}$/,'Must be latin letter').required();

export const EMAIL_SCHEMS = Yup.string().email('Enter correct email').required();

export const PASSWORD_SCHEMS =Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Enter correct password').required();

export const SIGN_UP_SCHEMA = Yup.object({
  fname:NAME_SCHEMS,
  sname:NAME_SCHEMS,
  email:EMAIL_SCHEMS,
  password:PASSWORD_SCHEMS,
  age:Yup.number().min(14).max(128),
})

export const SIGN_IN_SCHEMA = Yup.object({
  email:EMAIL_SCHEMS,
  password:PASSWORD_SCHEMS,
  password2:Yup.string().oneOf([Yup.ref('password')], 'Password doest match'),
})