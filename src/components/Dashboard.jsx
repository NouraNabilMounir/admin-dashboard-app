import Sidebar from "./Sidebar";
import UsersTable from "./UsersTable";

function Dashboard(){
  const username = localStorage.getItem("username");
  return (
    <>
      <Sidebar />
      <div className="w-full md:w-3/4 min-h-screen">
        <h1 className="text-4xl text-left font-semibold mb-12 ml-8 pt-12">Welcome {username} to Dashboard</h1>
        <UsersTable />
      </div>
    </>
    )
}
export default Dashboard;