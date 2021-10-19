import React, { useCallback, useEffect } from 'react'
//хук управления формой
/* export function useForm() {
  const [values, setValues] = React.useState({})

  const handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
} */
//хук управления формой и валидации формы
export function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const [isValid, setIsValid] = React.useState(false)

  if (initialValues)
    useEffect(() => {
      setValues(initialValues)
    }, [initialValues])

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest('form').checkValidity())
  }
  // Данные имени или почты обязательно должны быть изменены для сохранения
  if (initialValues)
    useEffect(() => {
      if (initialValues.name == values.name && initialValues.email == values.email) setIsValid(false)
    }, [handleChange])

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, handleChange, errors, isValid, resetForm }
}
