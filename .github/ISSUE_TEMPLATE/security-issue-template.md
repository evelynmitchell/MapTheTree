# Security Issue Template
name: Security Issue
description: Template for security-related issues
title: "[SECURITY] "
labels: ["security"]
body:
  - type: markdown
    attributes:
      value: |
        Security Issue Report
  - type: input
    id: requirement-id
    attributes:
      label: Security Requirement ID
      description: Related security requirement ID
      placeholder: "SR-XXX"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Issue Description
      description: Describe the security issue
      placeholder: "Detailed description..."
    validations:
      required: true
  - type: dropdown
    id: severity
    attributes:
      label: Security Severity
      options:
        - Critical (Immediate Action Required)
        - High (Fix Required ASAP)
        - Medium (Plan Required)
        - Low (Monitor)
    validations:
      required: true
