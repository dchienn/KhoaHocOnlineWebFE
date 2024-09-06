import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/users';

const userService = {
  // Lấy tất cả người dùng
  getAllUsers: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy danh sách người dùng: ', error);
      throw new Error('Không thể lấy danh sách người dùng. Vui lòng thử lại sau.');
    }
  },

  // Lấy người dùng theo ID
  getUserById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Lỗi khi lấy thông tin người dùng với ID: ${id}`, error);
      throw new Error('Không thể lấy thông tin người dùng. Vui lòng thử lại sau.');
    }
  },

  // Thêm mới hoặc cập nhật người dùng
  saveUser: async (user) => {
    try {
      const response = await axios.post(API_URL, user);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lưu người dùng: ', error);
      throw new Error('Không thể lưu người dùng. Vui lòng thử lại sau.');
    }
  },

  // Xóa người dùng theo ID
  deleteUser: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return `Đã xóa người dùng với ID: ${id}`;
    } catch (error) {
      console.error(`Lỗi khi xóa người dùng với ID: ${id}`, error);
      throw new Error('Không thể xóa người dùng. Vui lòng thử lại sau.');
    }
  },

  // Tìm kiếm người dùng theo từ khóa (tên hoặc email)
  searchUsers: async (keyword) => {
    try {
      const response = await axios.get(`${API_URL}/search`, { params: { keyword } });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi tìm kiếm người dùng: ', error);
      throw new Error('Không thể tìm kiếm người dùng. Vui lòng thử lại sau.');
    }
  },
};

export default userService;
