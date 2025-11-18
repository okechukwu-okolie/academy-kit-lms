/*
1. GET (Read Data)
Used to retrieve data from the server. It doesn't send a body (data) to the server.


import api from './api';

async function fetchUsers() {
  try {
    const response = await api.get('/users');
    // response.data holds the actual JSON object from the server
    console.log('User List:', response.data);
    return response.data;
  } catch (error) {
    // Handle errors (e.g., network issue, 404 not found, 500 server error)
    console.error('Error fetching users:', error.message);
  }
}

// Example for getting a single resource by ID:
// api.get('/users/42')









2. POST (Create Data)
Used to send new data to the server to create a new resource.


import api from './api';

async function createUser(userData) {
  try {
    // The second argument is the data (payload/body) to be sent to the server.
    const response = await api.post('/users', userData);
    console.log('New User Created:', response.data);
    
    // POST often returns a 201 status code (Created) and the newly created resource.
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

// Example call:
// createUser({ name: 'Alice', email: 'alice@example.com' });






3. PUT (Update Data - Full Replacement)
Used to replace an entire resource on the server with the new data provided.



import api from './api';

async function replaceUser(userId, newUserData) {
  try {
    // The URL specifies the exact resource to update: /users/101
    const response = await api.put(`/users/${userId}`, newUserData);
    console.log(`User ${userId} fully updated:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error replacing user:', error.message);
  }
}




4. PATCH (Update Data - Partial Modification)
Used to partially update a resource on the server (e.g., only changing the user's name, not their email or password).




import api from './api';

async function updateUserName(userId, newName) {
  try {
    // Send only the field(s) you want to change
    const response = await api.patch(`/users/${userId}`, { name: newName });
    console.log(`User ${userId} name updated:`, response.data);
    return response.data;
  } catch (error) {
    console.error('Error patching user:', error.message);
  }
}





5. DELETE (Delete Data)
Used to remove a specific resource from the server. It typically doesn't send a body.



import api from './api';

async function deleteUser(userId) {
  try {
    // The URL specifies the exact resource to delete: /users/101
    const response = await api.delete(`/users/${userId}`);
    // A successful delete often returns a 204 status code (No Content)
    console.log(`User ${userId} deleted successfully.`);
    return response.status;
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
}

*/


import api from "./axiosInstances";

export const registeredUser = async(registeredUserData)=>{
  const {data} = await api.post('/auth/register',{...registeredUserData, role:'user'})
  return data
}

export const loginOfUser = async(loginUserData)=>{
  const {data} = await api.post('/auth/login',loginUserData)
  return data;
}

export async function checkAuthService(){
    const {data} = await api.get('/auth/check-auth')
    return data;
}
