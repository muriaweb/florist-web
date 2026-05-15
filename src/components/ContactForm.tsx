import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const fields: { id: keyof FormState; label: string; type: string; placeholder: string }[] = [
    { id: 'name', label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama Anda' },
    { id: 'email', label: 'Alamat Email', type: 'email', placeholder: 'contoh@email.com' },
    { id: 'phone', label: 'Nomor HP / WhatsApp', type: 'tel', placeholder: '0812-3456-7890' },
    { id: 'subject', label: 'Subjek', type: 'text', placeholder: 'Apa yang ingin Anda tanyakan?' },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
      <h2 className="font-headline-sm text-headline-sm text-on-background mb-6">Kirim Pesan</h2>

      {submitted && (
        <div className="mb-6 flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary rounded-xl px-5 py-4">
          <span className="material-symbols-outlined">check_circle</span>
          <p className="font-label-md">Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map(field => (
          <div key={field.id}>
            <label className="block font-label-md text-on-surface-variant mb-2">{field.label}</label>
            <input
              type={field.type}
              value={form[field.id]}
              onChange={e => setForm({ ...form, [field.id]: e.target.value })}
              placeholder={field.placeholder}
              required
              className="w-full bg-transparent border-b-2 border-outline-variant py-2 font-body-md text-on-background placeholder:text-outline-variant focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        ))}

        <div>
          <label className="block font-label-md text-on-surface-variant mb-2">Pesan</label>
          <textarea
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
            rows={5}
            required
            className="w-full bg-transparent border-b-2 border-outline-variant py-2 font-body-md text-on-background placeholder:text-outline-variant focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-label-md hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">send</span>
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}
