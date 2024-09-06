import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Thêm Link
import courseService from '../services/courseService';
import { Container, ListGroup, Button, Card, Row, Col } from 'react-bootstrap';

const CourseTrailler = () => {
  const { id } = useParams(); // Lấy courseId từ URL
  const [courseDetails, setCourseDetails] = useState(null);
  const [courseContent, setCourseContent] = useState([]);

  // Lấy thông tin khóa học (thông tin chung)
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const data = await courseService.getCourseById(id);
        setCourseDetails(data); // Lưu thông tin khóa học vào state
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết khóa học:', error);
      }
    };
    fetchCourseDetails();
  }, [id]);

  // Lấy nội dung khóa học (các bài học)
  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        const data = await courseService.getCourseContent(id);
        setCourseContent(data); // Lưu danh sách nội dung bài học vào state
      } catch (error) {
        console.error('Lỗi khi lấy nội dung khóa học:', error);
      }
    };
    fetchCourseContent();
  }, [id]);

  if (!courseDetails || !courseContent.length) return <div>Đang tải thông tin khóa học...</div>;

  return (
    <Container>
      {/* Thông tin khóa học */}
      <Card className="mb-4 shadow">
        <Card.Body>
          <Row className="align-items-center">
            <Col md={8}>
              <Card.Title className="display-4">{courseDetails.courseName}</Card.Title>
              <Card.Text className="lead text-muted mb-2">
                {courseDetails.description}
              </Card.Text>
              <Card.Text className="text-muted">
                <strong>Độ phổ biến:</strong> {courseDetails.popularity} lượt đăng ký
              </Card.Text>
              <Card.Text className="text-muted">
                <strong>Ngày tạo:</strong> {new Date(courseDetails.createdDate).toLocaleDateString()}
              </Card.Text>
              <Card.Text className="text-muted">
                <strong>Ngày cập nhật:</strong> {new Date(courseDetails.lastUpdatedDate).toLocaleDateString()}
              </Card.Text>
            </Col>
            <Col md={4} className="text-center">
              {/* Giá tiền và nút đăng ký */}
              <h2 className="text-danger mb-3">{courseDetails.price.toLocaleString()} VND</h2>
              <Link to={`/enroll/${id}`}> {/* Chuyển hướng tới trang EnrollCourse */}
                <Button variant="success" size="lg">Đăng ký ngay</Button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Nội dung khóa học */}
      <h2>Nội dung khóa học</h2>
      <ListGroup className="mb-4">
        {courseContent.map((contentItem) => (
          <ListGroup.Item key={contentItem.contentID}>
            <h5>{contentItem.title}</h5>
            <p>Loại nội dung: {contentItem.contentType}</p>
            
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CourseTrailler;
