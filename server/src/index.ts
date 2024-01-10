import app from './app';
import { connectDB } from './db/db';
connectDB();
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
