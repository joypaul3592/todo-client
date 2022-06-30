import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useTodos from '../Hook/useTodos';
import Todo from '../Todo/Todo';


const Home = () => {





    const [updateId, setUpdateId] = useState('');
    const [todoname, setTodoname] = useState('')

    const handelclick = (id, name) => {
        const updateTodoId = id;
        setUpdateId(updateTodoId)
        const updateTodoName = name;
        setTodoname(updateTodoName)
    }



    const [todo, setTodo] = useTodos()

    const { register, formState: { errors }, handleSubmit } = useForm();

    const commentEnterSubmit = async (e) => {
        if (e.key === "Enter" && e.shiftKey == false) {
            const data = e.target.value;

            const todo = {
                todoName: data,
                check: false
            }
            console.log(todo)
            try {
                const { data } = await axios.post(`http://localhost:5000/todos`, todo, {
                    method: 'POST'
                });


                if (!data.success) {
                    return toast.error(data.error)
                }
                console.log(data);
                toast.success(data.message);
                e.target.value = '';

            } catch (error) {
                toast.error(error.message)
            }


        }
    }




    return (
        <div>
            <div className=' py-16 '>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Your To-Do</span>
                    </label>
                    <input
                        type="Text"
                        placeholder="Your To-Do"
                        onKeyPress={commentEnterSubmit}
                        className="input input-bordered mt-4 p-2 bg-red-100 rounded focus:outline-slate-600 w-full max-w-xs"
                        {...register("toDo", {
                            required: {
                                value: true,
                                message: 'To-do text is required',
                                maxLength: 1000,
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>
                        }
                    </label>
                </div>
            </div>
            <div className='px-[20%]'>
                <h1>{
                    todo.map(to => <Todo key={to._id} todo={to} handelclick={handelclick} updateId={updateId} todoname={todoname}></Todo>)
                }</h1>
            </div>
        </div>
    );
};

export default Home;