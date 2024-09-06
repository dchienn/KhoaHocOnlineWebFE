import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/progress';

const progressService = {
  // Lấy tiến độ học tập của người dùng trong một khóa học
  getProgress: async (courseId, userId) => {
    try {
      const response = await axios.get(`${API_URL}/course/${courseId}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy tiến độ học tập: ', error);
      throw new Error('Không thể lấy tiến độ học tập. Vui lòng thử lại sau.');
    }
  },

  // Cập nhật tiến độ học tập tự động
  updateProgressAutomatically: async (courseId, userId, lastLectureAccessed) => {
    try {
      const response = await axios.post(`${API_URL}/course/${courseId}/user/${userId}/update`, {
        lastLectureAccessed
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi cập nhật tiến độ học tập: ', error);
      throw new Error('Không thể cập nhật tiến độ học tập. Vui lòng thử lại sau.');
    }
  }
};

export default progressService;
