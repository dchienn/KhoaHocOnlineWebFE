import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/courses';

const courseService = {

  // Lấy danh sách khóa học
  getCourses: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách khóa học: ', error);
      throw new Error('Không thể lấy danh sách khóa học. Vui lòng thử lại sau.');
    }
  },

    // Lấy nội dung khóa học theo ID khóa học
  getCourseContent: async (courseId) => {
    try {
      const response = await axios.get(`${API_URL}/${courseId}/content`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy nội dung khóa học: ', error);
      throw new Error('Không thể lấy nội dung khóa học. Vui lòng thử lại sau.');
    }
  },

  // Tạo khóa học mới
  createCourse: async (course) => {
    try {
      const response = await axios.post(API_URL, course);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi tạo khóa học: ', error);
      throw new Error('Không thể tạo khóa học. Vui lòng thử lại sau.');
    }
  },

  // Lấy khóa học theo ID
  getCourseById: async (courseId) => {
    try {
      const response = await axios.get(`${API_URL}/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy thông tin khóa học: ', error);
      throw new Error('Không thể lấy thông tin khóa học. Vui lòng thử lại sau.');
    }
  },

  // Cập nhật khóa học
  updateCourse: async (courseId, courseDetails) => {
    try {
      const response = await axios.put(`${API_URL}/${courseId}`, courseDetails);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi cập nhật khóa học: ', error);
      throw new Error('Không thể cập nhật khóa học. Vui lòng thử lại sau.');
    }
  },

  // Xóa khóa học
  deleteCourse: async (courseId) => {
    try {
      const response = await axios.delete(`${API_URL}/${courseId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi xóa khóa học: ', error);
      throw new Error('Không thể xóa khóa học. Vui lòng thử lại sau.');
    }
  },

  // Tìm kiếm khóa học
  searchCourses: async (keyword, instructorName, categoryId, minPrice, maxPrice) => {
    try {
      const params = {
        keyword,
        instructorName,
        categoryId,
        minPrice,
        maxPrice,
      };
      const response = await axios.get(`${API_URL}/search`, { params });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi tìm kiếm khóa học: ', error);
      throw new Error('Không thể tìm kiếm khóa học. Vui lòng thử lại sau.');
    }
  },

  // Lọc và sắp xếp khóa học
  filterCourses: async (sortBy, ascending = true) => {
    try {
      const params = { sortBy, ascending };
      const response = await axios.get(`${API_URL}/filter`, { params });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lọc và sắp xếp khóa học: ', error);
      throw new Error('Không thể lọc và sắp xếp khóa học. Vui lòng thử lại sau.');
    }
  },

  // Đăng ký khóa học
  enrollCourse: async (courseId, userId) => {
    try {
      const response = await axios.post(`${API_URL}/enroll/${courseId}`, null, {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi đăng ký khóa học: ', error);
      throw new Error('Không thể đăng ký khóa học. Vui lòng thử lại sau.');
    }
  },
};

export default courseService;
