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
        'content-type': 'application/json',
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
    url: 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false&fields=*',
    params: {
        base64_encoded: 'true',
        fields: '*'
    },
    headers: {
        'X-RapidAPI-Key': "d7031f6c86msh653bdebda2b6b7bp1b6330jsnc4fb2e8690b0",
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
};
