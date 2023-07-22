import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/homeStyle.css";
import axios from "axios";
import EditData from "../mahasiswa/editData";

const DosenHome = () => {
  const [dosen, setDosen] = useState([]);
  const { id } = useParams();

  const deleteData = (nip) => {
    axios({
      method: "DELETE",
      url: `http://localhost:3000/dosen/${nip}`,
    }).then(() => {
      alert("data berhasil dihapus");
      window.location.reload();
    });
  };

  const EditData = (id) => {};

  useEffect(() => {
    axios({
      method: "GET",  
      url: "http://localhost:3000/dosen",
    }).then((result) => {
      setDosen(result.data.data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <h1 className="text-center" style={{ marginTop: "25px" }}>
          Data Dosen
        </h1>

        <button
          className="button"
          onClick={() => window.location.replace("/dosentambah")}
        >
          Tambah
        </button>
        <table style={{ marginTop: "5px" }}>
          <thead>
            <tr>
              <th>No.</th>
              <th>NIP</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dosen.map((dosen, i) => {
              const { id, nip, name, email, alamat } = dosen;
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{id}</td>
                  <td>{nip}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{alamat}</td>
                  <td>
                    <button className="btn-edit" onClick={() => EditData(id)}>
                      Edit
                    </button>
                    <button
                      className="btn-hapus"
                      onClick={() => deleteData(nip)}
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
  );
};

export default DosenHome;
