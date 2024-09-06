import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseService from '../services/courseService';
import { Container, Button } from 'react-bootstrap';

const EnrollCourse = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleEnroll = async () => {
    const userId = localStorage.getItem('userId');
    console.log("User ID:", userId);

    try {
      await courseService.enrollCourse(id, userId);
      alert('Đăng ký thành công!');
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi đăng ký khóa học:', error);
    }
  };

  return (
    <Container className="text-center">
      <h1>Xác nhận đăng ký khóa học</h1>
      <Button variant="success" className="mt-4" onClick={handleEnroll}>
        Xác nhận đăng ký
      </Button>
    </Container>
  );
};

export default EnrollCourse;
