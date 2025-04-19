import { useState } from "react";
import "../styles/FormSection.css";

export default function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
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
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School name:</label>
            <input
              id="schoolName"
              type="text"
              name="schoolName"
              placeholder="Enter school name"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="titleOfStudy">Title of study:</label>
            <input
              id="titleOfStudy"
              type="text"
              name="titleOfStudy"
              placeholder="Enter title of study"
              value={formData.titleOfStudy}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfStudy">Date of study:</label>
            <input
              id="dateOfStudy"
              type="text"
              name="dateOfStudy"
              placeholder="Enter date of study"
              value={formData.dateOfStudy}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School name: {formData.schoolName}</p>
          <p>Title of study: {formData.titleOfStudy}</p>
          <p>Date of study: {formData.dateOfStudy}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
