const baseURL = 'http://localhost:3000/api/mailinglist/'

export default {
  getEmail(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  saveDetails(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteDetails(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}