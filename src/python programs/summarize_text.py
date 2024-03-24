from langchain.llms.openai import OpenAI
from dotenv import load_dotenv
from langchain.chains.summarize import load_summarize_chain
from langchain.docstore.document import Document
from langchain.text_splitter import CharacterTextSplitter
import os
from langchain.prompts import PromptTemplate
import tiktoken
import PyPDF2  # Library to extract text from PDF

load_dotenv()

def num_tokens_from_string(string, encoding_name):
    encoding = tiktoken.encoding_for_model(encoding_name)
    num_tokens = len(encoding.encode(string))
    return num_tokens

def Summarization(pdf_content, openai_api_key=os.getenv("OPENAI_API_KEY")):
    # Extract text from the PDF content
    pdf_text = extract_text_from_pdf(pdf_content)

    # Creating the llm object with the open ai key.
    llm = OpenAI(temperature=0, openai_api_key=openai_api_key)
    model_name = "gpt-3.5-turbo"
    text_splitter = CharacterTextSplitter.from_tiktoken_encoder(model_name=model_name)

    texts = text_splitter.split_text(pdf_text)
    text = [Document(page_content=t) for t in texts]

    # Creating the prompt template.
    prompt_template = """Write a concise summary of the following:

    {text}
    """

    prompt = PromptTemplate(template=prompt_template, input_variables=["text"])
    combined_text = "\n".join(texts)
    num_tokens = num_tokens_from_string(combined_text, model_name)
    gpt_35_turbo_max_tokens = 4097
    verbose = True

    if num_tokens < gpt_35_turbo_max_tokens:
        chain = load_summarize_chain(llm, chain_type="stuff", prompt=prompt, verbose=verbose)
    else:
        chain = load_summarize_chain(llm, chain_type="map_reduce", map_prompt=prompt, combine_prompt=prompt, verbose=verbose)

    summary = chain.run(text)
    return summary

def extract_text_from_pdf(pdf_content):
    # Use PyPDF2 to extract text from the PDF content
    pdf_text = ""
    with open(pdf_content, 'rb') as file:
        pdf_reader = PyPDF2.PdfFileReader(file)
        for page_num in range(pdf_reader.numPages):
            page = pdf_reader.getPage(page_num)
            pdf_text += page.extractText()
    return pdf_text
