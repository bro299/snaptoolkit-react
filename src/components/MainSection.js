import React, { useState } from 'react';
import axios from 'axios';

function MainSection() {
  const [action, setAction] = useState('convert');
  const [file, setFile] = useState(null);
  const [reminiMethod, setReminiMethod] = useState('low');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Step 1: Upload the file
      const uploadResponse = await axios.post('https://itzpire.com/tools/upload', formData, {
        headers: { 'accept': '*/*' }
      });

      if (uploadResponse.data.status === "success") {
        const fileUrl = uploadResponse.data.fileInfo.url;

        // Step 2: Process the file based on the selected action
        let processUrl;
        switch (action) {
          case 'convert':
            processUrl = `https://api.nyxs.pw/tools/hd?url=${encodeURIComponent(fileUrl)}`;
            break;
          case 'ocr':
            processUrl = `https://api.nyxs.pw/tools/ocr?url=${encodeURIComponent(fileUrl)}`;
            break;
          case 'wordToPdf':
            processUrl = `https://api.nyxs.pw/converter/word-to-pdf?url=${encodeURIComponent(fileUrl)}`;
            break;
          case 'pdfToWord':
            processUrl = `https://api.nyxs.pw/converter/pdf-to-word?url=${encodeURIComponent(fileUrl)}`;
            break;
          case 'aiRemini':
            processUrl = `https://api.ryzendesu.vip/api/ai/remini?url=${encodeURIComponent(fileUrl)}&method=${reminiMethod}`;
            break;
        }

        const processResponse = await axios.get(processUrl, {
          responseType: action === 'aiRemini' ? 'blob' : 'json'
        });

        setResult({ action, data: processResponse.data });
      }
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="main" className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark-200 rounded-xl shadow-2xl p-8 glassmorphism">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="actionSelect" className="block text-sm font-medium text-gray-300 mb-2">Pilih Tindakan</label>
              <select
                id="actionSelect"
                value={action}
                onChange={(e) => setAction(e.target.value)}
                className="w-full p-3 bg-dark-300 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
              >
                <option value="convert">Konverter Gambar HD</option>
                <option value="ocr">Alat OCR</option>
                <option value="wordToPdf">Word ke PDF</option>
                <option value="pdfToWord">PDF ke Word</option>
                <option value="aiRemini">AI Remini</option>
              </select>
            </div>

            <div>
              <label htmlFor="fileInput" className="block text-sm font-medium text-gray-300 mb-2">Pilih File</label>
              <input
                type="file"
                id="fileInput"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full p-3 bg-dark-300 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
              />
            </div>

            {action === 'aiRemini' && (
              <div>
                <label htmlFor="reminiMethod" className="block text-sm font-medium text-gray-300 mb-2">Pilih Metode AI Remini</label>
                <select
                  id="reminiMethod"
                  value={reminiMethod}
                  onChange={(e) => setReminiMethod(e.target.value)}
                  className="w-full p-3 bg-dark-300 text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300"
                >
                  <option value="low">Low</option>
                  <option value="default">Default</option>
                  <option value="high">High</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-primary rounded-lg text-white flex items-center justify-center transition duration-300"
            >
              {loading ? 'Processing...' : 'Unggah dan Proses'}
            </button>
          </form>

          {result && (
            <div className="mt-8 text-center p-6 bg-dark-300 rounded-lg">
              {result.error ? (
                <p className="text-red-400">Error: {result.error}</p>
              ) : (
                <ResultDisplay result={result} />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ResultDisplay({ result }) {
  switch (result.action) {
    case 'convert':
    case 'aiRemini':
      return (
        <>
          <p className="mb-4 font-bold text-lg">Gambar berhasil diproses!</p>
          <div className="bg-dark-400 p-4 rounded-lg">
            <img src={URL.createObjectURL(result.data)} alt="Processed Image" className="result-image"/>
            <a href={URL.createObjectURL(result.data)} download className="mt-4 inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition duration-300">
              <i className="fas fa-download mr-2"></i>Unduh Gambar
            </a>
          </div>
        </>
      );
    case 'ocr':
      return (
        <>
          <p className="mb-4 font-bold text-lg">Teks berhasil diekstrak!</p>
          <div className="bg-dark-400 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Hasil Ekstraksi Teks:</h3>
            <pre className="result-text">{result.data.result}</pre>
            <button onClick={() => navigator.clipboard.writeText(result.data.result)} className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition duration-300">
              <i className="fas fa-copy mr-2"></i>Salin Teks
            </button>
          </div>
        </>
      );
    case 'wordToPdf':
    case 'pdfToWord':
      const fileType = result.action === 'wordToPdf' ? 'PDF' : 'Word';
      return (
        <>
          <p className="mb-4 font-bold text-lg">File berhasil dikonversi!</p>
          <div className="bg-dark-400 p-4 rounded-lg">
            <p className="font-semibold mb-2">URL File {fileType}:</p>
            <div className="flex items-center justify-between">
              <a href={result.data.result} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm break-all">{result.data.result}</a>
              <button onClick={() => navigator.clipboard.writeText(result.data.result)} className="ml-2 text-gray-300 hover:text-white transition-colors duration-300">
                <i className="fas fa-copy"></i>
              </button>
            </div>
            <a href={result.data.result} download className="mt-4 inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition duration-300">
              <i className="fas fa-download mr-2"></i>Unduh File {fileType}
            </a>
          </div>
        </>
      );
    default:
      return <p>Unsupported result type</p>;
  }
}

export default MainSection;