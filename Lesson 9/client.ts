import axios from 'axios';

async function main() {
  for (let i = 1; i <= 10; i++) {
    const res = await axios.get('http://localhost:8082/');
    console.log(`Request ${i}: ${res.data}`);
  }
}

main();
