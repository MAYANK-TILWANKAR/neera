"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ContactUs() {
  const phoneNumber = "+91 92443 82639";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfGuests: "",
    dateFrom: "",
    dateTo: "",
    additionalRequirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      numberOfGuests: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          numberOfGuests: "",
          dateFrom: "",
          dateTo: "",
          additionalRequirements: "",
        });
        // Show popup
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contactUs"
      className="section8 flex flex-col items-center justify-center min-h-screen py-20 -mt-40 sm:-mt-36 ">
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Service Booked!
            </p>
            <p className="text-gray-600">
              Thank you for your reservation. We look forward to hosting you.
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col mt-20 justify-center gap-12 w-full max-w-full p-9 space-y-8 md:flex-row md:space-y-0 md:space-x-8 section8">
        <div className="flex-1 max-w-xl">
          <h3 className="mt-2 text-4xl font-bold text-gray-800">
            Get a<span className="text-[#3B82F6]"> Quote</span>
          </h3>
          <h2 className="text-md mt-5 mb-5 text-gray-600">
            For any inquiries, bookings or information, reach out to us via
            phone, email or our online form. We are here to help you plan a
            spiritually enriching stay at Neera.{" "}
          </h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ex. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium">
                  Number of Guests *
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.numberOfGuests}>
                  <SelectTrigger id="service" aria-label="Service">
                    <SelectValue placeholder="Select Number of Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="date-from"
                  className="block text-sm font-medium">
                  From *
                </label>
                <Input
                  id="date-from"
                  name="dateFrom"
                  type="date"
                  value={formData.dateFrom}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="date-to" className="block text-sm font-medium">
                  To *
                </label>
                <Input
                  id="date-to"
                  name="dateTo"
                  type="date"
                  value={formData.dateTo}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Additional Requirements *
              </label>
              <Textarea
                id="message"
                name="additionalRequirements"
                placeholder="Enter here..."
                className="min-h-[100px]"
                value={formData.additionalRequirements}
                onChange={handleInputChange}
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-yellow-400 relative overflow-hidden group"
              disabled={isSubmitting}>
              <span
                className={`${
                  isSubmitting ? "opacity-0" : "opacity-100"
                } transition-opacity duration-200`}>
                Book a Service
              </span>
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </form>
        </div>
        <div className="section8right max-w-sm flex-1 flex flex-col justify-between px-6 py-14 space-y-4 text-white bg-teal-700 rounded-lg">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold">Address</h4>
            <p>1-MIG,Muni Nagar,Sanwer Road,</p>
            <p>Ujjain, Madhya Pradesh 456010</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold">Contact</h4>
            <Link href={`tel:${phoneNumber}`}>
              <p>{phoneNumber}</p>
            </Link>
            <p>Email: adisharma151ays@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-bold">Open Time</h4>
            <p>Monday - Friday : 10:00 - 20:00</p>
            <p>Saturday - Sunday : 11:00 - 18:00</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Stay Connected</h4>
            <div className="flex mt-4 justify-around space-x-2">
              <FacebookIcon className="w-6 h-6 text-yellow-400" />
              <TwitterIcon className="w-6 h-6 text-yellow-400" />
              <PinIcon className="w-6 h-6 text-yellow-400" />
              <InstagramIcon className="w-6 h-6 text-yellow-400" />
              <YoutubeIcon className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FacebookIconProps {
  [key: string]: any;
}

const FacebookIcon: React.FC<FacebookIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

interface InstagramIconProps {
  [key: string]: any;
}

const InstagramIcon: React.FC<InstagramIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

interface PinIconProps {
  [key: string]: any;
}

const PinIcon: React.FC<PinIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
};

interface TwitterIconProps {
  [key: string]: any;
}

const TwitterIcon: React.FC<TwitterIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};

interface YoutubeIconProps {
  [key: string]: any;
}

const YoutubeIcon: React.FC<YoutubeIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
};
