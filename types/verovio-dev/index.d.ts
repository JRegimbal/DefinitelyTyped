// Type definitions for verovio-dev 2.2
// Project: http://www.verovio.org
// Definitions by: Juliette Regimbal <https://github.com/JRegimbal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class toolkit {
  constructor();
  destroy(): void;
  edit(editorAction: string): boolean;
  getAvailableOptions(): string;
  getElementAttr(xmlId: string): string;
  getElementsAtTime(millisec: number): string;
  getHumdrum(): string;
  getLog(): string;
  getMEI(page_no: number, score_based: boolean): string;
  getMIDIValuesForElement(xmlId: string): string;
  getOptions(default_values: boolean): string;
  getPageCount(): number;
  getPageWithElement(xmlId: string): number;
  getTimeForElement(xmlId: string): number;
  getVersion(): string;
  loadData(data: string): boolean;
  renderToMIDI(c_options: string): string;
  renderToSVG(page_no: number, c_options: string): string;
  renderToTimemap(): string;
  redoLayout(): void;
  redoPagePitchPosLayout(): void;
  renderData(data: string, options: string): string;
  setOptions(options: string): void;
}

declare const verovio: {
  instances: number[];
  toolkit: {
    new(): toolkit;
  };
  vrvToolkit: {
    constructor(): number;
    destructor(ptr: number): void;
    edit(ptr: number, editorAction: string): boolean;
    getAvailableOptions(ptr: number): string;
    getElementAttr(ptr: number, xmlId: string): string;
    getElementsAtTime(ptr: number, millisec: number): string;
    getHumdrum(ptr: number): string;
    getLog(ptr: number): string;
    getMEI(ptr: number, page_no: number, score_based: boolean): string;
    getMIDIValuesForElement(ptr: number, xmlId: string): string;
    getOptions(ptr: number, default_values: boolean): string;
    getPageCount(ptr: number): number;
    getPageWithElement(ptr: number, xmlId: string): number;
    getTimeForElement(ptr: number, xmlId: string): number;
    getVersion(ptr: number): string;
    loadData(ptr: number, data: string): boolean;
    renderToMIDI(ptr: number, c_options: string): string;
    renderToSVG(ptr: number, page_no: number, c_options: string): string;
    renderToTimemap(ptr: number): string;
    redoLayout(ptr: number): void;
    redoPagePitchPosLayout(ptr: number): void;
    renderData(ptr: number, data: string, options: string): string;
    setOptions(ptr: number, options: string): void;
  }
}

export default verovio;
