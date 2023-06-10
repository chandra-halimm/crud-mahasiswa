import { useEffect, useState } from "react";
import "../../style/homeStyle.css";
import axios from "axios";

const Home = () => {
  const [mahasiswaList, setMahasiswaList] = useState([]);

  const deleteUser = (nim) => {
    axios({
      method: "DELETE",
      url: `http://localhost:3000/mahasiswa/${nim}`,
    })
      .then(() => {
        alert("data user berhasil dihapus");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("nip") && !localStorage.getItem("password")) {
      window.location.replace("/");
    }
    axios({
      method: "GET",
      url: "http://localhost:3000/mahasiswa",
    }).then((result) => {
      setMahasiswaList(result.data.data);
    });
  }, []);
  return (
    <>
      <div className="container" style={{ marginTop: "30px" }}>
        <h1 className="text-title text-center">Crud Mahasiswa</h1>

        <button
          className="button"
          onClick={() => {
            window.location.replace("/input");
          }}
        >
          Tambah Data
        </button>

        <div className="flex-center">
          <table>
            <thead>
              <tr className="text-center radius">
                <th>No.</th>
                <th hidden>id</th>
                <th>Nim</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mahasiswaList.map((mahasiswa, i) => {
                const { id, nim, name, email, alamat } = mahasiswa;
                return (
                  <tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td hidden>{id}</td>
                    <td>{nim}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{alamat}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => window.location.replace(`/edit/${id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-hapus"
                        onClick={() => {
                          deleteUser(nim);
                        }}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
