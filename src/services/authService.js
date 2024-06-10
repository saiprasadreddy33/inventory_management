const BASE_URL = 'http://localhost:9000';

const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(`Login failed with status ${response.status}`);
  }

  const data = await response.json();
  localStorage.setItem('token', data.token);
};

const logout = async () => {
  const response = await fetch(`${BASE_URL}/api/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Logout failed with status ${response.status}`);
  }

  localStorage.removeItem('token');
};

const authService = {
  login,
  logout,
};

export default authService;
