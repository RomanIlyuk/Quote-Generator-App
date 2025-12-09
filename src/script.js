import { fetchAIQuote } from './gemini.js';

// DOM ELEMENTS
const newQuoteBtn = document.querySelector('.btn--new-quote');
const soundBtn = document.querySelector('.helper-btn--sound');
const copyBtn = document.querySelector('.helper-btn--copy');
const twitterBtn = document.querySelector('.helper-btn--twitter');
const searchBtn = document.querySelector('.btn--search');

const quoteText = document.querySelector('.quote__text');
const quoteAuthor = document.querySelector('.quote__author');

const inputGeneratorField = document.querySelector('.input-generator__input');

const inputGeneratorForm = document.querySelector('.input-generator__form');

///////////////////////////////////////////////////
////////////////// FUNCTIONS
const updateQuoteUI = function (text, author) {
  quoteText.textContent = text;
  quoteAuthor.textContent = author;
};

const showError = function () {
  quoteText.textContent = 'Error. Something went wrong!';
  quoteAuthor.textContent = '';
};

const inputGenerateUI = async function () {
  const topic = inputGeneratorField.value.trim();

  updateQuoteUI('Loading...', '');

  inputGeneratorField.value = '';

  try {
    const { text, author } = await fetchAIQuote(topic);
    updateQuoteUI(text, author);
  } catch (err) {
    showError();
  }
};

const randomTopicGenerator = async function () {
  const topic = defaultTopics[Math.floor(Math.random() * defaultTopics.length)];

  updateQuoteUI('Loading...', '');

  try {
    const { text, author } = await fetchAIQuote(topic);
    updateQuoteUI(text, author);
  } catch (err) {
    showError();
  }
};

const utteranceQuote = function () {
  const speechQuote = new SpeechSynthesisUtterance(quoteText.textContent);

  speechQuote.lang = 'en';
  speechQuote.rate = 0.8;
  speechQuote.pitch = 1;

  window.speechSynthesis.speak(speechQuote);
};

const utteranceAuthor = function () {
  const speechAuthor = new SpeechSynthesisUtterance(quoteAuthor.textContent);

  speechAuthor.lang = 'en';
  speechAuthor.rate = 1;
  speechAuthor.pitch = 0.5;

  window.speechSynthesis.speak(speechAuthor);
};

const copyTextToClipboard = () =>
  navigator.clipboard.writeText(quoteText.textContent);

const repostQuote = function () {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;

  const repost = `${quote} - ${author}`;
  const url = `https://twitter.com/intent/tweet?text=${repost}`;
  window.open(url, '_blank');
};

///////////////////////////////////
const defaultTopics = [
  'Success',
  'Life',
  'Programming',
  'Space',
  'Creativity',
  'Future',
  'Chess',
  'Work',
  'Discipline',
  'Wisdom',
  'Patience',
  'Leadership',
  'Happiness',
  'Resilience',
  'Strategy',
  'Innovation',
  'Learning',
  'Courage',
  'Money',
  'Friendship',
];

/////////////////////////////////////////////
// EVENTS
inputGeneratorForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (inputGeneratorField.value.trim() === '')
    return console.log('Input field is empty');
  inputGenerateUI();
});

newQuoteBtn.addEventListener('click', async function (e) {
  if (inputGeneratorField.value.trim() !== '') inputGenerateUI();
  else randomTopicGenerator();
});

soundBtn.addEventListener('click', function () {
  window.speechSynthesis.cancel();
  if (!quoteText.textContent) return;
  utteranceQuote();
  if (!quoteAuthor.textContent) return;
  utteranceAuthor();
});

copyBtn.addEventListener('click', copyTextToClipboard);

twitterBtn.addEventListener('click', repostQuote);
