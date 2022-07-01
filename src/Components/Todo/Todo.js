import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TbArrowRampRight2 } from "react-icons/tb";

const Todo = ({ todo, handelclick, updateId, reset, todoname }) => {


    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async (data, e) => {
        console.log(data)
        const updateTodo = data

        fetch(`https://fast-wave-63089.herokuapp.com/upToDo/${updateId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateTodo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Update Successfully!')
                }
                console.log(data);
            });
        e.target.reset()
    };



    // Complete 

    const handelComplete = async (id, name) => {

        const updateCompleteTodo = {
            check: true
        }
        console.log(updateCompleteTodo);

        fetch(`https://fast-wave-63089.herokuapp.com/completeTodo/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCompleteTodo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    toast.success('Complete Successfully!')
                }
                console.log(data);
            });

    }


    return (
        <ul className=' flex items-center shadow-lg py-2 px-3  mb-4 rounded justify-between'>
            <div className=' flex items-center '>
                <TbArrowRampRight2 className=' text-xl  mr-7 text-sky-700' />
                <div className='flex items-center'>
                    <input type="checkbox" onClick={() => handelComplete(todo._id, todo.todoName)} checked={`${todo.check == true ? 'check' : ''}`} class={`${todo.check == true ? 'disabled' : ''} checkbox border border-gray-900 `} />
                    <li className=' text-left ml-4'>{todo.todoName}</li>
                </div>
            </div>
            <label onClick={() => { handelclick(todo._id, todo.todoName) }} for="my-modal-3" className=' bg-sky-700 cursor-pointer text-white p-1 px-3 rounded font-semibold '>Update</label>



            {/* modal */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{`Update ToDo :   ${todoname}`}</h3>

                    <div className=' py-6 '>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mx-auto">

                                <input
                                    type="Text"
                                    placeholder={todoname}
                                    className="input input-bordered mt-4 p-2  rounded focus:outline-slate-600 w-full max-w-xs"
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
                                <input type="submit" className=' btn ' />
                            </div>
                        </form>
                    </div>

                </div>
            </div>



        </ul >

    );
};

export default Todo;