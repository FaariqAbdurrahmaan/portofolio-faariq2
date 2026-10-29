import Navbar from "./components/Navbar";
import FotoBaru from "/assets/trttt.jpg";
import { listTools, listProyek } from "./data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 md:px-8">
        <Navbar />

        <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={FotoBaru} alt="Hero Image" className="w-10 rounded-md" />
              <q className="text-sm md:text-base">Desain kok pake AI? Skill Issue ya 😹😹😹 </q>
            </div>
            <h1 className="text-3xl md:text-5xl/tight font-bold mb-6">Hi, Saya Faariq Abdurrahmaan Ayyaasy</h1>
            <p className="text-sm md:text-base/loose mb-6 opacity-50">
              Saya Seorang Santri Hubbul Khoir yang mempunyai ketertarikan dalam bidang desain, terutama pada pembuatan poster, 3d Modelling, DLL. Ketertarikan pada bidang ini mulai ada sejak saya kelas 5 SD.
            </p>
            <div className="flex items-center gap-4">

              <a
                href="/CV_Faariq.pdf"
                download="CV_Faariq.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-700 px-5 py-3 md:px-6 md:py-4 rounded-2xl hover:bg-violet-500 flex items-center gap-2 text-sm md:text-base text-white font-medium shrink-0"
              >
                Download CV <i className="ri-download-line"></i>
              </a>
              <a href="#proyek" className="bg-zinc-700 p-3 md:p-4 rounded-2xl hover:bg-violet-500 flex items-center gap-2 text-sm md:text-base">
                Lihat Proyek <i className="ri-arrow-down-line"></i>
              </a>
            </div>
          </div>

          <div>
            <img src={FotoBaru} alt="Hero Image" className="w-full md:w-[500px] mx-auto md:ml-auto rounded-xl" />
          </div>
        </div>
      </div>

      <div className="tentang mt-10 md:mt-20 py-10">
        <div className="w-[90%] md:w-4/5 mx-auto p-6 md:p-8 bg-zinc-800 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="md:col-span-2">
            <p className="text-sm md:text-base/loose opacity-90">
              Halo! saya Faariq Abdurrahmaan Ayyaasy, Seorang desainer pemula, saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tapi juga menghasilkan hasil yang optimal. Saya lahir di Bogor 26 September 2011. Saya anak ke-4 dari 6 bersaudara, Saat ini saya masih duduk di jenjang SMP.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-t md:border-t-0 md:border-l border-zinc-700 pt-6 md:pt-0 md:pl-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-violet-400">
                90<span className="text-violet-400">+</span>
              </h1>
              <p className="text-xs md:text-sm opacity-70">Proyek Selesai</p>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-violet-400">
                3<span className="text-violet-400">+</span>
              </h1>
              <p className="text-xs md:text-sm opacity-70">Tahun Pengalaman</p>
            </div>
          </div>

        </div>

        <div className="tools container mx-auto px-4 md:px-8 mt-20 md:mt-32">
          <h1 className="text-2xl md:text-4xl/snug font-bold mb-4">Tools yang dipakai </h1>
          <p className="w-full md:w-2/5 text-sm md:text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya gunakan</p>

          <div className="tools-box mt-8 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {listTools.map((tool) => (
              <div className="flex items-center gap-3 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
                <img src={tool.gambar} alt="Tools Image" className="w-12 h-12 object-cover bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">{tool.nama}</h4>
                  <p className="text-xs md:text-sm opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="proyek" className="proyek container mx-auto px-4 md:px-8 mt-20 md:mt-32 py-10">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-sm md:text-base/loose text-center opacity-50">Berikut ini beberapa proyek yang telah saya buat 🥱🥱🥱</p>

        <div className="proyek-box mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-xl flex flex-col justify-between">
              <div>
                <img src={proyek.gambar} alt="Proyek Image" className="w-full h-48 object-cover rounded-lg" />
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-sm md:text-base/loose mb-4 opacity-70">{proyek.desk}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyek.tools.map((tool, index) => (
                    <span className="py-1 px-3 text-xs border border-zinc-500 bg-zinc-700 rounded-md font-semibold" key={index}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div>
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block text-center border border-zinc-600 hover:bg-violet-600 text-sm font-semibold">
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="kontak" className="kontak container mx-auto px-4 md:px-8 mt-20 md:mt-32 py-10">
        <div className="bg-zinc-800 p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kritik & Saran</h1>
          <p className="text-sm md:text-base opacity-70 mb-8">
            Kalo ada kritik & Saran langsung hubungi aja, IG-nya jangan lupa di follow 👌👌👌
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6287866310130"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base"
            >
              <i className="ri-whatsapp-line text-lg"></i> WhatsApp
            </a>

            <a
              href="https://www.instagram.com/farmaaan_a/"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-700 hover:bg-zinc-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base"
            >
              <i className="ri-instagram-line text-lg"></i> Instagram
            </a>

            {/* Gmail direct link */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=abdurrahmaanfaariq1@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-violet-700 hover:bg-violet-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm md:text-base"
            >
              <i className="ri-mail-line text-lg"></i> Gmail
            </a>
          </div>
        </div>
      </div>


      <footer className="border-t border-zinc-800 mt-20 py-8">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-50">
            © 2026 Faariq Abdurrahmaan. Built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-4 text-xl opacity-70">
            <a href="#" className="hover:text-violet-400"><i className="ri-github-fill"></i></a>
            <a href="#" className="hover:text-violet-400"><i className="ri-instagram-line"></i></a>
            <a href="#" className="hover:text-violet-400"><i className="ri-youtube-line"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;