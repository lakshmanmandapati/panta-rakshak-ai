// Define the structure of the API response
export interface DiagnosisResult {
  class: string;
  confidence: string;
}

export const predictDisease = async (file: File): Promise<DiagnosisResult> => {
  const formData = new FormData();
  formData.append('file', file);

  // Get the API base URL from the environment variable for production,
  // or use localhost for local development.
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  const apiUrl = `${apiBaseUrl}/predict`;

  try {
    // Use the dynamic apiUrl in the fetch call
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("API call failed:", error);

    // Fallback response for demo purposes if the API fails
    return {
      class: 'API Error',
      confidence: '0%'
    };
  }
};