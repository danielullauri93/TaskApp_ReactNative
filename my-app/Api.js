const API = "http://192.168.18.6:3000/tasks";

export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const getTasks = async () => {
  const res = await fetch(API, {
    method: "GET",
  });

  return await res.json();
};

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const getTask = async (taskId) => {
  const res = await fetch(`${API}/${taskId}`);
  return await res.json();
};

export const updateTask = async (taskId, newTask) => {
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};
