import {useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Movies() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        getData();
    },[])

    const getData = ()=>{
        axios
        .get("http://localhost:3000/api/movie")
        //jika berhasil mendapatkan response
        .then((response) => {
            console.log(response.data)
            setPosts(response.data)

        })
        //jika gagal mendapatkan response Error
        .catch((error) => {
            setError(error.message)
        })
        //jika selesai (berhasil atau gagal tetap dijalankan)
        .finally(() => {
            setLoading(false);
        })
        
    }
    
    const handleDelete = async (id)=> {
        const konfirmasi = window.confirm(
            "Apakah anda yakin ingin menghapus data ini?"
        );
        //kalau kotak konfirmasinya bernilai false maka
        //tidak akan melakukan apa apa
        if(!konfirmasi){
            return;
        }
        axios 
        .delete(`http://localhost:3000/api/movie/${id}`)
        .then((response)=> {
            alert("data berhasil dihapus")
        })
        .catch((error)=>{
            alert("data gagal dihapus")
        })
        .finally(()=>{

        })
    }
  return (
    <>
    <h1>Movies</h1>
    <hr />
    <Link className="btn btn-primary" to="/tambah-movie">
              Tambah
    </Link>
    {loading && (
        <div>
              <div className="d-flex flex-column align-items-center mt-4">
            <div className="spinner-border
            text-primary" role="status">
                <span
                className="visually-hidden"> Loading ...</span>
            </div>
            </div>
            <p >Loading ...</p>
        </div>
    )}
    {error &&(
        <div className="alert alert-danger">
            {error}
        </div>
    )}
    {!loading && !error && (
        <table className="table">
        <thead>
          <tr>
            <th scope="col"> Id </th>
            <th scope="col"> Judul Movies</th>
            <th scope="col"> Tahun </th>
          </tr>
          </thead>
          {posts.map((post) => (
            <tr key = {post.id}>
                <td></td>
                <td>{post.title}</td>
                <td>{post.year}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(post.id)}> hapus</button>
                    <Link className="btn btn-warning btn-sm" to={`/edit-movies/${post.id}`} >Edit</Link>  
                </td>
            </tr>
          ))}
          </table>
    )}
    </>
  );
}

export default Movies;
