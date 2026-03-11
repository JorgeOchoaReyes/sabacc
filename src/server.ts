import { FastResponse } from 'srvx';
globalThis.Response = FastResponse

import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

export default createServerEntry({
    fetch(request) {
        return handler.fetch(request);
    },
});