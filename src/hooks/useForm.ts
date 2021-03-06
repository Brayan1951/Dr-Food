import { ChangeEvent, useState } from 'react';
export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState(initState)

    const resetForm = () => {
        setFormData({ ...initState })
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))


    }
    return { ...formData, formData, onChange, resetForm }
}