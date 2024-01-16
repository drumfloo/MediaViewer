import { httpServer } from "./server";
import { Config } from "./config";


httpServer.listen(Config.PORT, () => {
    console.log(`Server is listening on port ${Config.PORT}`);
})