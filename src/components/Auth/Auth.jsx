import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from './../Supabase/SupabaseClient';

export default function AuthForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        navigate('/');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div
      className="auth-wrapper"
      style={{
        backgroundColor: '#121212',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        className="auth-card"
        style={{
          backgroundColor: '#181818',
          borderRadius: '12px',
          padding: '2rem',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4F46E5',
                  brandAccent: '#6366F1',
                  inputBackground: '#1f1f1f',
                  inputText: '#ffffff',
                  inputBorder: '#333',
                  messageText: '#f5f5f5',
                  labelText: '#e5e5e5',
                  anchorTextColor: '#a3a3ff',
                },
              },
            },
          }}
          theme="dark"
          providers={[]}
        />
      </div>
    </div>
  );
}
