import { Layout, Menu } from "antd";
import sidebarItmsGenarators from "../../utils/sidebarItmsGenarators";
import { AdminRoute } from "../../routes/admin.route";
import { facultyPaths } from "../../routes/faculty.route";
import { studentPaths } from "../../routes/student.route";
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
  };
  

const Sidebar = () => {
    const role = "student"
    let sidebarItems ;

    switch (role) {
        case userRole.ADMIN:
             sidebarItems = sidebarItmsGenarators(AdminRoute, userRole.ADMIN)
            break;
        case userRole.FACULTY:
             sidebarItems = sidebarItmsGenarators(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
             sidebarItems = sidebarItmsGenarators(studentPaths, userRole.STUDENT)
            break;
    
        default:
            break;
    }


    return <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
    >
        <div
            style={{
                color: 'white',

                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>PH Uni</h1>
        </div>
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={sidebarItems}
        />
    </Sider>
};

export default Sidebar;