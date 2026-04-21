export default function ContactForm() {
  return (
    <form className="space-y-6" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form_name" className="block text-sm font-medium text-gray-700 mb-2">Imię *</label>
          <input
            required
            type="text"
            name="name"
            id="form_name"
            placeholder="Jan"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="form_lastname" className="block text-sm font-medium text-gray-700 mb-2">Nazwisko *</label>
          <input
            required
            type="text"
            name="surname"
            id="form_lastname"
            placeholder="Kowalski"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="form_email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            required
            type="email"
            name="email"
            id="form_email"
            placeholder="jan@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="form-select" className="block text-sm font-medium text-gray-700 mb-2">Temat</label>
          <select
            id="form-select"
            name="department"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
          >
            <option disabled value="">Wybierz temat</option>
            <option value="Sprzedaz">Sprzedaż</option>
            <option value="Serwis">Serwis</option>
            <option value="Wsparcie">Wsparcie techniczne</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="form_message" className="block text-sm font-medium text-gray-700 mb-2">Wiadomość *</label>
        <textarea
          required
          name="message"
          id="form_message"
          placeholder="Twoja wiadomość..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg"
        >
          Wyślij wiadomość
        </button>
        <p className="text-gray-500 text-sm mt-3">* Pola wymagane</p>
      </div>
    </form>
  );
}
