import express from "express";
import "dotenv/config"

// require(dotenv).config()

export const postSubmission = {
    method: 'POST',
    url: 'https://judge0-ce.p.rapidapi.com/submissions',
    params: {
        base64_encoded: 'true',
        fields: '*'
    },
    headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'bf3b46f185msh8f49ae4715fe2a4p150dc9jsnd045dcc73859',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
    },
    data: {
        language_id: null,
        source_code: null,
        stdin: null,
    }
};

export const getSubmission = {
    method: 'GET',
    url: 'https://judge0-ce.p.rapidapi.com/submissions/',
    params: {
        base64_encoded: 'true',
        fields: '*'
    },
    headers: {
        'x-rapidapi-key': 'bf3b46f185msh8f49ae4715fe2a4p150dc9jsnd045dcc73859',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
    }
};
