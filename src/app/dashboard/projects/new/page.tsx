"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProjectAction } from "./actions";

const steps = [
  { id: 1, title: "Basic Info", description: "Project details" },
  { id: 2, title: "Budget", description: "Financial planning" },
  { id: 3, title: "Team", description: "Project team" },
  { id: 4, title: "Review", description: "Review and submit" },
];

export default function NewProjectPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    description: "",
    startDate: "",
    endDate: "",
    budgetTotal: "",
    currency: "USD",
    beneficiaries: "",
    beneficiariesUnit: "people",
    countries: [] as string[],
    outcomes: [""],
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("summary", formData.summary);
    formDataObj.append("description", formData.description);
    formDataObj.append("startDate", formData.startDate);
    formDataObj.append("endDate", formData.endDate);
    formDataObj.append("budgetTotal", formData.budgetTotal);
    formDataObj.append("currency", formData.currency);
    formDataObj.append("beneficiaries", formData.beneficiaries);
    formDataObj.append("beneficiariesUnit", formData.beneficiariesUnit);
    formDataObj.append("countries", formData.countries.join(","));
    formDataObj.append("outcomes", formData.outcomes.filter(Boolean).join("\n"));

    const result = await createProjectAction(formDataObj);
    if (result.success) {
      router.push("/dashboard/projects");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-display-sm font-heading font-bold text-primary">
            Create New Project
          </h1>
          <p className="text-body-lg text-gray-600 mt-2">
            Set up a new project to track progress and impact
          </p>
        </div>
        <button onClick={() => router.back()} className="btn-secondary">
          Cancel
        </button>
      </div>

      {/* Progress Steps */}
      <div className="card p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep >= step.id
                      ? "bg-secondary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <div className="text-center mt-2">
                  <p className={`text-body-sm font-medium ${currentStep >= step.id ? "text-primary" : "text-gray-500"}`}>
                    {step.title}
                  </p>
                  <p className="text-body-xs text-gray-500">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 ${currentStep > step.id ? "bg-secondary" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <form className="card">
        <div className="card-body">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Enter project title"
                  required
                />
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Summary *
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => updateField("summary", e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Brief project summary (2-3 sentences)"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Full Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Detailed project description"
                  rows={6}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => updateField("startDate", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => updateField("endDate", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">
                    Total Budget *
                  </label>
                  <input
                    type="number"
                    value={formData.budgetTotal}
                    onChange={(e) => updateField("budgetTotal", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">
                    Currency *
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => updateField("currency", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="KES">KES (KSh)</option>
                    <option value="NGN">NGN (₦)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Expected Beneficiaries
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    value={formData.beneficiaries}
                    onChange={(e) => updateField("beneficiaries", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Number"
                  />
                  <select
                    value={formData.beneficiariesUnit}
                    onChange={(e) => updateField("beneficiariesUnit", e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="people">People</option>
                    <option value="households">Households</option>
                    <option value="schools">Schools</option>
                    <option value="communities">Communities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Countries of Implementation
                </label>
                <select className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value="">Select country</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Team */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Project Lead
                </label>
                <select className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value="">Select team member</option>
                  <option value="1">John Doe</option>
                  <option value="2">Jane Smith</option>
                </select>
              </div>

              <div>
                <label className="block text-label-md text-gray-700 mb-2">
                  Key Outcomes
                </label>
                <div className="space-y-3">
                  {formData.outcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-3">
                      <input
                        type="text"
                        value={outcome}
                        onChange={(e) => {
                          const newOutcomes = [...formData.outcomes];
                          newOutcomes[index] = e.target.value;
                          updateField("outcomes", newOutcomes);
                        }}
                        className="flex-1 px-4 py-3 rounded-md border border-input bg-surface-container-lowest text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder={`Outcome ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newOutcomes = formData.outcomes.filter((_, i) => i !== index);
                          updateField("outcomes", newOutcomes);
                        }}
                        className="px-4 py-3 text-error hover:bg-error/10 rounded-md transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => updateField("outcomes", [...formData.outcomes, ""])}
                    className="text-secondary hover:underline text-body-sm"
                  >
                    + Add Outcome
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="p-4 rounded-md bg-surface-container-low">
                <h3 className="text-h4 font-heading font-semibold text-primary mb-4">
                  Review Project Details
                </h3>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-body-sm text-gray-600">Project Title</dt>
                    <dd className="text-body-sm font-medium text-primary">{formData.title}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-body-sm text-gray-600">Duration</dt>
                    <dd className="text-body-sm font-medium text-primary">
                      {formData.startDate} - {formData.endDate}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-body-sm text-gray-600">Budget</dt>
                    <dd className="text-body-sm font-medium text-primary">
                      {formData.currency} {Number(formData.budgetTotal).toLocaleString()}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-body-sm text-gray-600">Beneficiaries</dt>
                    <dd className="text-body-sm font-medium text-primary">
                      {formData.beneficiaries} {formData.beneficiariesUnit}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-md bg-surface-container-low">
                <input type="checkbox" id="confirm" className="mt-1" required />
                <label htmlFor="confirm" className="text-body-sm text-gray-700">
                  I confirm that all information provided is accurate and complete. I understand
                  that this project will be subject to monitoring and evaluation.
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="card-footer flex items-center justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="btn-secondary disabled:opacity-50"
          >
            ← Back
          </button>
          {currentStep < 4 ? (
            <button type="button" onClick={handleNext} className="btn-primary">
              Next →
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit} className="btn-primary">
              Create Project
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
