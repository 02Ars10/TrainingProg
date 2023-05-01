
import Auth from "./Pages/Auth";
import Groups from "./Pages/Groups";
import Guide from "./Pages/Guide";
import Practice from "./Pages/Practice";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Room from "./Pages/Room"
import Chat from './Pages/Chat'
import Tasks from './Pages/Tasks'
import {
  HOME_ROUTE,
  PRACTICE_ROUTE,
  GUIDE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  TEST_ROUTE,
  ROOM_ROUTE,
  CHAT_ROUTE,
  ADMIN_ROUTE,
  TASKS_ROUTE,
  TEACHER_ROUTE,
  GROUPS_ROUTE,
  SOLUTIONS_ROUTE
} from "./utils/consts";
import CreateTeacher from "./Pages/CreateTeacher";
import Teacher from "./Pages/Teacher";
import Solutions from "./Pages/Solutions";


export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: TEACHER_ROUTE,
    Component: Teacher,
  },
  {
    path: TASKS_ROUTE,
    Component: Tasks,
  },
  {
    path: GROUPS_ROUTE,
    Component: Groups,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: ADMIN_ROUTE,
    Component: CreateTeacher,
  },
  {
    path: GUIDE_ROUTE,
    Component: Guide,
  },
  {
    path: PRACTICE_ROUTE,
    Component: Practice,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: TEST_ROUTE,
    Component: Test,
  },
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
  {
    path: ROOM_ROUTE,
    Component: Room,
  },

  {
    path: SOLUTIONS_ROUTE,
    Component: Solutions,
  },
];
