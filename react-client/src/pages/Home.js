import { useEffect, useState } from "react";
import "../style/homeStyle.css";
import axios from "axios";

const Home = () => {
  const [mahasiswaList, setMahasiswaList] = useState([]);

  useEffect(() => {
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
                <th>Nim</th>
                <th>Nama</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {mahasiswaList.map((mahasiswa, i) => {
                const { nim, name, email, alamat } = mahasiswa;
                return (
                  <tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td>{nim}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{alamat}</td>
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
