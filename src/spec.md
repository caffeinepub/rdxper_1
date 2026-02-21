# Specification

## Summary
**Goal:** Switch from Google Gemini to OpenAI GPT-4 for research paper generation and reduce target paper length to 4000-5000 words.

**Planned changes:**
- Replace Google Gemini API integration with OpenAI GPT-4 API in the backend
- Store OpenAI API key securely in backend and use it for all paper generation requests
- Configure API requests to use the GPT-4 model specifically
- Update AI prompts to generate complete research papers with full content in all sections targeting 4000-5000 words instead of 8000-10000 words
- Update loading state messages in the frontend to reflect the new 4000-5000 word target length

**User-visible outcome:** Users can generate research papers powered by OpenAI GPT-4 that are 4000-5000 words in length with complete, substantive content across all sections (abstract, introduction, literature review, methodology, results, discussion, conclusion, references).
