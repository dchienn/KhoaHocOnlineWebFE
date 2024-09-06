import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để điều hướng
import enrollmentService from '../services/enrollmentService'; // Giả sử service lấy dữ liệu đã đăng ký có tên là enrollmentService

const EnrolledCoursesComponent = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const userId = localStorage.getItem('userId') || 1; // Giả sử mặc định userId là 1 cho thử nghiệm

  const navigate = useNavigate(); // Sử dụng navigate để điều hướng

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const data = await enrollmentService.getEnrolledCourses(userId); // Gọi API để lấy danh sách khóa học đã đăng ký
        setEnrolledCourses(data); // Cập nhật state với dữ liệu nhận được
      } catch (error) {
        console.error('Lỗi khi lấy danh sách khóa học đã đăng ký:', error);
      }
    };

    fetchEnrolledCourses();
  }, [userId]);

  // Hàm điều hướng đến trang CourseTrailler khi nhấn vào khóa học
  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}/content`); // Điều hướng đến trang chi tiết khóa học
  };

  return (
    <Container>
      <h2>Các khóa học đã đăng ký</h2>
      <ListGroup>
        {enrolledCourses.map(course => (
          <ListGroup.Item 
            key={course.courseID} 
            action 
            onClick={() => handleCourseClick(course.courseID)} // Khi nhấn vào sẽ điều hướng đến CourseTrailler
            style={{ cursor: 'pointer' }} // Con trỏ tay để hiển thị có thể nhấn
          >
            <h5>{course.courseName}</h5>
            <p>{course.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default EnrolledCoursesComponent;
