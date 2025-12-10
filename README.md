# 🧠 AI Quote Generator

A simple and interactive web app that generates quotes using an AI model. You can search for quotes by topic, generate a random topic, listen to quotes, copy them, and instantly repost them on Twitter.

---

## 🚀 Features

### ✔️ Generate a Quote by Topic

Enter any topic in the input field (e.g., "success", "life", "programming") and the app will generate an AI‑powered quote related to it.

### ✔️ Random Topic Quote

If the input field is empty, pressing **New Quote** will automatically select a random topic from the predefined list and generate a quote.

### ✔️ Speech Synthesis

- Listen to the generated quote
- Listen to the author's name
- Uses built‑in browser text‑to‑speech

### ✔️ Copy Quote

Click the **Copy** button to copy the quote text to your clipboard.

### ✔️ Share on Twitter

Automatically opens Twitter with a pre‑filled tweet containing:

```
"quote text" — author
```

### ✔️ Error Handling

If something goes wrong (network issue, API fail, etc.), the app displays:

```
Error. Something went wrong!
```

---

## 🧩 Project Structure

```
src/
│
├── script.js       # Main JS logic
├── gemini.js       # Contains fetchAIQuote() that calls AI API
├── styles.css      # UI styles
└── index.html      # App layout and UI elements
```

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **SpeechSynthesis API**
- **Twitter Intent API**
- **AI API (Gemini / fetchAIQuote)**

---

## 🎛️ Core Functions Explained

### `updateQuoteUI(text, author)`

Updates the UI with quote text and author.

### `showError()`

Displays an error message in the UI.

### `inputGenerateUI()`

Generates a quote based on user input.

### `randomTopicGenerator()`

Generates a quote using a random topic.

### `utteranceQuote()` / `utteranceAuthor()`

Uses text‑to‑speech to read the quote and author.

### `copyTextToClipboard()`

Copies quote text to clipboard.

### `repostQuote()`

Opens Twitter with a ready-to-tweet message.

---

## 🔧 How to Run the Project

1. Clone or download the repo.
2. Open `index.html` in a browser.
3. Make sure `gemini.js` contains your correct API logic.
4. Generate, listen, or copy quotes instantly.

---

## 💡 Default Topics

A list of 20 topics used for random quote generation:

```
Success, Life, Programming, Space, Creativity,
Future, Chess, Work, Discipline, Wisdom,
Patience, Leadership, Happiness, Resilience,
Strategy, Innovation, Learning, Courage,
Money, Friendship
```

---

## 📤 Future Improvements (optional)

- Dark mode
- Saving favorite quotes
- Local storage history
- Voice selection for TTS

---

## 📌 Author

Iliuk Roman
Created with ❤️ as a JavaScript learning project with AI‑powered features.
