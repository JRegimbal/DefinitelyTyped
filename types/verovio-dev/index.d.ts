// Type definitions for verovio-dev 2.2
// Project: http://www.verovio.org
// Definitions by: Juliette Regimbal <https://github.com/JRegimbal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface EditorAction {
  action: string;
  param: object | EditorAction[];
}

interface GeneralVerovioOptions {
  // General
  adjustPageHeight: boolean;
  breaks: string;
  evenNoteSpacing: boolean;
  humType: boolean;
  landscape: boolean;
  mensuralToMeasure: boolean;
  midiTempoAdjustment: number;
  minLastJusticiation: number;
  mmOutput: boolean;
  noFooter: boolean;
  noHeader: boolean;
  noJustification: boolean;
  openControlEvents: boolean;
  pageHeight: number;
  pageMarginBottom: number;
  pageMarginLeft: number;
  pageMarginRight: number;
  pageMarginTop: number;
  pageWidth: number;
  svgBoundingBoxes: boolean;
  svgViewBox: boolean;
  unit: number;
  useFacsimile: boolean;
  usePgFooterForAll: boolean;
  usePgHeaderForAll: boolean;
}

interface GeneralLayoutVerovioOptions {
  // General Layout
  barLineWidth: number;
  beamMaxSlope: number;
  beamMinSlope: number;
  font: string;
  graceFactor: number;
  graceRhythmAlign: boolean;
  graceRightAlign: boolean;
  hairpinSize: number;
  leftPosition: number;
  lyricHyphenLength: number;
  lyricHyphenWidth: number;
  lyricNoStartHyphen: boolean;
  lyricSize: number;
  lyricTopMinMargin: number;
  measureMinWidth: number;
  measureNumber: string;
  slurControlPoints: number;
  slurCurveFactor: number;
  slurHeightFactor: number;
  slurMaxHeight: number;
  slurMaxSlope: number;
  slurMinHeight: number;
  slurThickness: number;
  spacingDurDetection: boolean;
  spacingLinear: number;
  spacingNonLinear: number;
  spacingStaff: number;
  spacingSystem: number;
  staffLineWidth: number;
  stemWidth: number;
  tieThickness: number;
}

interface SelectorsVerovioOptions {
  appXPathQuery: string[];
  choiceXPathQuery: string[];
  mdivXPathQuery: string;
  substXPathQuery: string[];
}

interface ElementMarginsVerovioOptions {
  defaultBottomMargin: number;
  defaultLeftMargin: number;
  defaultRightMargin: number;
  defaultTopMargin: number;
  bottomMarginHarm: number;
  leftMarginAccid: number;
  leftMarginBarLine: number;
  leftMarginBeatRpt: number;
  leftMarginChord: number;
  leftMarginClef: number;
  leftMarginKeySig: number;
  leftMarginLeftBarLine: number;
  leftMarginMensur: number;
  leftMarginMeterSig: number;
  leftMarginMRest: number;
  leftMarginMRpt2: number;
  leftMarginMultiRest: number;
  leftMarginMultiRpt: number;
  leftMarginNote: number;
  leftMarginRest: number;
  leftMarginRightBarLine: number;

  rightMarginAccid: number;
  rightMarginBarLine: number;
  rightMarginBeatRpt: number;
  rightMarginChord: number;
  rightMarginClef: number;
  rightMarginKeySig: number;
  rightMarginLeftBarLine: number;
  rightMarginMensur: number;
  rightMarginMeterSig: number;
  rightMarginMRest: number;
  rightMarginMRpt2: number;
  rightMarginMultiRest: number;
  rightMarginNote: number;
  rightMarginRest: number;
  rightMarginRightBarLine: number;
  topMarginHarm: number;
}

type VerovioOptions = GeneralVerovioOptions & GeneralLayoutVerovioOptions & SelectorsVerovioOptions & ElementMarginsVerovioOptions;

declare class toolkit {
  constructor();
  destroy(): void;
  edit(editorAction: EditorAction): boolean;
  editInfo(): object;
  getAvailableOptions(): object;
  getElementAttr(xmlId: string): object;
  getElementsAtTime(millisec: number): object;
  getHumdrum(): string;
  getLog(): string;
  getMEI(page_no: number, score_based: boolean): string;
  getMIDIValuesForElement(xmlId: string): object;
  getOptions(default_values: boolean): VerovioOptions;
  getPageCount(): number;
  getPageWithElement(xmlId: string): number;
  getTimeForElement(xmlId: string): number;
  getVersion(): string;
  loadData(data: string): boolean;
  renderToMIDI(options: Partial<VerovioOptions>): string;
  renderToSVG(page_no: number, options: Partial<VerovioOptions>): string;
  renderToTimemap(): object;
  redoLayout(): void;
  redoPagePitchPosLayout(): void;
  renderData(data: string, options: Partial<VerovioOptions>): string;
  renderPage(pageNo: number, options: Partial<VerovioOptions>): string;
  setOptions(options: Partial<VerovioOptions>): void;
}

declare const verovio: {
  instances: number[];
  toolkit: {
    new (): toolkit;
  };
  vrvToolkit: {
    constructor: () => number;
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
  };
};

export default verovio;
