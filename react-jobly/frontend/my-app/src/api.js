import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static token;

  // Set token in localStorage and class-level variable
  static setToken(token) {
    localStorage.setItem("token", token); // Save to localStorage
    JoblyApi.token = token; // Store in class-level variable
  }

  // Get token from localStorage and class-level variable
  static getToken() {
    return JoblyApi.token || localStorage.getItem("token");
  }

  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const token = JoblyApi.getToken(); // Get token

    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes
  static async login(data) {
    const res = await this.request(`auth/token`, data, "post");
    JoblyApi.setToken(res.token); // Store token after login
    return res.token;
  }

  static async signup(data) {
    const res = await this.request(`auth/register`, data, "post");
    JoblyApi.setToken(res.token); // Store token after signup
    return res.token;
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async searchCompanies(name) {
    if (!name) {
      let res = await this.request("companies");
      return res.companies;
    }
    let res = await this.request("companies", { name });
    return res.companies;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Rename updateUser to updateProfile
  static async updateProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async getJobs() {
    let res = await this.request("jobs");
    return res.jobs;
  }

  // src/api/JoblyAPI.js

static async applyToJob(jobId) {
  const token = localStorage.getItem("token");
  const response = await axios.post(
      `${BASE_URL}/jobs/${jobId}/apply`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}

}

export default JoblyApi;
