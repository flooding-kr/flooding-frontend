import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface TokenResponse {
  newAuthorization: string;
}

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  async (err: AxiosError) => {
    const originalRequest = err.config as AxiosRequestConfig & {
      retryAttempted?: boolean;
    };

    if (err.response && err.response.status === 401 && !originalRequest.retryAttempted) {
      originalRequest.retryAttempted = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          window.location.href = '/signin';
          return await Promise.reject(new Error('No refresh token found'));
        }

        const tokenResponse = await axios.patch<TokenResponse>('/api/auth/re-issue', null, {
          headers: { 'Refresh-Token': `Bearer ${refreshToken}` },
        });

        if (tokenResponse.data && tokenResponse.data.newAuthorization) {
          localStorage.setItem('accessToken', tokenResponse.data.newAuthorization);
          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers.Authorization = `Bearer ${tokenResponse.data.newAuthorization}`;

          return await apiClient(originalRequest);
        }
      } catch (refreshError) {
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);
