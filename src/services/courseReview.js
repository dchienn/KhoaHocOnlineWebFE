import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/reviews';

const courseReviewService = {
  // Lấy danh sách đánh giá theo khóa học
  getReviewsByCourse: async (courseId) => {
    try {
      const response = await axios.get(`${API_URL}/course/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy đánh giá khóa học: ', error);
      throw new Error('Không thể lấy đánh giá khóa học. Vui lòng thử lại sau.');
    }
  },

  // Thêm đánh giá mới cho khóa học
  saveReview: async (reviewData) => {
    try {
      const response = await axios.post(API_URL, reviewData);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi thêm đánh giá: ', error);
      throw new Error('Không thể thêm đánh giá. Vui lòng thử lại sau.');
    }
  }
};

export default courseReviewService;
