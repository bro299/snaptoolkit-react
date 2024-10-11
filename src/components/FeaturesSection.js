import React from 'react';

function FeaturesSection() {
  const features = [
    { icon: 'fa-image', color: 'text-secondary', title: 'Konverter Gambar HD', description: 'Konversi gambar Anda menjadi kualitas definisi tinggi dengan satu klik.' },
    { icon: 'fa-file-alt', color: 'text-yellow-400', title: 'Alat OCR', description: 'Ekstrak teks dari gambar dengan teknologi OCR canggih kami.' },
    { icon: 'fa-file-pdf', color: 'text-red-500', title: 'Konverter Word ke PDF', description: 'Ubah dokumen Word Anda menjadi file PDF dengan cepat dan mudah.' },
    { icon: 'fa-file-word', color: 'text-blue-500', title: 'Konverter PDF ke Word', description: 'Ubah file PDF Anda menjadi dokumen Word dengan cepat dan mudah.' },
    { icon: 'fa-magic', color: 'text-purple-500', title: 'AI Remini', description: 'Tingkatkan kualitas foto lama atau buram Anda menggunakan teknologi AI canggih.' },
  ];

  return (
    <section id="features" className="py-16 bg-dark-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Fitur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-6 bg-dark-300 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <i className={`fas ${feature.icon} text-4xl ${feature.color} mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;