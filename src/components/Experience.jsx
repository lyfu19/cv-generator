import { useState } from "react";
import "../styles/FormSection.css";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="positionTitle">Position Title:</label>
            <input
              id="positionTitle"
              type="text"
              name="positionTitle"
              placeholder="Enter position title"
              value={formData.positionTitle}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
            <input
              id="mainResponsibilities"
              type="text"
              name="mainResponsibilities"
              placeholder="Enter main responsibilities"
              value={formData.mainResponsibilities}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateFrom">Date From:</label>
            <input
              id="dateFrom"
              type="text"
              name="dateFrom"
              placeholder="Enter date from"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateUntil">Date Until:</label>
            <input
              id="dateUntil"
              type="text"
              name="dateUntil"
              placeholder="Enter date until"
              value={formData.dateUntil}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company Name: {formData.companyName}</p>
          <p>Position Title: {formData.positionTitle}</p>
          <p>Main Responsibilities: {formData.mainResponsibilities}</p>
          <p>Date From: {formData.dateFrom}</p>
          <p>Date Until: {formData.dateUntil}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
