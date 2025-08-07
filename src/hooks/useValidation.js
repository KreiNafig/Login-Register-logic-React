import {useState} from 'react'

export const useValidation = (initialState) => {
    const [value, setValue] = useState(initialState)
    const [dirty, setDirty] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('Поле не должно быть пустым')

    const onBlur = (e) => {
        const nameTarget = e.target.name
        const newValue = e.target.value
        setDirty(true)
        if(nameTarget === 'email') {
            setErrorMessage(validate(newValue, {isEmail: true, required: true}))
        } else if(nameTarget === 'password') {
            setErrorMessage(validate(newValue, {isPassword: true, required: true, minLenght: 8}))
        } else if(nameTarget === 'name') {
            setErrorMessage(validate(newValue, {isName: true, required: true}))
        } else if(nameTarget === 'checking') {
            setErrorMessage(validate(e.target.checked, {isCheck: true, required: true}))
        }
    }

    const onChange = (e) => {
        const nameTarget = e.target.name
        const newValue = nameTarget === 'checking' ? e.target.checked : e.target.value;
        setValue(newValue)
        if(nameTarget === 'email') {
            setErrorMessage(validate(newValue, {isEmail: true, required: true}))
        } else if(nameTarget === 'password') {
            setErrorMessage(validate(newValue, {isPassword: true, required: true, minLenght: 8}))
        } else if(nameTarget === 'name') {
            setErrorMessage(validate(newValue, {isName: true, required: true}))
        } else if(nameTarget === 'checking') {
            setErrorMessage(validate(e.target.checked, {isCheck: true, required: true}))
        }
    }

    const validate = (value, rules) => {
       if(!rules) {
        setError(false)
        return ''
       }

       if(rules.required && value.length === 0) {
        setError(true)
        return 'Поле не должно быть пустым'
       }

       if(rules.isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setError(true)
        return 'Указан некоректный email'
       }

       if(rules.isPassword && value.length < rules.minLenght) {
        setError(true)
        return `Длина пароля должна быть минимум ${rules.minLenght} ${rules.minLenght >= 5 ? 'символов' : 'символа'}`
       }
       
       if(rules.isName && /[А-Яа-я]/.test(value)) {
        setError(true)
        return 'Имя должно быть из английских букв'
       }

       if(rules.isComment && value.length < rules.minLenght) {
        setError(true)
        return `Комментарий должен содержать минимум ${rules.minLenght} символов`
       }

       if(rules.isCheck) {
        if(rules.required && !value) {
            setError(true)
             return 'Необходимо согласиться с условиями';
        }
        setError(false)
        return ''
       }
    }

    const reset = () => {
        setValue(initialState)
        setDirty(false)
        setError(false)
        setErrorMessage('Поле не должно быть пустым')
    }

    return {value, dirty, onChange, onBlur, error, errorMessage, reset}
}