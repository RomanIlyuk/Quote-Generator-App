import { fetchAIQuote } from './gemini.js';

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

const inputGenereteUI = async function () {
  const topic = inputGeneratorField.value;
  inputGeneratorField.value = '';
  const quote = await fetchAIQuote(topic);
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
};

const randomTopicGenerator = async function () {
  const randomTopic =
    defaultTopics[Math.floor(Math.random() * defaultTopics.length)];

  const topic = randomTopic;

  const quote = await fetchAIQuote(topic);
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
};

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

inputGeneratorForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (inputGeneratorField.value.trim() === '')
    return console.log('Input field is empty');
  inputGenereteUI();
});

newQuoteBtn.addEventListener('click', async function (e) {
  if (inputGeneratorField.value) {
    inputGenereteUI();
  } else if (inputGeneratorField.value.trim() === '') {
    randomTopicGenerator();
  }
});
