import React, { MouseEventHandler } from "react";
import cn from "classnames";

interface IApplicantTableRow {
  applicantName: string;
  dateSubmitted: string;
  downloadApplication: MouseEventHandler;
  isFetchingPdf: boolean;
}

const buttonClassBase = "px-4 py-2 border rounded-md bg-indigo-500 text-white";
const buttonClassHover =
  "hover:bg-white hover:text-indigo-500 border-indigo-500";
const buttonClassDisabled = "opacity-50 bg-blue-900 cursor-not-allowed";

export const ApplicantTableRow = ({
  applicantName,
  dateSubmitted,
  downloadApplication,
  isFetchingPdf
}: IApplicantTableRow): JSX.Element => {
  return (
    <tr className="bg-white border-2 border-indigo-200">
      <td className="p-4 text-right">{applicantName}</td>
      <td className="flex p-2 justify-around">
        <button
          onClick={downloadApplication}
          disabled={isFetchingPdf}
          className={cn(
            buttonClassBase,
            isFetchingPdf ? buttonClassDisabled : "",
            buttonClassHover
          )}
        >
          Download Application
        </button>
      </td>
      <td className="text-center">{dateSubmitted}</td>
    </tr>
  );
};
