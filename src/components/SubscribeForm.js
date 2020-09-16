import React from "react";
import "../scss/subscribe-form.scss";

export default function SubscribeForm() {
  return (
    <div className="form-input">
      <input
        type="email"
        className="email-input"
        id="email-input"
        placeholder="me@example.com "
      />

      <button type="submit" className="btn-submit-email">
        Subscribe
      </button>
    </div>
  );
}
