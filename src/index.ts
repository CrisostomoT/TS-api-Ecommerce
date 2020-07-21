import app from './app';
import {connectDb} from './db';

async function main() {
    connectDb();
    await app.listen(app.get("port"));
    console.log(`Server initialized on port ${app.get("port")}`);
}

main();