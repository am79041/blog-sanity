import { useState } from 'react';

export default function Demo() {
    const [path, setPath] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            image: event.target.image.value,
        }
        setPath(data.image);
        console.log(JSON.stringify(data))
    }

    return <div>
        <h1> Hi, Please Submit the form </h1>
        <form className='grid place-item-start w-1/2 m-auto' onSubmit={handleSubmit}>
            <label>
                <span>Name </span>
                <input type='text' name='name' minLength='5' maxLength='20' />
            </label>
            <label>
                <span> Email Address </span>
                <input type='email' name='email' />
            </label>
            <input type='file' name='image' />
            <button className='bg-purple-600 text-white py-1 px-4 w-fit rounded-md' type='submit'>Submit</button>
        </form>
        <img src={path} />
    </div>

}
