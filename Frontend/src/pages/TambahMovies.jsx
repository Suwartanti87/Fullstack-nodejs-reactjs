import axios from "axios"
import { useState } from "react"

function TambahMovie() {
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
    //fungsi untuk menyimpan ke api
    const handleSubmit = async (e) => {
        e.preventDefault();
        await
            axios
                .post("http://localhost:3000/api/movie",
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
            <h3>Tambah Movie</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="title"
                        className="form-control"
                        id="floatingInput"
                        name="title"
                        onChange={handleChange}
                        placeholder="Title" />
                    <label htmlFor="floatingInput">Judul Movie</label>
                </div>
                <div className="form-floating">
                    <input type="year"
                        className="form-control"
                        id="floatingPassword"
                        name="year"
                        onChange={handleChange}
                        placeholder="Tahun Rilis" />
                    <label htmlFor="floatingPassword">Tahun</label>
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
            export default TambahMovie