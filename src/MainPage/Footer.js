import React from "react";
import { Link } from "react-router-dom";
function Footers() {
  const sosmed = [
    {
      name: "@kua.paciran",
      link: "https://www.instagram.com/kua.paciran/",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s",
    },
    {
      name: "facebook",
      link: "safk",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtfbcYeYgf0wQJ-LSPm3CPbyB7T1p0f5bnaA&s",
    },
    {
      name: "twitter",
      link: "fsahjkd",
      icon: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
    },
    {
      name: "youtube",
      link: "fhsajhd",
      icon: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png",
    },
  ];
  return (
    <>
      <div className="w-full bg-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center p-10 mx-0 rounded-t-lg shadow-lg min-h-[320px] footeres">
        <div className="logo mb-6 md:mb-0 text-center">
          <img
            src="./images1/logo.png"
            alt="logo"
            className="w-[150px] h-[150px]"
          />
          <p className="text-lg font-bold">KUA PACIRAN</p>
        </div>
        <div className="left w-full md:w-[70%] flex flex-col md:flex-row justify-between gap-10">
          <div className="e-cont flex flex-col gap-4 min-w-[220px]">
            <a
              href="mailto:kua.paciran1@gmail.com
"
              name="email"
              className="text-blue-700 hover:underline text-lg font-semibold"
            >
              kua.paciran1@gmail.com
            </a>
            <a
              href="https://wa.me/+6285859639433"
              name="telp"
              className="text-blue-700 hover:underline text-lg font-semibold"
            >
              0858-5963-9433
            </a>
            <div className="e-sos flex items-start gap-8 mt-4 itemses">
              <div className="sos-list flex flex-col gap-2">
                {sosmed.map((item) => (
                  <>
                    <Link
                      to={item.link}
                      key={item.name}
                      className="flex items-center gap-3 text-lg text-gray-700 hover:text-gray-900 m-1 transition-colors duration-200 font-medium"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-7 h-7"
                      />
                      <span className="capitalize">{item.name}</span>
                    </Link>
                  </>
                ))}
              </div>
              <div className="map-wrapper hidden sm:block">
                <iframe
                  title="Embedded Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1721276089884!2d112.34602679999999!3d-6.869968000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77c210ac6a3ca3%3A0xd6e2b26626bd28c4!2sKUA%20Kecamatan%20Paciran!5e0!3m2!1sid!2sid!4v1761932825554!5m2!1sid!2sid"
                  width="320"
                  height="180"
                  className="rounded shadow border border-gray-400"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            name="location"
            className="mt-8 md:mt-0 w-full md:w-[350px] text-base text-gray-800 bg-white bg-opacity-80 p-6 rounded shadow-md font-medium"
          >
            <span className="font-bold text-lg text-gray-900">Alamat:</span>
            <br />
            Jl. Raya Paciran No.70, Paciran, Kec. Paciran, Kabupaten Lamongan,
            Jawa Timur 62264
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-base text-gray-600 py-4 bg-gray-200 font-semibold tracking-wide">
        @KUAPaciran_2025
      </footer>
    </>
  );
}

export default Footers;
