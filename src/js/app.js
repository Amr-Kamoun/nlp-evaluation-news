import { handleSubmit } from './formHandler.js'; // Add .js extension
import '../styles/base.scss';
import '../styles/header.scss';
import '../styles/form.scss';
import '../styles/footer.scss';
// Event Listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);
});
