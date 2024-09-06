import React from 'react';
import { Container } from 'react-bootstrap';

const UserProfile = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Thông tin cá nhân</h1>
      <p>Họ và tên: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Số điện thoại: 0123456789</p>
    </Container>
  );
};

export default UserProfile;
