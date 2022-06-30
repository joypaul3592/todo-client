import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useTodos() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/alltodo`);
            if (!data.success) return toast.error(data?.error)
            setTodo(data?.data)
        }
        fetchData()
    }, [todo])


    return [todo, setTodo];

}
export default useTodos;