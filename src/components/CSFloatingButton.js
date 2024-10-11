import React, { useState } from 'react';
import helpDeskImage from '../assets/help-desk.png'; // Import gambar dari folder src/assets

function CSFloatingButton() {
  const [csImage, setCsImage] = useState(helpDeskImage); // Set nilai awal dari gambar yang diimpor

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCsImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <input
        type="file"
        id="csImageInput"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <label
        htmlFor="csImageInput"
        className="block w-16 h-16 rounded-full bg-primary hover:bg-blue-600 cursor-pointer overflow-hidden shadow-lg transition-transform hover:scale-110"
      >
        <img src={csImage} alt="CS" className="w-full h-full object-cover" />
      </label>
      <div className="mt-2 text-center">
        <a
          href="https://wa.link/idoaqc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-secondary hover:bg-green-600 text-white py-1 px-3 rounded-full shadow-md transition-colors duration-300"
        >
          Butuh bantuan?
        </a>
      </div>
    </div>
  );
}

export default CSFloatingButton;
