import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/enrollments';

const enrollmentService = {
  getEnrolledCourses: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách khóa học đã đăng ký:', error);
      throw error;
    }
  }
};

export default enrollmentService;
