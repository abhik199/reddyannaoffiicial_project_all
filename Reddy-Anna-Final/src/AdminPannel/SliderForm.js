import { useState, useEffect } from "react";
import { add_slider, get_slider, remove_slider } from "../http/api";
import "../AdminPannel/SliderForm.css";

const SliderForm = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await get_slider();
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const addImage = async () => {
    if (!selectedFile) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("slider", selectedFile);

    try {
      await add_slider(formData);
      setSelectedFile(null);
      setPreview("");
      fetchImages();
    } catch (error) {
      console.error("Error adding image:", error);
    }
  };

  const deleteImage = async (id) => {
    try {
      await remove_slider(id);
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Slider Form</h2>

      <div className="upload-area">
        {" "}
        {/* New div for better styling */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="imageInput" // Added ID for label connection
          className="slider-input"
        />
        <label htmlFor="imageInput" className="upload-label">
          {" "}
          {/* Label for custom styling */}
          <span>Choose Image</span> {/* Improved label text */}
        </label>
        {preview && (
          <img src={preview} alt="Preview" className="preview-image" />
        )}
      </div>

      <button onClick={addImage} className="slider-button add-button">
        Add Image
      </button>

      <ul className="slider-list">
        {images.map((image) => (
          <li key={image._id} className="slider-item">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/slider/${image.imageUrl}`}
              alt="Slider"
              className="slider-image"
            />
            <button
              onClick={() => deleteImage(image._id)}
              className="slider-button delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderForm;
