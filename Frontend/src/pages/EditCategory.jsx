import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditCategory() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        description: "",
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
    const getCategory =async()=>{
    await axios
    .get(`http://localhost:3000/api/categories?id=${id}`)
    .then((response)=>{
        console.log(response);
        const data = response.data[0];
        console.log(data);
        setForm({
            name: data.name,
            description: data.description  
        })
    })
    }
    //fungsi untuk menyimpan ke api
    const handleUpdate = async (e) => {
        e.preventDefault();
        await
            axios
                .put(`http://localhost:3000/api/categories/${id}`,
                    form)
                .then((response) => {
                    console.log(response)
                })
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
                    <input type="nama_tamu"
                        className="form-control"
                        id="floatingInput"
                        name="nama" value={form.name}
                        onChange={handleChange}
                        placeholder="nama Kategori" />
                    <label htmlFor="floatingInput">Nama Kategori</label>
                </div>

                <div className="form-floating mt-3">
                    <textarea className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingKomentar"
                        name="description" value={form.description}
                        onChange={handleChange}
                        style={{ height: "100px" }}></textarea>
                    <label htmlFor="floatingKomentar">Deskripsi</label>
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
            export default EditCategory