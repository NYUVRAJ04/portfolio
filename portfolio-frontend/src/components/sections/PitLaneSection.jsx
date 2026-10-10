import { useState } from "react";
import { getApiErrorMessage } from "../../api/response";
import { sendContactMessage } from "../../service/contactService";

function PitLaneSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, message: "", error: false });

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitMessage = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      await sendContactMessage(form);
      setForm({ name: "", email: "", message: "" });
      setStatus({ loading: false, message: "Your message has been sent.", error: false });
    } catch (error) {
      setStatus({ loading: false, message: getApiErrorMessage(error), error: true });
    }
  };

  return (
    <section id="pit-lane" className="race-section">
      <div className="section-inner">
        <span className="section-kicker">SECTOR 06 · PIT LANE</span>
        <h2>CONTACT</h2>
        <p>Have a project in mind? Send me a message.</p>
        <form className="contact-form" onSubmit={submitMessage}>
          <label>
            Name
            <input name="name" autoComplete="name" maxLength="100" required value={form.name} onChange={updateField} />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} />
          </label>
          <label>
            Message
            <textarea name="message" maxLength="5000" rows="5" required value={form.message} onChange={updateField} />
          </label>
          <button className="race-button" type="submit" disabled={status.loading}>
            {status.loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
          {status.message && (
            <p role={status.error ? "alert" : "status"}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default PitLaneSection;
