import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditMovies() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        year: "",
    })
    
    const [isLoading, setIsLoading]= useState('')
    //fungsi untuk menyimpan data inputan
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // fungsi untuk mengambil data tamu berdasarakan id dari data tamu
    const getMovies =async()=>{
    await axios
    .get(`http://localhost:3000/api/movie/${id}`)
    .then((response)=>{
        console.log(response);
        const data = response.data[0];
        console.log(data);
        setForm({
            title: data.title,
            year: data.year
            
        })
    })
    }
    //fungsi untuk menyimpan ke api
    const handleUpdate = async (e) => {
        e.preventDefault();
        await
            axios
                .put(`http://localhost:3000/api/movie/${id}`,
                    form)
                .then((response) => {
                    console.log(response)
                })
                // .catch((error) => {
                //     console.error(error)
                // })
                // .finally(() => {
                //     alert('done')
                // })

    }
    useEffect(()=>{
        getDataTamu();
    },[id])
    return (
        <>
            <h3>Edit Kategori</h3>
            <hr />
            <form onSubmit={handleUpdate}>
                <div className="form-floating mb-3">
                    <input type="title"
                        className="form-control"
                        id="floatingInput"
                        name="title" value={form.title}
                        onChange={handleChange}
                        placeholder="Judul Movie" />
                    <label htmlFor="floatingInput">Judul Movie</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="year"
                        className="form-control"
                        id="floatingInput"
                        name="year" value={form.year}
                        onChange={handleChange}
                        placeholder="Tahun" />
                    <label htmlFor="floatingInput">Tahun Rilis</label>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success col-12 mt-2"
                     />
            </form>


            </>
            )
}
            export default EditMovies