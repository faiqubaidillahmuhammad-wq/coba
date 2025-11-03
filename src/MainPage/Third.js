import React from "react";
const pointText = [
  "Meningkatkan kualitas pelayanan kegamaan pada masyarakat, dan mendorong peran aktif lembaga keagamaan.",
  "Melakukan pengawasan, pembinaan dan pencatatan nikah dan rujuk agar pelaksanaannya sesuai dengan syariat agama Islam dan Undang-Undang No. 1 tahun 1974 tentang perkawinan.",
  "Meningkatkan kualitas pelayan informasi dan bimbingan teknologi informasi.",
  "Mendorong terciptanya kualitas kehidupan keluarga menuju keluarga yang sakinah, bahagia, sejahtera materiil dan spiritual.",
  "Meningkatkan kualitas pelayanan informasi dan bimbingan haji, zakat dan wakaf.",
  "Memaksimalkan kemitraan umat dan koordinasi lintas sektoral.",
];
const Third = () => {
  return (
    <section
      className="max-w-6xl mx-auto p-8 mt-10 mb-10 rounded-xl shadow-md text-gray-900"
      id="VISI-MISI"
    >
      <div className="md:flex md:gap-8 items-start">
        <div className="mt-5 md:mt-0 flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold">VISI DAN MISI</h2>
          <div className="mt-6 overflow-x-hidden mobiles">
            <p className="mt-4 text-center text-base md:text-lg leading-relaxed text-gray-700 mobiles">
              <h1 className="text-center font-bold text-lg">VISI</h1>
              “Terwujudnya masyarakat kecamatan Paciran yang taat beragama,
              rukun, cerdas, mandiri, dan sejahtera lahir batin.”
            </p>
            <p className="mt-4 text-justify text-base md:text-lg leading-relaxed text-gray-700  mobiles">
              <br />
              <br />
              <h1 className="text-center font-bold text-lg">MISI</h1>
              {pointText.map((misi, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-100 text-indigo-600 font-semibold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{misi}</p>
                  </div>
                </li>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
