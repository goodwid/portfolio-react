const API_URL = 'http://localhost:9000/api';

export const getAll = () => {
  return fetch(`${API_URL}/projects`)
    .then(results => results.json());
};


//   getOne(id) {
//     return fetch(`${API_URL}/projects/${id}`)
//       .then(results => results.json());
//   },
//   create(data) {
//     const body = JSON.stringify(data);
//     let options = {
//       method: 'POST',
//       body,
//       headers: new Headers({
//         'Content-Type':'application/json'
//       })
//     };
//     return fetch(`${API_URL}/projects`, options)
//       .then(results => results.json());
//   },
//   edit(id, data){
//     const body = JSON.stringify(data);
//     let options = {
//       method: 'PUT',
//       body,
//       headers: new Headers({
//         'Content-Type':'application/json'
//       })
//     };
//     return fetch(`${API_URL}/projects/${id}`, options)
//       .then(results => results.json());
//   },
//   destroy(id) {
//     let options = {
//       method: 'DELETE',
//       headers: new Headers({
//         'Content-Type':'application/json'
//       })
//     };
//     return fetch(`${API_URL}/projects/${id}`, options)
//       .then(results => results.json());
//   }
// };