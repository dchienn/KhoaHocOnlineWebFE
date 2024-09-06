import axios from 'axios';

const API_URL = 'http://localhost:8080/KhoaHocWeb/submissions';

const submissionService = {
  // Nộp bài tập
  submitAssignment: async (assignmentId, userId, submissionData) => {
    try {
      const response = await axios.post(`${API_URL}/assignment/${assignmentId}/user/${userId}`, submissionData);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi nộp bài tập: ', error);
      throw new Error('Không thể nộp bài tập. Vui lòng thử lại sau.');
    }
  },

  // Lấy bài nộp theo ID
  getSubmissionById: async (submissionId) => {
    try {
      const response = await axios.get(`${API_URL}/${submissionId}`);
      return response.data;
    } catch (error) {
      console.error('Lỗi khi lấy bài nộp: ', error);
      throw new Error('Không thể lấy bài nộp. Vui lòng thử lại sau.');
    }
  },

  // Chấm điểm và cung cấp phản hồi
  gradeSubmission: async (submissionId, grade, feedback) => {
    try {
      const response = await axios.post(`${API_URL}/${submissionId}/grade`, null, {
        params: { grade, feedback },
      });
      return response.data;
    } catch (error) {
      console.error('Lỗi khi chấm điểm bài tập: ', error);
      throw new Error('Không thể chấm điểm bài tập. Vui lòng thử lại sau.');
    }
  },
};

export default submissionService;
