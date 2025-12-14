import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Sidebar from "../dashboard/Sidebar";
import MyProfile from "../dashboard/MyProfile";
import MyBlogs from "../dashboard/MyBlogs";
import CreateBlog from "../dashboard/CreateBlog";
import UpdateBlog from "../dashboard/UpdateBlog";
import { Navigate } from "react-router-dom";
function Dashboard() {
  const { profile, isAuthenticated } = useAuth();
  const [component, setComponent] = useState("My Blogs");
  console.log(profile);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  // return (
  //   <div>
  //     <div>
  //       <Sidebar component={component} setComponent={setComponent} />
  //       {component === "My Profile" ? ( <MyProfile /> ) : component === "Create Blog" ? ( <CreateBlog />
  //       ) : component === "Update Blog" ? (
  //         <UpdateBlog />
  //       ) : (
  //         <MyBlogs />
  //       )}
  //     </div>
  //   </div>
  // );


  return (
  <div className="min-h-screen flex bg-gray-100">
    {/* LEFT SIDEBAR */}
    <div className="w-64 bg-white shadow-lg">
      <Sidebar component={component} setComponent={setComponent} />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 p-6">
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : component === "Update Blog" ? (
        <UpdateBlog />
      ) : (
        <MyBlogs />
      )}
    </div>
  </div>
);

}

export default Dashboard;
