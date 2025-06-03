import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('temp-result');
  const iframe = document.getElementById('preview');

  function updatePreview(markdown) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; padding: 1rem;">
          ${marked.parse(markdown)}
        </body>
      </html>
    `;
    doc.open();
    doc.write(html);
    doc.close();
  }

  // Update preview on every input event (live)
  textarea.addEventListener('input', () => {
    updatePreview(textarea.value);
  });

  // Optional: initialize with empty or default content
  updatePreview(textarea.value);
});
