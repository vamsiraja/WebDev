import { useState } from 'react';

function AuthForm({ mode, onSubmit, loading }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const isRegister = mode === 'register';

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      email: form.email,
      password: form.password,
    };

    if (isRegister) {
      payload.name = form.name;
    }

    onSubmit(payload);
  }

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <h2>{isRegister ? 'Create account' : 'Sign in'}</h2>
      {isRegister && (
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
          />
        </label>
      )}
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@company.com"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={8}
          value={form.password}
          onChange={handleChange}
          placeholder="At least 8 characters"
          required
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Please wait...' : isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  );
}

export default AuthForm;
