import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import StudentList from './Components/List/StudentList';
import TeacherList from './Components/List/TeacherList';
import AddStudent from './Components/Add/AddStudent';
import AddTeacher from './Components/Add/AddTeacher';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import DashHome from './Components/DashBoard/DashHome';
import StudentLogin from './Components/Login/StudentLogin';
import TeacherLogin from './Components/Login/TeacherLogin';
import Choose from './Components/Choose/Choose';
import StudentSignup from './Components/Signup/StudentSignup';
import ChooseSign from './Components/Choose/ChooseSign';
import AddAdmin from './Components/Add/AddAdmin';
import TeacherDashboard from './Components/DashBoard/TeacherDashboard';
import StudentDash from './Components/DashBoard/StudentDash';
import AddGrades from './Components/Add/AddGrades';
import StudentGrades from './Components/List/StudentGrades';
import TeacherSubject from './Components/List/TeacherSubject';
import AddSubject from './Components/Add/AddSubject';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Choose />} />
        <Route path="/signup" element={<ChooseSign />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/add-admin" element={<AddAdmin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/add-grades" element={<AddGrades />} />
        <Route path="/student-grades" element={<StudentGrades />} />
        <Route path="/teacher-subject" element={<TeacherSubject />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path='/teacher-signup' element={<Signup />} />
        <Route path='/add-subject' element={<AddSubject/>}/>
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path='/dashboard' element={<DashHome />} />
        <Route path='/dashboard-teacher' element={<TeacherDashboard />} />
        <Route path='/dashboard-student' element={<StudentDash />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/teacher-list" element={<TeacherList />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
