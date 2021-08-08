const API_URL = "http://localhost:4001";

// Fetch users
export function fetchUsers() {
  try {
    return fetch(`${API_URL}/api/v1/users`).then((response) => response.json());
  } catch (error) {
    throw error;
  }
}

export function fetchInputs() {
  try {
    return fetch(`${API_URL}/api/v1/inputs`).then((response) =>
      response.json()
    );
  } catch (error) {
    throw error;
  }
}

export function fetchInputsByUser(userId) {
  try {
    return fetch(`${API_URL}/api/v1/inputs/${userId}`).then((response) =>
      response.json()
    );
  } catch (error) {
    throw error;
  }
}

export function createInput(payload) {
  try {
    return fetch(`${API_URL}/api/v1/inputs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  } catch (error) {
    throw error;
  }
}
