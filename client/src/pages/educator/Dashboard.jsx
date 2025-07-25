import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className='min-h-screen bg-gray-50 flex flex-col gap-10 md:p-10 p-5'>
      {/* Top Summary Cards */}
      <div className='flex flex-wrap gap-6 justify-start'>
        {/* Total Enrollments */}
        <div className='flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100 bg-white p-5 w-64 rounded-xl'>
          <img src={assets.patients_icon} alt="Enrollments" className='w-10 h-10' />
          <div>
            <p className='text-3xl font-semibold text-gray-700'>{dashboardData.enrolledStudentsData.length}</p>
            <p className='text-sm text-gray-500'>Total Enrollments</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className='flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100 bg-white p-5 w-64 rounded-xl'>
          <img src={assets.appointments_icon} alt="Courses" className='w-10 h-10' />
          <div>
            <p className='text-3xl font-semibold text-gray-700'>{dashboardData.totalCourses}</p>
            <p className='text-sm text-gray-500'>Total Courses</p>
          </div>
        </div>

        {/* Total Earnings */}
        <div className='flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100 bg-white p-5 w-64 rounded-xl'>
          <img src={assets.earning_icon} alt="Earnings" className='w-10 h-10' />
          <div>
            <p className='text-3xl font-semibold text-gray-700'>{currency}{dashboardData.totalEarnings}</p>
            <p className='text-sm text-gray-500'>Total Earnings</p>
          </div>
        </div>
      </div>

      {/* Latest Enrollments Table */}
      <div className='w-full max-w-5xl'>
        <h2 className='text-xl font-semibold text-gray-700 pb-4'>Latest Enrollments</h2>
        <div className='overflow-x-auto shadow-md border border-gray-200 rounded-lg bg-white'>
          <table className='w-full table-auto text-sm text-gray-700'>
            <thead className='bg-blue-50 text-gray-600 uppercase text-left'>
              <tr>
                <th className='px-6 py-3 hidden sm:table-cell'>#</th>
                <th className='px-6 py-3'>Student Name</th>
                <th className='px-6 py-3'>Course Title</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.enrolledStudentsData.map((item, index) => (
                <tr key={index} className='border-t hover:bg-gray-50 transition'>
                  <td className='px-6 py-4 hidden sm:table-cell text-center'>{index + 1}</td>
                  <td className='px-6 py-4 flex items-center gap-3'>
                    <img src={item.student.imageUrl} alt="Profile" className='w-9 h-9 rounded-full border' />
                    <span className='truncate'>{item.student.name}</span>
                  </td>
                  <td className='px-6 py-4'>{item.courseTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;
