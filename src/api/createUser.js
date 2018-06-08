import env from '../env';

export default function createUser(attributes) {
  return fetch(`${env.default}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => response.json());
}
