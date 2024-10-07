// src/StudentList.js
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Fungsi untuk mengambil data dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      const studentCollection = collection(db, "students"); // Mengambil koleksi "students"
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentList); // Menyimpan data dari Firestore ke state
    };

    fetchData(); // Memanggil fungsi untuk mengambil data
  }, []);

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>Nama:</strong> {student.nama} <br />
            <strong>NPM:</strong> {student.npm} <br />
            <strong>Jenis Kelamin:</strong> {student.jenis_kelamin} <br />
            <strong>No Telepon:</strong> {student.no_telepon} <br />
            <strong>Usia:</strong> {student.usia} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
