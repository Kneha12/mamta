import React, { useEffect, useState, useCallback } from "react";
import "./Quotes.css";
import axios from "axios";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchQuotes = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/quotes", {
        params: { page, limit, phone: search, date: dateFilter },
      });

      const quoteData = response.data?.quotes || [];
      const totalCount = response.data?.total || 0;

      setQuotes(quoteData);
      setTotal(totalCount);

      console.log("Fetched Quotes:", quoteData);
    } catch (err) {
      console.error("❌ Error fetching quotes:", err);
      setQuotes([]);
    }
  }, [page, search, dateFilter]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this quote?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/quotes/${id}`);
      fetchQuotes();
    } catch (err) {
      alert("❌ Failed to delete quote.");
      console.error(err);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(quotes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Quotes");
    XLSX.writeFile(workbook, "Quotes.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableData = quotes.map((q, i) => [i + 1, q.name, q.phone, q.date?.split("T")[0]]);
    doc.autoTable({ head: [["#", "Name", "Phone", "Date"]], body: tableData });
    doc.save("Quotes.pdf");
  };

  return (
    <div className="quotes-admin">
      <h2>Quote Requests</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <button onClick={exportToExcel}>Export Excel</button>
        <button onClick={exportToPDF}>Export PDF</button>
      </div>

      <table className="quote-table">
        <thead>
          <tr>
  <th>#</th>
  <th>Name</th>
  <th>Phone</th>
  <th>Pickup Location</th>
  <th>Drop Location</th>
  <th>Date</th>
  <th>Actions</th>
</tr>
        </thead>
        <tbody>
         {(quotes || []).map((q, i) => (
  <tr key={q._id}>
    <td>{(page - 1) * limit + i + 1}</td>
    <td>{q.name}</td>
    <td>{q.phone}</td>
    <td>{q.pickupLocation || ''}</td>
<td>{q.dropLocation || ''}</td>
    <td>{q.date?.split("T")[0]}</td>
    <td>
      <button onClick={() => handleDelete(q._id)}>Delete</button>
    </td>
  </tr>
))}

        </tbody>
      </table>

      {quotes.length === 0 && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No quote data found.
        </p>
      )}

      <div className="pagination">
        {[...Array(Math.ceil(total / limit))].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
