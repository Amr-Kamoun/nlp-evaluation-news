export const handleSubmit = async (event) => { 
    event.preventDefault();

    const formText = document.getElementById('name').value.trim();
    if (!formText) {
        alert('Input cannot be empty!');
        return;
    }

    try {
        const response = await fetch('http://localhost:8081/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: formText }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        // Display results in the UI
        document.getElementById('results').innerHTML = `
            <p><strong>Polarity:</strong> ${data.polarity}</p>
            <p><strong>Subjectivity:</strong> ${data.subjectivity}</p>
            <p><strong>Text:</strong> ${data.text}</p>
        `;
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error processing the text. Please try again.');
    }
};