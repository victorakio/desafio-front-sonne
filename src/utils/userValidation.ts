import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .required("Email obrigatório!")
    .email("Formato de email inválido!"),
});

export const taskSchema = yup.object().shape({
  title: yup.string().required("Título obrigatório"),
  description: yup.string(),
  user: yup.string(),
});
