(() => {
  const config = window.AIGA_CONFIG || {};
  const configured = config.supabaseUrl
    && !config.supabaseUrl.includes('YOUR_PROJECT')
    && config.supabaseAnonKey
    && !config.supabaseAnonKey.includes('YOUR_');
  const form = document.querySelector('#newsletter-form');
  const emailInput = document.querySelector('#newsletter-email');
  const status = document.querySelector('#newsletter-status');
  const submit = document.querySelector('#newsletter-submit');
  const unsubscribeButton = document.querySelector('#newsletter-unsubscribe');

  const setStatus = message => {
    status.textContent = message;
  };

  const unsubscribe = async client => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (!token) return false;

    form.hidden = true;
    document.querySelector('.newsletter-privacy').hidden = true;
    unsubscribeButton.hidden = false;
    setStatus('Confirm that you want to unsubscribe from the newsletter.');
    unsubscribeButton.addEventListener('click', async () => {
      unsubscribeButton.disabled = true;
      setStatus('Processing your unsubscribe request…');
      try {
        const { data, error } = await client.rpc('unsubscribe_newsletter', {
          p_token: token
        });
        if (error) {
          setStatus('We could not process your request. Please try again later.');
          unsubscribeButton.disabled = false;
          return;
        }
        unsubscribeButton.hidden = true;
        setStatus(data
          ? 'You have been unsubscribed from the newsletter.'
          : 'This unsubscribe link has already been used or is no longer valid.');
      } catch {
        setStatus('We could not process your request. Please try again later.');
        unsubscribeButton.disabled = false;
      }
    });
    return true;
  };

  const init = async () => {
    if (!configured) {
      form.hidden = true;
      setStatus('Newsletter signup is not available yet. Please try again later.');
      return;
    }

    const client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    try {
      if (await unsubscribe(client)) return;
    } catch {
      form.hidden = true;
      setStatus('We could not process your request. Please try again later.');
      return;
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (form.querySelector('input[name="website"]').value) return;

      submit.disabled = true;
      setStatus('Submitting your subscription…');
      try {
        const { error } = await client.rpc('subscribe_newsletter', {
          p_email: emailInput.value.trim().toLowerCase()
        });
        if (error) {
          setStatus('We could not save your subscription. Please try again later.');
        } else {
          form.reset();
          setStatus('You are subscribed. Look for the next AI in Practice newsletter in your inbox.');
        }
      } catch {
        setStatus('We could not save your subscription. Please try again later.');
      } finally {
        submit.disabled = false;
      }
    });
  };

  init();
})();
