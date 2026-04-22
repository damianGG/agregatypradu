export default function ContactForm() {
  return (
    <form className="space-y-6" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="form_name" className="block text-sm font-medium text-slate-800 mb-2">Imię *</label>
          <input
            required
            type="text"
            name="name"
            id="form_name"
            placeholder="Jan"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <div>
          <label htmlFor="form_lastname" className="block text-sm font-medium text-slate-800 mb-2">Nazwisko *</label>
          <input
            required
            type="text"
            name="surname"
            id="form_lastname"
            placeholder="Kowalski"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <div>
          <label htmlFor="form_email" className="block text-sm font-medium text-slate-800 mb-2">Email *</label>
          <input
            required
            type="email"
            name="email"
            id="form_email"
            placeholder="jan@example.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>
        <div>
          <label htmlFor="form-select" className="block text-sm font-medium text-slate-800 mb-2">Temat</label>
          <select
            id="form-select"
            name="department"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option disabled value="">Wybierz temat</option>
            <option value="Sprzedaz">Sprzedaż</option>
            <option value="Serwis">Serwis</option>
            <option value="Wsparcie">Wsparcie techniczne</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="form_message" className="block text-sm font-medium text-slate-800 mb-2">Wiadomość *</label>
        <textarea
          required
          name="message"
          id="form_message"
          placeholder="Twoja wiadomość..."
          rows={6}
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-blue-700 px-12 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-800"
        >
          Wyślij wiadomość
        </button>
        <p className="text-gray-500 text-sm mt-3">* Pola wymagane</p>
      </div>
    </form>
  );
}
