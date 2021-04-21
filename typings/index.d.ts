interface IMiniEntryOptions {
  /**
   * 入口文件路径
   * @example
   * {
   *  app: "src/app.json",
   * }
   */
  // {outside: "src/outside/**/*/app.json",}
  entry: Record<string, string>;
  /**
   * 入口文件的扩展名
   */
  entrySuffix: {
    js: "js" | "ts";
    miniJs: "wxs" | "sjs";
    xml: "wxml" | "axml" | "html";

    [key: string]: any;
  };
  /**
   * 编译后的文件扩展名
   */
  compiledSuffix: {
    js: string;
    css: string;
    miniJs: string;
    xml: string;
    [key: string]: any;
  };
}

type IMiniEntryReturn = {
  [entryName: string]: string[];
};

declare function getEntry(options: IMiniEntryOptions): IMiniEntryReturn;

declare module "mini-entry" {
  export default getEntry;
}