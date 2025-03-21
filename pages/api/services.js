import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { resumeText } = req.body;

    try {
      const aiResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Provide feedback on the following resume text, highlighting strengths and areas for improvement:\n\n${resumeText}`,
        max_tokens: 500,
      });

      const feedback = aiResponse.data.choices[0].text.trim().split("\n");

      res.status(200).json({ feedback });
    } catch (error) {
      console.error("Error generating feedback:", error);
      res.status(500).json({ error: "Failed to generate feedback." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
