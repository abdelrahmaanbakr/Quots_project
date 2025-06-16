const quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Do what you can with all you have, wherever you are.",
    "Dream big and dare to fail.",
    "You are stronger than you think.",
    "The best time to start was yesterday. The next best time is now.",
    "Keep going. Everything you need will come to you at the perfect time.",
  ];
  let quoteInterval;

  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }