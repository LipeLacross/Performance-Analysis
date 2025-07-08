import express, { Request, Response } from 'express';
import os from 'os';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello from container: ${os.hostname()}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
