"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const REPORT_TYPES = [
  { id: "quarterly", label: "Quarterly Report", description: "Standard quarterly progress report" },
  { id: "annual", label: "Annual Report", description: "Comprehensive annual report" },
  { id: "final", label: "Final Report", description: "Project completion report" },
  { id: "narrative", label: "Narrative Report", description: "Story-based impact report" },
  { id: "financial", label: "Financial Report", description: "Budget utilization report" },
];

export default function NewReportPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState("");
  const [formData, setFormData] = useState({
    project: "",
    periodStart: "",
    periodEnd: "",
    activities: [""],
    achievements: [""],
    challenges: [""],
    beneficiariesReached: "",
    budgetUtilization: "",
  });

  const handleSubmit = async () => {
    router.push("/dashboard/reports");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-display-sm font-heading font-bold text-primary">
          Create New Report
        </h1>
        <p className="text-body-lg text-gray-600 mt-2">
          Generate compliance and impact reports
        </p>
      </div>

      {step === 1 && (
        <div className="card">
          <div className="card-header">
            <h2 className="text-h4 font-heading font-semibold text-primary">
              Select Report Type
            </h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {REPORT_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    setReportType(type.id);
                    setStep(2);
                  }}
                  className={`p-6 rounded-md border text-left transition-all ${
                    reportType === type.id
                      ? "border-secondary bg-secondary/5"
                      : "border-border hover:border-secondary hover:shadow-card-hover"
                  }`}
                >
                  <h3 className="text-body-lg font-semibold text-primary">
                    {type.label}
                  </h3>
                  <p className="text-body-sm text-gray-600 mt-2">
                    {type.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <form className="card" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
          <div className="card-header">
            <h2 className="text-h4 font-heading font-semibold text-primary">
              Report Details
            </h2>
          </div>
          <div className="card-body space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Project *
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                >
                  <option value="">Select project</option>
                  <option value="1">Education Initiative 2026</option>
                  <option value="2">Healthcare Access Program</option>
                </select>
              </div>
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Reporting Period *
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={formData.periodStart}
                    onChange={(e) => setFormData({ ...formData, periodStart: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                  <input
                    type="date"
                    value={formData.periodEnd}
                    onChange={(e) => setFormData({ ...formData, periodEnd: e.target.value })}
                    className="flex-1 px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-label-md text-gray-700 mb-2">
                Key Activities *
              </label>
              <div className="space-y-3">
                {formData.activities.map((activity, index) => (
                  <textarea
                    key={index}
                    value={activity}
                    onChange={(e) => {
                      const newActivities = [...formData.activities];
                      newActivities[index] = e.target.value;
                      setFormData({ ...formData, activities: newActivities });
                    }}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Describe major activities during this period..."
                    rows={3}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, activities: [...formData.activities, ""] })}
                  className="text-secondary hover:underline text-body-sm"
                >
                  + Add Activity
                </button>
              </div>
            </div>

            <div>
              <label className="block text-label-md text-gray-700 mb-2">
                Achievements & Outcomes
              </label>
              <div className="space-y-3">
                {formData.achievements.map((achievement, index) => (
                  <textarea
                    key={index}
                    value={achievement}
                    onChange={(e) => {
                      const newAchievements = [...formData.achievements];
                      newAchievements[index] = e.target.value;
                      setFormData({ ...formData, achievements: newAchievements });
                    }}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Document key achievements..."
                    rows={3}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, achievements: [...formData.achievements, ""] })}
                  className="text-secondary hover:underline text-body-sm"
                >
                  + Add Achievement
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Beneficiaries Reached
                </label>
                <input
                  type="number"
                  value={formData.beneficiariesReached}
                  onChange={(e) => setFormData({ ...formData, beneficiariesReached: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Number of beneficiaries"
                />
              </div>
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Budget Utilization (%)
                </label>
                <input
                  type="number"
                  value={formData.budgetUtilization}
                  onChange={(e) => setFormData({ ...formData, budgetUtilization: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="0-100"
                  max={100}
                />
              </div>
            </div>
          </div>

          <div className="card-footer flex items-center justify-between">
            <Button variant="secondary" onClick={() => setStep(1)}>
              ← Back
            </Button>
            <Button variant="primary" type="submit">
              Continue →
            </Button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="card">
          <div className="card-header">
            <h2 className="text-h4 font-heading font-semibold text-primary">
              Review & Submit
            </h2>
          </div>
          <div className="card-body space-y-6">
            <div className="p-4 rounded-md bg-surface-container-low">
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-body-sm text-gray-600">Report Type</dt>
                  <dd className="text-body-sm font-medium text-primary">{reportType}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-body-sm text-gray-600">Period</dt>
                  <dd className="text-body-sm font-medium text-primary">
                    {formData.periodStart} - {formData.periodEnd}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-body-sm text-gray-600">Beneficiaries</dt>
                  <dd className="text-body-sm font-medium text-primary">{formData.beneficiariesReached}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-body-sm text-gray-600">Budget Utilized</dt>
                  <dd className="text-body-sm font-medium text-primary">{formData.budgetUtilization}%</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-md bg-surface-container-low">
              <input type="checkbox" id="confirm" className="mt-1" required />
              <label htmlFor="confirm" className="text-body-sm text-gray-700">
                I confirm that all information provided is accurate and complete to the best of my knowledge.
              </label>
            </div>
          </div>

          <div className="card-footer flex items-center justify-between">
            <Button variant="secondary" onClick={() => setStep(2)}>
              ← Back
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit Report
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}