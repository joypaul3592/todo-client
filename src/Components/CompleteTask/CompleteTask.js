import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";
import Loading from '../Loading/Loading';
import { TbArrowRampRight2 } from "react-icons/tb";

const CompleteTask = () => {



    const [completeTask, setCompleteTask] = useState([]);
    const [deletes, setDeletes] = useState(false)


    useEffect(() => {
        console.log('k');
    }, [deletes, completeTask])



    useEffect(() => {

        fetch(`https://fast-wave-63089.herokuapp.com/completeTodos/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.success) {
                    return toast.error(data.error)
                }
                console.log(data);
                setCompleteTask(data?.data)

            });
    }, [deletes, completeTask])





    const handelDelete = (id, name) => {
        const deleteItems = window.confirm(`Want To Delete ${name} ?`)
        if (deleteItems) {

            fetch(`https://fast-wave-63089.herokuapp.com/daleteTodo/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setDeletes(!true)
                        toast.success(`Successfully Delete ${name}`)
                    }
                })
        }
        else {
            return toast.error('Cancle By User')
        }
    }

    return (
        <div className=' mt-12 max-w-7xl mx-auto '>
            <h1 className=' text-xl font-semibold text-sky-700 text-left ml-12 mb-5'>Completed Task</h1>
            <div className=' mt-12 px-4 md:px-0 mb-40 md:mb-10'>
                {
                    completeTask == '' ? <Loading /> : ''
                }
                {
                    completeTask.map(completeTodo => <div className=' mx-auto mt-4 flex items-center py-3 shadow-lg px-3  mb-6 rounded lg:w-1/2 md:w-3/4 w-full  '>
                        <TbArrowRampRight2 className=' text-xl  mr-7 text-sky-700' />
                        <div className='w-[90%] mx-auto flex items-center justify-between'>
                            <h1>{completeTodo.todoName}</h1>
                            <MdDeleteForever onClick={() => handelDelete(completeTodo._id, completeTodo.todoName)} className=' text-2xl text-red-800 cursor-pointer' />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;