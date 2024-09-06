import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap'; 
import CourseList from '../components/CourseListComponent';  

import CourseTrailler from '../components/CourseTrailler';
import EnrollCourse from '../components/EnrollCourse'; 
import EnrolledCoursesComponent from '../components/EnrolledCourses';

const UserPage = () => {
  const navigate = useNavigate(); // Hook điều hướng
  const location = useLocation(); // Hook lấy vị trí URL hiện tại

  const handleViewMyCourses = () => {
    navigate('/enrolled-courses'); // Điều hướng đến danh sách khóa học đã đăng ký
  };

  return (
    <Container>
      {/* Chỉ hiển thị nút khi không ở trang danh sách khóa học đã đăng ký */}
      {location.pathname !== '/enrolled-courses' && (
        <div className="d-flex justify-content-end my-4">
          <Button variant="primary" onClick={handleViewMyCourses}>
            Xem danh sách của tôi
          </Button>
        </div>
      )}

      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id/trailer" element={<CourseTrailler />} />      
        <Route path="/enroll/:id" element={<EnrollCourse />} />
        <Route path="/enrolled-courses" element={<EnrolledCoursesComponent />} /> {/* Route đến danh sách khóa học đã đăng ký */}
      </Routes>
    </Container>
  );
};

export default UserPage;
