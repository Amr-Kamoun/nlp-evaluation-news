import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import { load } from 'cheerio'; // Correct import for cheerio
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

const API_KEY = process.env.MEANINGCLOUD_API_KEY;
const PORT = 8081;

app.post('/api', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text input is required' });
    }

    let inputText = text;

    // Check if the input is a URL
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    if (urlRegex.test(text)) {
        try {
            const response = await fetch(text);
            const html = await response.text(); // Get the HTML content
            const $ = load(html); // Use the cheerio load function

            // Extract the main content (this selector will vary by website)
            inputText = $('article').text().trim() || $('p').text().trim();

            if (!inputText) {
                return res.status(400).json({ error: 'Could not extract meaningful content from the URL.' });
            }
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch the URL content.' });
        }
    }

    try {
        const apiResponse = await fetch(
            `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&txt=${encodeURIComponent(inputText)}`,
            { method: 'POST' }
        );

        const data = await apiResponse.json();

        if (data.status.code !== '0') {
            throw new Error(data.status.msg);
        }

        res.json({
            polarity: data.score_tag,
            subjectivity: data.subjectivity,
            text: inputText,
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to process the text.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
