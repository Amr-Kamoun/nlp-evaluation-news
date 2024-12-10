# **Evaluate News Article with NLP**

This project evaluates news articles using Natural Language Processing (NLP). It integrates a mock NLP API to analyze the sentiment and subjectivity of a given text or URL. The app is built using modern JavaScript and Webpack and includes offline functionality with service workers.

---

## **Project Features**
- Sentiment analysis (e.g., positive/negative).
- Subjectivity analysis (e.g., subjective/objective).
- Responsive user interface with a clean form layout.
- Offline functionality using Workbox-generated service workers.
- Modular SCSS styles using `@use` for better maintainability.
- Unit testing with Jest.

---

## **Folder Structure**
```plaintext
├── .gitignore
├── README.md
├── package.json
├── webpack.dev.js
├── webpack.prod.js
└── src
    ├── views
    │   └── index.html
    ├── js
    │   ├── app.js
    │   └── formHandler.js
    ├── styles
    │   ├── base.scss
    │   ├── header.scss
    │   ├── footer.scss
    │   └── form.scss
    └── server
        └── server.js
```

---

## **How to Run the Project**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/nlp-news-evaluation.git
cd nlp-news-evaluation
```

### **2. Install Dependencies**
Make sure you have Node.js installed, then run:
```bash
npm install
```

### **3. Run the Development Server**
To start the application in development mode:
```bash
npm run start
```
The app will be available at `http://localhost:8080`.

### **4. Build for Production**
To create a production build:
```bash
npm run build
```
The build files will be in the `dist` folder.

### **5. Run the Backend Server**
To start the backend server:
```bash
node src/server/server.js
```
The backend server will be available at `http://localhost:8081`.

---

## **API Integration**
This app interacts with a mock NLP API:
- **POST `/api`**: Accepts a text input and returns:
  - **Polarity** (e.g., positive/negative).
  - **Subjectivity** (e.g., subjective/objective).
  - The input text.

---

## **Testing**
The project uses Jest for unit testing. To run the tests:
```bash
npm run test
```

---

## **Dependencies**
- **Frontend**:
  - Webpack
  - Babel
  - Sass
- **Backend**:
  - Express
  - Body-parser
  - CORS
- **Testing**:
  - Jest
- **Offline**:
  - Workbox

---

## **License**
This project is licensed under the MIT License.
