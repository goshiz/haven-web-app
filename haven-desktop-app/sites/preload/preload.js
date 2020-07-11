const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "ipcRenderer", {
        invoke: (channel, data) => {
            // whitelist channels
            let validChannels = ["havend", "wallet-rpc", "rpc", "wallets"];
            if (validChannels.includes(channel)) {
                return ipcRenderer.invoke(channel, data);
            }
        },

    }
);
