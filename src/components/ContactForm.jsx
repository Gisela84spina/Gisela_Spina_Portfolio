import { useState } from "react";
//import emailjs from "@emailjs/browser";

export default function ContactForm() {

 
  const [formData, setFormData] = useState({ from_name: "", reply_to: "", message: ""});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      !formData.from_name.trim() ||
      !formData.reply_to.trim().includes("@") ||
      !formData.message.trim()
    ) {
      console.error("Faltan datos obligatorios o están mal formateados");
      setStatus("error");
      return;
    }
  
    setStatus("sending");
  
   
    fetch("https://backend-contacto.vercel.app/api/contact", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la respuesta del servidor");
        return res.json();
      })
      .then(() => {
        
        setStatus("success");
        setFormData({ from_name: "", reply_to: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ Error al enviar:", error);
        setStatus("error");
      });

    };

  
 
  

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-b from-black via-[#0f766e] to-[#0f172a] text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>


      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Tu nombre"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Tu email"
          value={formData.reply_to}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-white text-white placeholder-gray-300 p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#0f766e] text-white font-semibold px-4 py-2 rounded hover:bg-[#0f172a] transition-colors"
        >
          Enviar
        </button>

        {status === "sending" && (
          <p className="text-center text-yellow-300">Enviando...</p>
        )}
        {status === "success" && (
          <p className="text-center text-green-300">Mensaje enviado ✅</p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400">Hubo un error ❌</p>
        )}
      </form>
    </section>
  );

}