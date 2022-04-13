
import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    email: Yup
    .string()
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Eposta alanı zorunludur."),
    password: Yup
    .string()
    .typeError("Her karakteri kullanamazsınız.")
    .min(8, "En az 8 karakter olmalıdır.")
    .max(32, "En fazla 32 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),
    userName: Yup
    .string()
    .min(3, "En az 3 karakter olmalıdır.")
    .max(32, "En fazla 32 karakter olmalıdır.")
    .required("Kullanıcı adı alanı zorunludur."),
    passwordCheck: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Şifreler uyuşmuyor.")
    .required("Şifre alanı zorunludur."),
    checkbox: Yup
    .boolean()
    .oneOf([true], 'Sözleşmeyi kabul etmelisiniz')
});