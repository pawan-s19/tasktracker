import Container from "../Container";
import SideBarTab from "../Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <SideBarTab />
      <Container />
    </div>
  );
}

export default Dashboard;
