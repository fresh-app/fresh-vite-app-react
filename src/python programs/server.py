from flask import Flask, request, jsonify
from flask_cors import CORS
from chat_with_document import VectorizationPDF, ChatDocument
from summarize_text import Summarization  # Updated import
import os

app = Flask(__name__)
CORS(app)

@app.route("/members", methods=['GET'])
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/summarize", methods=['POST'])
def summarize():
    data = request.get_json()

    pdf_path = data.get('pdf_path')
    if not os.path.exists(pdf_path):
        return jsonify({"error": f"File not found: {pdf_path}"}), 404
    summary = Summarization(pdf_path)  # Updated function call
    return jsonify({"response": summary})


@app.route("/docchat", methods=['POST'])
def document_chat():
    data = request.get_json()
    message = data.get('text')
    pdf_path = data.get('pdf_path')
    if not os.path.exists(pdf_path):
        return jsonify({"error": f"File not found: {pdf_path}"}), 404
    conversation = VectorizationPDF(pdf_path)
    response = ChatDocument(conversation, message)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
