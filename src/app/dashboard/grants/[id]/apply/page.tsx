"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { startGrantApplicationAction, submitGrantApplicationAction } from "./actions";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { id: 1, title: "Basic Info", description: "Organisation details" },
  { id: 2, title: "Project", description: "Project overview" },
  { id: 3, title: "Budget", description: "Financial breakdown" },
  { id: 4, title: "Documents", description: "Upload files" },
  { id: 5, title: "Review", description: "Review & submit" },
];

export default function GrantApplicationPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      const result = await submitGrantApplicationAction(params.id);
      if (result.success) {
        router.push("/dashboard/applications");
      } else {
        setError(result.error || "Failed to submit application");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-body-sm text-gray-600 mb-2">
          <button onClick={() => router.push(`/dashboard/grants/${params.id}`)} className="hover:text-primary">
            Grants
          </button>
          <span>/</span>
          <span>Application</span>
        </div>
        <h1 className="text-display-sm font-heading font-bold text-primary">
          Grant Application
        </h1>
        <p className="text-body-lg text-gray-600 mt-2">
          Complete the application form below
        </p>
      </div>

      {/* Progress Steps */}
      <div className="card p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep > step.id
                      ? "bg-success text-white"
                      : currentStep === step.id
                      ? "bg-secondary text-white ring-4 ring-secondary/20"
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
                  <p className="text-body-xs text-gray-500 hidden md:block">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 ${currentStep > step.id + 1 ? "bg-success" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="card">
        <div className="card-body">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-h3 font-heading font-semibold text-primary">Organisation Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Organisation Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Your NGO name" />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Registration Number *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Registration number" />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Website</label>
                  <input type="url" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="https://" />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Year Founded *</label>
                  <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="2000" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-label-md text-gray-700 mb-2">Mission Statement *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Describe your organisation's mission..." />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-h3 font-heading font-semibold text-primary">Project Overview</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Project Title *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Project title" />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Project Summary *</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Brief summary of your project..." />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Problem Statement *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Describe the problem you're addressing..." />
                </div>
                <div>
                  <label className="block text-label-md text-gray-700 mb-2">Expected Outcomes *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="What outcomes do you expect?..." />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-h3 font-heading font-semibold text-primary">Budget Breakdown</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">Personnel</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">Equipment</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">Operations</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">Travel</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2">Other</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-label-md text-gray-700 mb-2 font-semibold">Total Budget</label>
                    <input type="number" className="w-full px-4 py-3 rounded-md border border-input bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary font-semibold" placeholder="0" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-h3 font-heading font-semibold text-primary">Supporting Documents</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-md p-8 text-center hover:border-secondary transition-colors">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-body-md text-gray-600 mb-2">Drop files here or click to upload</p>
                  <p className="text-body-sm text-gray-500">PDF, DOC, DOCX up to 10MB each</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-label-md text-gray-700">Required Documents</label>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-body-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Organisation registration certificate</span>
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Financial statements (last 2 years)</span>
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Project budget breakdown</span>
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Board resolution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-h3 font-heading font-semibold text-primary">Review & Submit</h2>
              <div className="bg-warning/10 border border-warning/20 rounded-md p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-body-md font-medium text-warning">Before submitting</p>
                    <p className="text-body-sm text-gray-600 mt-1">
                      Please review all information carefully. Once submitted, you cannot make changes to your application.
                    </p>
                  </div>
                </div>
              </div>
              {error && (
                <div className="bg-error/10 border border-error/20 rounded-md p-4">
                  <p className="text-body-sm text-error">{error}</p>
                </div>
              )}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="accuracy" className="mt-1 rounded border-gray-300" />
                  <label htmlFor="accuracy" className="text-body-sm text-gray-700">
                    I confirm that all information provided is accurate and complete
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" className="mt-1 rounded border-gray-300" />
                  <label htmlFor="terms" className="text-body-sm text-gray-700">
                    I agree to the terms and conditions of this grant
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="compliance" className="mt-1 rounded border-gray-300" />
                  <label htmlFor="compliance" className="text-body-sm text-gray-700">
                    I agree to comply with all reporting requirements
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <Button variant="secondary" onClick={prevStep} disabled={currentStep === 1}>
              Previous
            </Button>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => router.push(`/dashboard/grants/${params.id}`)}>
                Save as Draft
              </Button>
              {currentStep === 5 ? (
                <Button variant="primary" onClick={handleSubmit} isLoading={isSubmitting}>
                  Submit Application
                </Button>
              ) : (
                <Button variant="primary" onClick={nextStep}>
                  Next Step
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
