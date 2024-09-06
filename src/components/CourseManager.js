import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import courseService from '../services/courseService';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách khóa học:', error);
      }
    };
    fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await courseService.deleteCourse(id);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error('Lỗi khi xóa khóa học:', error);
    }
  };

  return (
    <div>
      <h2>Quản lý khóa học</h2>
      <Button variant="primary">Thêm Khóa học</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khóa học</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.courseName}</td>
              <td>
                <Button variant="warning" className="me-2">Sửa</Button>
                <Button variant="danger" onClick={() => deleteCourse(course.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CourseManager;
