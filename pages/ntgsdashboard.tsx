"use client";
import React, { useEffect, useState } from "react";

interface FormEntry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  numberOfGuests: number;
  dateFrom: string;
  dateTo: string;
  additionalRequirements?: string;
  createdAt: string;
}

const ContactAdminDashboard = () => {
  const [formData, setFormData] = useState<FormEntry[]>([]);
  const [filteredData, setFilteredData] = useState<FormEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getDetails");
        if (!res.ok) {
          const errorDetails = await res.text();
          throw new Error(`Error fetching data: ${errorDetails}`);
        }
        const jsonData = await res.json();
        // Sort by createdAt in descending order (newest first)
        const sortedData = jsonData.sort(
          (a: FormEntry, b: FormEntry) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setFormData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = formData.filter((entry) => {
      const entryDate = new Date(entry.dateFrom);
      const isMatchingSearch =
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.email.toLowerCase().includes(searchTerm.toLowerCase());
      const isMatchingMonth =
        selectedMonth === "" ||
        entryDate.getMonth() === parseInt(selectedMonth) - 1;
      const isMatchingYear =
        selectedYear === "" ||
        entryDate.getFullYear() === parseInt(selectedYear);
      return isMatchingSearch && isMatchingMonth && isMatchingYear;
    });
    // Maintain sort order after filtering
    const sortedFiltered = filtered.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setFilteredData(sortedFiltered);
  }, [searchTerm, selectedMonth, selectedYear, formData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  // Get current year and generate a range of years (current year - 1 to current year + 2)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 4 }, (_, i) => currentYear - 1 + i);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Booking Details</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="px-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-md"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">All Months</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
        <select
          className="px-4 py-2 border rounded-md"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Name
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Email
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Phone
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Guests
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                From
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                To
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Additional Requirements
              </th>
              <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Submitted On
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredData.map((entry) => (
                <tr key={entry._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.numberOfGuests}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(entry.dateFrom).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(entry.dateTo).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.additionalRequirements || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {new Date(entry.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactAdminDashboard;
