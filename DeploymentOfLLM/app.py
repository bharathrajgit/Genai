import os
import spaces
import gradio as gr
from google import genai
from google.genai import types


# Required for a ZeroGPU Space
@spaces.GPU(duration=1)
def gpu_check():
    return "OK"


API_KEY = os.getenv("Gemini_Api_Key")

personalities = {
    "Friendly": """
You are a friendly and encouraging Study Assistant.
Explain concepts simply.
Use analogies and real-world examples.
Ask one short follow-up question.
""",

    "Academic": """
You are a professional university professor.
Give clear, structured and precise explanations.
Use examples and analogies where useful.
Ask one short follow-up question.
"""
}


def study_assistant(user_prompt, persona):

    if not API_KEY:
        return "ERROR: Gemini_Api_Key is missing."

    if not user_prompt or not user_prompt.strip():
        return "Please enter a question."

    try:
        client = genai.Client(api_key=API_KEY)

        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=user_prompt,
            config=types.GenerateContentConfig(
                system_instruction=personalities[persona],
                max_output_tokens=600
            )
        )

        return response.text or "No response returned."

    except Exception as e:
        print("GEMINI ERROR:", type(e).__name__, str(e))
        return f"Gemini API Error:\n\n{type(e).__name__}: {str(e)}"


demo = gr.Interface(
    fn=study_assistant,
    inputs=[
        gr.Textbox(
            lines=4,
            label="Question",
            placeholder="Ask a question..."
        ),
        gr.Radio(
            choices=list(personalities.keys()),
            value="Friendly",
            label="Personality"
        )
    ],
    outputs=gr.Textbox(
        lines=10,
        label="Response"
    ),
    title="Study Assistant",
    description="Ask a question and get an answer from your AI Study Assistant."
)

demo.launch()
