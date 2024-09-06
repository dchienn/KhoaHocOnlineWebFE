import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CourseProvider } from './context/CourseContext';
import UserPage from './page/UserPage';
import CourseDetails from './components/CourseDetails';

function App() {
  useEffect(() => {
    // Mặc định userID và instructorID khi ứng dụng khởi chạy
    localStorage.setItem('userId', '1'); // Mặc định userID là 1
    localStorage.setItem('instructorId', '1'); // Mặc định instructorID là 1
  }, []);

  return (
    <CourseProvider>
      <Router>
        <Routes>
          {/* Route chính */}
          <Route path="/*" element={<UserPage />} />
          <Route path="/courses/:id/content" element={<CourseDetails />} />
        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;
