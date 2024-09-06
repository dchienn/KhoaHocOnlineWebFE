import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import courseService from '../services/courseService'; // Giả sử đây là service lấy nội dung khóa học
import assignmentService from '../services/assignmentService'; // Service để lấy danh sách bài tập

const CourseDetails = () => {
  const { id } = useParams(); // Lấy courseId từ URL
  const [courseContent, setCourseContent] = useState([]); // State để lưu nội dung khóa học
  const [assignments, setAssignments] = useState([]); // State để lưu danh sách bài tập

  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        const contentData = await courseService.getCourseContent(id); // Lấy nội dung khóa học
        setCourseContent(contentData);
      } catch (error) {
        console.error('Lỗi khi lấy nội dung khóa học:', error);
      }
    };

    const fetchAssignments = async () => {
      try {
        const assignmentData = await assignmentService.getAssignmentsByCourse(id); // Lấy danh sách bài tập
        setAssignments(assignmentData);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách bài tập:', error);
      }
    };

    fetchCourseContent(); // Gọi API lấy nội dung khóa học
    fetchAssignments(); // Gọi API lấy danh sách bài tập
  }, [id]);

  return (
    <Container>
      <h1>Chi tiết khóa học</h1>

      <h3>Nội dung khóa học</h3>
      <ListGroup>
        {courseContent.map(contentItem => (
          <ListGroup.Item key={contentItem.contentID}>
            <h5>{contentItem.title}</h5>
            <p>Loại nội dung: {contentItem.contentType}</p>
            {contentItem.contentType === 'Video' ? (
              <a href={contentItem.contentURL} target="_blank" rel="noopener noreferrer">
                Xem video
              </a>
            ) : (
              <a href={contentItem.contentURL} target="_blank" rel="noopener noreferrer">
                Đọc bài viết
              </a>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h3 className="mt-4">Danh sách bài tập</h3>
      <ListGroup>
        {assignments.length > 0 ? (
          assignments.map(assignment => (
            <ListGroup.Item key={assignment.assignmentID}>
              <h5>{assignment.title}</h5>
              <p>{assignment.description}</p>
              <p>Hạn chót: {new Date(assignment.dueDate).toLocaleDateString()}</p>
            </ListGroup.Item>
          ))
        ) : (
          <p>Không có bài tập nào cho khóa học này.</p>
        )}
      </ListGroup>
    </Container>
  );
};

export default CourseDetails;
