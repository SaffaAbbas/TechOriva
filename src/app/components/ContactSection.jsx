'use client';
import PhoneInput from "react-phone-input-2";

import { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
    nda: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess(false);
  setApiMessage("");

  // BASIC VALIDATION
  if (!formData.fullName || !formData.email || !formData.phone) {
    setError("Please fill all required fields.");
    return;
  }

  if (formData.phone.length < 10) {
    setError("Please enter a valid phone number.");
    return;
  }

  try {
    setLoading(true);

    const payload = {
      type: "contact",
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone.startsWith("+") ? formData.phone : `+${formData.phone}`,
      protectWithNda: formData.nda,
      ...(formData.budget ? { budget: formData.budget } : {}),
      ...(formData.message ? { description: formData.message } : {}),
    };

    const res = await fetch("https://common-services.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json().catch(() => ({}));

    if (!res.ok || result?.success === false) {
      throw new Error(result?.message || "Failed to send");
    }

    setSuccess(true);
    setApiMessage(result?.message || "Your contact request has been submitted successfully.");
    setShowSuccessModal(true);
    requestAnimationFrame(() => setModalVisible(true));
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      nda: false,
    });

  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const closeSuccessModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setShowSuccessModal(false);
      setSuccess(false);
    }, 220);
  };

  return (
    <section className="bg-neutral-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Let’s talk goals, scope, and timelines. <br />
            <span className="text-blue-600">We’ll keep it simple.</span>
          </h2>

          <div className="space-y-6 text-neutral-700">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Email Address</p>
                <p className="text-sm">tech@devlys.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Phone No</p>
                <p className="text-sm">+1 (555) 013-2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-black/5 p-8 w-full">
          <h3 className="text-lg font-semibold mb-6 text-black">
            Get a <span className="text-blue-600">free strategy call</span>
          </h3>
          {error && (
  <p className="text-red-500 text-sm font-medium">
  {error}
  </p>
)}

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name*"
              value={formData.fullName}
              className="w-full px-4 py-3 rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Work email*"
              value={formData.email}
              className="w-full px-4 py-3 rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full rounded-lg border border-neutral-300 bg-neutral-100 focus-within:ring-2 focus-within:ring-blue-500">
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                  containerClass="!w-full"
                  inputClass="!w-full !h-[48px] !bg-transparent !border-none !rounded-r-lg focus:!ring-0 focus:!outline-none"
                  buttonClass="!border-0 !border-r !border-neutral-300 !bg-transparent !rounded-l-lg"
                  dropdownClass="!z-50"
                  enableSearch
                  countryCodeEditable={false}
                />
              </div>


              <select
                name="budget"
                value={formData.budget}
                className="w-full px-4 py-3 rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              >
                <option value="">Budget</option>
                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k+</option>
              </select>
            </div>

            <label className="flex items-center gap-2 text-sm text-neutral-700">
              <ShieldCheck className="text-blue-600 w-4 h-4" />
              <input
                type="checkbox"
                name="nda"
                checked={formData.nda}
                className="accent-blue-600"
                onChange={handleChange}
              />
              Protect with an NDA
            </label>

            <textarea
              name="message"
              placeholder="What do you want to build?"
              rows="3"
              value={formData.message}
              className="w-full px-4 py-3 rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />

            <button
  type="submit"
  disabled={loading}
  className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-neutral-900 transition disabled:opacity-60"
>
  {loading ? "Sending..." : "Request a call"}
</button>

          </form>
        </div>

      </div>
      {showSuccessModal && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-colors duration-200 ${modalVisible ? "bg-black/45" : "bg-black/0"}`}
          onClick={closeSuccessModal}
        >
          <div
            className={`w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-200 ${modalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
              Thank you for contacting us!
            </h4>
            <p className="text-gray-600 text-center mb-1">
              We will contact you soon.
            </p>
            <p className="text-green-600 text-center text-sm mb-5">
              {apiMessage}
            </p>
            <button
              type="button"
              onClick={closeSuccessModal}
              className="w-full bg-black text-white py-2.5 rounded-full font-semibold hover:bg-neutral-900 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
