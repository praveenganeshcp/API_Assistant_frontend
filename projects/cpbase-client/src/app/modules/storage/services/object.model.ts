export interface IObject {
    name: string;
    isFile: boolean
}

export interface ICreateDir {
    rootPath: string;
    dirName: string;
}

export interface IFileStat {
    dev: number,
    mode: number,
    nlink: number,
    uid: number,
    gid: number,
    rdev: number,
    blksize: number,
    ino: number,
    size: number,
    blocks: number,
    atimeMs: number,
    mtimeMs: number,
    ctimeMs: number,
    birthtimeMs: number,
    atime: string,
    mtime: string,
    ctime: string,
    birthtime: string,
}