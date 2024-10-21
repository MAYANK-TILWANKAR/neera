import React from "react";
import Image from "next/image";

const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Neera Guesthouse Blog
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/guesthouse-exterior.jpg"
              alt="Neera Guesthouse Exterior in Ujjain"
              width={800}
              height={400}
              className="w-full object-cover h-64"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <a href="#" className="hover:text-blue-600">
                  Experience the Charm of Neera Guesthouse in Ujjain
                </a>
              </h2>
              <p className="text-gray-600 mb-4">Published on May 15, 2023</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nestled in the heart of Ujjain, Madhya Pradesh, Neera Guesthouse
                offers a unique blend of comfort, hospitality, and local charm.
                Our recently renovated rooms provide a cozy retreat after a day
                of exploring nearby attractions. From our stunning views of...
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Read More
              </a>
            </div>
          </article>

          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/mahakaleshwar-temple.jpg"
              alt="Mahakaleshwar Temple in Ujjain"
              width={800}
              height={400}
              className="w-full object-cover h-64"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <a href="#" className="hover:text-blue-600">
                  Exploring the Majestic Mahakaleshwar Temple from Neera
                  Guesthouse
                </a>
              </h2>
              <p className="text-gray-600 mb-4">Published on May 22, 2023</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Mahakaleshwar Temple, one of the most revered Jyotirlingas
                in India, stands as a testament to Ujjain&apos;s spiritual
                significance. Located just a short distance from Neera
                Guesthouse, this architectural marvel attracts thousands of
                devotees and tourists alike. The temple&apos;s...
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Read More
              </a>
            </div>
          </article>

          <article className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images/shipra-river.jpg"
              alt="Shipra River in Ujjain"
              width={800}
              height={400}
              className="w-full object-cover h-64"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                <a href="#" className="hover:text-blue-600">
                  The Sacred Shipra River: A Spiritual Journey from Neera
                  Guesthouse
                </a>
              </h2>
              <p className="text-gray-600 mb-4">Published on May 29, 2023</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Shipra River, also known as Kshipra, is not just a waterway
                but a lifeline of spirituality in Ujjain. Flowing gracefully
                near Neera Guesthouse, this sacred river has been mentioned in
                ancient Hindu scriptures and is believed to have...
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                Read More
              </a>
            </div>
          </article>

          {/* More blog posts would be added here, following the same structure */}
        </section>
      </div>
    </div>
  );
};

export default Blogs;
