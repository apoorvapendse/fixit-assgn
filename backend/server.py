from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import requests
app = FastAPI()

origins = [
    
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    query:str

@app.post("/api/get-output")
async def read_root(q:Query):
    search_term = q.query
    if search_term is None:
        return None

    print("search term:", search_term)

    url = "https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText"
    headers = {
        "Content-Type": "application/json",
    }
    params = {
        "key": "AIzaSyBE-myxHyuWxQHJfIZXLYzILLVghP6nkhA"
    }

    payload = {
        "prompt": {
            "text": f"{search_term}"
        }
    }

    
        
    response = requests.post(url, headers=headers, params=params, json=payload)

        
    response.raise_for_status()

    data = response.json()

    output = data['candidates'][0]['output']

    return {"output":output}