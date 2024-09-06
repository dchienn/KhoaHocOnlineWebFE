import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/assignments';

const assignmentService = {
  // Lấy danh sách bài tập theo khóa học
  getAssignmentsByCourse: async (courseId) => {
    try {
      const response = await axios.get(`${API_URL}/course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách bài tập: ', error);
      throw new Error('Không thể lấy danh sách bài tập. Vui lòng thử lại sau.');
    }
  },

  // Tạo mới hoặc cập nhật bài tập
  saveAssignment: async (assignmentData) => {
    try {
      const response = await axios.post(API_URL, assignmentData);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lưu bài tập: ', error);
      throw new Error('Không thể lưu bài tập. Vui lòng thử lại sau.');
    }
  }
};

export default assignmentService;
