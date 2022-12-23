import axios from 'axios'

const BASE_URL = "http://localhost:4000/api/v1"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTIwZGYyNWU4N2M0Njk5ZTA0MWMxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTczNDkzOCwiZXhwIjoxNjcxOTA3NzM4fQ.4fpigGWr3l7AeunIXU4Y8HB5Jw2luKoJkAvY2wFCDE8" 


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})