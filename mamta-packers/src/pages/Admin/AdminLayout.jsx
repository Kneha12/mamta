import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Mamta Admin</h2>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/quotes">Quotes</Link>
          <Link to="/admin/blogs">Blogs</Link>
          <Link to="/admin/reviews">Reviews</Link>
          <Link to="/admin/gallery">Gallery</Link>
          <Link to="/admin/bill">Bill</Link>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
