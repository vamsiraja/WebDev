import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { login, register } from '../api/authApi';

function AuthPage() {
  const [mode, setMode] = useState('login');
  const [authResult, setAuthResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(payload) {
    setError('');
    setLoading(true);

    try {
      const response = mode === 'register' ? await register(payload) : await login(payload);
      setAuthResult(response);
      localStorage.setItem('saas-auth-token', response.token);
    } catch (requestError) {
      setError(requestError.message);
      setAuthResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="auth-wrapper">
        <header>
          <h1>SaaS Auth Starter</h1>
          <p>React + Node + MySQL template for login and registration.</p>
        </header>

        <div className="mode-toggle">
          <button
            className={mode === 'login' ? 'active' : ''}
            type="button"
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={mode === 'register' ? 'active' : ''}
            type="button"
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        <AuthForm mode={mode} onSubmit={handleSubmit} loading={loading} />

        {error && <p className="feedback error">{error}</p>}

        {authResult && (
          <div className="feedback success">
            <p>
              Authenticated as <strong>{authResult.user.email}</strong>
            </p>
            <p>JWT saved to localStorage key: saas-auth-token</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default AuthPage;
