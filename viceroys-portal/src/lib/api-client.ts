// API Client for frontend
import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const apiClient: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  signup: (data: any) => apiClient.post('/auth/signup', data),
  signin: (data: any) => apiClient.post('/auth/signin', data),
};

// Results APIs
export const resultsAPI = {
  getResults: (studentId: string, term?: string, year?: number) =>
    apiClient.get('/results', { params: { studentId, term, year } }),
  createResult: (data: any) => apiClient.post('/results', data),
  updateResult: (id: string, data: any) => apiClient.put(`/results/${id}`, data),
  deleteResult: (id: string) => apiClient.delete(`/results/${id}`),
};

// Payments APIs
export const paymentsAPI = {
  getPayments: (userId: string) => apiClient.get('/payments', { params: { userId } }),
  initiatePayment: (data: any) => apiClient.post('/payments', data),
  verifyPayment: (transactionId: string, status: string) =>
    apiClient.put('/payments', { transactionId, status }),
};

// Students APIs
export const studentsAPI = {
  getStudents: (classFilter?: string, searchName?: string) =>
    apiClient.get('/students', { params: { class: classFilter, search: searchName } }),
  createStudent: (data: any) => apiClient.post('/students', data),
  updateStudent: (id: string, data: any) => apiClient.put('/students', { id, ...data }),
  deleteStudent: (id: string) => apiClient.delete('/students', { params: { id } }),
};

// Announcements APIs
export const announcementsAPI = {
  getAnnouncements: (category?: string, limit?: number) =>
    apiClient.get('/announcements', { params: { category, limit } }),
  createAnnouncement: (data: any) => apiClient.post('/announcements', data),
  updateAnnouncement: (id: string, data: any) => apiClient.put('/announcements', { id, ...data }),
  deleteAnnouncement: (id: string) => apiClient.delete('/announcements', { params: { id } }),
};

export default apiClient;
