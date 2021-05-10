import gzip from "./zopfli";

const compZopfli: (buffer: Buffer) => Promise<Uint8Array> = gzip;

export default compZopfli;
