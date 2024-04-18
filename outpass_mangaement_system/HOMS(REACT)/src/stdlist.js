
// import React, { useState, useEffect } from 'react';
// import './styles.css';

// const StdList = () => {
//     const [userstd, setUserstd] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         fetchStdList();
//     }, []);

//     const fetchStdList = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/stdlist');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch student list');
//             }
//             const data = await response.json();
//             setUserstd(data);
//         } catch (error) {
//             console.error('Error:', error.message);
//         }
//     };

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filteredStudents = userstd.filter((student) =>
//         student.username.toLowerCase().includes(searchQuery.toLowerCase()),
//     );

//     return (
//         <div>
//             <div id="hom">
//                 <div className="viewstdlist-container">
//                     <h2>STUDENT LIST</h2>
//                     <br />
//                     <input
//                         type="text"
//                         placeholder="Search by name"
//                         value={searchQuery}
//                         onChange={handleSearchChange}
//                     />
//                     <button onClick={fetchStdList} id="rebtn">
//                         Refresh
//                     </button>
//                     <table className="bordered-table">
//                         <thead>
//                             <tr>
//                                 <th>S No</th>
//                                 <th>Admission ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Age</th>
//                                 <th>Department</th>
//                                 <th>Roomnumber</th>
//                                 <th>Contactnumber</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredStudents.map((student, index) => (
//                                 <tr key={student._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{student.Admissionid}</td>
//                                     <td>{student.username}</td>
//                                     <td>{student.email}</td>
//                                     <td>{student.age}</td>
//                                     <td>{student.department}</td>
//                                     <td>{student.roomnumber}</td>
//                                     <td>{student.contactnumber}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StdList;



import React, { useState, useEffect } from 'react';
import './styles.css';

const StdList = () => {
    const [userstd, setUserstd] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchStdList();
    }, []);

    const fetchStdList = async () => {
        try {
            const response = await fetch('http://localhost:5000/stdlist');
            if (!response.ok) {
                throw new Error('Failed to fetch student list');
            }
            const data = await response.json();
            setUserstd(data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredStudents = userstd.filter((student) =>
        Object.values(student).some((value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div>
            <div id="hom">
                <div className="viewstdlist-container">
                    <h2>STUDENT LIST</h2>
                    <br />
                    <input
                        type="text"
                        placeholder="Search "
                        id='seachbox'
                        value={searchQuery}
                        onChange={handleSearchChange}
                    /><br/>
                    <button onClick={fetchStdList} id="rebtn">
                        Refresh
                    </button>
                    <table className="bordered-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Register No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Roomnumber</th>
                                <th>Contactnumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student, index) => (
                                <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td>{student.Admissionid}</td>
                                    <td>{student.username}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.department}</td>
                                    <td>{student.roomnumber}</td>
                                    <td>{student.contactnumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StdList;
