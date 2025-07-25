import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col items-start md:p-8 p-4 pt-8'>
      <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-300'>
        <table className='w-full table-auto text-sm text-gray-700'>
          <thead className='bg-gray-100 border-b border-gray-300 text-left'>
            <tr>
              <th className='px-6 py-3 hidden sm:table-cell'>#</th>
              <th className='px-6 py-3'>Student Name</th>
              <th className='px-6 py-3'>Course Title</th>
              <th className='px-6 py-3 hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((item, index) => (
              <tr key={index} className='border-t hover:bg-gray-50 transition'>
                <td className='px-6 py-4 text-center hidden sm:table-cell'>{index + 1}</td>
                <td className='px-6 py-4 flex items-center gap-3'>
                  <img src={item.student.imageUrl} alt="Profile" className='w-9 h-9 rounded-full border' />
                  <span className='truncate'>{item.student.name}</span>
                </td>
                <td className='px-6 py-4 truncate'>{item.courseTitle}</td>
                <td className='px-6 py-4 hidden sm:table-cell'>
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
