import { useState, useContext } from "react";
import { createWeddingStory } from "../api/weddingStoryService";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";

const AdminDashboard = () => {
  const { isAdmin, logoutUser, loading } = useContext(AuthContext);

  const [files, setFiles] = useState([]);
  const [coupleName, setCoupleName] = useState("");
  const [status, setStatus] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // ⏳ Wait until auth is loaded
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // 🚫 Block non-admin users
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async () => {
    if (!coupleName || files.length === 0) {
      alert("Please enter couple name and upload images");
      return;
    }

    try {
      setSubmitting(true);

      await createWeddingStory({
        coupleName,
        images: files,
        status,
      });

      alert("Wedding story created successfully!");

      // Reset form
      setCoupleName("");
      setFiles([]);
      setStatus(true);
    } catch (err) {
      console.error(err);
      alert("Failed to create wedding story");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="pt-24">
        <div className="p-8 max-w-xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button
              onClick={logoutUser}
              className="text-sm text-red-600 hover:underline"
            >
              Logout
            </button>
          </div>

          {/* Form */}
          <div className="bg-white shadow p-6 rounded">
            <h2 className="text-lg font-semibold mb-4">
              Add Wedding Story
            </h2>

            <input
              type="text"
              placeholder="Couple Name"
              className="border p-2 w-full mb-4"
              value={coupleName}
              onChange={(e) => setCoupleName(e.target.value)}
            />

            <input
              type="file"
              multiple
              accept="image/*"
              className="mb-4"
              onChange={(e) => setFiles([...e.target.files])}
            />

            {/* Status Toggle */}
            <label className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
              <span>Active</span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-black text-white px-6 py-2 w-full disabled:opacity-50"
            >
              {submitting ? "Creating..." : "Create Story"}
            </button>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default AdminDashboard;
