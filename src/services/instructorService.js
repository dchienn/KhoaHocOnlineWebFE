import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/instructors';

const instructorService = {
  // Lấy danh sách giảng viên
  getAllInstructors: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách giảng viên: ', error);
      throw new Error('Không thể lấy danh sách giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Lấy giảng viên theo ID
  getInstructorById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy thông tin giảng viên: ', error);
      throw new Error('Không thể lấy thông tin giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Tạo mới hoặc cập nhật giảng viên
  saveInstructor: async (instructor) => {
    try {
      const response = await axios.post(API_URL, instructor);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lưu giảng viên: ', error);
      throw new Error('Không thể lưu giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Cập nhật giảng viên
  updateInstructor: async (id, instructor) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, instructor);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi cập nhật giảng viên: ', error);
      throw new Error('Không thể cập nhật giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Xóa giảng viên theo ID
  deleteInstructor: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi xóa giảng viên: ', error);
      throw new Error('Không thể xóa giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Tìm kiếm giảng viên theo từ khóa
  searchInstructors: async (keyword) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { keyword },
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi tìm kiếm giảng viên: ', error);
      throw new Error('Không thể tìm kiếm giảng viên. Vui lòng thử lại sau.');
    }
  },

  // Lọc và sắp xếp giảng viên
  filterInstructors: async (sortBy, ascending = true) => {
    try {
      const response = await axios.get(`${API_URL}/filter`, {
        params: { sortBy, ascending },
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lọc và sắp xếp giảng viên: ', error);
      throw new Error('Không thể lọc và sắp xếp giảng viên. Vui lòng thử lại sau.');
    }
  },
};

export default instructorService;
