import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import courseService from '../services/courseService';
import { CourseContext } from '../context/CourseContext';
import { Card, Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';

const CourseList = () => {
  
  const { courses, setCourses } = useContext(CourseContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Lấy danh sách khóa học ban đầu
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
  }, [setCourses]);

  // Xử lý tìm kiếm
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await courseService.searchCourses(searchTerm, null, priceRange.min, priceRange.max);
      setCourses(data);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm khóa học:', error);
    }
  };

  // Xử lý lọc và sắp xếp
  const handleFilter = async () => {
    try {
      const data = await courseService.filterCourses(sortBy, true);
      setCourses(data);
    } catch (error) {
      console.error('Lỗi khi lọc và sắp xếp khóa học:', error);
    }
  };

  return (
    <Container>
      <h1 className="text-center my-4">Danh sách khóa học</h1>

      {/* Thanh tìm kiếm */}
      <Form onSubmit={handleSearch} className="mb-4">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Tìm kiếm khóa học..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Tìm kiếm
          </Button>
        </InputGroup>

        <Row className="mt-3">
          {/* Bộ lọc giá */}
          <Col md={4}>
            <Form.Group>
              <Form.Label>Khoảng giá</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Tối thiểu"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                />
                <Form.Control
                  type="number"
                  placeholder="Tối đa"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                />
              </InputGroup>
            </Form.Group>
          </Col>

          {/* Bộ lọc sắp xếp */}
          <Col md={4}>
            <Form.Group>
              <Form.Label>Sắp xếp</Form.Label>
              <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Chọn...</option>
                <option value="price">Giá</option>
                <option value="popularity">Độ phổ biến</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" className="mt-2" onClick={handleFilter}>
              Lọc và sắp xếp
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Danh sách khóa học */}
      <Row>
        {courses.map(course => (
          <Col sm={12} md={6} lg={4} key={course.courseID} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.courseName}</Card.Title>
                <Card.Text>Giá: {course.price} VND</Card.Text>
                <Link to={`/courses/${course.courseID}/trailer`}>
                  <Button variant="primary">Xem chi tiết</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseList;
