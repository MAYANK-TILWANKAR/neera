import Marquee from "react-fast-marquee";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutUs" className=" px-4">
      <div className="hidden md:block">
        <Marquee className="-mt-24">
          {[
            "Sacred",
            "Ancient",
            "Serene",
            "Spiritual",
            "Peaceful",
            "Tranquil",
            "Calm",
            "Comfortable",
            "Relaxing",
            "Refreshing",
            "Inviting",
            "Welcoming",
            "Homey",
            "Cozy",
          ].map((word, index) => (
            <span
              key={index}
              className="mx-4 text-lg font-bold italic text-blue-500">
              ✨ {word}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="lg:mx-auto lg:max-w-7xl sm:mt-0 pt-14">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-5">
            About <span className="text-[#3B82F6]">Neera</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <iframe
                className="w-full h-[400px] rounded-3xl shadow-lg"
                src="https://drive.google.com/file/d/1vvZZWMDnAOFtj4xcdXQpVzz84WP7rBzi/preview"
                loading="lazy"
                title="Neera Guesthouse Video"
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                &quot;Neera: The Guest House&quot; was born from a desire to
                create a space that feels like home for travelers seeking both
                comfort and a deeper connection with Ujjain&apos;s spiritual
                essence. We chose the term &quot;Guest House&quot; to emphasize
                our commitment to providing a warm, welcoming environment, much
                like the traditional Indian concept of &apos;Atithi Devo
                Bhava&apos; (Guest is God).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 hidden md:block">
                A guest house offers a more personal touch, where every visitor
                is treated as a cherished guest in our home. Our name,
                &quot;Neera,&quot; inspired by the purity of water, reflects the
                calm and refreshing experience we strive to offer each guest.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed hidden md:block">
                Our aim is to create a sanctuary where you feel more like a
                guest in a loved one&apos;s home, surrounded by care and
                tranquility. Our goal is to make you feel like a special guest
                in a loved ones home, with plenty of care and peace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
