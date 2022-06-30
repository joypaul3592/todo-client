import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdDeleteForever } from "react-icons/md";

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
        <div className=' mt-40'>
            {
                completeTask.map(completeTodo => <div className='w-[50%] mx-auto mt-4 flex items-center bg-red-100 py-1 px-3  mb-4 rounded justify-between'>
                    <h1>{completeTodo.todoName}</h1>
                    <MdDeleteForever onClick={() => handelDelete(completeTodo._id, completeTodo.todoName)} className=' text-xl cursor-pointer' />
                </div>)
            }
        </div>
    );
};

export default CompleteTask;