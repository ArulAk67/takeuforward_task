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
        'X-RapidAPI-Key': process.env.RAPID_API,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
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
        'X-RapidAPI-Key': process.env.RAPID_API,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
    }
};
