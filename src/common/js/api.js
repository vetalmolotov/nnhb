import { API_CSRF_HEADER_NAME } from "./const";

// File contains all API endpoints. The main purpose of the file is
// to keep all endpoints in one place. A host address is fetched from
// `process.env.REACT_APP_API_HOST`

// HTTP client that should be used across the code.
export default fetch;

export const csrf = (opt) =>
    fetch(`${process.env.REACT_APP_API_HOST}/api/v1/csrf`, opt);

export const signin = (opt) =>
    fetch(`${process.env.REACT_APP_API_HOST}/api/v1/signin`, opt);

export const signon = (opt) =>
    fetch(`${process.env.REACT_APP_API_HOST}/api/v1/signon`, opt);

export const getCsrfFromResponse = (resp) =>
    resp.headers.get(API_CSRF_HEADER_NAME);
