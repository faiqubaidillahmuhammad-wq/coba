import Footers from "../MainPage/Footer";
import usePhotoCharousel from "../Function/usePhotoCharousel";

function About() {
  const photos = ["./images1/Lib1.jpg", "./images1/fotBar.jpeg"];
  const { index, next, prev } = usePhotoCharousel(photos, 4000);

  return (
    <>
      <div className="align-center text-center">
        <h1 className="text-[40px] font-bold">Tentang KUA Paciran</h1>
        <div>
          <img
            src={photos[index]}
            alt="Kantor KUA Paciran"
            className="w-[400px] h-full relative mx-auto my-4"
          />
        </div>
        <p className="mx-10 text-justify m-4 font-[sans-serif] font-medium space-y-4 text-[20px]">
          Kantor Urusan Agama Kecamatan Paciran merupakan instansi vertikal di
          bawah naungan Kementerian Agama Kabupaten Lamongan yang memiliki tugas
          dan fungsi dalam penyelenggaraan sebagian urusan pemerintahan di
          bidang agama Islam di wilayah Kecamatan Paciran. KUA Paciran berperan
          sebagai ujung tombak pelayanan publik di bidang keagamaan, keluarga
          sakinah, dan kemaslahatan umat yang menjangkau seluruh lapisan
          masyarakat di kecamatan ini. Memiliki wilayah kerja yang meliputi 17
          desa di sepanjang pesisir utara Kabupaten Lamongan, Provinsi Jawa
          Timur, dengan luas wilayah sekitar 61,30 km². Wilayah ini dikenal
          sebagai kawasan religius, pesisir, dan pendidikan, karena banyak
          berdiri pondok pesantren, madrasah, serta destinasi wisata. Wilayah
          kerja Kantor Urusan Agama (KUA) Kecamatan Paciran mencakup 17 desa,
          yaitu Desa Blimbing, Desa Kandangsemangkon, Desa Paciran, Desa
          Sumurgayam, Desa Sendangagung, Desa Sendangduwur, Desa Tunggul, Desa
          Kranji, Desa Drajat, Desa Banjarwati, Desa Kemantren, Desa Sidokelar,
          Desa Tlogosadang, Desa Paloh, Desa Weru, Desa Sidokumpul, dan Desa
          Warulor.
        </p>
      </div>
      <Footers />
    </>
  );
}

export default About;
