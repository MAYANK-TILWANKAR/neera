import Image from "next/image";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";

const Host: React.FC = () => {
  return (
    <section id="host" className="section4">
      {/* <p className='text-xl font-semibold'>-- Your Stay Host</p> */}
      <h1 className="sectionHeadings font-bold mb-2">
        Meet Your <span className="text-white">Host</span>
      </h1>
      <p className="text-justify  mr-10 ml-10 text-gray-700 pr-14 pl-14 mb-8">
        At &quot;Neera: The Guest House,&quot; your stay is made memorable by
        Mr. and Mrs. Sharma. This warm senior couple, with over 65 years of life
        experience, brings a personal touch to every visit. They, along with
        their friendly team, make sure you feel like part of the family,
        offering not just a place to stay but a true sense of belonging. THE
        CONTENT HERE WILL INCRESE
      </p>
      {/* <div className="section4cards">
          <div className="section4card">
          <Image
              src={person1}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          <div className="section4card">
          <Image
              src={person2}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          <div className="section4card">
          <Image
              src={person3}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          </div> */}
    </section>
  );
};

export default Host;
