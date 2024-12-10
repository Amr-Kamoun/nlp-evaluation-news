# Evaluate News Article with NLP

This project allows users to analyze the sentiment and subjectivity of text or news articles by leveraging the MeaningCloud API. Users can input plain text or a URL, and the application will extract meaningful content and provide an analysis.

---

## Features
- Sentiment analysis (Positive, Neutral, Negative)
- Subjectivity classification (Subjective, Objective)
- URL content extraction and analysis
- Modern, colorful, and responsive user interface
- Real-time results displayed on the page

---

## How to Run

### 1. Clone the Repository
```bash
git clone <repository-url>
cd nlp-news-evaluation
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add your MeaningCloud API key:
```
MEANINGCLOUD_API_KEY=your_api_key_here
```

### 4. Start the Development Server
```bash
npm run start
```
Visit the application at `http://localhost:8080`.

### 5. Build for Production
```bash
npm run build
```
The production files will be available in the `dist` directory.

---

## Project Structure
```plaintext
nlp-news-evaluation/
├── src/
│   ├── js/
│   │   ├── app.js
│   │   ├── formHandler.js
│   ├── styles/
│   │   ├── base.scss
│   │   ├── header.scss
│   │   ├── form.scss
│   │   ├── footer.scss
│   ├── views/
│   │   ├── index.html
│   ├── server/
│       ├── server.js
├── webpack.dev.cjs
├── webpack.prod.cjs
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

## Dependencies
- **Frontend**:
  - Webpack
  - Sass
  - Babel
  - HTML

- **Backend**:
  - Node.js
  - Express
  - Cheerio (for URL content extraction)
  - MeaningCloud API

---

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

---

## License
This project is licensed under the MIT License.
