import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // OpenAI API 키 설정
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type) {
      return new Response(JSON.stringify({ error: "Type is required" }), {
        status: 400,
      });
    }

    const prompt = `As a travel advisor, suggest a destination for a ${type}. 
    Start your response with "SPOT: [City/Country Name]" and then provide a short paragraph about what makes this destination perfect for this type of traveler.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.choices[0]?.message?.content;
    console.log("OpenAI Response:", result);

    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch response from OpenAI" }),
      { status: 500 }
    );
  }
}
