import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HTMLReport } from "./reportTargets/HTMLReports";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHTMLReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
