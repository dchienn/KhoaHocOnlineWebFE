import React from 'react';
import { Route, Routes } from 'react-router-dom';
import InstructorManager from './InstructorManage';
import CourseManager from './CourseManager';

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <Routes>
        <Route path="/admin/instructors" element={<InstructorManager />} />
        <Route path="/admin/courses" element={<CourseManager />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
