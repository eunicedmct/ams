import React from 'react';

import { Candidate } from "../types";

interface Props {
  candidates: Candidate[];
}

function CandidatesTable({ candidates }: Props) {
  return (
    <div className="CandidatesTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Interview Score</th>
            <th>Technical Score</th>
            <th>Application Date</th>
          </tr>
        </thead>
        <tbody>
          {
              candidates.map((candidate, idx) => {
              return (
                  <tr key={idx}>
                  <td>{candidate.first_name} {candidate.last_name}</td>
                  <td>{candidate.age}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.interview_score}</td>
                  <td>{candidate.technical_score}</td>
                  <td>{candidate.created_at.toLocaleString("en-US")}</td>
                  </tr>
              )
              })
            }
        </tbody>
      </table>
    </div>
  );
}

export default CandidatesTable;
