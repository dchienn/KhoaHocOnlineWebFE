import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import instructorService from '../services/instructorService';

const InstructorManager = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const data = await instructorService.getAllInstructors();
        setInstructors(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách giảng viên:', error);
      }
    };
    fetchInstructors();
  }, []);

  const deleteInstructor = async (id) => {
    try {
      await instructorService.deleteInstructor(id);
      setInstructors(instructors.filter(instructor => instructor.id !== id));
    } catch (error) {
      console.error('Lỗi khi xóa giảng viên:', error);
    }
  };

  return (
    <div>
      <h2>Quản lý giảng viên</h2>
      <Button variant="primary">Thêm Giảng viên</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên giảng viên</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map(instructor => (
            <tr key={instructor.id}>
              <td>{instructor.id}</td>
              <td>{instructor.name}</td>
              <td>
                <Button variant="warning" className="me-2">Sửa</Button>
                <Button variant="danger" onClick={() => deleteInstructor(instructor.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InstructorManager;
