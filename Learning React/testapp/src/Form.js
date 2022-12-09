import {useFormik, Formik, Form, Field, ErrorMessage, useField} from 'formik'
import * as Yup from 'yup'

//* THIS VALIDATION WITHOUT YUP 
/* const validate = values => {
   const errors = {}

   if (!values.name) {
      errors.name = 'Обязательное поле!'
   } else if (values.name.length < 2) {
      errors.name = 'Минимум 2 символа'
   }

   if (!values.email) {
      errors.email = 'Обязательное поле!'
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неправильный email'
   }

   return errors
} */


const CustomForm = () => {

//* USING FORMIK HOOK
/*    const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         amount: 0,
         currency: '',
         text: '',
         terms: false,
      },
      // validate,
      validationSchema: Yup.object({
         name: Yup.string()
                  .min(2, 'Минимум 2 символа')
                  .required('Обязательное поле!'),
         email: Yup.string()
                  .email('Неправильный email')
                  .required('Обязательное поле!'),
         amount: Yup.number()
                     .min(5, 'Не менее 5')
                     .required('Обязательное поле!'),
         currency: Yup.string().required('Валюта не выбрана!'),
         text: Yup.string().min(10, 'Минимум 10 символов'),
         terms: Yup.boolean()
                  .required('Необходимо согласие!')
                  .oneOf([true], 'Необходимо согласие!'),
      }),
      onSubmit: values => console.log(JSON.stringify(values, null, 2))
   }) */


   const MyTextInput = ({label, ...props}) => {
      const [field, meta] = useField(props)
      return (
         <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field} />
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
         </>
      )
   }

   const MyCheckbox = ({children, ...props}) => {
      const [field, meta] = useField({...props, type: 'checkbox'})
      return (
         <>
            <label className='checkbox'>
               <input type='checkbox' {...props} {...field} />
               {children}
            </label>
            {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
         </>
      )
   }

   return (
      <Formik
         initialValues = {{
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
         }}
         validationSchema = {Yup.object({
            name: Yup.string()
                     .min(2, 'Минимум 2 символа')
                     .required('Обязательное поле!'),
            email: Yup.string()
                     .email('Неправильный email')
                     .required('Обязательное поле!'),
            amount: Yup.number()
                        .min(5, 'Не менее 5')
                        .required('Обязательное поле!'),
            currency: Yup.string().required('Валюта не выбрана!'),
            text: Yup.string().min(10, 'Минимум 10 символов'),
            terms: Yup.boolean()
                     .required('Необходимо согласие!')
                     .oneOf([true], 'Необходимо согласие!'),
         })}
         onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
         >
         <Form className="form">
            <h2>Отправить пожертвование</h2>
            <MyTextInput label='Ваше имя' id="name" name="name" type="text" />
            <MyTextInput label='Ваша почта' id="email" name="email" type="text" />
            <label htmlFor="amount">Количество</label>
            <Field id="amount" name="amount" type="number"/>
            <ErrorMessage className="error" name="amount" component="div"/>
            <label htmlFor="currency">Валюта</label>
            <Field as="select" id="currency"name="currency">
               <option value="">Выберите валюту</option>
               <option value="USD">USD</option>
               <option value="UAH">UAH</option>
               <option value="RUB">RUB</option>
            </Field>
            <ErrorMessage className="error" name="currency" component="div"/>
            <label htmlFor="text">Ваше сообщение</label>
            <Field as="textarea" id="text" name="text" />
            <ErrorMessage className="error" name="text" component="div"/>
            <MyCheckbox name='terms'>
               Соглашаетесь с политикой конфиденциальности?
            </MyCheckbox>
            <button type="submit">Отправить</button>
         </Form>
      </Formik>
   )
}

export default CustomForm;