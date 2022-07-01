import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useTodos from '../Hook/useTodos';
import Loading from '../Loading/Loading';
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
                const { data } = await axios.post(`https://fast-wave-63089.herokuapp.com/todos`, todo, {
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
            <div className=' py-16 max-w-7xl mx-auto px-6 md:px-0'>
                <h1 className=' text-xl font-semibold text-sky-700 text-left ml-12 mb-5'>ToDo</h1>
                <div className="form-control lg:w-1/2 md:w-3/4 w-full mx-auto">
                    <input
                        type="Text"
                        placeholder="Enter Your ToDo"
                        onKeyPress={commentEnterSubmit}
                        className="input rounded-sm mt-4 p-2 px-4  border-b-2 outline-0 border-0 shadow-lg  focus:outline-0 w-full "
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
            <div className='lg:w-1/2 md:w-3/4 w-full mx-auto px-4 md:px-0 mb-40 md:mb-10'>
                <h1>
                    {
                        todo == '' ? <Loading /> : ''
                    }
                    {
                        todo.map(to => <Todo key={to._id} todo={to} handelclick={handelclick} updateId={updateId} todoname={todoname}></Todo>)
                    }</h1>
            </div>
        </div>
    );
};

export default Home;