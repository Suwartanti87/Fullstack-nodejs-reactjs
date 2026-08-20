import axios from "axios"
import { useState } from "react"

function TambahCategory() {
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
    //fungsi untuk menyimpan ke api
    const handleSubmit = async (e) => {
        e.preventDefault();
        await
            axios
                .post("http://localhost:3000/api/categories",
                    form)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    alert('done')
                })

    }
    return (
        <>
            <h3>Tambah Kategori</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="name"
                        className="form-control"
                        id="floatingInput"
                        name="name"
                        onChange={handleChange}
                        placeholder="Nama Kategori" />
                    <label htmlFor="floatingInput">Kategori</label>
                </div>
            
                <div className="form-floating mt-3">
                    <textarea className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingKomentar"
                        name="description"
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
            export default TambahCategory