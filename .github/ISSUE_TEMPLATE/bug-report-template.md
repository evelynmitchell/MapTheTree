# Bug Report Template
name: Bug Report
description: Template for reporting bugs
title: "[BUG] "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for reporting a bug!
  - type: input
    id: affected-feature
    attributes:
      label: Affected Feature
      description: Which feature is affected? (e.g., FR-001)
      placeholder: "FR-XXX"
    validations:
      required: true
  - type: textarea
    id: description
    attributes:
      label: Bug Description
      description: What happened?
      placeholder: "Describe the bug..."
    validations:
      required: true
  - type: textarea
    id: reproduction
    attributes:
      label: Steps to Reproduce
      description: How can we reproduce this issue?
      placeholder: "1. Go to...\n2. Click on..."
    validations:
      required: true
  - type: dropdown
    id: severity
    attributes:
      label: Severity
      options:
        - Critical (Service Down)
        - High (Major Feature Broken)
        - Medium (Feature Partially Working)
        - Low (Minor Issue)
    validations:
      required: true