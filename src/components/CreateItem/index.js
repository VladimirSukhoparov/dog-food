import React from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../utils/api'

export const CreateItem = () => {
    const navigate=useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const {
            target: { inputName, inputDescription, inputPrice },
        } = event
        api.addProduct({
            name: inputName.value,
            description: inputDescription.value,
            price: inputPrice.value,
        })
            .then((data) => {
            console.log(data),

                navigate('/')
            })
            .catch((err) => alert(err))
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='inputName' placeholder='name' />
            <input name='inputDescription' placeholder='description' />
            <input name='inputPrice' placeholder='price' />
            <button>Добавить товар</button>
        </form>
    )
}
